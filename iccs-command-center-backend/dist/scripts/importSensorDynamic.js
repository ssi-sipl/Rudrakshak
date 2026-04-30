import XLSX from "xlsx";
import fs from "fs";
import prisma from "../lib/prisma.js";
import dotenv from "dotenv";

dotenv.config();

const { readFile, utils } = XLSX;

/* ------------------ CAMERA PROFILES ------------------ */

const CAMERA_PROFILES = {
  CP_PLUS: "rtsp://admin:123456@Ai@{ip}:554/video/live?channel=1&subtype=0",

  TENTRONIX_MAIN: "rtsp://admin:123456@Ai@{ip}:554/ch01.264?dev=1",

  TENTRONIX_SUB: "rtsp://admin:123456@Ai@{ip}:554/ch01_sub.264",

  UNV: "rtsp://admin:123456#Ai@{ip}:554/media/video2", // 5 MP

  SNELL: "rtsp://admin:123456Ai@{ip}:554/snl/live/1/3",
};

const CAMERA_PROFILE = "UNV"; // Change this to switch RTSP template

/* ------------------ HELPERS ------------------ */

function normalizeRow(row) {
  const clean = {};
  for (const key in row) {
    clean[key.trim()] =
      typeof row[key] === "string" ? row[key].trim() : row[key];
  }
  return clean;
}

function generateRTSP(ip) {
  const template = CAMERA_PROFILES[CAMERA_PROFILE];

  if (!template) {
    throw new Error(`Unknown CAMERA_PROFILE: ${CAMERA_PROFILE}`);
  }

  return template.replace("{ip}", ip);
}

function getSensorName(ip) {
  return `IPCAM${ip.split(".").pop()}`;
}

function isValidIP(ip) {
  const regex =
    /^(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)$/;
  return regex.test(ip);
}

function isValidLatitude(lat) {
  return typeof lat === "number" && lat >= -90 && lat <= 90;
}

function isValidLongitude(lng) {
  return typeof lng === "number" && lng >= -180 && lng <= 180;
}

/* ------------------ MAIN ------------------ */

async function main() {
  console.log("Using Camera Profile:", CAMERA_PROFILE);

  const workbook = readFile("../data.xlsx");
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = utils.sheet_to_json(sheet);

  const sensors = [];
  const failed = [];
  const success = [];

  const fileSensorSet = new Set();
  const fileIPSet = new Set();

  /* ---------------- AREA COLLECTION ---------------- */

  const areaIds = [...new Set(rows.map((r) => r["Area ID"]).filter(Boolean))];

  const existingAreas = await prisma.area.findMany({
    where: { areaId: { in: areaIds } },
  });

  const areaMap = {};
  existingAreas.forEach((a) => (areaMap[a.areaId] = a));

  const newAreas = areaIds
    .filter((id) => !areaMap[id])
    .map((id) => ({
      name: id,
      areaId: id,
      latitude: 0,
      longitude: 0,
      status: "Active",
      addedBy: "import-script",
    }));

  if (newAreas.length) {
    await prisma.area.createMany({ data: newAreas });

    const created = await prisma.area.findMany({
      where: { areaId: { in: newAreas.map((a) => a.areaId) } },
    });

    created.forEach((a) => (areaMap[a.areaId] = a));
  }

  /* ---------------- EXISTING DB DATA ---------------- */

  const existingSensors = await prisma.sensor.findMany({
    select: { sensorId: true, ipAddress: true },
  });

  const existingSensorSet = new Set(existingSensors.map((s) => s.sensorId));
  const existingIPSet = new Set(existingSensors.map((s) => s.ipAddress));

  /* ---------------- ROW PROCESSING ---------------- */

  for (let row of rows) {
    try {
      row = normalizeRow(row);

      const sensorId = row["Sensor ID"]?.toUpperCase();
      const ip = row["IP"];
      const lat = Number(row["Latitude"]);
      const lng = Number(row["Longitude"]);
      const areaId = row["Area ID"];

      if (!sensorId || !ip || !lat || !lng || !areaId)
        throw new Error("Missing required fields");

      if (!isValidIP(ip)) throw new Error("Invalid IP address");

      if (!isValidLatitude(lat)) throw new Error("Invalid latitude");

      if (!isValidLongitude(lng)) throw new Error("Invalid longitude");

      if (fileSensorSet.has(sensorId))
        throw new Error("Duplicate sensorId inside Excel file");

      if (fileIPSet.has(ip)) throw new Error("Duplicate IP inside Excel file");

      if (existingSensorSet.has(sensorId))
        throw new Error("Sensor already exists in DB");

      if (existingIPSet.has(ip))
        throw new Error("IP already assigned to another sensor");

      const area = areaMap[areaId];

      if (!area) throw new Error("Area not found");

      fileSensorSet.add(sensorId);
      fileIPSet.add(ip);

      sensors.push({
        sensorId,
        // name: getSensorName(ip),

        name: row["Name"]?.trim() || getSensorName(ip),
        sensorType: row["Type"] || "CAMERA",

        latitude: lat,
        longitude: lng,

        ipAddress: ip,
        rtspUrl: generateRTSP(ip),

        status: "Active",
        activeShuruMode: "Active",
        sendDrone: "No",

        areaId: area.id,
        addedBy: "import-script",
      });
    } catch (err) {
      failed.push({
        row,
        reason: err.message,
      });
    }
  }

  /* ---------------- INSERT ---------------- */

  for (const sensor of sensors) {
    try {
      const created = await prisma.sensor.create({
        data: sensor,
      });

      success.push({
        sensorId: created.sensorId,
        ip: created.ipAddress,
      });
    } catch (err) {
      failed.push({
        sensorId: sensor.sensorId,
        reason: err.message,
      });
    }
  }

  /* ---------------- REPORTS ---------------- */

  fs.writeFileSync("./import-success.json", JSON.stringify(success, null, 2));
  fs.writeFileSync("./import-failed.json", JSON.stringify(failed, null, 2));

  console.log("\nImport Summary");
  console.log("----------------");
  console.log(`Inserted: ${success.length}`);
  console.log(`Failed: ${failed.length}`);
}

/* ---------------- RUN ---------------- */

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
