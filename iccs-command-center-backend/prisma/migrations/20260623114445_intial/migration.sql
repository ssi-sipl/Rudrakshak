-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SUPER_ADMIN', 'ADMIN', 'OPERATOR', 'USER');

-- CreateEnum
CREATE TYPE "AlertStatus" AS ENUM ('ACTIVE', 'SENT', 'NEUTRALISED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "areas" (
    "id" TEXT NOT NULL,
    "areaId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Active',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "addedBy" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "areas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sensors" (
    "id" TEXT NOT NULL,
    "sensorId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sensorType" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "ipAddress" TEXT,
    "rtspUrl" TEXT,
    "battery" TEXT,
    "status" TEXT NOT NULL,
    "sendDrone" TEXT NOT NULL DEFAULT 'No',
    "activeShuruMode" TEXT NOT NULL,
    "areaId" TEXT,
    "alarmId" TEXT,
    "addedBy" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sensors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "drone_os_settings" (
    "id" TEXT NOT NULL,
    "droneId" TEXT,
    "droneOSName" TEXT NOT NULL,
    "droneType" TEXT NOT NULL,
    "videoLink" TEXT,
    "gpsFix" TEXT NOT NULL,
    "minHDOP" DOUBLE PRECISION NOT NULL,
    "minSatCount" INTEGER NOT NULL,
    "maxWindSpeed" DOUBLE PRECISION NOT NULL,
    "droneSpeed" DOUBLE PRECISION NOT NULL,
    "targetAltitude" DOUBLE PRECISION NOT NULL,
    "gpsLost" TEXT NOT NULL,
    "telemetryLost" TEXT NOT NULL,
    "minBatteryLevel" DOUBLE PRECISION NOT NULL,
    "usbAddress" TEXT NOT NULL,
    "batteryFailSafe" TEXT NOT NULL,
    "gpsName" TEXT NOT NULL,
    "maxAltitude" DOUBLE PRECISION NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "addedBy" TEXT NOT NULL DEFAULT '',
    "lastLatitude" DOUBLE PRECISION,
    "lastLongitude" DOUBLE PRECISION,
    "lastAltitude" DOUBLE PRECISION,
    "battery" DOUBLE PRECISION,
    "droneMode" TEXT,
    "areaId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "drone_os_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alarms" (
    "id" TEXT NOT NULL,
    "alarmId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Active',
    "areaId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "alarms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alerts" (
    "id" TEXT NOT NULL,
    "sensorDbId" TEXT NOT NULL,
    "sensorId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "AlertStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "decidedAt" TIMESTAMP(3),
    "decision" TEXT,
    "metadata" JSONB,

    CONSTRAINT "alerts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "drone_flight_history" (
    "id" TEXT NOT NULL,
    "droneDbId" TEXT NOT NULL,
    "sensorId" TEXT,
    "alertId" TEXT,
    "dispatchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "drone_flight_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "offline_maps" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "tileRoot" TEXT NOT NULL,
    "minZoom" INTEGER NOT NULL,
    "maxZoom" INTEGER NOT NULL,
    "north" DOUBLE PRECISION NOT NULL,
    "south" DOUBLE PRECISION NOT NULL,
    "east" DOUBLE PRECISION NOT NULL,
    "west" DOUBLE PRECISION NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "downloadStatus" TEXT NOT NULL DEFAULT 'PENDING',
    "downloadProgress" INTEGER NOT NULL DEFAULT 0,
    "downloadError" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "offline_maps_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "areas_areaId_key" ON "areas"("areaId");

-- CreateIndex
CREATE UNIQUE INDEX "sensors_sensorId_key" ON "sensors"("sensorId");

-- CreateIndex
CREATE UNIQUE INDEX "drone_os_settings_droneId_key" ON "drone_os_settings"("droneId");

-- CreateIndex
CREATE UNIQUE INDEX "alarms_alarmId_key" ON "alarms"("alarmId");

-- CreateIndex
CREATE INDEX "alerts_status_idx" ON "alerts"("status");

-- CreateIndex
CREATE INDEX "alerts_sensorDbId_idx" ON "alerts"("sensorDbId");

-- CreateIndex
CREATE INDEX "drone_flight_history_droneDbId_idx" ON "drone_flight_history"("droneDbId");

-- CreateIndex
CREATE INDEX "drone_flight_history_dispatchedAt_idx" ON "drone_flight_history"("dispatchedAt");

-- CreateIndex
CREATE INDEX "offline_maps_isActive_idx" ON "offline_maps"("isActive");

-- AddForeignKey
ALTER TABLE "sensors" ADD CONSTRAINT "sensors_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "areas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sensors" ADD CONSTRAINT "sensors_alarmId_fkey" FOREIGN KEY ("alarmId") REFERENCES "alarms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "drone_os_settings" ADD CONSTRAINT "drone_os_settings_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "areas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alarms" ADD CONSTRAINT "alarms_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "areas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alerts" ADD CONSTRAINT "alerts_sensorDbId_fkey" FOREIGN KEY ("sensorDbId") REFERENCES "sensors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "drone_flight_history" ADD CONSTRAINT "drone_flight_history_droneDbId_fkey" FOREIGN KEY ("droneDbId") REFERENCES "drone_os_settings"("id") ON DELETE CASCADE ON UPDATE CASCADE;
