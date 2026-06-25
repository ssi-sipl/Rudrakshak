(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/sensors.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:5001") || "http://localhost:5000";
async function getAllSensors(params) {
    try {
        const queryParams = new URLSearchParams();
        if (params?.status) queryParams.append("status", params.status);
        if (params?.areaId) queryParams.append("areaId", params.areaId);
        if (params?.sensorType) queryParams.append("sensorType", params.sensorType);
        if (params?.include) queryParams.append("include", "true");
        if (params?.page) queryParams.append("page", params.page.toString());
        if (params?.limit) queryParams.append("limit", params.limit.toString());
        if (params?.search) queryParams.append("search", params.search);
        const url = `${API_BASE_URL}/api/sensors${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            cache: "no-store"
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to fetch sensors");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching sensors:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to fetch sensors"
        };
    }
}
async function getSensorStats() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/sensors/stats`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            cache: "no-store"
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to fetch sensor stats");
        }
        return await response.json();
    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to fetch stats"
        };
    }
}
async function getSensorById(id, includeRelations = false) {
    try {
        const url = `${API_BASE_URL}/api/sensors/${id}${includeRelations ? "?include=true" : ""}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            cache: "no-store"
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to fetch sensor");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching sensor:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to fetch sensor"
        };
    }
}
async function getSensorsByArea(areaId) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/sensors/area/${areaId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            cache: "no-store"
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to fetch sensors");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching sensors:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to fetch sensors"
        };
    }
}
async function createSensor(sensorData) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/sensors`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(sensorData)
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to create sensor");
        }
        return await response.json();
    } catch (error) {
        console.error("Error creating sensor:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to create sensor"
        };
    }
}
async function updateSensor(id, sensorData) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/sensors/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(sensorData)
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to update sensor");
        }
        return await response.json();
    } catch (error) {
        console.error("Error updating sensor:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to update sensor"
        };
    }
}
async function deleteSensor(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/sensors/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to delete sensor");
        }
        return await response.json();
    } catch (error) {
        console.error("Error deleting sensor:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to delete sensor"
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/areas.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// API service functions for areas
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:5001") || "http://localhost:5000";
async function getAllAreas(params) {
    try {
        const queryParams = new URLSearchParams();
        if (params?.status) queryParams.append("status", params.status);
        if (params?.include) queryParams.append("include", "true");
        if (params?.page) queryParams.append("page", params.page.toString());
        if (params?.limit) queryParams.append("limit", params.limit.toString());
        if (params?.search) queryParams.append("search", params.search);
        const url = `${API_BASE_URL}/api/areas${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            cache: "no-store"
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to fetch areas");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching areas:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to fetch areas"
        };
    }
}
async function getAreaById(id, includeRelations = false) {
    try {
        const url = `${API_BASE_URL}/api/areas/${id}${includeRelations ? "?include=true" : ""}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            cache: "no-store"
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to fetch area");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching area:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to fetch area"
        };
    }
}
async function createArea(areaData) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/areas`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(areaData)
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to create area");
        }
        return await response.json();
    } catch (error) {
        console.error("Error creating area:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to create area"
        };
    }
}
async function updateArea(id, areaData) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/areas/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(areaData)
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to update area");
        }
        return await response.json();
    } catch (error) {
        console.error("Error updating area:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to update area"
        };
    }
}
async function deleteArea(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/areas/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to delete area");
        }
        return await response.json();
    } catch (error) {
        console.error("Error deleting area:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to delete area"
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/alarms.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:5001") || "http://localhost:5000";
async function getAllAlarms(params) {
    try {
        const queryParams = new URLSearchParams();
        if (params?.status) queryParams.append("status", params.status);
        if (params?.areaId) queryParams.append("areaId", params.areaId);
        if (params?.include) queryParams.append("include", "true");
        const url = `${API_BASE_URL}/api/alarms${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            cache: "no-store"
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to fetch alarms");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching alarms:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to fetch alarms"
        };
    }
}
async function getAlarmById(id, includeRelations = false) {
    try {
        const url = `${API_BASE_URL}/api/alarms/${id}${includeRelations ? "?include=true" : ""}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            cache: "no-store"
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to fetch alarm");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching alarm:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to fetch alarm"
        };
    }
}
async function getAlarmsByArea(areaId) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/alarms/area/${areaId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            cache: "no-store"
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to fetch alarms");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching alarms:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to fetch alarms"
        };
    }
}
async function getAlarmSensors(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/alarms/${id}/sensors`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            cache: "no-store"
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to fetch alarm sensors");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching alarm sensors:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to fetch alarm sensors"
        };
    }
}
async function createAlarm(alarmData) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/alarms`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(alarmData)
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to create alarm");
        }
        return await response.json();
    } catch (error) {
        console.error("Error creating alarm:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to create alarm"
        };
    }
}
async function updateAlarm(id, alarmData) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/alarms/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(alarmData)
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to update alarm");
        }
        return await response.json();
    } catch (error) {
        console.error("Error updating alarm:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to update alarm"
        };
    }
}
async function deleteAlarm(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/alarms/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to delete alarm");
        }
        return await response.json();
    } catch (error) {
        console.error("Error deleting alarm:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to delete alarm"
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(protected)/sensors/add/page.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/app/(protected)/sensors/add/page.tsx'\n\nExpected ',', got ';'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label,
    "Root",
    ()=>Root
]);
// packages/react/label/src/Label.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
var NAME = "Label";
var Label = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].label, {
        ...props,
        ref: forwardedRef,
        onMouseDown: (event)=>{
            const target = event.target;
            if (target.closest("button, input, select, textarea")) return;
            props.onMouseDown?.(event);
            if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
        }
    });
});
Label.displayName = NAME;
var Root = Label;
;
 //# sourceMappingURL=index.mjs.map
}),
]);

//# sourceMappingURL=_df2d743c._.js.map