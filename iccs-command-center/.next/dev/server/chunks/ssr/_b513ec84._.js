module.exports = [
"[project]/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/lib/api/sensors.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSensor",
    ()=>createSensor,
    "deleteSensor",
    ()=>deleteSensor,
    "getAllSensors",
    ()=>getAllSensors,
    "getSensorById",
    ()=>getSensorById,
    "getSensorStats",
    ()=>getSensorStats,
    "getSensorsByArea",
    ()=>getSensorsByArea,
    "updateSensor",
    ()=>updateSensor
]);
const mockSensors = [
    {
        id: "sensor-1",
        sensorId: "SENSOR-001",
        name: "North Gate Camera",
        sensorType: "PTZ Camera",
        latitude: 28.6192,
        longitude: 77.2045,
        ipAddress: "192.168.1.101",
        rtspUrl: "rtsp://camera1/live",
        smartMeterId: "meter-1",
        battery: "95%",
        status: "Active",
        sendDrone: "No",
        activeShuruMode: "Active",
        areaId: "area-1",
        alarmId: "alarm-1",
        addedBy: "Demo Admin",
        createdAt: "2026-07-14T10:00:00Z",
        updatedAt: "2026-07-14T10:00:00Z"
    },
    {
        id: "sensor-2",
        sensorId: "SENSOR-002",
        name: "North Fence Camera",
        sensorType: "Thermal Camera",
        latitude: 28.6184,
        longitude: 77.2063,
        ipAddress: "192.168.1.102",
        rtspUrl: "rtsp://camera2/live",
        smartMeterId: "meter-1",
        battery: "91%",
        status: "Active",
        sendDrone: "No",
        activeShuruMode: "Active",
        areaId: "area-1",
        alarmId: null,
        addedBy: "Demo Admin",
        createdAt: "2026-07-14T10:00:00Z",
        updatedAt: "2026-07-14T10:00:00Z"
    },
    {
        id: "sensor-3",
        sensorId: "SENSOR-003",
        name: "East Entry Camera",
        sensorType: "Fixed Camera",
        latitude: 28.6176,
        longitude: 77.2087,
        ipAddress: "192.168.1.103",
        rtspUrl: "rtsp://camera3/live",
        smartMeterId: "meter-2",
        battery: "88%",
        status: "Active",
        sendDrone: "No",
        activeShuruMode: "Active",
        areaId: "area-2",
        alarmId: "alarm-2",
        addedBy: "Demo Admin",
        createdAt: "2026-07-14T10:00:00Z",
        updatedAt: "2026-07-14T10:00:00Z"
    },
    {
        id: "sensor-4",
        sensorId: "SENSOR-004",
        name: "East Fence",
        sensorType: "PTZ Camera",
        latitude: 28.6169,
        longitude: 77.2102,
        ipAddress: "192.168.1.104",
        rtspUrl: "rtsp://camera4/live",
        smartMeterId: "meter-2",
        battery: "83%",
        status: "Active",
        sendDrone: "No",
        activeShuruMode: "Active",
        areaId: "area-2",
        alarmId: null,
        addedBy: "Demo Admin",
        createdAt: "2026-07-14T10:00:00Z",
        updatedAt: "2026-07-14T10:00:00Z"
    },
    {
        id: "sensor-5",
        sensorId: "SENSOR-005",
        name: "Central Camera 1",
        sensorType: "Thermal Camera",
        latitude: 28.6158,
        longitude: 77.2118,
        ipAddress: "192.168.1.105",
        rtspUrl: "rtsp://camera5/live",
        smartMeterId: "meter-3",
        battery: "90%",
        status: "Active",
        sendDrone: "No",
        activeShuruMode: "Active",
        areaId: "area-3",
        alarmId: "alarm-3",
        addedBy: "Demo Admin",
        createdAt: "2026-07-14T10:00:00Z",
        updatedAt: "2026-07-14T10:00:00Z"
    },
    {
        id: "sensor-6",
        sensorId: "SENSOR-006",
        name: "Central Camera 2",
        sensorType: "Fixed Camera",
        latitude: 28.6148,
        longitude: 77.2130,
        ipAddress: "192.168.1.106",
        rtspUrl: "rtsp://camera6/live",
        smartMeterId: "meter-3",
        battery: "89%",
        status: "Active",
        sendDrone: "No",
        activeShuruMode: "Active",
        areaId: "area-3",
        alarmId: null,
        addedBy: "Demo Admin",
        createdAt: "2026-07-14T10:00:00Z",
        updatedAt: "2026-07-14T10:00:00Z"
    },
    {
        id: "sensor-7",
        sensorId: "SENSOR-007",
        name: "Operations Gate",
        sensorType: "PTZ Camera",
        latitude: 28.6137,
        longitude: 77.2140,
        ipAddress: "192.168.1.107",
        rtspUrl: "rtsp://camera7/live",
        smartMeterId: "meter-4",
        battery: "82%",
        status: "Active",
        sendDrone: "No",
        activeShuruMode: "Active",
        areaId: "area-4",
        alarmId: "alarm-4",
        addedBy: "Demo Admin",
        createdAt: "2026-07-14T10:00:00Z",
        updatedAt: "2026-07-14T10:00:00Z"
    },
    {
        id: "sensor-8",
        sensorId: "SENSOR-008",
        name: "Operations Tower",
        sensorType: "Thermal Camera",
        latitude: 28.6125,
        longitude: 77.2125,
        ipAddress: "192.168.1.108",
        rtspUrl: "rtsp://camera8/live",
        smartMeterId: "meter-4",
        battery: "79%",
        status: "Active",
        sendDrone: "No",
        activeShuruMode: "Active",
        areaId: "area-4",
        alarmId: null,
        addedBy: "Demo Admin",
        createdAt: "2026-07-14T10:00:00Z",
        updatedAt: "2026-07-14T10:00:00Z"
    },
    {
        id: "sensor-9",
        sensorId: "SENSOR-009",
        name: "West Gate",
        sensorType: "PTZ Camera",
        latitude: 28.6118,
        longitude: 77.2108,
        ipAddress: "192.168.1.109",
        rtspUrl: "rtsp://camera9/live",
        smartMeterId: "meter-5",
        battery: "94%",
        status: "Active",
        sendDrone: "No",
        activeShuruMode: "Active",
        areaId: "area-5",
        alarmId: null,
        addedBy: "Demo Admin",
        createdAt: "2026-07-14T10:00:00Z",
        updatedAt: "2026-07-14T10:00:00Z"
    },
    {
        id: "sensor-10",
        sensorId: "SENSOR-010",
        name: "West Fence",
        sensorType: "Fixed Camera",
        latitude: 28.6109,
        longitude: 77.2088,
        ipAddress: "192.168.1.110",
        rtspUrl: "rtsp://camera10/live",
        smartMeterId: "meter-5",
        battery: "92%",
        status: "Active",
        sendDrone: "No",
        activeShuruMode: "Active",
        areaId: "area-5",
        alarmId: null,
        addedBy: "Demo Admin",
        createdAt: "2026-07-14T10:00:00Z",
        updatedAt: "2026-07-14T10:00:00Z"
    },
    {
        id: "sensor-11",
        sensorId: "SENSOR-011",
        name: "South Camera 1",
        sensorType: "PTZ Camera",
        latitude: 28.6098,
        longitude: 77.2069,
        ipAddress: "192.168.1.111",
        rtspUrl: "rtsp://camera11/live",
        smartMeterId: "meter-6",
        battery: "80%",
        status: "Active",
        sendDrone: "No",
        activeShuruMode: "Active",
        areaId: "area-6",
        alarmId: null,
        addedBy: "Demo Admin",
        createdAt: "2026-07-14T10:00:00Z",
        updatedAt: "2026-07-14T10:00:00Z"
    },
    {
        id: "sensor-12",
        sensorId: "SENSOR-012",
        name: "South Camera 2",
        sensorType: "Thermal Camera",
        latitude: 28.6089,
        longitude: 77.2053,
        ipAddress: "192.168.1.112",
        rtspUrl: "rtsp://camera12/live",
        smartMeterId: "meter-6",
        battery: "78%",
        status: "Active",
        sendDrone: "No",
        activeShuruMode: "Active",
        areaId: "area-6",
        alarmId: null,
        addedBy: "Demo Admin",
        createdAt: "2026-07-14T10:00:00Z",
        updatedAt: "2026-07-14T10:00:00Z"
    }
];
async function getAllSensors(params) {
    await new Promise((r)=>setTimeout(r, 300));
    let data = [
        ...mockSensors
    ];
    if (params?.status) {
        data = data.filter((s)=>s.status === params.status);
    }
    if (params?.areaId) {
        data = data.filter((s)=>s.areaId === params.areaId);
    }
    if (params?.sensorType) {
        data = data.filter((s)=>s.sensorType === params.sensorType);
    }
    if (params?.search) {
        const search = params.search.toLowerCase();
        data = data.filter((s)=>s.name.toLowerCase().includes(search) || s.sensorId.toLowerCase().includes(search) || s.sensorType.toLowerCase().includes(search));
    }
    return {
        success: true,
        data,
        pagination: {
            page: 1,
            limit: data.length,
            totalCount: data.length,
            totalPages: 1,
            hasNextPage: false,
            hasPrevPage: false
        }
    };
}
async function getSensorStats() {
    await new Promise((r)=>setTimeout(r, 200));
    return {
        success: true,
        data: {
            total: mockSensors.length,
            active: mockSensors.filter((s)=>s.status === "Active").length,
            inactive: mockSensors.filter((s)=>s.status === "Inactive").length,
            warning: mockSensors.filter((s)=>s.status === "Warning").length
        }
    };
}
async function getSensorById(id, includeRelations = false) {
    await new Promise((r)=>setTimeout(r, 300));
    const sensor = mockSensors.find((s)=>s.id === id);
    if (!sensor) {
        return {
            success: false,
            error: "Sensor not found"
        };
    }
    return {
        success: true,
        data: sensor
    };
}
async function getSensorsByArea(areaId) {
    await new Promise((r)=>setTimeout(r, 300));
    return {
        success: true,
        count: mockSensors.filter((s)=>s.areaId === areaId).length,
        data: mockSensors.filter((s)=>s.areaId === areaId)
    };
}
async function createSensor(sensorData) {
    await new Promise((r)=>setTimeout(r, 300));
    const newSensor = {
        id: `sensor-${mockSensors.length + 1}`,
        sensorId: sensorData.sensorId,
        name: sensorData.name,
        sensorType: sensorData.sensorType,
        latitude: sensorData.latitude,
        longitude: sensorData.longitude,
        ipAddress: sensorData.ipAddress || null,
        rtspUrl: sensorData.rtspUrl || null,
        smartMeterId: sensorData.smartMeterId || null,
        battery: sensorData.battery || null,
        status: sensorData.status,
        sendDrone: sensorData.sendDrone || "No",
        activeShuruMode: sensorData.activeShuruMode,
        areaId: sensorData.areaId || null,
        alarmId: sensorData.alarmId || null,
        addedBy: sensorData.addedBy || "Demo Admin",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    mockSensors.unshift(newSensor);
    return {
        success: true,
        data: newSensor,
        message: "Sensor created successfully"
    };
}
async function updateSensor(id, sensorData) {
    await new Promise((r)=>setTimeout(r, 300));
    const sensor = mockSensors.find((s)=>s.id === id);
    if (!sensor) {
        return {
            success: false,
            error: "Sensor not found"
        };
    }
    Object.assign(sensor, sensorData);
    sensor.updatedAt = new Date().toISOString();
    return {
        success: true,
        data: sensor,
        message: "Sensor updated successfully"
    };
}
async function deleteSensor(id) {
    await new Promise((r)=>setTimeout(r, 300));
    const index = mockSensors.findIndex((s)=>s.id === id);
    if (index !== -1) {
        mockSensors.splice(index, 1);
    }
    return {
        success: true,
        message: "Sensor deleted successfully"
    };
}
}),
"[project]/lib/api/areas.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createArea",
    ()=>createArea,
    "deleteArea",
    ()=>deleteArea,
    "getAllAreas",
    ()=>getAllAreas,
    "getAreaById",
    ()=>getAreaById,
    "updateArea",
    ()=>updateArea
]);
const mockAreas = [
    {
        id: "area-1",
        areaId: "AREA-001",
        name: "North Command",
        latitude: 28.6440,
        longitude: 77.2140,
        status: "Active",
        addedBy: "Demo Admin",
        createdAt: "2026-07-14T10:00:00Z",
        updatedAt: "2026-07-14T10:00:00Z",
        sensors: [],
        alarms: [],
        drones: []
    },
    {
        id: "area-2",
        areaId: "AREA-002",
        name: "North-East Sector",
        latitude: 28.6410,
        longitude: 77.2350,
        status: "Active",
        addedBy: "Demo Admin",
        createdAt: "2026-07-14T10:00:00Z",
        updatedAt: "2026-07-14T10:00:00Z",
        sensors: [],
        alarms: [],
        drones: []
    },
    {
        id: "area-3",
        areaId: "AREA-003",
        name: "Central Sector",
        latitude: 28.6220,
        longitude: 77.2120,
        status: "Active",
        addedBy: "Demo Admin",
        createdAt: "2026-07-14T10:00:00Z",
        updatedAt: "2026-07-14T10:00:00Z",
        sensors: [],
        alarms: [],
        drones: []
    },
    {
        id: "area-4",
        areaId: "AREA-004",
        name: "Operations Zone",
        latitude: 28.6170,
        longitude: 77.2280,
        status: "Active",
        addedBy: "Demo Admin",
        createdAt: "2026-07-14T10:00:00Z",
        updatedAt: "2026-07-14T10:00:00Z",
        sensors: [],
        alarms: [],
        drones: []
    },
    {
        id: "area-5",
        areaId: "AREA-005",
        name: "West Security",
        latitude: 28.6210,
        longitude: 77.1900,
        status: "Active",
        addedBy: "Demo Admin",
        createdAt: "2026-07-14T10:00:00Z",
        updatedAt: "2026-07-14T10:00:00Z",
        sensors: [],
        alarms: [],
        drones: []
    },
    {
        id: "area-6",
        areaId: "AREA-006",
        name: "South Command",
        latitude: 28.5980,
        longitude: 77.2140,
        status: "Active",
        addedBy: "Demo Admin",
        createdAt: "2026-07-14T10:00:00Z",
        updatedAt: "2026-07-14T10:00:00Z",
        sensors: [],
        alarms: [],
        drones: []
    },
    {
        id: "area-7",
        areaId: "AREA-007",
        name: "South-East Outpost",
        latitude: 28.5940,
        longitude: 77.2380,
        status: "Active",
        addedBy: "Demo Admin",
        createdAt: "2026-07-14T10:00:00Z",
        updatedAt: "2026-07-14T10:00:00Z",
        sensors: [],
        alarms: [],
        drones: []
    },
    {
        id: "area-8",
        areaId: "AREA-008",
        name: "Training Ground",
        latitude: 28.6070,
        longitude: 77.1990,
        status: "Active",
        addedBy: "Demo Admin",
        createdAt: "2026-07-14T10:00:00Z",
        updatedAt: "2026-07-14T10:00:00Z",
        sensors: [],
        alarms: [],
        drones: []
    }
];
async function getAllAreas(params) {
    await new Promise((r)=>setTimeout(r, 300));
    let data = [
        ...mockAreas
    ];
    if (params?.status) {
        data = data.filter((a)=>a.status === params.status);
    }
    if (params?.search) {
        const search = params.search.toLowerCase();
        data = data.filter((a)=>a.name.toLowerCase().includes(search) || a.areaId.toLowerCase().includes(search));
    }
    return {
        success: true,
        data,
        pagination: {
            page: 1,
            limit: data.length,
            totalCount: data.length,
            totalPages: 1,
            hasNextPage: false,
            hasPrevPage: false
        }
    };
}
async function getAreaById(id, includeRelations = false) {
    await new Promise((r)=>setTimeout(r, 300));
    const area = mockAreas.find((a)=>a.id === id);
    if (!area) {
        return {
            success: false,
            error: "Area not found"
        };
    }
    return {
        success: true,
        data: area
    };
}
async function createArea(areaData) {
    await new Promise((r)=>setTimeout(r, 300));
    const newArea = {
        id: `area-${mockAreas.length + 1}`,
        areaId: areaData.areaId,
        name: areaData.name,
        latitude: areaData.latitude,
        longitude: areaData.longitude,
        status: areaData.status || "Active",
        addedBy: areaData.addedBy || "Demo Admin",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        sensors: [],
        alarms: [],
        drones: []
    };
    mockAreas.unshift(newArea);
    return {
        success: true,
        data: newArea,
        message: "Area created successfully"
    };
}
async function updateArea(id, areaData) {
    await new Promise((r)=>setTimeout(r, 300));
    const area = mockAreas.find((a)=>a.id === id);
    if (!area) {
        return {
            success: false,
            error: "Area not found"
        };
    }
    Object.assign(area, areaData);
    area.updatedAt = new Date().toISOString();
    return {
        success: true,
        data: area,
        message: "Area updated successfully"
    };
}
async function deleteArea(id) {
    await new Promise((r)=>setTimeout(r, 300));
    const index = mockAreas.findIndex((a)=>a.id === id);
    if (index !== -1) {
        mockAreas.splice(index, 1);
    }
    return {
        success: true,
        message: "Area deleted successfully"
    };
}
}),
"[project]/lib/api/alarms.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAlarm",
    ()=>createAlarm,
    "deleteAlarm",
    ()=>deleteAlarm,
    "getAlarmById",
    ()=>getAlarmById,
    "getAlarmSensors",
    ()=>getAlarmSensors,
    "getAlarmsByArea",
    ()=>getAlarmsByArea,
    "getAllAlarms",
    ()=>getAllAlarms,
    "updateAlarm",
    ()=>updateAlarm
]);
const mockAlarms = [
    {
        id: "alarm-1",
        alarmId: "ALARM-001",
        name: "North Zone Alarm",
        status: "Active",
        areaId: "area-1",
        createdAt: "2026-07-14T10:00:00Z",
        updatedAt: "2026-07-14T10:00:00Z",
        area: {
            id: "area-1",
            areaId: "AREA-001",
            name: "North Zone",
            latitude: 28.6139,
            longitude: 77.209,
            status: "Active"
        },
        sensors: [
            {
                id: "sensor-1",
                sensorId: "SENSOR-001",
                name: "North Gate Camera"
            },
            {
                id: "sensor-2",
                sensorId: "SENSOR-002",
                name: "North Fence"
            }
        ]
    },
    {
        id: "alarm-2",
        alarmId: "ALARM-002",
        name: "South Zone Alarm",
        status: "Active",
        areaId: "area-2",
        createdAt: "2026-07-14T10:00:00Z",
        updatedAt: "2026-07-14T10:00:00Z",
        area: {
            id: "area-2",
            areaId: "AREA-002",
            name: "South Zone",
            latitude: 28.5355,
            longitude: 77.391,
            status: "Active"
        },
        sensors: [
            {
                id: "sensor-3",
                sensorId: "SENSOR-003",
                name: "South Entrance"
            }
        ]
    },
    {
        id: "alarm-3",
        alarmId: "ALARM-003",
        name: "East Zone Alarm",
        status: "Inactive",
        areaId: "area-3",
        createdAt: "2026-07-14T10:00:00Z",
        updatedAt: "2026-07-14T10:00:00Z",
        area: {
            id: "area-3",
            areaId: "AREA-003",
            name: "East Zone",
            latitude: 28.7041,
            longitude: 77.1025,
            status: "Inactive"
        },
        sensors: []
    }
];
async function getAllAlarms(params) {
    await new Promise((r)=>setTimeout(r, 300));
    let data = [
        ...mockAlarms
    ];
    if (params?.status) {
        data = data.filter((a)=>a.status === params.status);
    }
    if (params?.areaId) {
        data = data.filter((a)=>a.areaId === params.areaId);
    }
    return {
        success: true,
        count: data.length,
        data
    };
}
async function getAlarmById(id, includeRelations = false) {
    await new Promise((r)=>setTimeout(r, 250));
    const alarm = mockAlarms.find((a)=>a.id === id);
    if (!alarm) {
        return {
            success: false,
            error: "Alarm not found"
        };
    }
    return {
        success: true,
        data: alarm
    };
}
async function getAlarmsByArea(areaId) {
    await new Promise((r)=>setTimeout(r, 250));
    const alarms = mockAlarms.filter((a)=>a.areaId === areaId);
    return {
        success: true,
        count: alarms.length,
        data: alarms
    };
}
async function getAlarmSensors(id) {
    await new Promise((r)=>setTimeout(r, 200));
    const alarm = mockAlarms.find((a)=>a.id === id);
    if (!alarm) {
        return {
            success: false,
            error: "Alarm not found"
        };
    }
    return {
        success: true,
        count: alarm.sensors?.length || 0,
        data: alarm.sensors || []
    };
}
async function createAlarm(alarmData) {
    await new Promise((r)=>setTimeout(r, 300));
    const newAlarm = {
        id: `alarm-${mockAlarms.length + 1}`,
        alarmId: alarmData.alarmId,
        name: alarmData.name,
        status: alarmData.status || "Active",
        areaId: alarmData.areaId || null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        area: alarmData.areaId === "area-1" ? {
            id: "area-1",
            areaId: "AREA-001",
            name: "North Zone",
            latitude: 28.6139,
            longitude: 77.209,
            status: "Active"
        } : alarmData.areaId === "area-2" ? {
            id: "area-2",
            areaId: "AREA-002",
            name: "South Zone",
            latitude: 28.5355,
            longitude: 77.391,
            status: "Active"
        } : alarmData.areaId === "area-3" ? {
            id: "area-3",
            areaId: "AREA-003",
            name: "East Zone",
            latitude: 28.7041,
            longitude: 77.1025,
            status: "Inactive"
        } : undefined,
        sensors: []
    };
    mockAlarms.unshift(newAlarm);
    return {
        success: true,
        data: newAlarm,
        message: "Alarm created successfully"
    };
}
async function updateAlarm(id, alarmData) {
    await new Promise((r)=>setTimeout(r, 300));
    const alarm = mockAlarms.find((a)=>a.id === id);
    if (!alarm) {
        return {
            success: false,
            error: "Alarm not found"
        };
    }
    Object.assign(alarm, alarmData);
    if (alarmData.areaId !== undefined) {
        if (alarmData.areaId === "area-1") {
            alarm.area = {
                id: "area-1",
                areaId: "AREA-001",
                name: "North Zone",
                latitude: 28.6139,
                longitude: 77.209,
                status: "Active"
            };
        } else if (alarmData.areaId === "area-2") {
            alarm.area = {
                id: "area-2",
                areaId: "AREA-002",
                name: "South Zone",
                latitude: 28.5355,
                longitude: 77.391,
                status: "Active"
            };
        } else if (alarmData.areaId === "area-3") {
            alarm.area = {
                id: "area-3",
                areaId: "AREA-003",
                name: "East Zone",
                latitude: 28.7041,
                longitude: 77.1025,
                status: "Inactive"
            };
        } else {
            alarm.area = undefined;
        }
    }
    alarm.updatedAt = new Date().toISOString();
    return {
        success: true,
        data: alarm,
        message: "Alarm updated successfully"
    };
}
async function deleteAlarm(id) {
    await new Promise((r)=>setTimeout(r, 300));
    const index = mockAlarms.findIndex((a)=>a.id === id);
    if (index === -1) {
        return {
            success: false,
            error: "Alarm not found"
        };
    }
    mockAlarms.splice(index, 1);
    return {
        success: true,
        message: "Alarm deleted successfully"
    };
}
}),
"[project]/lib/api/smartmeter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSmartMeter",
    ()=>createSmartMeter,
    "deleteSmartMeter",
    ()=>deleteSmartMeter,
    "getAllSmartMeters",
    ()=>getAllSmartMeters,
    "getSmartMeterById",
    ()=>getSmartMeterById,
    "updateSmartMeter",
    ()=>updateSmartMeter
]);
const mockSmartMeters = [
    {
        id: "meter-1",
        smartMeterId: "SM-001",
        location: "North Zone",
        ipAddress: "192.168.1.201",
        latitude: 28.6139,
        longitude: 77.209,
        status: "Active",
        addedBy: "Demo Admin",
        createdAt: "2026-07-14T10:00:00Z",
        updatedAt: "2026-07-14T10:00:00Z",
        sensors: [
            {
                id: "sensor-1",
                sensorId: "SENSOR-001",
                name: "North Gate Camera"
            },
            {
                id: "sensor-2",
                sensorId: "SENSOR-002",
                name: "North Fence"
            }
        ],
        mediaConverters: [
            {
                id: "mc-1",
                mediaConverterId: "MC-001",
                left1: false,
                left2: true,
                left3: false,
                right1: true,
                right2: false,
                right3: true,
                left1Label: "FX",
                left2Label: "TX",
                left3Label: "LINK",
                right1Label: "PWR",
                right2Label: "ACT",
                right3Label: "FDX"
            },
            {
                id: "mc-2",
                mediaConverterId: "MC-002",
                left1: true,
                left2: true,
                left3: true,
                right1: true,
                right2: true,
                right3: false,
                left1Label: "FX",
                left2Label: "TX",
                left3Label: "LINK",
                right1Label: "PWR",
                right2Label: "ACT",
                right3Label: "FDX"
            }
        ]
    },
    {
        id: "meter-2",
        smartMeterId: "SM-002",
        location: "South Zone",
        ipAddress: "192.168.1.202",
        latitude: 28.5355,
        longitude: 77.391,
        status: "Active",
        addedBy: "Demo Admin",
        createdAt: "2026-07-14T10:00:00Z",
        updatedAt: "2026-07-14T10:00:00Z",
        sensors: [
            {
                id: "sensor-3",
                sensorId: "SENSOR-003",
                name: "South Entrance"
            }
        ],
        mediaConverters: [
            {
                id: "mc-3",
                mediaConverterId: "MC-003",
                left1: true,
                left2: false,
                left3: true,
                right1: true,
                right2: true,
                right3: false,
                left1Label: "FX",
                left2Label: "TX",
                left3Label: "LINK",
                right1Label: "PWR",
                right2Label: "ACT",
                right3Label: "FDX"
            }
        ]
    }
];
async function getAllSmartMeters(params) {
    await new Promise((r)=>setTimeout(r, 300));
    let data = [
        ...mockSmartMeters
    ];
    if (params?.status) {
        data = data.filter((m)=>m.status === params.status);
    }
    if (params?.search) {
        const search = params.search.toLowerCase();
        data = data.filter((m)=>m.smartMeterId.toLowerCase().includes(search) || (m.location ?? "").toLowerCase().includes(search) || m.ipAddress.toLowerCase().includes(search));
    }
    return {
        success: true,
        data,
        pagination: {
            page: 1,
            limit: data.length,
            totalCount: data.length,
            totalPages: 1,
            hasNextPage: false,
            hasPrevPage: false
        }
    };
}
async function getSmartMeterById(id, includeRelations = false) {
    await new Promise((r)=>setTimeout(r, 250));
    const meter = mockSmartMeters.find((m)=>m.id === id);
    if (!meter) {
        return {
            success: false,
            error: "Smart Meter not found"
        };
    }
    return {
        success: true,
        data: meter
    };
}
async function createSmartMeter(data) {
    await new Promise((r)=>setTimeout(r, 300));
    const newMeter = {
        id: `meter-${mockSmartMeters.length + 1}`,
        smartMeterId: data.smartMeterId,
        location: data.location || "",
        ipAddress: data.ipAddress || "",
        latitude: data.latitude,
        longitude: data.longitude,
        status: data.status || "Active",
        addedBy: data.addedBy || "Demo Admin",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        sensors: [],
        mediaConverters: data.mediaConverters?.map((mc, index)=>({
                id: `mc-${Date.now()}-${index}`,
                mediaConverterId: mc.mediaConverterId,
                left1: false,
                left2: false,
                left3: false,
                right1: false,
                right2: false,
                right3: false,
                left1Label: mc.left1Label,
                left2Label: mc.left2Label,
                left3Label: mc.left3Label,
                right1Label: mc.right1Label,
                right2Label: mc.right2Label,
                right3Label: mc.right3Label
            })) || []
    };
    mockSmartMeters.unshift(newMeter);
    return {
        success: true,
        data: newMeter,
        message: "Smart Meter created successfully"
    };
}
async function updateSmartMeter(id, data) {
    await new Promise((r)=>setTimeout(r, 300));
    const meter = mockSmartMeters.find((m)=>m.id === id);
    if (!meter) {
        return {
            success: false,
            error: "Smart Meter not found"
        };
    }
    if (data.smartMeterId !== undefined) meter.smartMeterId = data.smartMeterId;
    if (data.location !== undefined) meter.location = data.location;
    if (data.ipAddress !== undefined) meter.ipAddress = data.ipAddress;
    if (data.latitude !== undefined) meter.latitude = data.latitude;
    if (data.longitude !== undefined) meter.longitude = data.longitude;
    if (data.status !== undefined) meter.status = data.status;
    if (data.mediaConverters) {
        meter.mediaConverters = data.mediaConverters.map((mc)=>({
                id: mc.id || `mc-${Date.now()}`,
                mediaConverterId: mc.mediaConverterId,
                left1: false,
                left2: false,
                left3: false,
                right1: false,
                right2: false,
                right3: false,
                left1Label: mc.left1Label,
                left2Label: mc.left2Label,
                left3Label: mc.left3Label,
                right1Label: mc.right1Label,
                right2Label: mc.right2Label,
                right3Label: mc.right3Label
            }));
    }
    meter.updatedAt = new Date().toISOString();
    return {
        success: true,
        data: meter,
        message: "Smart Meter updated successfully"
    };
}
async function deleteSmartMeter(id) {
    await new Promise((r)=>setTimeout(r, 300));
    const index = mockSmartMeters.findIndex((m)=>m.id === id);
    if (index === -1) {
        return {
            success: false,
            error: "Smart Meter not found"
        };
    }
    mockSmartMeters.splice(index, 1);
    return {
        success: true,
        message: "Smart Meter deleted successfully"
    };
}
}),
"[project]/app/(protected)/sensors/[id]/edit/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/sensors/[id]/edit/page.tsx
// Updated Edit Sensor Page with Backend Integration + RTSP URL
__turbopack_context__.s([
    "default",
    ()=>EditSensorPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-ssr] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$sensors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/sensors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$areas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/areas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$alarms$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/alarms.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$smartmeter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/smartmeter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-toast.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Options
const sensorTypes = [
    "Command Center",
    "Camera",
    "Post",
    "Motion Detector",
    "Thermal Sensor",
    "Infrared Sensor",
    "PIR Sensor",
    "Other"
];
const statusOptions = [
    "Active",
    "Inactive"
];
const sendDroneOptions = [
    "Yes",
    "No"
];
const activeOptions = [
    "Active",
    "Inactive"
];
function EditSensorPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sensor, setSensor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [areas, setAreas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [alarms, setAlarms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [smartMeters, setSmartMeters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        sensorId: "",
        name: "",
        areaId: "",
        sensorType: "",
        alarmId: "",
        ipAddress: "",
        smartMeterId: "",
        rtspUrl: "",
        latitude: "",
        longitude: "",
        battery: "",
        status: "",
        sendDrone: "",
        activeShuruMode: "",
        addedBy: ""
    });
    const [validationErrors, setValidationErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        sensorType: "",
        latitude: "",
        longitude: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (params.id) {
            fetchData();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        params.id
    ]);
    const fetchData = async ()=>{
        setLoading(true);
        setError(null);
        try {
            // Fetch sensor, areas, and alarms, smartmeters
            const [sensorResponse, areasResponse, alarmsResponse, smartMeterResponse] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$sensors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSensorById"])(params.id, true),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$areas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllAreas"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$alarms$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllAlarms"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$smartmeter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllSmartMeters"])()
            ]);
            if (sensorResponse.success && sensorResponse.data) {
                const sensorData = sensorResponse.data;
                console.log(sensorResponse.data);
                setSensor(sensorData);
                setFormData({
                    sensorId: sensorData.sensorId,
                    name: sensorData.name,
                    areaId: sensorData.areaId || "",
                    sensorType: sensorData.sensorType,
                    alarmId: sensorData.alarmId || "",
                    ipAddress: sensorData.ipAddress || "",
                    rtspUrl: sensorData.rtspUrl || "",
                    latitude: sensorData.latitude.toString(),
                    longitude: sensorData.longitude.toString(),
                    battery: sensorData.battery || "",
                    status: sensorData.status,
                    sendDrone: sensorData.sendDrone,
                    activeShuruMode: sensorData.activeShuruMode,
                    addedBy: sensorData.addedBy || "",
                    smartMeterId: sensorData.smartMeter?.smartMeterId || ""
                });
            } else {
                setError(sensorResponse.error || "Failed to fetch sensor details");
                toast({
                    title: "Error",
                    description: sensorResponse.error || "Failed to fetch sensor details",
                    variant: "destructive"
                });
            }
            if (areasResponse.success && areasResponse.data) {
                setAreas(areasResponse.data);
            }
            if (alarmsResponse.success && alarmsResponse.data) {
                setAlarms(alarmsResponse.data);
            }
            if (smartMeterResponse.success && smartMeterResponse.data) {
                setSmartMeters(smartMeterResponse.data);
            }
        } catch (err) {
            setError("Failed to fetch data"); //this is error coming
            toast({
                title: "Error",
                description: "Failed to fetch data",
                variant: "destructive"
            });
        } finally{
            setLoading(false);
        }
    };
    const validateForm = ()=>{
        const errors = {
            name: "",
            sensorType: "",
            latitude: "",
            longitude: ""
        };
        let isValid = true;
        // Name validation
        if (!formData.name.trim()) {
            errors.name = "Sensor name is required";
            isValid = false;
        } else if (formData.name.trim().length < 3) {
            errors.name = "Sensor name must be at least 3 characters";
            isValid = false;
        }
        // Sensor Type validation
        if (!formData.sensorType) {
            errors.sensorType = "Sensor type is required";
            isValid = false;
        }
        // Latitude validation
        const lat = parseFloat(formData.latitude);
        if (!formData.latitude || isNaN(lat) || lat < -90 || lat > 90) {
            errors.latitude = "Latitude must be between -90 and 90";
            isValid = false;
        }
        // Longitude validation
        const lng = parseFloat(formData.longitude);
        if (!formData.longitude || isNaN(lng) || lng < -180 || lng > 180) {
            errors.longitude = "Longitude must be between -180 and 180";
            isValid = false;
        }
        setValidationErrors(errors);
        return isValid;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validateForm()) {
            toast({
                title: "Validation Error",
                description: "Please check the form for errors",
                variant: "destructive"
            });
            return;
        }
        setIsSubmitting(true);
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$sensors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateSensor"])(params.id, {
                name: formData.name.trim(),
                sensorType: formData.sensorType,
                latitude: parseFloat(formData.latitude),
                longitude: parseFloat(formData.longitude),
                ipAddress: formData.ipAddress.trim() || undefined,
                rtspUrl: formData.rtspUrl.trim() || undefined,
                battery: formData.battery.trim() || undefined,
                status: formData.status,
                sendDrone: formData.sendDrone,
                activeShuruMode: formData.activeShuruMode,
                areaId: formData.areaId || undefined,
                alarmId: formData.alarmId || undefined,
                smartMeterId: formData.smartMeterId || undefined
            });
            if (response.success) {
                toast({
                    title: "Success",
                    description: "Sensor updated successfully"
                });
                router.push(`/sensors/${params.id}`);
                console.log("UPDATED SUCCESSFULLY");
            } else {
                toast({
                    title: "Error",
                    description: response.error || "Failed to update sensor",
                    variant: "destructive"
                });
            }
        } catch (err) {
            toast({
                title: "Error",
                description: "Failed to update sensor",
                variant: "destructive"
            });
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
        // Clear validation error
        if (validationErrors[field]) {
            setValidationErrors((prev)=>({
                    ...prev,
                    [field]: ""
                }));
        }
    };
    // Loading State
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-1 items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "mx-auto mb-4 h-12 w-12 animate-spin text-[#2563EB]"
                    }, void 0, false, {
                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                        lineNumber: 273,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg font-medium text-gray-400",
                        children: "Loading sensor details..."
                    }, void 0, false, {
                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                        lineNumber: 274,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                lineNumber: 272,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
            lineNumber: 271,
            columnNumber: 7
        }, this);
    }
    // Error State or Sensor Not Found
    if (error || !sensor) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-1 items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                        className: "mx-auto h-16 w-16 text-gray-500"
                    }, void 0, false, {
                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                        lineNumber: 287,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-4 text-xl text-white",
                        children: "Sensor not found"
                    }, void 0, false, {
                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                        lineNumber: 288,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-gray-400",
                        children: error || "The sensor you're looking for doesn't exist."
                    }, void 0, false, {
                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                        lineNumber: 289,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/sensors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            className: "mt-4 bg-[#2563EB] text-white hover:bg-[#1D4ED8]",
                            children: "Back to Sensors"
                        }, void 0, false, {
                            fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                            lineNumber: 293,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                        lineNumber: 292,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                lineNumber: 286,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
            lineNumber: 285,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 md:p-6 lg:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "mb-4 text-2xl font-semibold text-[#4A9FD4]",
                    children: "Edit Sensor"
                }, void 0, false, {
                    fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                    lineNumber: 306,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: `/sensors/${params.id}`,
                    className: "mb-6 inline-flex items-center gap-2 text-gray-400 hover:text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                            lineNumber: 315,
                            columnNumber: 11
                        }, this),
                        "Back"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                    lineNumber: 311,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-[#333] bg-[#222] p-4 md:p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "sensorId",
                                                className: "text-gray-300",
                                                children: "Sensor ID"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 325,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "sensorId",
                                                value: formData.sensorId,
                                                disabled: true,
                                                className: "border-[#444] bg-[#1a1a1a] text-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 328,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500",
                                                children: "Sensor ID cannot be changed"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 334,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "name",
                                                className: "text-gray-300",
                                                children: [
                                                    "Name",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 341,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "name",
                                                placeholder: "Enter sensor name",
                                                value: formData.name,
                                                onChange: (e)=>handleChange("name", e.target.value),
                                                required: true,
                                                className: "border-[#444] bg-[#2a2a2a] text-white placeholder:text-gray-500 focus:border-[#4A9FD4] focus:ring-[#4A9FD4]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 344,
                                                columnNumber: 17
                                            }, this),
                                            validationErrors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-red-500",
                                                children: validationErrors.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 353,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                        lineNumber: 340,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-gray-300",
                                                children: "Choose SmartMeter:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 362,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                value: formData.smartMeterId || "none",
                                                onValueChange: (value)=>handleChange("smartMeterId", value === "none" ? "" : value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: "border-[#444] bg-[#2a2a2a] text-white focus:ring-[#4A9FD4]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                            placeholder: "Select Smartmeter (Optional)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                            lineNumber: 370,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        className: "border-[#333] bg-[#222]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "none",
                                                                className: "text-white focus:bg-[#333] focus:text-white",
                                                                children: "None"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                                lineNumber: 373,
                                                                columnNumber: 21
                                                            }, this),
                                                            smartMeters.map((sm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: sm.smartMeterId,
                                                                    className: "text-white focus:bg-[#333] focus:text-white",
                                                                    children: sm.smartMeterId
                                                                }, sm.id, false, {
                                                                    fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                                    lineNumber: 380,
                                                                    columnNumber: 23
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                        lineNumber: 372,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 363,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                        lineNumber: 361,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-gray-300",
                                                children: "Choose Area"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 394,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                value: formData.areaId || "none",
                                                onValueChange: (value)=>handleChange("areaId", value === "none" ? "" : value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: "border-[#444] bg-[#2a2a2a] text-white focus:ring-[#4A9FD4]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                            placeholder: "Select Area (Optional)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                            lineNumber: 402,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        className: "border-[#333] bg-[#222]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "none",
                                                                className: "text-white focus:bg-[#333] focus:text-white",
                                                                children: "None"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                                lineNumber: 405,
                                                                columnNumber: 21
                                                            }, this),
                                                            areas.map((area)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: area.id,
                                                                    className: "text-white focus:bg-[#333] focus:text-white",
                                                                    children: area.name
                                                                }, area.id, false, {
                                                                    fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                                    lineNumber: 412,
                                                                    columnNumber: 23
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                        lineNumber: 404,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 395,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                        lineNumber: 393,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-gray-300",
                                                children: [
                                                    "Sensor Type",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                        lineNumber: 427,
                                                        columnNumber: 30
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 426,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                value: formData.sensorType,
                                                onValueChange: (value)=>handleChange("sensorType", value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: "border-[#444] bg-[#2a2a2a] text-white focus:ring-[#4A9FD4]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                            placeholder: "Select Sensor Type"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                            lineNumber: 434,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                        lineNumber: 433,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        className: "border-[#333] bg-[#222]",
                                                        children: sensorTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: type,
                                                                className: "text-white focus:bg-[#333] focus:text-white",
                                                                children: type
                                                            }, type, false, {
                                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                                lineNumber: 438,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                        lineNumber: 436,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 429,
                                                columnNumber: 17
                                            }, this),
                                            validationErrors.sensorType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-red-500",
                                                children: validationErrors.sensorType
                                            }, void 0, false, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 449,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                        lineNumber: 425,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-gray-300",
                                                children: "Choose Alarm"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 457,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                value: formData.alarmId || "none",
                                                onValueChange: (value)=>handleChange("alarmId", value === "none" ? "" : value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: "border-[#444] bg-[#2a2a2a] text-white focus:ring-[#4A9FD4]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                            placeholder: "None (Optional)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                            lineNumber: 465,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                        lineNumber: 464,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        className: "border-[#333] bg-[#222]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "none",
                                                                className: "text-white focus:bg-[#333] focus:text-white",
                                                                children: "None"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                                lineNumber: 468,
                                                                columnNumber: 21
                                                            }, this),
                                                            alarms.map((alarm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: alarm.id,
                                                                    className: "text-white focus:bg-[#333] focus:text-white",
                                                                    children: alarm.name
                                                                }, alarm.id, false, {
                                                                    fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                                    lineNumber: 475,
                                                                    columnNumber: 23
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                        lineNumber: 467,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 458,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                        lineNumber: 456,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "ipAddress",
                                                className: "text-gray-300",
                                                children: "IP Address"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 489,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "ipAddress",
                                                placeholder: "e.g., 192.168.1.100",
                                                value: formData.ipAddress,
                                                onChange: (e)=>handleChange("ipAddress", e.target.value),
                                                className: "border-[#444] bg-[#2a2a2a] text-white placeholder:text-gray-500 focus:border-[#4A9FD4] focus:ring-[#4A9FD4]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 492,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                        lineNumber: 488,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "rtspUrl",
                                                className: "text-gray-300",
                                                children: "RTSP URL"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 503,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "rtspUrl",
                                                placeholder: "rtsp://user:pass@ip:554/stream",
                                                value: formData.rtspUrl,
                                                onChange: (e)=>handleChange("rtspUrl", e.target.value),
                                                className: "border-[#444] bg-[#2a2a2a] text-white placeholder:text-gray-500 focus:border-[#4A9FD4] focus:ring-[#4A9FD4]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 506,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500",
                                                children: "Optional – used for live video streaming."
                                            }, void 0, false, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 513,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                        lineNumber: 502,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "latitude",
                                                className: "text-gray-300",
                                                children: [
                                                    "Latitude",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                        lineNumber: 521,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 520,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "latitude",
                                                type: "number",
                                                step: "any",
                                                placeholder: "e.g., 28.6139",
                                                value: formData.latitude,
                                                onChange: (e)=>handleChange("latitude", e.target.value),
                                                required: true,
                                                className: "border-[#444] bg-[#2a2a2a] text-white placeholder:text-gray-500 focus:border-[#4A9FD4] focus:ring-[#4A9FD4]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 523,
                                                columnNumber: 17
                                            }, this),
                                            validationErrors.latitude && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-red-500",
                                                children: validationErrors.latitude
                                            }, void 0, false, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 534,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                        lineNumber: 519,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "longitude",
                                                className: "text-gray-300",
                                                children: [
                                                    "Longitude",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                        lineNumber: 543,
                                                        columnNumber: 28
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 542,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "longitude",
                                                type: "number",
                                                step: "any",
                                                placeholder: "e.g., 77.2090",
                                                value: formData.longitude,
                                                onChange: (e)=>handleChange("longitude", e.target.value),
                                                required: true,
                                                className: "border-[#444] bg-[#2a2a2a] text-white placeholder:text-gray-500 focus:border-[#4A9FD4] focus:ring-[#4A9FD4]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 545,
                                                columnNumber: 17
                                            }, this),
                                            validationErrors.longitude && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-red-500",
                                                children: validationErrors.longitude
                                            }, void 0, false, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 556,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                        lineNumber: 541,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "battery",
                                                className: "text-gray-300",
                                                children: "Battery"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 564,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "battery",
                                                placeholder: "e.g., 85%",
                                                value: formData.battery,
                                                onChange: (e)=>handleChange("battery", e.target.value),
                                                className: "border-[#444] bg-[#2a2a2a] text-white placeholder:text-gray-500 focus:border-[#4A9FD4] focus:ring-[#4A9FD4]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 567,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                        lineNumber: 563,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-gray-300",
                                                children: [
                                                    "Status:",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                        lineNumber: 579,
                                                        columnNumber: 26
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 578,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                value: formData.status,
                                                onValueChange: (value)=>handleChange("status", value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: "border-[#444] bg-[#2a2a2a] text-white focus:ring-[#4A9FD4]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                            placeholder: "Select Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                            lineNumber: 586,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                        lineNumber: 585,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        className: "border-[#333] bg-[#222]",
                                                        children: statusOptions.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: status,
                                                                className: "text-white focus:bg-[#333] focus:text-white",
                                                                children: status
                                                            }, status, false, {
                                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                                lineNumber: 590,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                        lineNumber: 588,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 581,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500",
                                                children: "Active sensors are monitored in real-time. Inactive sensors are stored but not tracked and displayed in the UI"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 600,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                        lineNumber: 577,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-gray-300",
                                                children: [
                                                    "Send Drone",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                        lineNumber: 609,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 608,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                value: formData.sendDrone,
                                                onValueChange: (value)=>handleChange("sendDrone", value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: "border-[#444] bg-[#2a2a2a] text-white focus:ring-[#4A9FD4]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                            placeholder: "Auto-launch drone?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                            lineNumber: 616,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                        lineNumber: 615,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        className: "border-[#333] bg-[#222]",
                                                        children: sendDroneOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: option,
                                                                className: "text-white focus:bg-[#333] focus:text-white",
                                                                children: option
                                                            }, option, false, {
                                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                                lineNumber: 620,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                        lineNumber: 618,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 611,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                        lineNumber: 607,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-gray-300",
                                                children: [
                                                    "Connection Status:",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                        lineNumber: 635,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 634,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                value: formData.activeShuruMode,
                                                onValueChange: (value)=>handleChange("activeShuruMode", value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: "border-[#444] bg-[#2a2a2a] text-white focus:ring-[#4A9FD4]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                            placeholder: "Select Sensor State"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                            lineNumber: 644,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                        lineNumber: 643,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        className: "border-[#333] bg-[#222]",
                                                        children: activeOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: option,
                                                                className: "text-white focus:bg-[#333] focus:text-white",
                                                                children: option
                                                            }, option, false, {
                                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                                lineNumber: 648,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                        lineNumber: 646,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 637,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500",
                                                children: "Whether the sensor is live in the network or not."
                                            }, void 0, false, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 658,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                        lineNumber: 633,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "addedBy",
                                                className: "text-gray-300",
                                                children: [
                                                    "Added By ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                        lineNumber: 664,
                                                        columnNumber: 28
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 663,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "addedBy",
                                                placeholder: "Operator Name",
                                                value: formData.addedBy,
                                                disabled: true,
                                                className: "border-[#333] bg-[#1a1a1a] text-white placeholder:text-gray-500 focus:border-[#8B0000] focus:ring-[#8B0000]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 666,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500",
                                                children: "Added By cannot be changed"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                lineNumber: 673,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                        lineNumber: 662,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                lineNumber: 322,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/sensors/${params.id}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            variant: "outline",
                                            disabled: isSubmitting,
                                            className: "w-full border-[#444] bg-transparent text-white hover:bg-[#333] sm:w-auto",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                            lineNumber: 682,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                        lineNumber: 681,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        disabled: isSubmitting,
                                        className: "w-full gap-2 bg-[#2563EB] px-6 text-white hover:bg-[#1D4ED8] disabled:opacity-50 sm:w-auto",
                                        children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "h-4 w-4 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                    lineNumber: 698,
                                                    columnNumber: 21
                                                }, this),
                                                "Saving..."
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                                    lineNumber: 703,
                                                    columnNumber: 21
                                                }, this),
                                                "Save Changes"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                        lineNumber: 691,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                                lineNumber: 680,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                        lineNumber: 320,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
                    lineNumber: 319,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
            lineNumber: 304,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(protected)/sensors/[id]/edit/page.tsx",
        lineNumber: 303,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_b513ec84._.js.map