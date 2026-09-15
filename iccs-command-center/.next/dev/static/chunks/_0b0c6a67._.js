(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-lg leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
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
            console.log(errorData);
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
"[project]/lib/api/maps.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/api/maps.ts
__turbopack_context__.s([
    "createMap",
    ()=>createMap,
    "deleteMap",
    ()=>deleteMap,
    "getActiveMap",
    ()=>getActiveMap,
    "getAllMaps",
    ()=>getAllMaps,
    "setActiveMap",
    ()=>setActiveMap,
    "setMapActive",
    ()=>setMapActive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:5001") || "http://localhost:5000";
async function getAllMaps() {
    try {
        const res = await fetch(`${API_BASE_URL}/api/maps`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            cache: "no-store"
        });
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || "Failed to fetch maps");
        }
        return await res.json();
    } catch (err) {
        console.error("Error fetching maps:", err);
        return {
            success: false,
            error: err instanceof Error ? err.message : "Failed to fetch maps"
        };
    }
}
async function getActiveMap() {
    try {
        const res = await fetch(`${API_BASE_URL}/api/maps/active`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            cache: "no-store"
        });
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || "Failed to fetch active map");
        }
        return await res.json();
    } catch (err) {
        console.error("Error fetching active map:", err);
        return {
            success: false,
            error: err instanceof Error ? err.message : "Failed to fetch active map"
        };
    }
}
async function createMap(payload) {
    try {
        const res = await fetch(`${API_BASE_URL}/api/maps`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(payload)
        });
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || "Failed to create map");
        }
        return await res.json();
    } catch (err) {
        console.error("Error creating map:", err);
        return {
            success: false,
            error: err instanceof Error ? err.message : "Failed to create map"
        };
    }
}
async function setActiveMap(id) {
    try {
        const res = await fetch(`${API_BASE_URL}/api/maps/${id}/active`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || "Failed to set map active");
        }
        return await res.json();
    } catch (err) {
        console.error("Error setting map active:", err);
        return {
            success: false,
            error: err instanceof Error ? err.message : "Failed to set map active"
        };
    }
}
const setMapActive = setActiveMap;
async function deleteMap(id) {
    try {
        const res = await fetch(`${API_BASE_URL}/api/maps/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || "Failed to delete map");
        }
        return await res.json();
    } catch (err) {
        console.error("Error deleting map:", err);
        return {
            success: false,
            error: err instanceof Error ? err.message : "Failed to delete map"
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/map-renderer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:5001") || "http://localhost:5000";
const REACH_RADIUS_METERS = 6;
const MapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(async ()=>{
    const { MapContainer } = await __turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)");
    return MapContainer;
}, {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = MapContainer;
const TileLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(async ()=>{
    const { TileLayer } = await __turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)");
    return TileLayer;
}, {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = TileLayer;
const Marker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(async ()=>{
    const { Marker } = await __turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)");
    return Marker;
}, {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c2 = Marker;
const Tooltip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(async ()=>{
    const { Tooltip } = await __turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)");
    return Tooltip;
}, {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c3 = Tooltip;
const Polyline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(async ()=>{
    const { Polyline } = await __turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)");
    return Polyline;
}, {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c4 = Polyline;
const Circle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c5 = async ()=>{
    const { Circle } = await __turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)");
    return Circle;
}, {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c6 = Circle;
function getSensorBaseColor(sensorType) {
    const t = sensorType.toLowerCase();
    if (t.includes("command")) return "#ffffff";
    if (t.includes("camera")) return "#26f51b";
    // if (t.includes("thermal")) return "#f97316";
    if (t.includes("thermal")) return "#26f51b";
    if (t.includes("thermal")) return "#26f51b";
    if (t.includes("pir")) return "#26f51b";
    if (t.includes("infrared")) return "#26f51b";
    // if (t.includes("motion")) return "#22c55e";
    if (t.includes("motion")) return "#26f51b";
    // if (t.includes("post")) return "#3b82f6";
    if (t.includes("post")) return "#26f51b";
    return "#9ca3af";
}
// function getDroneIcon(isOnline: boolean): DivIcon {
//   const leaflet = require("leaflet");
//   const size = 26;
//   const bgColor = isOnline ? "#6D28D9" : "#C4B5FD"; // deep purple / light purple
//   const borderColor = isOnline ? "#A78BFA" : "#6D28D9";
//   const glowColor = isOnline
//     ? "rgba(109,40,217,0.9)" // deep purple glow
//     : "rgba(196,181,253,0.4)"; // soft light purple glow
//   const animation = isOnline
//     ? `
//       animation: drone-pulse 1.5s infinite;
//     `
//     : "";
//   const html = `
//     <style>
//       @keyframes drone-pulse {
//         0% { box-shadow: 0 0 0 0 ${glowColor}; }
//         70% { box-shadow: 0 0 0 10px rgba(0,0,0,0); }
//         100% { box-shadow: 0 0 0 0 rgba(0,0,0,0); }
//       }
//     </style>
//     <div style="
//       width:${size}px;
//       height:${size}px;
//       border-radius:9999px;
//       background:${bgColor};
//       border:2px solid ${borderColor};
//       display:flex;
//       align-items:center;
//       justify-content:center;
//       color:${isOnline ? "white" : borderColor};
//       font-size:14px;
//       font-weight:700;
//       ${animation}
//     ">
//       ✈
//     </div>
//   `;
//   return leaflet.divIcon({
//     html,
//     className: "",
//     iconSize: [size, size],
//     iconAnchor: [size / 2, size / 2],
//   });
// }
function getBaseIcon() {
    const leaflet = __turbopack_context__.r("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
    const html = `
  
    <div style="
      width:18px;
      height:18px;
      border-radius:9999px;
      background:#111827;
      border:2px solid #22c55e;
      display:flex;
      align-items:center;
      justify-content:center;
      color:#22c55e;
      font-size:10px;
      font-weight:700;
    ">
      🏠
    </div>
  `;
    return leaflet.divIcon({
        html,
        className: "",
        iconSize: [
            18,
            18
        ],
        iconAnchor: [
            9,
            9
        ]
    });
}
function calculateDroneSize(zoom) {
    const { minSize, maxSize, minZoom, maxZoom } = ZOOM_SCALE_CONFIG;
    const z = Math.max(minZoom, Math.min(maxZoom, zoom));
    const progress = (z - minZoom) / (maxZoom - minZoom);
    return Math.round(minSize + (maxSize - minSize) * progress);
}
// map-renderer.tsx - Updated getDroneIcon function
function getDroneIcon(zoom, isOnline, isStale, hasAlert, status, selected = false, staticIcon = false) {
    const leaflet = __turbopack_context__.r("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
    // const size = 26;
    const size = calculateDroneSize(zoom);
    // Determine colors and animation based on status
    let bgColor;
    let borderColor;
    let glowColor;
    let icon;
    let animation = "";
    if (hasAlert) {
        bgColor = "#DC2626"; // red
        borderColor = "#FCA5A5";
        glowColor = "rgba(220,38,38,0.9)";
        icon = "⚠️";
        animation = `animation: drone-pulse 1s infinite;`;
    } else if (isStale) {
        bgColor = "#F59E0B"; // amber
        borderColor = "#FCD34D";
        glowColor = "rgba(245,158,11,0.7)";
        icon = "❓";
    } else if (!isOnline) {
        // bgColor = "#374151"; // dark gray
        // borderColor = "#9CA3AF";
        // glowColor = "rgba(107,114,128,0.4)";
        // icon = "⛔";
        bgColor = "#C4B5FD";
        borderColor = "#6D28D9";
        glowColor = "rgba(196,181,253,0.4)";
        icon = "✈";
    } else {
        // NORMAL ONLINE STATE → fall back to telemetry.status
        switch(status){
            case "on_air":
                bgColor = "#3B82F6";
                borderColor = "#60A5FA";
                glowColor = "rgba(59,130,246,0.9)";
                icon = "✈";
                animation = `animation: drone-pulse 1.5s infinite;`;
                break;
            case "reached":
                bgColor = "#10B981";
                borderColor = "#34D399";
                glowColor = "rgba(16,185,129,0.9)";
                icon = "🎯";
                animation = `animation: drone-reached 2s infinite;`;
                break;
            case "ground":
            default:
                bgColor = "#6B7280";
                borderColor = "#9CA3AF";
                glowColor = "rgba(107,116,128,0.6)";
                icon = "✈";
        }
    }
    if (selected) {
        glowColor = "rgba(34,197,94,0.95)";
        animation = "animation: drone-pulse 0.8s infinite;";
    }
    if (staticIcon) {
        animation = "";
    }
    // if (!isOnline) {
    //   // Offline state
    //   bgColor = "#C4B5FD";
    //   borderColor = "#6D28D9";
    //   glowColor = "rgba(196,181,253,0.4)";
    //   icon = "✈";
    // } else {
    //   // Online states based on status
    //   switch (status) {
    //     case "on_air":
    //       bgColor = "#3B82F6"; // blue
    //       borderColor = "#60A5FA";
    //       glowColor = "rgba(59,130,246,0.9)";
    //       icon = "✈";
    //       animation = `animation: drone-pulse 1.5s infinite;`;
    //       break;
    //     case "ground":
    //       bgColor = "#6B7280"; // gray
    //       borderColor = "#9CA3AF";
    //       glowColor = "rgba(107,116,128,0.6)";
    //       icon = "🛬";
    //       break;
    //     case "reached":
    //       bgColor = "#10B981"; // green
    //       borderColor = "#34D399";
    //       glowColor = "rgba(16,185,129,0.9)";
    //       icon = "🎯";
    //       animation = `animation: drone-reached 2s infinite;`;
    //       break;
    //     default:
    //       // Default online state (purple)
    //       bgColor = "#6D28D9";
    //       borderColor = "#A78BFA";
    //       glowColor = "rgba(109,40,217,0.9)";
    //       icon = "✈";
    //       animation = `animation: drone-pulse 1.5s infinite;`;
    //   }
    // }
    const html = `
<style>

@keyframes drone-pulse {
  0% { box-shadow:0 0 0 0 ${glowColor}; }
  70% { box-shadow:0 0 0 10px rgba(0,0,0,0); }
  100% { box-shadow:0 0 0 0 rgba(0,0,0,0); }
}

@keyframes drone-reached {
  0%,100%{
      box-shadow:0 0 0 0 ${glowColor};
      transform:scale(1);
  }
  50%{
      box-shadow:0 0 0 8px rgba(0,0,0,0);
      transform:scale(1.15);
  }
}

@keyframes battle-radar{
  0%{
      transform:translate(-50%,-50%) scale(.5);
      opacity:1;
  }

  100%{
      transform:translate(-50%,-50%) scale(2);
      opacity:0;
  }
}

</style>

<div
style="
position:relative;
width:${size}px;
height:${size}px;
display:flex;
align-items:center;
justify-content:center;
">

<div
style="
width:${size}px;
height:${size}px;
border-radius:9999px;
background:${bgColor};
border:2px solid ${borderColor};
display:flex;
align-items:center;
justify-content:center;
color:white;
font-size:${Math.round(size * 0.55)}px;
font-weight:700;
${animation}
">
${icon}
</div>

</div>
`;
    return leaflet.divIcon({
        html,
        className: "",
        iconSize: [
            size,
            size
        ],
        iconAnchor: [
            size / 2,
            size / 2
        ]
    });
}
// Zoom scale config
const ZOOM_SCALE_CONFIG = {
    minZoom: 10,
    maxZoom: 40,
    minSize: 28,
    maxSize: 64
};
function calculateMarkerSize(zoom) {
    const { minZoom, maxZoom, minSize, maxSize } = ZOOM_SCALE_CONFIG;
    const normalizedZoom = Math.max(minZoom, Math.min(maxZoom, zoom));
    const progress = (normalizedZoom - minZoom) / (maxZoom - minZoom);
    return Math.round(minSize + (maxSize - minSize) * progress);
}
function offsetLatLng(lat, lng, metersNorth, metersEast) {
    const dLat = metersNorth / 111111;
    const dLng = metersEast / (111111 * Math.cos(lat * Math.PI / 180));
    return [
        lat + dLat,
        lng + dLng
    ];
}
function haversineMeters(lat1, lon1, lat2, lon2) {
    const R = 6371000;
    const toRad = (d)=>d * Math.PI / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
// Function to detect if any drone is on a sensor
function getDroneOnSensor(sensor, dronePositions, droneTelemetryData) {
    for (const [droneId, pos] of Object.entries(dronePositions)){
        if (!pos) continue;
        const telemetry = droneTelemetryData[droneId];
        if (!telemetry) continue;
        // ✅ Only count drones that have actually REACHED
        if (telemetry.status !== "reached") continue;
        // ✅ Optional but STRONGLY recommended:
        // Make sure this sensor is the intended target
        if (telemetry.targetLat == null || telemetry.targetLng == null || Math.abs(telemetry.targetLat - sensor.latitude) > 0.00001 || Math.abs(telemetry.targetLng - sensor.longitude) > 0.00001) {
            continue;
        }
        const distance = haversineMeters(sensor.latitude, sensor.longitude, pos.lat, pos.lng);
        if (distance <= REACH_RADIUS_METERS) {
            return droneId;
        }
    }
    return null;
}
function getSensorIconPath(sensorType) {
    const t = sensorType.toLowerCase();
    if (t.includes("camera")) return "/Icons/Dark/Camera.png";
    if (t.includes("thermal")) return "/Icons/Dark/thermol.png";
    if (t.includes("infrared") || t.includes("ir")) return "/Icons/Dark/IR.png";
    if (t.includes("pir")) return "/Icons/Dark/PIR.png";
    if (t.includes("motion")) return "/Icons/Dark/Motion.png";
    if (t.includes("post")) return "/Icons/Dark/Post.png";
    if (t.includes("command")) return "/Icons/Dark/Commond Center.png";
    return "/Icons/Dark/Other.png";
}
function getSensorIconPathWhite(sensorType) {
    const t = sensorType.toLowerCase();
    if (t.includes("camera")) return "/Icons/White/Camera - W.png";
    if (t.includes("thermal")) return "/Icons/White/thermol - W.png";
    if (t.includes("infrared") || t.includes("ir")) return "/Icons/White/IR - W.png";
    if (t.includes("pir")) return "/Icons/White/PIR - W.png";
    if (t.includes("motion")) return "/Icons/White/Motion - W.png";
    if (t.includes("post")) return "/Icons/White/Post - W.png";
    if (t.includes("command")) return "/Icons/White/Commond Center - W.png";
    return "/Icons/White/Other - W.png";
}
function getSensorIcon(sensor, hasActiveAlert, zoom, droneOnSensor, isFocused, mode) {
    const leaflet = __turbopack_context__.r("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
    const markerSize = calculateMarkerSize(zoom);
    const fontSize = Math.max(9, Math.round(markerSize * 0.45));
    const borderWidth = markerSize > 30 ? 2 : 1;
    // const baseColor = getSensorBaseColor(sensor.sensorType);
    // const bg = hasActiveAlert ? "#b91c1c" : baseColor;
    // const border = hasActiveAlert ? "#fecaca" : "#0f172a";
    let bg;
    let border;
    if (mode === "sensor-health") {
        // System disabled
        if (sensor.status === "Inactive") {
            bg = "#6b7280";
            border = "#9ca3af";
        } else if (sensor.activeShuruMode === "Active") {
            bg = "#2563eb";
            border = "#93c5fd";
        } else {
            bg = "#dc2626";
            border = "#fca5a5";
        }
    } else {
        const baseColor = getSensorBaseColor(sensor.sensorType);
        bg = hasActiveAlert ? "#b91c1c" : baseColor;
        border = hasActiveAlert ? "#fecaca" : "#0f172a";
    }
    const t = sensor.sensorType.toLowerCase();
    let label = "S";
    if (t.includes("camera")) label = "C";
    else if (t.includes("thermal")) label = "T";
    else if (t.includes("infrared") || t.includes("pir")) label = "P";
    else if (t.includes("motion")) label = "M";
    else if (t.includes("post")) label = "PT";
    else if (t.includes("command")) label = "CC";
    const iconPath = hasActiveAlert ? getSensorIconPathWhite(sensor.sensorType) : getSensorIconPath(sensor.sensorType);
    const pulseAnimation = droneOnSensor ? `
    @keyframes pulse-ring {
      0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7), 0 0 8px rgba(0,0,0,0.8), 0 0 12px rgba(0,0,0,0.4); }
      50% { box-shadow: 0 0 0 8px rgba(59, 130, 246, 0), 0 0 8px rgba(0,0,0,0.8), 0 0 12px rgba(0,0,0,0.4); }
      100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0), 0 0 8px rgba(0,0,0,0.8), 0 0 12px rgba(0,0,0,0.4); }
    }
    @keyframes scale-pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
  ` : "";
    const focusGlow = isFocused ? `
  @keyframes focus-pulse {
    0% { box-shadow: 0 0 0 0 rgba(59,130,246,0.9); }
    70% { box-shadow: 0 0 0 16px rgba(59,130,246,0); }
    100% { box-shadow: 0 0 0 0 rgba(59,130,246,0); }
  }
` : "";
    const html = `
    <style>
    ${pulseAnimation}
    ${focusGlow}
    </style>
    <div style="
      width: ${markerSize}px;
      height: ${markerSize}px;
      border-radius: 9999px;
      background: ${bg};
      border: ${borderWidth}px solid ${border};
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${hasActiveAlert ? "white" : border};
      font-size: ${fontSize}px;
      font-weight: 600;
      ${isFocused ? `
  border: 3px solid #3b82f6;
  animation: focus-pulse 1.5s infinite;
` : ""}

      ${droneOnSensor ? `box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7), 0 0 8px rgba(0,0,0,0.8), 0 0 12px rgba(0,0,0,0.4);
      animation: pulse-ring 2s infinite, scale-pulse 2s infinite;` : `box-shadow: 0 0 8px rgba(0,0,0,0.8), 0 0 12px rgba(0,0,0,0.4);`}
      transition: all 0.15s ease-out;
    ">
      
      <img
          src="${iconPath}"
          style="
            width:100%;
            height:100%;
            object-fit:contain;

          "
        />
    </div>
  `;
    return leaflet.divIcon({
        html,
        className: "",
        iconSize: [
            markerSize,
            markerSize
        ],
        iconAnchor: [
            markerSize / 2,
            markerSize / 2
        ]
    });
}
// function getSensorIcon(
//   sensor: Sensor,
//   hasActiveAlert: boolean,
//   zoom: number,
//   droneOnSensor: boolean,
//   isFocused: boolean,
// ): DivIcon {
//   const leaflet = require("leaflet");
//   const size = calculateMarkerSize(zoom);
//   const iconPath = getSensorIconPath(sensor.sensorType);
//   const baseColor = getSensorBaseColor(sensor.sensorType);
//   const color = hasActiveAlert ? "#b91c1c" : baseColor;
//   const alertRing = hasActiveAlert
//     ? `box-shadow: 0 0 0 4px rgba(220,38,38,0.8);`
//     : "";
//   const focusRing = isFocused
//     ? `box-shadow: 0 0 0 6px rgba(59,130,246,0.9);`
//     : "";
//   const dronePulse = droneOnSensor ? `animation: pulse 2s infinite;` : "";
//   const html = `
//     <style>
//       @keyframes pulse {
//         0% { transform: scale(1); }
//         50% { transform: scale(1.15); }
//         100% { transform: scale(1); }
//       }
//     </style>
//     <div style="
//       width:${size}px;
//       height:${size}px;
//       border-radius:9999px;
//       background:${color};
//       border:1px solid #000000;      /* ✅ BLACK BORDER */
//       box-sizing:border-box;         /* ✅ prevents shrinking */
//       display:flex;
//       align-items:center;
//       justify-content:center;
//       ${alertRing}
//       ${focusRing}
//       ${dronePulse}
//     ">
//       <img
//         src="${iconPath}"
//         style="
//           width:100%;
//           height:100%;
//           object-fit:contain;
//         "
//       />
//     </div>
//   `;
//   return leaflet.divIcon({
//     html,
//     className: "",
//     iconSize: [size, size],
//     iconAnchor: [size / 2, size / 2],
//   });
// }
function getSmartMeterIcon(smartMeter, zoom) {
    const leaflet = __turbopack_context__.r("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
    const size = calculateMarkerSize(zoom);
    const isActive = smartMeter.NetworkStatus?.toLowerCase() === "active";
    let bgColor;
    let borderColor;
    let glowColor;
    // Monitoring disabled
    if (smartMeter.status === "Inactive") {
        bgColor = "#6b7280";
        borderColor = "#9ca3af";
        glowColor = "rgba(107,114,128,0.6)";
    } else if (smartMeter.NetworkStatus === "Active") {
        bgColor = "#2563eb";
        borderColor = "#93c5fd";
        glowColor = "rgba(37,99,235,0.8)";
    } else {
        bgColor = "#dc2626";
        borderColor = "#fca5a5";
        glowColor = "rgba(220,38,38,0.8)";
    }
    const html = `
    <style>
      @keyframes smartmeter-pulse {
        0% { box-shadow: 0 0 0 0 ${glowColor}; }
        70% { box-shadow: 0 0 0 10px rgba(0,0,0,0); }
        100% { box-shadow: 0 0 0 0 rgba(0,0,0,0); }
      }
    </style>

    <div
      style="
        width:${size}px;
        height:${size}px;
        border-radius:9999px;
        background:${bgColor};
        border:2px solid ${borderColor};
        display:flex;
        align-items:center;
        justify-content:center;
        color:white;
        font-size:${Math.round(size * 0.5)}px;
        animation:smartmeter-pulse 2s infinite;
      "
    >
      ⚡
    </div>
  `;
    return leaflet.divIcon({
        html,
        className: "",
        iconSize: [
            size,
            size
        ],
        iconAnchor: [
            size / 2,
            size / 2
        ]
    });
}
function MapRenderer({ mode, mapConfig, sensors, smartMeters, onSmartMeterClick, focusedSmartMeterId, drones, alertBySensorDbId, dronePositions, droneStatus, currentZoom, socketConnected, markerUpdateKey, onZoomChange, onSensorClick, onDroneMarkerClick, droneTelemetryData, focusedSensorId, battleMode, selectedBattleDroneId, selectedBattleSensorId, selectedBattleDrone }) {
    _s();
    const currentDronePositions = dronePositions;
    const currentDroneTelemetry = droneTelemetryData;
    const currentDroneStatus = droneStatus;
    const leafletMapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const center = [
        (mapConfig.north + mapConfig.south) / 2,
        (mapConfig.east + mapConfig.west) / 2
    ];
    const sensorMarkerRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    // Memoize icon generation to prevent unnecessary HTML string regeneration
    const droneIconCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const sensorIconCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapRenderer.useEffect": ()=>{
            droneIconCache.current.clear();
        }
    }["MapRenderer.useEffect"], [
        Object.values(droneStatus).map({
            "MapRenderer.useEffect": (d)=>`${d.isLive}-${d.isStale}-${d.hasAlert}`
        }["MapRenderer.useEffect"]).join("|"),
        Object.values(droneTelemetryData).map({
            "MapRenderer.useEffect": (t)=>t?.status
        }["MapRenderer.useEffect"]).join("|")
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapRenderer.useEffect": ()=>{
            // Close all tooltips first
            Object.values(sensorMarkerRefs.current).forEach({
                "MapRenderer.useEffect": (m)=>m.closeTooltip()
            }["MapRenderer.useEffect"]);
            if (!focusedSensorId) return;
            const marker = sensorMarkerRefs.current[focusedSensorId];
            if (!marker) return;
            marker.openTooltip();
        }
    }["MapRenderer.useEffect"], [
        focusedSensorId
    ]);
    const getMemoizedDroneIcon = (isOnline, isStale, hasAlert, status, selected = false, staticIcon = false)=>{
        const key = `${currentZoom}-${isOnline}-${isStale}-${hasAlert}-${status}-${selected}-${staticIcon}`;
        if (!droneIconCache.current.has(key)) {
            droneIconCache.current.set(key, getDroneIcon(currentZoom, isOnline, isStale, hasAlert, status, selected, staticIcon));
        }
        return droneIconCache.current.get(key);
    };
    const getMemoizedSensorIcon = (sensor, hasActiveAlert, droneOnSensor, isFocused)=>{
        const key = `${sensor.id}-${sensor.activeShuruMode}-${sensor.status}-${hasActiveAlert}-${currentZoom}-${droneOnSensor}-${isFocused}-${mode}`;
        if (!sensorIconCache.current.has(key)) {
            sensorIconCache.current.set(key, getSensorIcon(sensor, hasActiveAlert, currentZoom, droneOnSensor, isFocused, mode));
        }
        return sensorIconCache.current.get(key);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapRenderer.useEffect": ()=>{
            const map = leafletMapRef.current;
            if (!map) return;
            const onZoomEnd = {
                "MapRenderer.useEffect.onZoomEnd": ()=>{
                    onZoomChange(map.getZoom());
                }
            }["MapRenderer.useEffect.onZoomEnd"];
            map.on("zoomend", onZoomEnd);
            return ({
                "MapRenderer.useEffect": ()=>{
                    map.off("zoomend", onZoomEnd);
                }
            })["MapRenderer.useEffect"];
        }
    }["MapRenderer.useEffect"], [
        onZoomChange
    ]);
    const visibleSensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapRenderer.useMemo[visibleSensors]": ()=>{
            return sensors.filter({
                "MapRenderer.useMemo[visibleSensors]": (sensor)=>{
                    // ❌ sensor inactive
                    if (mode === "operations") {
                        if (sensor.status !== "Active") return false;
                        // ❌ area inactive
                        if (sensor.area?.status !== "Active") return false;
                    }
                    return true;
                }
            }["MapRenderer.useMemo[visibleSensors]"]);
        }
    }["MapRenderer.useMemo[visibleSensors]"], [
        sensors,
        mode
    ]);
    const visibleDrones = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapRenderer.useMemo[visibleDrones]": ()=>{
            if (mode === "sensor-health") {
                return [];
            }
            // Battle planner uses mock drones
            if (battleMode) {
                return drones;
            }
            return drones.filter({
                "MapRenderer.useMemo[visibleDrones]": (drone)=>{
                    if (drone.area?.status !== "Active") return false;
                    return true;
                }
            }["MapRenderer.useMemo[visibleDrones]"]);
        }
    }["MapRenderer.useMemo[visibleDrones]"], [
        drones,
        mode,
        battleMode
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-full w-full",
        children: [
            mode === "sensor-health" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " absolute bottom-4 right-4 z-[1000] bg-black/70 backdrop-blur-md border border-white/10 rounded-lg p-4 space-y-2 text-white text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-bold",
                        children: "Sensor Health"
                    }, void 0, false, {
                        fileName: "[project]/components/map-renderer.tsx",
                        lineNumber: 1004,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "  w-4  h-4 rounded-full bg-blue-600 "
                            }, void 0, false, {
                                fileName: "[project]/components/map-renderer.tsx",
                                lineNumber: 1007,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Sensor available in network"
                            }, void 0, false, {
                                fileName: "[project]/components/map-renderer.tsx",
                                lineNumber: 1009,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/map-renderer.tsx",
                        lineNumber: 1006,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "      w-4 h-4 rounded-full bg-red-600 "
                            }, void 0, false, {
                                fileName: "[project]/components/map-renderer.tsx",
                                lineNumber: 1013,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Sensor unavailable / cannot ping"
                            }, void 0, false, {
                                fileName: "[project]/components/map-renderer.tsx",
                                lineNumber: 1015,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/map-renderer.tsx",
                        lineNumber: 1012,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "  w-4   h-4   rounded-full bg-gray-500 "
                            }, void 0, false, {
                                fileName: "[project]/components/map-renderer.tsx",
                                lineNumber: 1019,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Monitoring disabled"
                            }, void 0, false, {
                                fileName: "[project]/components/map-renderer.tsx",
                                lineNumber: 1021,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/map-renderer.tsx",
                        lineNumber: 1018,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/map-renderer.tsx",
                lineNumber: 988,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapContainer, {
                preferCanvas: true,
                center: center,
                attributionControl: false,
                zoom: mapConfig.minZoom,
                minZoom: mapConfig.minZoom,
                maxZoom: 40,
                zoomSnap: 0.1,
                zoomDelta: 0.5,
                maxBounds: [
                    [
                        mapConfig.south,
                        mapConfig.west
                    ],
                    [
                        mapConfig.north,
                        mapConfig.east
                    ]
                ],
                maxBoundsViscosity: 1.0,
                className: "h-full w-full bg-black",
                zoomControl: true,
                doubleClickZoom: false,
                whenCreated: (mapInstance)=>{
                    leafletMapRef.current = mapInstance;
                    onZoomChange(mapInstance.getZoom()); // 🔑 initialize state once
                    mapInstance.zoomControl.setPosition("bottomright");
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TileLayer, {
                        url: `${API_BASE_URL}/maps/${mapConfig.id}/{z}/{x}/{y}.jpg`,
                        minZoom: mapConfig.minZoom,
                        maxNativeZoom: mapConfig.maxZoom,
                        maxZoom: 40,
                        // maxZoom={Math.min(mapConfig.maxZoom, 19)}
                        noWrap: true,
                        bounds: [
                            [
                                mapConfig.south,
                                mapConfig.west
                            ],
                            [
                                mapConfig.north,
                                mapConfig.east
                            ]
                        ],
                        attribution: ""
                    }, void 0, false, {
                        fileName: "[project]/components/map-renderer.tsx",
                        lineNumber: 1049,
                        columnNumber: 9
                    }, this),
                    visibleSensors.map((sensor)=>{
                        const alert = alertBySensorDbId[sensor.id];
                        const hasActiveAlert = !!alert && alert.status === "ACTIVE";
                        const fadeSensor = battleMode && selectedBattleSensorId && sensor.id !== selectedBattleSensorId;
                        // const droneOnSensor =
                        //   getDroneOnSensor(sensor, dronePositions, droneTelemetryData) !==
                        //   null;
                        const droneOnSensor = mode === "operations" ? getDroneOnSensor(sensor, dronePositions, droneTelemetryData) !== null : false;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Marker, {
                            opacity: fadeSensor ? 0.25 : 1,
                            position: [
                                sensor.latitude,
                                sensor.longitude
                            ],
                            icon: getMemoizedSensorIcon(sensor, hasActiveAlert, droneOnSensor, sensor.id === focusedSensorId || battleMode && sensor.id === selectedBattleSensorId),
                            ref: (ref)=>{
                                if (ref) {
                                    sensorMarkerRefs.current[sensor.id] = ref;
                                }
                            },
                            eventHandlers: {
                                click: ()=>onSensorClick(sensor)
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tooltip, {
                                direction: "top",
                                offset: [
                                    0,
                                    -10
                                ],
                                opacity: 0.95,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 min-w-[180px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-bold text-black",
                                            children: sensor.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-renderer.tsx",
                                            lineNumber: 1126,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-700",
                                            children: sensor.sensorType
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-renderer.tsx",
                                            lineNumber: 1128,
                                            columnNumber: 19
                                        }, this),
                                        mode === "sensor-health" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "System Status:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/map-renderer.tsx",
                                                            lineNumber: 1135,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: sensor.status === "Active" ? "text-blue-600 font-semibold" : "text-gray-500 font-semibold",
                                                            children: sensor.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/map-renderer.tsx",
                                                            lineNumber: 1137,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/map-renderer.tsx",
                                                    lineNumber: 1134,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Network Status:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/map-renderer.tsx",
                                                            lineNumber: 1149,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: sensor.activeShuruMode === "Active" ? "text-blue-600 font-semibold" : "text-red-600 font-semibold",
                                                            children: sensor.activeShuruMode
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/map-renderer.tsx",
                                                            lineNumber: 1151,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/map-renderer.tsx",
                                                    lineNumber: 1148,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px]",
                                                    children: [
                                                        "Lat:",
                                                        sensor.latitude.toFixed(5)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/map-renderer.tsx",
                                                    lineNumber: 1164,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px]",
                                                    children: [
                                                        "Lon:",
                                                        sensor.longitude.toFixed(5)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/map-renderer.tsx",
                                                    lineNumber: 1169,
                                                    columnNumber: 23
                                                }, this),
                                                hasActiveAlert && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: " text-red-500 font-semibold ",
                                                    children: "🚨 ACTIVE ALERT"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/map-renderer.tsx",
                                                    lineNumber: 1175,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-renderer.tsx",
                                    lineNumber: 1125,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/map-renderer.tsx",
                                lineNumber: 1124,
                                columnNumber: 15
                            }, this)
                        }, sensor.id, false, {
                            fileName: "[project]/components/map-renderer.tsx",
                            lineNumber: 1083,
                            columnNumber: 13
                        }, this);
                    }),
                    smartMeters.map((smartMeter)=>{
                        if (smartMeter.latitude == null || smartMeter.longitude == null) {
                            return null;
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Marker, {
                            position: [
                                smartMeter.latitude,
                                smartMeter.longitude
                            ],
                            icon: getSmartMeterIcon(smartMeter, currentZoom),
                            eventHandlers: {
                                click: ()=>onSmartMeterClick(smartMeter)
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tooltip, {
                                direction: "top",
                                offset: [
                                    0,
                                    -10
                                ],
                                opacity: 0.95,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 min-w-[180px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-bold text-black",
                                            children: smartMeter.smartMeterId
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-renderer.tsx",
                                            lineNumber: 1211,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px]",
                                            children: smartMeter.location
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-renderer.tsx",
                                            lineNumber: 1215,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "System Status:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/map-renderer.tsx",
                                                    lineNumber: 1218,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: smartMeter.status === "Active" ? "text-blue-600 font-semibold" : "text-gray-500 font-semibold",
                                                    children: smartMeter.status
                                                }, void 0, false, {
                                                    fileName: "[project]/components/map-renderer.tsx",
                                                    lineNumber: 1220,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/map-renderer.tsx",
                                            lineNumber: 1217,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Network Status:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/map-renderer.tsx",
                                                    lineNumber: 1232,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: smartMeter.NetworkStatus === "Active" ? "text-blue-600 font-semibold" : "text-red-600 font-semibold",
                                                    children: smartMeter.NetworkStatus
                                                }, void 0, false, {
                                                    fileName: "[project]/components/map-renderer.tsx",
                                                    lineNumber: 1234,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/map-renderer.tsx",
                                            lineNumber: 1231,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] text-blue-600 font-medium",
                                            children: "Click to open Smart Meter"
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-renderer.tsx",
                                            lineNumber: 1245,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-renderer.tsx",
                                    lineNumber: 1210,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/map-renderer.tsx",
                                lineNumber: 1209,
                                columnNumber: 15
                            }, this)
                        }, `smartmeter-${smartMeter.id}`, false, {
                            fileName: "[project]/components/map-renderer.tsx",
                            lineNumber: 1201,
                            columnNumber: 13
                        }, this);
                    }),
                    visibleDrones.map((drone)=>{
                        const pos = currentDronePositions[drone.id];
                        const status = currentDroneStatus[drone.id];
                        const telemetry = currentDroneTelemetry[drone.id]; // Get telemetry for status
                        if (!pos) return null;
                        const markerPos = [
                            pos.lat,
                            pos.lng
                        ];
                        const isOnline = status?.isLive === true;
                        const isStale = status?.isStale === true;
                        const hasAlert = status?.hasAlert === true;
                        const fadeDrone = battleMode && selectedBattleDroneId && drone.id !== selectedBattleDroneId;
                        // Get status from telemetry (renamed to avoid conflict)
                        const telemetryStatus = status?.isLive === false ? null : telemetry?.status ?? null;
                        // Status display based on telemetry.status
                        let statusDisplay = "Offline";
                        let statusColor = "text-gray-500";
                        let statusEmoji = "⚪";
                        let statusBadge = "";
                        if (isOnline) {
                            switch(telemetryStatus){
                                case "on_air":
                                    statusDisplay = "In Flight";
                                    statusColor = "text-blue-400";
                                    statusEmoji = "✈️";
                                    statusBadge = "🔵 Flying";
                                    break;
                                case "ground":
                                    statusDisplay = "On Ground";
                                    statusColor = "text-gray-400";
                                    statusEmoji = "🛬";
                                    statusBadge = "⚪ Landed";
                                    break;
                                case "reached":
                                    statusDisplay = "Target Reached";
                                    statusColor = "text-green-400";
                                    statusEmoji = "🎯";
                                    statusBadge = "🟢 Reached";
                                    break;
                                default:
                                    statusDisplay = "Online";
                                    statusColor = "text-green-600";
                                    statusEmoji = "🟢";
                                    statusBadge = "🟢 Active";
                            }
                        }
                        let tooltipStatusText = "● Ready";
                        let tooltipStatusColor = "text-gray-400";
                        if (status?.recovered) {
                            tooltipStatusText = "⚠ Telemetry Recovering";
                            tooltipStatusColor = "text-amber-500";
                        } else if (status?.hasEverReceivedTelemetry && !isOnline) {
                            tooltipStatusText = "○ Link Unavailable";
                            tooltipStatusColor = "text-gray-500";
                        } else if (hasAlert) {
                            tooltipStatusText = "🚨 Telemetry Lost";
                            tooltipStatusColor = "text-red-600";
                        } else if (isOnline) {
                            switch(telemetryStatus){
                                case "on_air":
                                    tooltipStatusText = "✈ In Flight";
                                    tooltipStatusColor = "text-blue-500";
                                    break;
                                case "reached":
                                    tooltipStatusText = "🎯 At Target";
                                    tooltipStatusColor = "text-green-500";
                                    break;
                                case "ground":
                                    tooltipStatusText = "🛬 Idle";
                                    tooltipStatusColor = "text-gray-400";
                                    break;
                                default:
                                    tooltipStatusText = "● Ready";
                                    tooltipStatusColor = "text-gray-400";
                            }
                        }
                        const isSelectedBattleDrone = battleMode && drone.id === selectedBattleDroneId;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Marker, {
                            opacity: fadeDrone ? 0.25 : 1,
                            position: markerPos,
                            icon: getMemoizedDroneIcon(isOnline, isStale, hasAlert, telemetryStatus, isSelectedBattleDrone, true),
                            zIndexOffset: 1000,
                            eventHandlers: {
                                click: (e)=>{
                                    e.originalEvent?.stopPropagation();
                                    onDroneMarkerClick?.(drone.id, e.originalEvent);
                                },
                                dblclick: (e)=>{
                                    e.originalEvent?.stopPropagation();
                                }
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tooltip, {
                                direction: "top",
                                offset: [
                                    0,
                                    -10
                                ],
                                opacity: 0.9,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-black",
                                            children: [
                                                "✈ ",
                                                drone.droneId
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/map-renderer.tsx",
                                            lineNumber: 1369,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] text-black-300",
                                            children: drone.droneOSName
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-renderer.tsx",
                                            lineNumber: 1372,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-400",
                                            children: drone.droneType
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-renderer.tsx",
                                            lineNumber: 1375,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-[10px] font-bold ${tooltipStatusColor}`,
                                            children: tooltipStatusText
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-renderer.tsx",
                                            lineNumber: 1377,
                                            columnNumber: 19
                                        }, this),
                                        !isOnline && status?.connectionLossTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[9px] text-gray-500",
                                            children: [
                                                "Lost",
                                                " ",
                                                Math.floor((Date.now() - status.connectionLossTime) / 1000),
                                                "s ago"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/map-renderer.tsx",
                                            lineNumber: 1384,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] text-black-300",
                                            children: [
                                                "Lat: ",
                                                pos.lat.toFixed(5),
                                                ", Lon: ",
                                                pos.lng.toFixed(5)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/map-renderer.tsx",
                                            lineNumber: 1393,
                                            columnNumber: 19
                                        }, this),
                                        pos.alt != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] text-black-300",
                                            children: [
                                                "Alt: ",
                                                pos.alt,
                                                " m"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/map-renderer.tsx",
                                            lineNumber: 1397,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-renderer.tsx",
                                    lineNumber: 1368,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/map-renderer.tsx",
                                lineNumber: 1367,
                                columnNumber: 15
                            }, this)
                        }, `drone-${drone.id}`, false, {
                            fileName: "[project]/components/map-renderer.tsx",
                            lineNumber: 1344,
                            columnNumber: 13
                        }, this);
                    }),
                    visibleDrones.map((drone)=>{
                        const telemetry = currentDroneTelemetry[drone.id];
                        const pos = currentDronePositions[drone.id];
                        // Must have everything
                        if (!telemetry || !pos || drone.latitude == null || drone.longitude == null) {
                            return null;
                        }
                        // 🧠 Distance from base
                        const distanceFromBase = haversineMeters(pos.lat, pos.lng, drone.latitude, drone.longitude);
                        // ✅ Hide base marker once drone is back home
                        if (distanceFromBase <= REACH_RADIUS_METERS) {
                            return null;
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Marker, {
                            position: [
                                drone.latitude,
                                drone.longitude
                            ],
                            icon: getMemoizedDroneIcon(true, false, false, "ground", true),
                            zIndexOffset: -1000,
                            interactive: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tooltip, {
                                direction: "top",
                                offset: [
                                    0,
                                    -10
                                ],
                                opacity: 0.9,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-black",
                                            children: "🏠 Base"
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-renderer.tsx",
                                            lineNumber: 1450,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] text-black-300",
                                            children: [
                                                "Drone: ",
                                                drone.droneId
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/map-renderer.tsx",
                                            lineNumber: 1451,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] text-black-300",
                                            children: [
                                                "Lat: ",
                                                drone.latitude.toFixed(5)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/map-renderer.tsx",
                                            lineNumber: 1454,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] text-black-300",
                                            children: [
                                                "Lon: ",
                                                drone.longitude.toFixed(5)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/map-renderer.tsx",
                                            lineNumber: 1457,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-renderer.tsx",
                                    lineNumber: 1449,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/map-renderer.tsx",
                                lineNumber: 1448,
                                columnNumber: 15
                            }, this)
                        }, `base-${drone.id}`, false, {
                            fileName: "[project]/components/map-renderer.tsx",
                            lineNumber: 1435,
                            columnNumber: 13
                        }, this);
                    }),
                    visibleDrones.map((drone)=>{
                        const telemetry = currentDroneTelemetry[drone.id];
                        const pos = currentDronePositions[drone.id];
                        if (!telemetry || !pos) return null;
                        // Only draw when drone is flying
                        const status = currentDroneStatus[drone.id];
                        if (!status?.isLive || status.isStale || telemetry.status === "ground" || telemetry.targetLat == null || telemetry.targetLng == null) {
                            return null;
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Polyline, {
                            positions: [
                                [
                                    telemetry.lat,
                                    telemetry.lng
                                ],
                                [
                                    telemetry.targetLat,
                                    telemetry.targetLng
                                ]
                            ],
                            pathOptions: {
                                color: "#f59e0b",
                                weight: 3,
                                dashArray: "6 8"
                            }
                        }, `telemetry-path-${drone.id}`, false, {
                            fileName: "[project]/components/map-renderer.tsx",
                            lineNumber: 1487,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/components/map-renderer.tsx",
                lineNumber: 1026,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/map-renderer.tsx",
        lineNumber: 970,
        columnNumber: 5
    }, this);
}
_s(MapRenderer, "jEiTM1/jrvbaziEKCiXiod8A+KY=");
_c7 = MapRenderer;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c8 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(MapRenderer);
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "MapContainer");
__turbopack_context__.k.register(_c1, "TileLayer");
__turbopack_context__.k.register(_c2, "Marker");
__turbopack_context__.k.register(_c3, "Tooltip");
__turbopack_context__.k.register(_c4, "Polyline");
__turbopack_context__.k.register(_c5, "Circle$dynamic");
__turbopack_context__.k.register(_c6, "Circle");
__turbopack_context__.k.register(_c7, "MapRenderer");
__turbopack_context__.k.register(_c8, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/inference.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/api/inference.ts
__turbopack_context__.s([
    "startInference",
    ()=>startInference,
    "stopInference",
    ()=>stopInference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:5001") || "http://localhost:5000";
/**
 * shared helper (reuse same pattern)
 */ async function fetchJsonWithTimeout(input, init, timeoutMs = 8000) {
    const controller = new AbortController();
    const id = setTimeout(()=>controller.abort(), timeoutMs);
    try {
        const res = await fetch(input, {
            ...init || {},
            signal: controller.signal
        });
        const text = await res.text().catch(()=>"");
        let body = null;
        try {
            if (text) body = JSON.parse(text);
        } catch  {
            body = text;
        }
        return {
            ok: res.ok,
            status: res.status,
            body
        };
    } finally{
        clearTimeout(id);
    }
}
async function startInference(params, timeoutMs = 10000) {
    const { sensorDbId, rtspUrl } = params;
    if (!sensorDbId && !rtspUrl) {
        return {
            success: false,
            error: "sensorDbId or rtspUrl is required"
        };
    }
    try {
        const url = `${API_BASE_URL}/api/inference/start`;
        const payload = {
            ...params
        };
        const { ok, status, body } = await fetchJsonWithTimeout(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
            credentials: "include"
        }, timeoutMs);
        if (!ok) {
            const errMsg = body && (body.error || (typeof body === "string" ? body : undefined)) || `Server returned ${status}`;
            return {
                success: false,
                error: errMsg,
                message: body?.message
            };
        }
        let result = {};
        if (body) {
            result = {
                pid: typeof body.pid === "number" ? body.pid : undefined,
                key: typeof body.key === "string" ? body.key : body.sensorDbId || undefined
            };
        }
        return {
            success: true,
            data: result,
            message: body?.message || "Inference started"
        };
    } catch (err) {
        const errMsg = err instanceof Error ? err.name === "AbortError" ? "Request timed out" : err.message : "Network error";
        console.error("startInference error:", err);
        return {
            success: false,
            error: errMsg
        };
    }
}
async function stopInference(params, timeoutMs = 8000) {
    if (!params.sensorDbId && !params.rtspUrl) {
        return {
            success: false,
            error: "Provide sensorDbId or rtspUrl"
        };
    }
    try {
        const url = `${API_BASE_URL}/api/inference/stop`;
        const { ok, status, body } = await fetchJsonWithTimeout(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params),
            credentials: "include"
        }, timeoutMs);
        if (!ok) {
            const errMsg = body && (body.error || (typeof body === "string" ? body : undefined)) || `Server returned ${status}`;
            return {
                success: false,
                error: errMsg,
                message: body?.message
            };
        }
        return {
            success: true,
            message: body?.message || "Inference stopped"
        };
    } catch (err) {
        const errMsg = err instanceof Error ? err.name === "AbortError" ? "Request timed out" : err.message : "Network error";
        console.error("stopInference error:", err);
        return {
            success: false,
            error: errMsg
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/telemetry-window.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TelemetryWindow",
    ()=>TelemetryWindow,
    "getDroneStatusInfo",
    ()=>getDroneStatusInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$droneCommand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/droneCommand.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$inference$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/inference.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const DROP_PAYLOAD_PIN = "2580";
const DROP_PAYLOAD_COOLDOWN_MS = 10_000; // 10 sec
const RECALL_COOLDOWN_MS = 10_000; // 10 sec
function getDroneStatusInfo(status) {
    switch(status){
        case "on_air":
            return {
                label: "In Flight",
                emoji: "✈️",
                color: "text-blue-400",
                bgColor: "bg-blue-500/20",
                borderColor: "border-blue-500"
            };
        case "ground":
            return {
                label: "On Ground",
                emoji: "🛬",
                color: "text-gray-400",
                bgColor: "bg-gray-500/20",
                borderColor: "border-gray-500"
            };
        case "reached":
            return {
                label: "Target Reached",
                emoji: "🎯",
                color: "text-green-400",
                bgColor: "bg-green-500/20",
                borderColor: "border-green-500"
            };
        default:
            return {
                label: "Unknown",
                emoji: "❓",
                color: "text-yellow-400",
                bgColor: "bg-yellow-500/20",
                borderColor: "border-yellow-500"
            };
    }
}
function TelemetryWindow({ telemetry, isOpen, onClose, onDropPayload, onRecall, onToggleController, isControllerOpen }) {
    _s();
    const [recallConfirmOpen, setRecallConfirmOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recallLoading, setRecallLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recallSuccess, setRecallSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recallError, setRecallError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dropSuccess, setDropSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dropConfirmOpen, setDropConfirmOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dropPin, setDropPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [dropPinError, setDropPinError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dropLoading, setDropLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMinimized, setIsMinimized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastDropAt, setLastDropAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lastRecallAt, setLastRecallAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Date.now());
    const [showVideo, setShowVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const recallAutoCloseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropCooldownRemaining = lastDropAt === null ? 0 : Math.max(0, DROP_PAYLOAD_COOLDOWN_MS - (now - lastDropAt));
    const recallCooldownRemaining = lastRecallAt === null ? 0 : Math.max(0, RECALL_COOLDOWN_MS - (now - lastRecallAt));
    const dropDisabled = dropCooldownRemaining > 0;
    const recallDisabled = recallCooldownRemaining > 0;
    const canDrop = telemetry?.status !== "ground" && !dropDisabled;
    const [inferenceRunning, setInferenceRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TelemetryWindow.useEffect": ()=>{
            const i = setInterval({
                "TelemetryWindow.useEffect.i": ()=>setNow(Date.now())
            }["TelemetryWindow.useEffect.i"], 1000);
            return ({
                "TelemetryWindow.useEffect": ()=>clearInterval(i)
            })["TelemetryWindow.useEffect"];
        }
    }["TelemetryWindow.useEffect"], []);
    if (!isOpen) return null;
    const formatTime = (ts)=>{
        return new Date(ts).toLocaleTimeString();
    };
    const closeRecallModal = ()=>{
        if (recallAutoCloseRef.current) {
            clearTimeout(recallAutoCloseRef.current);
            recallAutoCloseRef.current = null;
        }
        setRecallConfirmOpen(false);
        setRecallSuccess(false);
        setRecallError(null);
    };
    const getTelemetryColor = (value, thresholds)=>{
        if (value === null) return "text-gray-400";
        if (!thresholds) return "text-gray-300";
        if (value >= thresholds.good) return "text-green-400";
        if (value >= thresholds.warning) return "text-yellow-400";
        return "text-red-400";
    };
    const toNumber = (value)=>{
        if (value === null || value === undefined) return null;
        const num = typeof value === "string" ? Number.parseFloat(value) : value;
        return isNaN(num) ? null : num;
    };
    const handleDropPayload = async ()=>{
        if (!telemetry?.droneDbId || dropDisabled) return;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$droneCommand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dropPayload"])({
            droneDbId: telemetry.droneDbId
        });
        setLastDropAt(Date.now());
    };
    const handleRecallDrone = async ()=>{
        if (!telemetry?.droneDbId || recallDisabled) return;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$droneCommand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recallDrone"])({
            droneDbId: telemetry.droneDbId
        });
        setLastRecallAt(Date.now());
    };
    // const handleOpenVideoFeed = async () => {
    //   if (!telemetry?.videoLink) return;
    //   try {
    //     const res = await openRtsp({ rtspUrl: telemetry.videoLink });
    //     if (!res.success) {
    //       console.error("Failed to open RTSP:", res.error);
    //     }
    //   } catch (err) {
    //     console.error("Video open error:", err);
    //   }
    // };
    const handleOpenVideoFeed = ()=>{
        setShowVideo(true);
    };
    const handleOpenVideoFeedInference = async ()=>{
        if (!telemetry?.videoLink) return;
        try {
            if (!inferenceRunning) {
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$inference$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startInference"])({
                    rtspUrl: telemetry.videoLink,
                    confidence: 0.5,
                    iou: 0.45,
                    showLabels: true,
                    showConfidence: true
                });
                if (!res.success) {
                    console.error("Failed to start inference:", res.error);
                    return;
                }
                setInferenceRunning(true);
                console.log("Inference started:", res.data);
            } else {
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$inference$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopInference"])({
                    rtspUrl: telemetry.videoLink
                });
                if (!res.success) {
                    console.error("Failed to stop inference:", res.error);
                    return;
                }
                setInferenceRunning(false);
                console.log("Inference stopped");
            }
        } catch (err) {
            console.error("Inference error:", err);
        }
    };
    const send = async (command)=>{
        if (!telemetry?.droneDbId) return;
        // if (telemetry?.status === "ground") {
        //   return; // don’t allow movement
        // }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$droneCommand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["manualControl"])({
            droneDbId: telemetry.droneDbId,
            command
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-2 right-2 sm:bottom-4 sm:right-4 w-[calc(100vw-1rem)] sm:w-[380px] md:w-[420px] lg:w-[26rem] rounded-lg border border-[#333] bg-[#111] shadow-2xl z-[900]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-b border-[#333] px-3 sm:px-4 py-2 sm:py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 sm:gap-3 min-w-0",
                        children: [
                            telemetry?.status ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `h-2 w-2 rounded-full animate-pulse flex-shrink-0 ${telemetry.status === "on_air" ? "bg-blue-500" : telemetry.status === "ground" ? "bg-gray-500" : telemetry.status === "reached" ? "bg-green-500" : "bg-yellow-500"}`
                            }, void 0, false, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2 w-2 rounded-full bg-gray-500 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs sm:text-sm font-semibold text-white truncate",
                                        children: telemetry?.droneId ?? `Drone (Offline)`
                                    }, void 0, false, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 273,
                                        columnNumber: 13
                                    }, this),
                                    telemetry?.status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-[9px] sm:text-[10px] font-medium ${getDroneStatusInfo(telemetry.status).color}`,
                                        children: [
                                            getDroneStatusInfo(telemetry.status).emoji,
                                            " ",
                                            getDroneStatusInfo(telemetry.status).label
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 277,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/telemetry-window.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMinimized(!isMinimized),
                                className: "p-1 hover:bg-[#222] rounded transition-colors",
                                "aria-label": isMinimized ? "Expand" : "Minimize",
                                children: isMinimized ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                    className: "h-3 w-3 sm:h-4 sm:w-4 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 295,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: "h-3 w-3 sm:h-4 sm:w-4 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 297,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-1 hover:bg-red-900/30 rounded transition-colors",
                                "aria-label": "Close",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-3 w-3 sm:h-4 sm:w-4 text-red-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 305,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/telemetry-window.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/telemetry-window.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            !isMinimized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 sm:px-5 py-3 sm:py-4 space-y-2 sm:space-y-3 max-h-[calc(100vh-280px)] sm:max-h-none overflow-y-auto sm:overflow-visible",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md bg-[#1a1a1a] p-2.5 sm:p-3 space-y-1.5 sm:space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wide",
                                children: "Location"
                            }, void 0, false, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-1.5 sm:gap-2 text-[10px] sm:text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400 block",
                                                children: "Latitude:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/telemetry-window.tsx",
                                                lineNumber: 320,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-200 font-mono text-[9px] sm:text-[10px] truncate",
                                                children: toNumber(telemetry?.lat)?.toFixed(6) ?? "N/A"
                                            }, void 0, false, {
                                                fileName: "[project]/components/telemetry-window.tsx",
                                                lineNumber: 321,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 319,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400 block",
                                                children: "Longitude:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/telemetry-window.tsx",
                                                lineNumber: 326,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-200 font-mono text-[9px] sm:text-[10px] truncate",
                                                children: toNumber(telemetry?.lng)?.toFixed(6) ?? "N/A"
                                            }, void 0, false, {
                                                fileName: "[project]/components/telemetry-window.tsx",
                                                lineNumber: 327,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-1.5 sm:gap-2 text-[10px] sm:text-xs mt-2",
                                children: [
                                    telemetry?.alt !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400 text-[10px] sm:text-xs",
                                                children: "Altitude:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/telemetry-window.tsx",
                                                lineNumber: 335,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-blue-400 font-semibold text-[10px] sm:text-xs",
                                                children: [
                                                    toNumber(telemetry?.alt) ?? "N/A",
                                                    " m"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/telemetry-window.tsx",
                                                lineNumber: 338,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 334,
                                        columnNumber: 17
                                    }, this),
                                    telemetry?.targetDistance !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400",
                                                children: "To Target:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/telemetry-window.tsx",
                                                lineNumber: 345,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-200 font-semibold text-[9px] sm:text-[10px]",
                                                children: [
                                                    toNumber(telemetry?.targetDistance)?.toFixed(1) ?? "N/A",
                                                    " m"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/telemetry-window.tsx",
                                                lineNumber: 346,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 344,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 332,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/telemetry-window.tsx",
                        lineNumber: 314,
                        columnNumber: 11
                    }, this),
                    telemetry?.status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `rounded-md p-2.5 sm:p-3 space-y-1.5 sm:space-y-2 border ${getDroneStatusInfo(telemetry.status).borderColor} ${getDroneStatusInfo(telemetry.status).bgColor}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wide",
                                children: "Drone Status"
                            }, void 0, false, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 361,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-2 sm:gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg sm:text-2xl flex-shrink-0",
                                        children: getDroneStatusInfo(telemetry.status).emoji
                                    }, void 0, false, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 365,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `text-xs sm:text-sm font-bold ${getDroneStatusInfo(telemetry.status).color}`,
                                                children: getDroneStatusInfo(telemetry.status).label
                                            }, void 0, false, {
                                                fileName: "[project]/components/telemetry-window.tsx",
                                                lineNumber: 369,
                                                columnNumber: 19
                                            }, this),
                                            telemetry.status === "reached" && telemetry.targetDistance !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[8px] sm:text-[10px] text-gray-400",
                                                children: [
                                                    "Distance: ",
                                                    telemetry.targetDistance.toFixed(1),
                                                    "m"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/telemetry-window.tsx",
                                                lineNumber: 378,
                                                columnNumber: 23
                                            }, this),
                                            telemetry.status === "on_air" && telemetry.alt !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[8px] sm:text-[10px] text-gray-400",
                                                children: [
                                                    "Alt: ",
                                                    telemetry.alt,
                                                    "m"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/telemetry-window.tsx",
                                                lineNumber: 383,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 368,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 364,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/telemetry-window.tsx",
                        lineNumber: 356,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md bg-[#1a1a1a] p-2.5 sm:p-3 space-y-1.5 sm:space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wide",
                                children: "Status"
                            }, void 0, false, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 394,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-1.5 sm:gap-2 text-[10px] sm:text-xs",
                                children: [
                                    telemetry?.battery !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400",
                                                children: "Battery:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/telemetry-window.tsx",
                                                lineNumber: 400,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `font-semibold text-[9px] sm:text-[10px] ${getTelemetryColor(toNumber(telemetry?.battery), {
                                                    good: 12,
                                                    warning: 10
                                                })}`,
                                                children: [
                                                    toNumber(telemetry?.battery)?.toFixed(2) ?? "N/A",
                                                    " V"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/telemetry-window.tsx",
                                                lineNumber: 401,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 399,
                                        columnNumber: 17
                                    }, this),
                                    telemetry?.speed !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400",
                                                children: "Speed:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/telemetry-window.tsx",
                                                lineNumber: 416,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-200 font-semibold text-[9px] sm:text-[10px]",
                                                children: [
                                                    toNumber(telemetry?.speed)?.toFixed(1) ?? "N/A",
                                                    " m/s"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/telemetry-window.tsx",
                                                lineNumber: 417,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 415,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 397,
                                columnNumber: 13
                            }, this),
                            telemetry?.mode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400 text-[10px] sm:text-xs",
                                        children: "Mode:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 425,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-purple-400 font-semibold text-[10px] sm:text-xs truncate",
                                        children: telemetry?.mode
                                    }, void 0, false, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 428,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 424,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/telemetry-window.tsx",
                        lineNumber: 393,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md bg-[#1a1a1a] p-2.5 sm:p-3 space-y-1.5 sm:space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wide",
                                children: "GPS"
                            }, void 0, false, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 437,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-1.5 sm:gap-2 text-[10px] sm:text-xs",
                                children: [
                                    telemetry?.gpsFix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400",
                                                children: "Fix:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/telemetry-window.tsx",
                                                lineNumber: 443,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-green-400 font-semibold text-[9px] sm:text-[10px]",
                                                children: telemetry?.gpsFix
                                            }, void 0, false, {
                                                fileName: "[project]/components/telemetry-window.tsx",
                                                lineNumber: 444,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 442,
                                        columnNumber: 17
                                    }, this),
                                    telemetry?.satellites !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400",
                                                children: "Satellites:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/telemetry-window.tsx",
                                                lineNumber: 451,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-200 font-semibold text-[9px] sm:text-[10px]",
                                                children: toNumber(telemetry?.satellites) ?? "N/A"
                                            }, void 0, false, {
                                                fileName: "[project]/components/telemetry-window.tsx",
                                                lineNumber: 452,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 450,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 440,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/telemetry-window.tsx",
                        lineNumber: 436,
                        columnNumber: 11
                    }, this),
                    (telemetry?.windSpeed !== null || telemetry?.targetDistance !== null) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md bg-[#1a1a1a] p-2.5 sm:p-3 space-y-1.5 sm:space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wide",
                                children: "Environment"
                            }, void 0, false, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 464,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-1.5 sm:gap-2 text-[10px] sm:text-xs",
                                children: telemetry?.windSpeed !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400",
                                            children: "Wind:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/telemetry-window.tsx",
                                            lineNumber: 470,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-200 font-semibold text-[9px] sm:text-[10px]",
                                            children: [
                                                toNumber(telemetry?.windSpeed)?.toFixed(1) ?? "N/A",
                                                " m/s"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/telemetry-window.tsx",
                                            lineNumber: 471,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 469,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 467,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/telemetry-window.tsx",
                        lineNumber: 463,
                        columnNumber: 13
                    }, this),
                    telemetry?.videoLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-md bg-[#1a1a1a] p-2.5 sm:p-3 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wide",
                                        children: "Controls"
                                    }, void 0, false, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 484,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        variant: "outline",
                                        onClick: handleOpenVideoFeed,
                                        className: "w-full border-green-700 text-green-400 hover:bg-green-900/30 hover:cursor-pointer",
                                        children: "Open Live Video"
                                    }, void 0, false, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 488,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        variant: "outline",
                                        onClick: handleOpenVideoFeedInference,
                                        className: `w-full ${inferenceRunning ? "border-red-700 text-red-400 hover:bg-red-900/30" : "border-green-700 text-green-400 hover:bg-green-900/30"}`,
                                        children: inferenceRunning ? "Stop AI Stream" : "Start AI Stream"
                                    }, void 0, false, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 496,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        variant: "outline",
                                        onClick: onToggleController,
                                        className: "flex-1 w-full border-purple-700 text-purple-400 hover:bg-purple-900/30 hover:cursor-pointer",
                                        children: isControllerOpen ? "Close Controller" : "Open Controller"
                                    }, void 0, false, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 508,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 483,
                                columnNumber: 15
                            }, this),
                            showVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-md overflow-hidden border border-[#333]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    src: "/videos/343478.mp4",
                                    controls: true,
                                    autoPlay: true,
                                    className: "w-full"
                                }, void 0, false, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 519,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 518,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[8px] sm:text-[10px] text-gray-500 text-center pt-1",
                        children: [
                            "Last update: ",
                            formatTime(telemetry?.ts)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/telemetry-window.tsx",
                        lineNumber: 531,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/telemetry-window.tsx",
                lineNumber: 312,
                columnNumber: 9
            }, this),
            !isMinimized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#333] px-3 sm:px-4 py-2 sm:py-3 flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        size: "sm",
                        variant: "outline",
                        disabled: !telemetry?.droneDbId || dropDisabled,
                        className: "flex-1 border-amber-700 bg-transparent text-amber-400 hover:bg-amber-900/30 hover:text-amber-300 text-[11px] sm:text-xs py-1.5 sm:py-2 h-auto",
                        onClick: ()=>setDropConfirmOpen(true),
                        children: dropDisabled ? `Cooldown ${Math.ceil(dropCooldownRemaining / 1000)}s` : "Drop Payload (पेलोड गिराओ)"
                    }, void 0, false, {
                        fileName: "[project]/components/telemetry-window.tsx",
                        lineNumber: 540,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        size: "sm",
                        variant: "outline",
                        disabled: !telemetry?.droneDbId || recallDisabled,
                        className: "flex-1 border-blue-700 bg-transparent text-blue-400 hover:bg-blue-900/30 hover:text-blue-300 text-[11px] sm:text-xs py-1.5 sm:py-2 h-auto",
                        onClick: ()=>{
                            setRecallConfirmOpen(true);
                            setRecallError(null);
                        },
                        children: recallDisabled ? `Cooldown ${Math.ceil(recallCooldownRemaining / 1000)}s` : "Recall (वापस बुलाओ)"
                    }, void 0, false, {
                        fileName: "[project]/components/telemetry-window.tsx",
                        lineNumber: 552,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/telemetry-window.tsx",
                lineNumber: 539,
                columnNumber: 9
            }, this),
            recallConfirmOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[950] flex items-center justify-center bg-black/70",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-sm rounded-lg border border-[#333] bg-[#111] p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mb-2 text-sm font-semibold text-white",
                            children: recallSuccess ? "Recall Initiated" : "Confirm Recall"
                        }, void 0, false, {
                            fileName: "[project]/components/telemetry-window.tsx",
                            lineNumber: 571,
                            columnNumber: 13
                        }, this),
                        !recallSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-4 text-xs text-gray-400",
                                    children: [
                                        "The drone will immediately return to its home location.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/telemetry-window.tsx",
                                            lineNumber: 579,
                                            columnNumber: 19
                                        }, this),
                                        "Ensure airspace is clear."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 577,
                                    columnNumber: 17
                                }, this),
                                recallError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-2 text-xs text-red-400",
                                    children: recallError
                                }, void 0, false, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 584,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex justify-end gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "outline",
                                            disabled: recallLoading,
                                            onClick: closeRecallModal,
                                            className: "border-[#444] bg-transparent text-gray-300",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/components/telemetry-window.tsx",
                                            lineNumber: 588,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            disabled: !telemetry?.droneDbId || recallDisabled,
                                            className: "bg-blue-600 text-white hover:bg-blue-700",
                                            onClick: async ()=>{
                                                try {
                                                    setRecallLoading(true);
                                                    if (!telemetry?.droneDbId) {
                                                        throw new Error("Drone ID missing");
                                                    }
                                                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$droneCommand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recallDrone"])({
                                                        droneDbId: telemetry.droneDbId
                                                    });
                                                    setLastRecallAt(Date.now());
                                                    setRecallSuccess(true);
                                                    // auto close
                                                    recallAutoCloseRef.current = setTimeout(()=>{
                                                        closeRecallModal();
                                                    }, 2000);
                                                } catch (err) {
                                                    setRecallError(err instanceof Error ? err.message : "Recall command failed");
                                                } finally{
                                                    setRecallLoading(false);
                                                }
                                            },
                                            children: recallLoading ? "Recalling..." : "Confirm Recall"
                                        }, void 0, false, {
                                            fileName: "[project]/components/telemetry-window.tsx",
                                            lineNumber: 598,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 587,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-6 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-3xl mb-2",
                                    children: "🔄"
                                }, void 0, false, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 635,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold text-blue-400",
                                    children: "Recall command sent"
                                }, void 0, false, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 637,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-xs text-gray-400",
                                    children: [
                                        "Drone: ",
                                        telemetry?.droneId
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 641,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        variant: "outline",
                                        onClick: closeRecallModal,
                                        className: "border-[#444] bg-transparent text-gray-300",
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 647,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 646,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/telemetry-window.tsx",
                            lineNumber: 634,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/telemetry-window.tsx",
                    lineNumber: 570,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/telemetry-window.tsx",
                lineNumber: 569,
                columnNumber: 9
            }, this),
            dropConfirmOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[950] flex items-center justify-center bg-black/70",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-sm rounded-lg border border-[#333] bg-[#111] p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mb-2 text-sm font-semibold text-white",
                            children: dropSuccess ? "Payload Dropped" : "Confirm Payload Drop"
                        }, void 0, false, {
                            fileName: "[project]/components/telemetry-window.tsx",
                            lineNumber: 665,
                            columnNumber: 13
                        }, this),
                        !dropSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-4 text-xs text-gray-400",
                                    children: [
                                        "This is a",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-400 font-semibold",
                                            children: "critical action"
                                        }, void 0, false, {
                                            fileName: "[project]/components/telemetry-window.tsx",
                                            lineNumber: 673,
                                            columnNumber: 19
                                        }, this),
                                        ".",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/telemetry-window.tsx",
                                            lineNumber: 677,
                                            columnNumber: 19
                                        }, this),
                                        "Enter PIN to proceed."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 671,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    value: dropPin,
                                    onChange: (e)=>{
                                        setDropPin(e.target.value);
                                        setDropPinError(null);
                                    },
                                    placeholder: "Enter PIN",
                                    className: "mb-2 w-full rounded-md border border-[#333] bg-[#181818] px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                                }, void 0, false, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 681,
                                    columnNumber: 17
                                }, this),
                                dropPinError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-2 text-xs text-red-400",
                                    children: dropPinError
                                }, void 0, false, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 693,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-6 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-3xl mb-2",
                                    children: "✅"
                                }, void 0, false, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 698,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold text-green-400",
                                    children: "Payload successfully dropped"
                                }, void 0, false, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 699,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-xs text-gray-400",
                                    children: [
                                        "Drone: ",
                                        telemetry?.droneId
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 702,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/telemetry-window.tsx",
                            lineNumber: 697,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    variant: "outline",
                                    disabled: dropLoading,
                                    onClick: ()=>{
                                        setDropConfirmOpen(false);
                                        setDropPin("");
                                        setDropPinError(null);
                                    },
                                    className: "border-[#444] bg-transparent text-gray-300",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 709,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    disabled: !telemetry?.droneDbId || !canDrop,
                                    className: "bg-red-600 text-white hover:bg-red-700",
                                    onClick: async ()=>{
                                        if (dropPin !== DROP_PAYLOAD_PIN) {
                                            setDropPinError("Invalid PIN");
                                            return;
                                        }
                                        try {
                                            setDropLoading(true);
                                            if (!telemetry?.droneDbId) {
                                                throw new Error("Drone ID missing");
                                            }
                                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$droneCommand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dropPayload"])({
                                                droneDbId: telemetry.droneDbId
                                            });
                                            setLastDropAt(Date.now());
                                            setDropSuccess(true);
                                            // Auto-close after 2 seconds
                                            setTimeout(()=>{
                                                setDropConfirmOpen(false);
                                                setDropPin("");
                                                setDropPinError(null);
                                                setDropSuccess(false);
                                            }, 2000);
                                        } catch (err) {
                                            setDropPinError(err instanceof Error ? err.message : "Drop failed");
                                        } finally{
                                            setDropLoading(false);
                                        }
                                    },
                                    children: dropLoading ? "Dropping..." : "Confirm Drop"
                                }, void 0, false, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 723,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/telemetry-window.tsx",
                            lineNumber: 708,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/telemetry-window.tsx",
                    lineNumber: 664,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/telemetry-window.tsx",
                lineNumber: 663,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/telemetry-window.tsx",
        lineNumber: 253,
        columnNumber: 5
    }, this);
}
_s(TelemetryWindow, "4yo2sfNLf/1j5SMvdLfcqq4zH3k=");
_c = TelemetryWindow;
var _c;
__turbopack_context__.k.register(_c, "TelemetryWindow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/fetchWithAuth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
async function fetchWithAuth(input, data) {
    const response = await fetch(input, data);
    if (response.status === 403) {
        window.location.replace("/forbidden");
        throw new Error("Forbidden");
    }
    return response;
}
const __TURBOPACK__default__export__ = fetchWithAuth;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/smartmeter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fetchWithAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/fetchWithAuth.ts [app-client] (ecmascript)");
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:5001") || "http://localhost:5000";
;
async function getAllSmartMeters(params) {
    try {
        const queryParams = new URLSearchParams();
        if (params?.status) queryParams.append("status", params.status);
        if (params?.include) queryParams.append("include", "true");
        if (params?.page) queryParams.append("page", params.page.toString());
        if (params?.limit) queryParams.append("limit", params.limit.toString());
        if (params?.search) queryParams.append("search", params.search);
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fetchWithAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(`${API_BASE_URL}/api/smartmeters${queryParams.toString() ? `?${queryParams.toString()}` : ""}`, {
            method: "GET",
            credentials: "include",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            const errorData = await response.json();
            console.log(errorData);
            throw new Error(errorData.error || "Failed to fetch Smart Meters");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching Smart Meters:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to fetch Smart Meters"
        };
    }
}
async function getSmartMeterById(id, includeRelations = false) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/smartmeters/${id}${includeRelations ? "?include=true" : ""}`, {
            method: "GET",
            credentials: "include",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to fetch Smart Meter");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching Smart Meter:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to fetch Smart Meter"
        };
    }
}
async function createSmartMeter(data) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/smartmeters`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            const errorData = await response.json();
            return {
                success: false,
                error: errorData.error || errorData.message || "Failed to create Smart Meter"
            };
        }
        return await response.json();
    } catch (error) {
        console.error("Error creating Smart Meter:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to create Smart Meter"
        };
    }
}
async function updateSmartMeter(id, data) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/smartmeters/${id}`, {
            method: "PUT",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            const errorData = await response.json();
            alert(`${errorData.message}`);
            return {
                success: false,
                error: errorData.error || errorData.message || "Failed to update Smart Meter"
            };
        }
        return await response.json();
    } catch (error) {
        console.error("Error updating Smart Meter:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to update Smart Meter"
        };
    }
}
async function deleteSmartMeter(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/smartmeters/${id}`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to delete Smart Meter");
        }
        return await response.json();
    } catch (error) {
        console.error("Error deleting Smart Meter:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to delete Smart Meter"
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/voice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendVoiceCommand",
    ()=>sendVoiceCommand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_URL = ("TURBOPACK compile-time value", "http://localhost:5001");
async function sendVoiceCommand(audio, mode) {
    const formData = new FormData();
    formData.append("file", audio, "voice.webm");
    formData.append("mode", mode);
    const response = await fetch(`${API_URL}/api/voice-command/transcribe`, {
        method: "POST",
        body: formData
    });
    if (!response.ok) {
        throw new Error("Failed to send voice command");
    }
    return await response.json();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-voice-recorder.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVoiceRecorder",
    ()=>useVoiceRecorder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$voice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/voice.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useVoiceRecorder(mode, onResult) {
    _s();
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const recorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVoiceRecorder.useEffect": ()=>{
            return ({
                "useVoiceRecorder.useEffect": ()=>{
                    stopRecording();
                }
            })["useVoiceRecorder.useEffect"];
        }
    }["useVoiceRecorder.useEffect"], []);
    const uploadAudio = async ()=>{
        if (chunksRef.current.length === 0) return;
        try {
            setIsUploading(true);
            const blob = new Blob(chunksRef.current, {
                type: "audio/webm"
            });
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$voice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendVoiceCommand"])(blob, mode === "battle-planner" ? "battle" : "operations");
            console.log(result);
            onResult?.(result);
            return result;
        } finally{
            setIsUploading(false);
            chunksRef.current = [];
        }
    };
    const startRecording = async ()=>{
        if (isListening || isUploading) return;
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true
        });
        streamRef.current = stream;
        const recorder = new MediaRecorder(stream);
        recorderRef.current = recorder;
        chunksRef.current = [];
        recorder.ondataavailable = (e)=>{
            if (e.data.size > 0) {
                chunksRef.current.push(e.data);
            }
        };
        recorder.onstop = async ()=>{
            setIsListening(false);
            streamRef.current?.getTracks().forEach((t)=>t.stop());
            streamRef.current = null;
            await uploadAudio();
        };
        recorder.start();
        setIsListening(true);
        timeoutRef.current = setTimeout(stopRecording, 6000);
    };
    const stopRecording = ()=>{
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        if (recorderRef.current?.state === "recording") {
            recorderRef.current.stop();
        }
    };
    const toggleRecording = async ()=>{
        if (isListening) {
            stopRecording();
        } else {
            await startRecording();
        }
    };
    return {
        isListening,
        isUploading,
        toggleRecording,
        startRecording,
        stopRecording
    };
}
_s(useVoiceRecorder, "K1RYaqfviXOasiT46GIx+/zkga0=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/spinner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Spinner",
    ()=>Spinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function Spinner({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__["Loader2Icon"], {
        role: "status",
        "aria-label": "Loading",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4 animate-spin', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/spinner.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Spinner;
;
var _c;
__turbopack_context__.k.register(_c, "Spinner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/DroneControllerNew.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DroneController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$droneCommand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/droneCommand.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/spinner.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const FLIGHT_MODES = [
    "RTL",
    "ALT Hold",
    "Loiter",
    "Auto"
];
const MODE_COMMAND = {
    RTL: "SET_MODE_RTL",
    "ALT Hold": "SET_MODE_ALT_HOLD",
    Loiter: "SET_MODE_LOITER",
    Auto: "SET_MODE_AUTO"
};
const CORRECT_DROP_PIN = "1234";
function DroneController({ droneId, currentAltitude = 0, onClose, telemetry = null, variant = "modal", droneName, socketConnected }) {
    _s();
    const isPage = variant === "page";
    const [activeMode, setActiveMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [altitude, setAltitude] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentAltitude);
    const [activeDirection, setActiveDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSending, setIsSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ── Heading / compass ──────────────────────────────────────────────
    const [heading, setHeading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(telemetry?.heading ?? 0);
    const headingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(heading);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DroneController.useEffect": ()=>{
            headingRef.current = heading;
        }
    }["DroneController.useEffect"], [
        heading
    ]);
    // If live telemetry heading updates and the user isn't mid-drag, sync the dial to it.
    const isDraggingCompass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DroneController.useEffect": ()=>{
            if (!isDraggingCompass.current && typeof telemetry?.heading === "number") {
                setHeading(telemetry.heading);
            }
        }
    }["DroneController.useEffect"], [
        telemetry?.heading
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DroneController.useEffect": ()=>{
            if (typeof telemetry?.alt === "number") {
                setAltitude(telemetry.alt);
            }
        }
    }["DroneController.useEffect"], [
        telemetry?.alt
    ]);
    // ── Video feed (placeholder, wire up RTSP/WebRTC source later) ─────
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoSrc = "";
    const [feedStatus, setFeedStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [feedError, setFeedError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DroneController.useEffect": ()=>{
            if (!videoRef.current) return;
            if ("TURBOPACK compile-time truthy", 1) {
                setFeedStatus("idle");
                setFeedError(null);
                return;
            }
            //TURBOPACK unreachable
            ;
        }
    }["DroneController.useEffect"], [
        videoSrc
    ]);
    const feedLabel = feedStatus === "loading" ? "Connecting to video feed..." : feedStatus === "ready" ? "Live feed ready" : feedStatus === "error" ? "Video feed error" : "";
    // ── Central command sender (same call the old panel used) ──────────
    const send = async (command, value)=>{
        if (!droneId) return;
        try {
            setIsSending(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$droneCommand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["manualControl"])({
                droneDbId: droneId,
                command,
                value
            });
        } catch (err) {
            console.error("Manual control error:", err);
        } finally{
            setIsSending(false);
        }
    };
    // Movement buttons send the same discrete commands the previous panel used
    // (FORWARD / BACKWARD / LEFT / RIGHT), so no backend changes are required.
    const handleMove = (direction, command)=>{
        setActiveDirection(direction);
        void send(command);
        window.setTimeout(()=>{
            setActiveDirection((cur)=>cur === direction ? null : cur);
        }, 200);
    };
    // Diagonal taps fire the two adjacent primary commands back-to-back.
    const handleDiagonal = (direction, first, second)=>{
        setActiveDirection(direction);
        void send(first);
        void send(second);
        window.setTimeout(()=>{
            setActiveDirection((cur)=>cur === direction ? null : cur);
        }, 200);
    };
    // ── Yaw / rotation (compass side buttons, press-and-hold) ──────────
    const rotateHeading = (delta)=>{
        setHeading((prev)=>{
            let next = (prev + delta) % 360;
            if (next < 0) next += 360;
            return next;
        });
    };
    const rotateIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startRotating = (delta, command)=>{
        if (rotateIntervalRef.current) clearInterval(rotateIntervalRef.current);
        rotateHeading(delta);
        void send(command); // fire the command once at press-down
        rotateIntervalRef.current = setInterval(()=>{
            rotateHeading(delta);
        }, 80); // keep the dial smooth locally without flooding the backend
    };
    const stopRotating = ()=>{
        if (rotateIntervalRef.current) {
            clearInterval(rotateIntervalRef.current);
            rotateIntervalRef.current = null;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DroneController.useEffect": ()=>{
            return ({
                "DroneController.useEffect": ()=>{
                    if (rotateIntervalRef.current) clearInterval(rotateIntervalRef.current);
                }
            })["DroneController.useEffect"];
        }
    }["DroneController.useEffect"], []);
    // ── Keyboard flight controls ────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DroneController.useEffect": ()=>{
            const handleKeyDown = {
                "DroneController.useEffect.handleKeyDown": (e)=>{
                    if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") {
                        return;
                    }
                    switch(e.key.toLowerCase()){
                        case "arrowup":
                        case "w":
                            handleMove("Forward", "FORWARD");
                            break;
                        case "arrowdown":
                        case "s":
                            handleMove("Backward", "BACKWARD");
                            break;
                        case "a":
                            handleMove("Left", "LEFT");
                            break;
                        case "d":
                            handleMove("Right", "RIGHT");
                            break;
                        case "arrowleft":
                            rotateHeading(-5);
                            void send("YAW_LEFT");
                            break;
                        case "arrowright":
                            rotateHeading(5);
                            void send("YAW_RIGHT");
                            break;
                    }
                }
            }["DroneController.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "DroneController.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["DroneController.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["DroneController.useEffect"], [
        droneId
    ]);
    // ── Drop payload PIN modal ──────────────────────────────────────────
    const [showDropModal, setShowDropModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dropPin, setDropPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [dropPinError, setDropPinError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showRecallModal, setShowRecallModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const confirmDropPayload = async ()=>{
        if (dropPin !== CORRECT_DROP_PIN) {
            setDropPinError("Invalid PIN");
            return;
        }
        setShowDropModal(false);
        setDropPin("");
        setDropPinError(null);
        await send("DROP_PAYLOAD");
    };
    const confirmRecall = async ()=>{
        setShowRecallModal(false);
        await send("RECALL");
    };
    // ── Flight modes ─────────────────────────────────────────────────────
    const handleModeClick = (mode)=>{
        setActiveMode(mode);
        void send(MODE_COMMAND[mode]);
    };
    // ── Altitude dial ────────────────────────────────────────────────────
    const confirmAltitude = async (value)=>{
        setAltitude(value);
        await send("SET_ALTITUDE", value);
    };
    const header = isPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4 flex items-center justify-between border-b border-neutral-800 pb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800/60 text-gray-300 transition-all duration-200 hover:bg-neutral-700 hover:text-white active:scale-95",
                        "aria-label": "Back to map",
                        children: "←"
                    }, void 0, false, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 270,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-gray-100",
                                children: [
                                    "Flight Control Panel",
                                    droneName ? ` · ${droneName}` : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DroneControllerNew.tsx",
                                lineNumber: 278,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500",
                                children: [
                                    "Live control for drone ",
                                    droneId
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DroneControllerNew.tsx",
                                lineNumber: 281,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 277,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 269,
                columnNumber: 13
            }, this),
            typeof socketConnected === "boolean" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex items-center gap-2 rounded-full border px-3 py-1 text-xs ${socketConnected ? "border-emerald-700 bg-emerald-950/40 text-emerald-300" : "border-red-700 bg-red-950/40 text-red-300"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `h-2 w-2 rounded-full ${socketConnected ? "bg-emerald-400" : "bg-red-400"}`
                    }, void 0, false, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 292,
                        columnNumber: 21
                    }, this),
                    socketConnected ? "Live" : "Reconnecting..."
                ]
            }, void 0, true, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 286,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/DroneControllerNew.tsx",
        lineNumber: 268,
        columnNumber: 9
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-3 flex items-start justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-gray-100",
                        children: "Flight Control Panel"
                    }, void 0, false, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 300,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500",
                        children: "Drag to move · Click to control"
                    }, void 0, false, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 301,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 299,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800/60 text-gray-400 transition-all duration-200 hover:bg-neutral-700 hover:text-white active:scale-95",
                "aria-label": "Close controller",
                children: "✕"
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 303,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/DroneControllerNew.tsx",
        lineNumber: 298,
        columnNumber: 9
    }, this);
    const body = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            header,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full items-stretch gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: "2 1 0",
                            minHeight: "360px",
                            backgroundColor: "#1a1a1a",
                            borderRadius: "18px",
                            overflow: "hidden",
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 rounded-md overflow-hidden border border-[#333] bg-black",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    src: "/videos/343478.mp4",
                                    controls: true,
                                    autoPlay: true,
                                    muted: true,
                                    playsInline: true,
                                    className: "w-full h-auto"
                                }, void 0, false, {
                                    fileName: "[project]/components/DroneControllerNew.tsx",
                                    lineNumber: 354,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/DroneControllerNew.tsx",
                                lineNumber: 353,
                                columnNumber: 22
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    pointerEvents: "none",
                                    background: "radial-gradient(circle at center, transparent 45%, rgba(0,0,0,0.35) 100%)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/DroneControllerNew.tsx",
                                lineNumber: 364,
                                columnNumber: 21
                            }, this),
                            (feedStatus !== "ready" || feedError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "20px",
                                    pointerEvents: "none"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "rgba(0,0,0,0.65)",
                                        borderRadius: "16px",
                                        padding: "16px 18px",
                                        maxWidth: "240px",
                                        color: "#fff",
                                        textAlign: "center",
                                        fontSize: "13px",
                                        lineHeight: 1.5
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: feedLabel
                                        }, void 0, false, {
                                            fileName: "[project]/components/DroneControllerNew.tsx",
                                            lineNumber: 398,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                opacity: 0.78,
                                                marginTop: "8px"
                                            },
                                            children: feedError ?? ""
                                        }, void 0, false, {
                                            fileName: "[project]/components/DroneControllerNew.tsx",
                                            lineNumber: 399,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/DroneControllerNew.tsx",
                                    lineNumber: 386,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/DroneControllerNew.tsx",
                                lineNumber: 375,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: "8px",
                                    left: "12px",
                                    fontSize: "11px",
                                    color: "rgba(255,255,255,0.4)",
                                    letterSpacing: "1px"
                                },
                                children: "LIVE"
                            }, void 0, false, {
                                fileName: "[project]/components/DroneControllerNew.tsx",
                                lineNumber: 406,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: "8px",
                                    right: "12px",
                                    fontSize: "11px",
                                    color: "rgba(255,255,255,0.7)",
                                    fontFamily: "monospace"
                                },
                                children: "FPV CAM"
                            }, void 0, false, {
                                fileName: "[project]/components/DroneControllerNew.tsx",
                                lineNumber: 419,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: "60px",
                                    height: "60px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 60 60",
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "30",
                                            cy: "30",
                                            r: "20",
                                            stroke: "white",
                                            strokeWidth: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DroneControllerNew.tsx",
                                            lineNumber: 446,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "30",
                                            y1: "5",
                                            x2: "30",
                                            y2: "20",
                                            stroke: "white",
                                            strokeWidth: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DroneControllerNew.tsx",
                                            lineNumber: 447,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "30",
                                            y1: "40",
                                            x2: "30",
                                            y2: "55",
                                            stroke: "white",
                                            strokeWidth: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DroneControllerNew.tsx",
                                            lineNumber: 448,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "5",
                                            y1: "30",
                                            x2: "20",
                                            y2: "30",
                                            stroke: "white",
                                            strokeWidth: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DroneControllerNew.tsx",
                                            lineNumber: 449,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "40",
                                            y1: "30",
                                            x2: "55",
                                            y2: "30",
                                            stroke: "white",
                                            strokeWidth: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DroneControllerNew.tsx",
                                            lineNumber: 450,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/DroneControllerNew.tsx",
                                    lineNumber: 445,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/DroneControllerNew.tsx",
                                lineNumber: 432,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 320,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "280px",
                            flexShrink: 0,
                            backgroundColor: "#111111",
                            borderRadius: "22px",
                            padding: "18px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            boxShadow: "0 20px 50px rgba(0,0,0,0.25)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "15px",
                                            fontWeight: 600
                                        },
                                        children: [
                                            "Drone Status: ",
                                            telemetry?.status === "on_air" ? "FLYING" : (telemetry?.status ?? "UNKNOWN").toString().toUpperCase()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/DroneControllerNew.tsx",
                                        lineNumber: 470,
                                        columnNumber: 25
                                    }, this),
                                    isSending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spinner"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/DroneControllerNew.tsx",
                                        lineNumber: 473,
                                        columnNumber: 39
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DroneControllerNew.tsx",
                                lineNumber: 469,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: "8px"
                                },
                                children: FLIGHT_MODES.map((mode)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleModeClick(mode),
                                        style: {
                                            position: "relative",
                                            overflow: "hidden",
                                            background: activeMode === mode ? "linear-gradient(180deg, #1d1d1d 0%, #111 100%)" : "linear-gradient(180deg, #181818 0%, #0f0f0f 100%)",
                                            color: "#ffffff",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                            borderRadius: "10px",
                                            padding: "12px 4px",
                                            fontSize: "13px",
                                            fontWeight: 500,
                                            cursor: "pointer",
                                            transition: "all 0.2s ease",
                                            boxShadow: `
                    inset 0 1px 1px rgba(255,255,255,0.08),
                    inset 0 -4px 10px rgba(0,0,0,0.45),
                    0 4px 12px rgba(0,0,0,0.35)
                  `,
                                            backdropFilter: "blur(6px)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: "absolute",
                                                    top: 0,
                                                    left: "-30%",
                                                    width: "80%",
                                                    height: "55%",
                                                    background: "linear-gradient(135deg, rgba(255,255,255,0.16), rgba(255,255,255,0.02))",
                                                    transform: "skewX(-25deg)",
                                                    pointerEvents: "none",
                                                    filter: "blur(2px)"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/DroneControllerNew.tsx",
                                                lineNumber: 505,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    position: "relative",
                                                    zIndex: 2
                                                },
                                                children: mode
                                            }, void 0, false, {
                                                fileName: "[project]/components/DroneControllerNew.tsx",
                                                lineNumber: 519,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, mode, true, {
                                        fileName: "[project]/components/DroneControllerNew.tsx",
                                        lineNumber: 479,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/DroneControllerNew.tsx",
                                lineNumber: 477,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "6px",
                                    marginTop: "2px"
                                },
                                children: [
                                    {
                                        label: "Latitude",
                                        value: telemetry?.lat != null ? telemetry.lat.toFixed(5) : "—"
                                    },
                                    {
                                        label: "Longitude",
                                        value: telemetry?.lng != null ? telemetry.lng.toFixed(5) : "—"
                                    },
                                    {
                                        label: "Altitude",
                                        value: `${altitude} m`
                                    },
                                    {
                                        label: "Heading",
                                        value: `${Math.round(heading)}°`
                                    }
                                ].map(({ label, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "13px",
                                                    color: "#888888"
                                                },
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/components/DroneControllerNew.tsx",
                                                lineNumber: 533,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "15px",
                                                    fontWeight: 400,
                                                    color: "#ffffff"
                                                },
                                                children: value
                                            }, void 0, false, {
                                                fileName: "[project]/components/DroneControllerNew.tsx",
                                                lineNumber: 534,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, label, true, {
                                        fileName: "[project]/components/DroneControllerNew.tsx",
                                        lineNumber: 532,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/DroneControllerNew.tsx",
                                lineNumber: 525,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setShowDropModal(true);
                                    setDropPin("");
                                    setDropPinError(null);
                                },
                                disabled: isSending,
                                style: {
                                    background: "linear-gradient(180deg,#ff1a1a 0%,#ff0000 55%, #e50505 100%)",
                                    color: "#ffffff",
                                    border: "none",
                                    borderRadius: "18px",
                                    padding: "12px",
                                    fontSize: "14px",
                                    fontWeight: 700,
                                    cursor: isSending ? "not-allowed" : "pointer",
                                    opacity: isSending ? 0.6 : 1,
                                    width: "100%"
                                },
                                children: "Drop Payload"
                            }, void 0, false, {
                                fileName: "[project]/components/DroneControllerNew.tsx",
                                lineNumber: 540,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowRecallModal(true),
                                disabled: isSending,
                                style: {
                                    background: "linear-gradient(135deg,#2ecc71,#27ae60)",
                                    color: "#ffffff",
                                    border: "none",
                                    borderRadius: "18px",
                                    padding: "12px",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    cursor: isSending ? "not-allowed" : "pointer",
                                    opacity: isSending ? 0.6 : 1,
                                    width: "100%"
                                },
                                children: "Recall"
                            }, void 0, false, {
                                fileName: "[project]/components/DroneControllerNew.tsx",
                                lineNumber: 564,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 456,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 318,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    justifyItems: "center",
                    gap: "24px",
                    width: "100%",
                    marginTop: "20px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DirectionalPad, {
                        activeDirection: activeDirection,
                        onMove: handleMove,
                        onDiagonal: handleDiagonal
                    }, void 0, false, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 596,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Compass, {
                        heading: heading,
                        setHeading: (v)=>setHeading(v),
                        startRotating: startRotating,
                        stopRotating: stopRotating,
                        onDragStart: ()=>{
                            isDraggingCompass.current = true;
                        },
                        onDragEnd: ()=>{
                            isDraggingCompass.current = false;
                            void send("SET_HEADING", Math.round(headingRef.current));
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 602,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AltitudeControl, {
                        altitude: altitude,
                        onConfirm: confirmAltitude
                    }, void 0, false, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 616,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 586,
                columnNumber: 13
            }, this),
            showDropModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,0,0,0.6)",
                    zIndex: 10000
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "420px",
                        maxWidth: "92%",
                        background: "linear-gradient(180deg,#0f0f10, #0b0b0c)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: "14px",
                        padding: "20px",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                        color: "#fff"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "12px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: "16px",
                                        fontWeight: 700
                                    },
                                    children: "Confirm Drop Payload"
                                }, void 0, false, {
                                    fileName: "[project]/components/DroneControllerNew.tsx",
                                    lineNumber: 645,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: "rgba(255,255,255,0.45)",
                                        fontSize: "12px"
                                    },
                                    children: "Secure"
                                }, void 0, false, {
                                    fileName: "[project]/components/DroneControllerNew.tsx",
                                    lineNumber: 646,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DroneControllerNew.tsx",
                            lineNumber: 644,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: "13px",
                                color: "rgba(255,255,255,0.8)",
                                marginBottom: "12px"
                            },
                            children: "Enter 4-digit PIN to authorize payload release."
                        }, void 0, false, {
                            fileName: "[project]/components/DroneControllerNew.tsx",
                            lineNumber: 649,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            autoFocus: true,
                            value: dropPin,
                            onChange: (e)=>{
                                const v = e.target.value.replace(/[^0-9]/g, "").slice(0, 4);
                                setDropPin(v);
                                if (dropPinError) setDropPinError(null);
                            },
                            onKeyDown: (e)=>{
                                if (e.key === "Enter") void confirmDropPayload();
                            },
                            placeholder: "••••",
                            inputMode: "numeric",
                            style: {
                                width: "100%",
                                padding: "12px 14px",
                                fontSize: "18px",
                                letterSpacing: "6px",
                                textAlign: "center",
                                borderRadius: "10px",
                                border: "1px solid rgba(255,255,255,0.06)",
                                background: "rgba(255,255,255,0.02)",
                                color: "#fff",
                                marginBottom: "10px"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/DroneControllerNew.tsx",
                            lineNumber: 653,
                            columnNumber: 25
                        }, this),
                        dropPinError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                color: "#ff6b6b",
                                marginBottom: "10px",
                                fontSize: "13px"
                            },
                            children: dropPinError
                        }, void 0, false, {
                            fileName: "[project]/components/DroneControllerNew.tsx",
                            lineNumber: 681,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: "10px",
                                justifyContent: "flex-end"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowDropModal(false);
                                        setDropPin("");
                                        setDropPinError(null);
                                    },
                                    style: {
                                        padding: "10px 14px",
                                        borderRadius: "10px",
                                        background: "transparent",
                                        border: "1px solid rgba(255,255,255,0.06)",
                                        color: "#fff",
                                        cursor: "pointer"
                                    },
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/DroneControllerNew.tsx",
                                    lineNumber: 685,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>void confirmDropPayload(),
                                    disabled: isSending,
                                    style: {
                                        padding: "10px 14px",
                                        borderRadius: "10px",
                                        background: "linear-gradient(135deg,#ff4b4b,#ff0000)",
                                        border: "none",
                                        color: "#fff",
                                        cursor: isSending ? "not-allowed" : "pointer",
                                        fontWeight: 700,
                                        opacity: isSending ? 0.6 : 1
                                    },
                                    children: isSending ? "Sending..." : "Confirm"
                                }, void 0, false, {
                                    fileName: "[project]/components/DroneControllerNew.tsx",
                                    lineNumber: 703,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DroneControllerNew.tsx",
                            lineNumber: 684,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DroneControllerNew.tsx",
                    lineNumber: 632,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 621,
                columnNumber: 17
            }, this),
            showRecallModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 10000
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: "#111",
                        padding: "20px",
                        borderRadius: "12px",
                        border: "1px solid rgba(255,255,255,0.1)",
                        width: "320px",
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                color: "#fff",
                                marginBottom: "10px"
                            },
                            children: "Confirm Recall"
                        }, void 0, false, {
                            fileName: "[project]/components/DroneControllerNew.tsx",
                            lineNumber: 747,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: "#aaa",
                                marginBottom: "18px"
                            },
                            children: "Are you sure you want the drone to return?"
                        }, void 0, false, {
                            fileName: "[project]/components/DroneControllerNew.tsx",
                            lineNumber: 748,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: "10px",
                                justifyContent: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowRecallModal(false),
                                    style: {
                                        padding: "10px 14px",
                                        background: "#333",
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: "8px",
                                        cursor: "pointer"
                                    },
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/DroneControllerNew.tsx",
                                    lineNumber: 752,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>void confirmRecall(),
                                    disabled: isSending,
                                    style: {
                                        padding: "10px 14px",
                                        background: "#ff3b3b",
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: "8px",
                                        cursor: isSending ? "not-allowed" : "pointer",
                                        fontWeight: 600,
                                        opacity: isSending ? 0.6 : 1
                                    },
                                    children: isSending ? "Sending..." : "Confirm"
                                }, void 0, false, {
                                    fileName: "[project]/components/DroneControllerNew.tsx",
                                    lineNumber: 765,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DroneControllerNew.tsx",
                            lineNumber: 751,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DroneControllerNew.tsx",
                    lineNumber: 737,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 726,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true);
    if (isPage) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen w-full bg-[#0d0d0d] p-5 text-white sm:p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto w-full max-w-[1150px]",
                children: body
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 791,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/DroneControllerNew.tsx",
            lineNumber: 790,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        drag: true,
        dragMomentum: false,
        className: "fixed z-[9999] w-[min(1150px,95vw)] rounded-3xl border border-neutral-800 bg-[#0d0d0d] p-5 text-white shadow-2xl",
        style: {
            top: "50%",
            left: "50%",
            translateX: "-50%",
            translateY: "-50%",
            maxHeight: "92vh",
            overflowY: "auto"
        },
        children: body
    }, void 0, false, {
        fileName: "[project]/components/DroneControllerNew.tsx",
        lineNumber: 797,
        columnNumber: 9
    }, this);
}
_s(DroneController, "S3eR5juW6mUwHCp7qC6Xjm1dalo=");
_c = DroneController;
/* ── DIRECTIONAL PAD ── */ function DirectionalPad({ activeDirection, onMove, onDiagonal }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "230px",
            height: "230px",
            borderRadius: "50%",
            background: "#111",
            border: "2px solid rgba(255,255,255,0.08)",
            boxShadow: "inset 0 0 20px rgba(255,255,255,0.03)",
            position: "relative",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: "absolute",
                    top: "10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: "10px",
                    color: "#8a8a8a",
                    letterSpacing: "0.5px"
                },
                children: "Forward"
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 841,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: "absolute",
                    bottom: "10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: "10px",
                    color: "#8a8a8a",
                    letterSpacing: "0.5px"
                },
                children: "Backward"
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 844,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: "absolute",
                    left: "2px",
                    top: "50%",
                    transform: "translateY(-50%) rotate(-90deg)",
                    fontSize: "10px",
                    color: "#8a8a8a",
                    letterSpacing: "0.5px"
                },
                children: "Left"
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 847,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: "absolute",
                    right: "-2px",
                    top: "50%",
                    transform: "translateY(-50%) rotate(-90deg)",
                    fontSize: "10px",
                    color: "#8a8a8a",
                    letterSpacing: "0.5px"
                },
                children: "Right"
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 850,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DPadBtn, {
                top: "24px",
                left: "50%",
                translateX: "-50%",
                active: activeDirection === "Forward",
                onClick: ()=>onMove("Forward", "FORWARD"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TriUp, {}, void 0, false, {
                    fileName: "[project]/components/DroneControllerNew.tsx",
                    lineNumber: 855,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 854,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DPadBtn, {
                top: "50%",
                left: "24px",
                translateY: "-50%",
                active: activeDirection === "Left",
                onClick: ()=>onMove("Left", "LEFT"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TriLeft, {}, void 0, false, {
                    fileName: "[project]/components/DroneControllerNew.tsx",
                    lineNumber: 859,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 858,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DPadBtn, {
                top: "50%",
                left: "50%",
                translateX: "-50%",
                translateY: "-50%",
                center: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 18 18",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "3",
                            y1: "3",
                            x2: "15",
                            y2: "15",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/components/DroneControllerNew.tsx",
                            lineNumber: 864,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "15",
                            y1: "3",
                            x2: "3",
                            y2: "15",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/components/DroneControllerNew.tsx",
                            lineNumber: 865,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DroneControllerNew.tsx",
                    lineNumber: 863,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 862,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DPadBtn, {
                top: "50%",
                right: "24px",
                translateY: "-50%",
                active: activeDirection === "Right",
                onClick: ()=>onMove("Right", "RIGHT"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TriRight, {}, void 0, false, {
                    fileName: "[project]/components/DroneControllerNew.tsx",
                    lineNumber: 870,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 869,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DPadBtn, {
                bottom: "24px",
                left: "50%",
                translateX: "-50%",
                active: activeDirection === "Backward",
                onClick: ()=>onMove("Backward", "BACKWARD"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TriDown, {}, void 0, false, {
                    fileName: "[project]/components/DroneControllerNew.tsx",
                    lineNumber: 874,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 873,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SmallDiag, {
                top: "50px",
                left: "42px",
                rot: -135,
                active: activeDirection === "ForwardLeft",
                onClick: ()=>onDiagonal("ForwardLeft", "FORWARD", "LEFT")
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 877,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SmallDiag, {
                top: "50px",
                right: "42px",
                rot: -45,
                active: activeDirection === "ForwardRight",
                onClick: ()=>onDiagonal("ForwardRight", "FORWARD", "RIGHT")
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 878,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SmallDiag, {
                bottom: "50px",
                left: "42px",
                rot: 135,
                active: activeDirection === "BackwardLeft",
                onClick: ()=>onDiagonal("BackwardLeft", "BACKWARD", "LEFT")
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 879,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SmallDiag, {
                bottom: "50px",
                right: "42px",
                rot: 45,
                active: activeDirection === "BackwardRight",
                onClick: ()=>onDiagonal("BackwardRight", "BACKWARD", "RIGHT")
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 880,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/DroneControllerNew.tsx",
        lineNumber: 826,
        columnNumber: 9
    }, this);
}
_c1 = DirectionalPad;
function DPadBtn({ children, top, bottom, left, right, translateX, translateY, center, active, onClick }) {
    const size = center ? "64px" : "52px";
    const transform = [
        translateX && `translateX(${translateX})`,
        translateY && `translateY(${translateY})`
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        style: {
            position: "absolute",
            top,
            bottom,
            left,
            right,
            width: size,
            height: size,
            borderRadius: "50%",
            background: active ? "linear-gradient(180deg,#ff1a1a 0%,#ff0000 55%, #e50505 100%)" : center ? "#1a1a1a" : "#3a3a3a",
            border: center ? "2px solid rgba(255,255,255,0.1)" : "none",
            cursor: center ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: transform || undefined,
            zIndex: 2,
            transition: "all 0.2s ease"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/DroneControllerNew.tsx",
        lineNumber: 914,
        columnNumber: 9
    }, this);
}
_c2 = DPadBtn;
function SmallDiag({ top, bottom, left, right, rot, active, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        style: {
            position: "absolute",
            top,
            bottom,
            left,
            right,
            width: "26px",
            height: "26px",
            borderRadius: "50%",
            background: active ? "linear-gradient(180deg,#ff1a1a 0%,#ff0000 55%, #e50505 100%)" : "#2d2d2d",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: active ? 3 : 1
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "13",
            height: "13",
            viewBox: "0 0 100 100",
            fill: "none",
            style: {
                transform: `rotate(${rot + 180}deg)`
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 50 Q10 40 20 35 L80 10 Q90 5 95 15 L75 50 L95 85 Q90 95 80 90 L20 65 Q10 60 10 50 Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 984,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/DroneControllerNew.tsx",
            lineNumber: 983,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/DroneControllerNew.tsx",
        lineNumber: 963,
        columnNumber: 9
    }, this);
}
_c3 = SmallDiag;
const TriUp = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 100 100",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            transform: "rotate(90 50 50)",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 50 Q10 40 20 35 L80 10 Q90 5 95 15 L75 50 L95 85 Q90 95 80 90 L20 65 Q10 60 10 50 Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 993,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/DroneControllerNew.tsx",
            lineNumber: 992,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/DroneControllerNew.tsx",
        lineNumber: 991,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c4 = TriUp;
const TriDown = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 100 100",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            transform: "rotate(-90 50 50)",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 50 Q10 40 20 35 L80 10 Q90 5 95 15 L75 50 L95 85 Q90 95 80 90 L20 65 Q10 60 10 50 Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 1000,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/DroneControllerNew.tsx",
            lineNumber: 999,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/DroneControllerNew.tsx",
        lineNumber: 998,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c5 = TriDown;
const TriLeft = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 100 100",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M10 50 Q10 40 20 35 L80 10 Q90 5 95 15 L75 50 L95 85 Q90 95 80 90 L20 65 Q10 60 10 50 Z",
            fill: "white"
        }, void 0, false, {
            fileName: "[project]/components/DroneControllerNew.tsx",
            lineNumber: 1006,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/DroneControllerNew.tsx",
        lineNumber: 1005,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c6 = TriLeft;
const TriRight = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 100 100",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            transform: "rotate(180 50 50)",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 50 Q10 40 20 35 L80 10 Q90 5 95 15 L75 50 L95 85 Q90 95 80 90 L20 65 Q10 60 10 50 Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 1012,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/DroneControllerNew.tsx",
            lineNumber: 1011,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/DroneControllerNew.tsx",
        lineNumber: 1010,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c7 = TriRight;
/* ── COMPASS ── */ function Compass({ heading, setHeading, startRotating, stopRotating, onDragStart, onDragEnd }) {
    _s1();
    const [hoverCCW, setHoverCCW] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoverCW, setHoverCW] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const compassRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isDragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const btnStyle = {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: "rgba(25, 25, 25, 0.75)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        color: "#fff",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s ease",
        zIndex: 10,
        userSelect: "none",
        boxShadow: "0 4px 12px rgba(0,0,0,0.5)"
    };
    const getAngle = (cx, cy, x, y)=>{
        const dx = x - cx;
        const dy = y - cy;
        let deg = Math.atan2(dy, dx) * (180 / Math.PI);
        deg = (deg + 450) % 360;
        return deg;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Compass.useEffect": ()=>{
            const handleMove = {
                "Compass.useEffect.handleMove": (e)=>{
                    if (!isDragging.current || !compassRef.current) return;
                    const rect = compassRef.current.getBoundingClientRect();
                    const cx = rect.left + rect.width / 2;
                    const cy = rect.top + rect.height / 2;
                    setHeading(getAngle(cx, cy, e.clientX, e.clientY));
                }
            }["Compass.useEffect.handleMove"];
            const handleUp = {
                "Compass.useEffect.handleUp": ()=>{
                    if (isDragging.current) {
                        isDragging.current = false;
                        onDragEnd();
                    }
                }
            }["Compass.useEffect.handleUp"];
            window.addEventListener("mousemove", handleMove);
            window.addEventListener("mouseup", handleUp);
            return ({
                "Compass.useEffect": ()=>{
                    window.removeEventListener("mousemove", handleMove);
                    window.removeEventListener("mouseup", handleUp);
                }
            })["Compass.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Compass.useEffect"], [
        setHeading
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: compassRef,
        style: {
            width: "230px",
            height: "230px",
            borderRadius: "50%",
            background: "#111",
            boxShadow: "inset 0 0 20px rgba(255,255,255,0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                title: "Yaw Left",
                onMouseEnter: ()=>setHoverCCW(true),
                onMouseLeave: ()=>{
                    setHoverCCW(false);
                    stopRotating();
                },
                onMouseDown: ()=>startRotating(-5, "YAW_LEFT"),
                onMouseUp: stopRotating,
                style: {
                    ...btnStyle,
                    left: "-28px",
                    background: hoverCCW ? "linear-gradient(180deg,#ff1a1a 0%,#ff0000 55%, #e50505 100%)" : "rgba(25, 25, 25, 0.85)"
                },
                children: "⟲"
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 1106,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "-20 -20 240 240",
                width: "180",
                height: "180",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "100",
                        cy: "100",
                        r: "70",
                        stroke: "rgba(255,255,255,0.2)",
                        strokeWidth: "1",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 1125,
                        columnNumber: 17
                    }, this),
                    Array.from({
                        length: 12
                    }).map((_, i)=>{
                        const angle = i * 30 * Math.PI / 180;
                        const r1 = i % 3 === 0 ? 75 : 76;
                        const r2 = 94;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: 100 + r1 * Math.sin(angle),
                            y1: 100 - r1 * Math.cos(angle),
                            x2: 100 + r2 * Math.sin(angle),
                            y2: 100 - r2 * Math.cos(angle),
                            stroke: "#fff",
                            strokeWidth: 3
                        }, i, false, {
                            fileName: "[project]/components/DroneControllerNew.tsx",
                            lineNumber: 1131,
                            columnNumber: 25
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "100",
                        y: "-8",
                        textAnchor: "middle",
                        fill: "white",
                        children: "N"
                    }, void 0, false, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 1142,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "100",
                        y: "218",
                        textAnchor: "middle",
                        fill: "white",
                        children: "S"
                    }, void 0, false, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 1143,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "-20",
                        y: "105",
                        fill: "white",
                        children: "W"
                    }, void 0, false, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 1144,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "215",
                        y: "105",
                        fill: "white",
                        children: "E"
                    }, void 0, false, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 1145,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "100",
                        cy: "100",
                        r: "22",
                        fill: "#1a1a1a"
                    }, void 0, false, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 1146,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        stroke: "white",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        opacity: "0.9",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "92",
                                y1: "100",
                                x2: "108",
                                y2: "100"
                            }, void 0, false, {
                                fileName: "[project]/components/DroneControllerNew.tsx",
                                lineNumber: 1148,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "100",
                                y1: "92",
                                x2: "100",
                                y2: "108"
                            }, void 0, false, {
                                fileName: "[project]/components/DroneControllerNew.tsx",
                                lineNumber: 1149,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 1147,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: "100,50 104,72 96,72",
                        fill: "#ff0b0b",
                        style: {
                            transform: `rotate(${heading}deg)`,
                            transformOrigin: "100px 100px",
                            transition: "transform 0.15s linear",
                            cursor: "grab"
                        },
                        onMouseDown: (e)=>{
                            e.preventDefault();
                            isDragging.current = true;
                            onDragStart();
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 1151,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 1124,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                title: "Yaw Right",
                onMouseEnter: ()=>setHoverCW(true),
                onMouseLeave: ()=>{
                    setHoverCW(false);
                    stopRotating();
                },
                onMouseDown: ()=>startRotating(5, "YAW_RIGHT"),
                onMouseUp: stopRotating,
                style: {
                    ...btnStyle,
                    right: "-28px",
                    background: hoverCW ? "linear-gradient(180deg,#ff1a1a 0%,#ff0000 55%, #e50505 100%)" : "rgba(25, 25, 25, 0.85)"
                },
                children: "⟳"
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 1168,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/DroneControllerNew.tsx",
        lineNumber: 1092,
        columnNumber: 9
    }, this);
}
_s1(Compass, "AzK8ngnrFs92dOfBsEi2INtgFqE=");
_c8 = Compass;
/* ── ALTITUDE CONTROL ── */ function AltTriUp() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8 3L14 13H2L8 3Z",
            fill: "white"
        }, void 0, false, {
            fileName: "[project]/components/DroneControllerNew.tsx",
            lineNumber: 1193,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/DroneControllerNew.tsx",
        lineNumber: 1192,
        columnNumber: 9
    }, this);
}
_c9 = AltTriUp;
function AltTriDown() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8 13L2 3H14L8 13Z",
            fill: "white"
        }, void 0, false, {
            fileName: "[project]/components/DroneControllerNew.tsx",
            lineNumber: 1200,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/DroneControllerNew.tsx",
        lineNumber: 1199,
        columnNumber: 9
    }, this);
}
_c10 = AltTriDown;
const LEVELS = Array.from({
    length: 41
}, (_, i)=>i * 5); // 0,5,...,200
const LINE_WIDTH = {
    0: "95px",
    1: "64px",
    2: "36px"
};
function AltitudeControl({ altitude, onConfirm }) {
    _s2();
    const [pendingAltitude, setPendingAltitude] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const rawIndex = LEVELS.indexOf(altitude);
    const selectedIndex = rawIndex !== -1 ? rawIndex : Math.max(0, LEVELS.findIndex((v)=>v >= altitude) !== -1 ? LEVELS.findIndex((v)=>v >= altitude) : 0);
    const openConfirm = (newAlt)=>{
        if (newAlt === altitude) return;
        setPendingAltitude(newAlt);
    };
    const confirmChange = ()=>{
        if (pendingAltitude === null) return;
        onConfirm(pendingAltitude);
        setPendingAltitude(null);
    };
    const cancelChange = ()=>setPendingAltitude(null);
    const stepUp = ()=>{
        const next = selectedIndex + 1;
        if (next < LEVELS.length) openConfirm(LEVELS[next]);
    };
    const stepDown = ()=>{
        const prev = selectedIndex - 1;
        if (prev >= 0) openConfirm(LEVELS[prev]);
    };
    const wheelAccum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const handleWheel = (e)=>{
        e.preventDefault();
        wheelAccum.current += e.deltaY;
        if (wheelAccum.current > 30) {
            wheelAccum.current = 0;
            stepUp();
        } else if (wheelAccum.current < -30) {
            wheelAccum.current = 0;
            stepDown();
        }
    };
    const lastTouch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleTouchStart = (e)=>{
        lastTouch.current = e.touches[0].clientY;
    };
    const handleTouchMove = (e)=>{
        if (lastTouch.current === null) return;
        const dy = lastTouch.current - e.touches[0].clientY;
        if (Math.abs(dy) > 18) {
            dy > 0 ? stepUp() : stepDown();
            lastTouch.current = e.touches[0].clientY;
        }
    };
    const visibleItems = Array.from({
        length: 5
    }, (_, i)=>{
        const lvlIdx = selectedIndex - 2 + i;
        return lvlIdx >= 0 && lvlIdx < LEVELS.length ? LEVELS[lvlIdx] : null;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onWheel: handleWheel,
                onTouchStart: handleTouchStart,
                onTouchMove: handleTouchMove,
                style: {
                    width: "230px",
                    height: "230px",
                    borderRadius: "50%",
                    backgroundColor: "#111",
                    border: "2px solid rgba(255,255,255,0.08)",
                    boxShadow: "inset 0 0 20px rgba(255,255,255,0.05)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 0",
                    flexShrink: 0,
                    userSelect: "none",
                    cursor: "ns-resize"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: stepUp,
                        disabled: selectedIndex === LEVELS.length - 1,
                        style: {
                            width: "44px",
                            height: "44px",
                            borderRadius: "50%",
                            backgroundColor: "#3a3a3a",
                            border: "none",
                            cursor: selectedIndex === LEVELS.length - 1 ? "default" : "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            opacity: selectedIndex === LEVELS.length - 1 ? 0.3 : 1
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AltTriUp, {}, void 0, false, {
                            fileName: "[project]/components/DroneControllerNew.tsx",
                            lineNumber: 1315,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 1299,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "4px",
                            alignItems: "center",
                            width: "100%",
                            padding: "0 16px",
                            boxSizing: "border-box"
                        },
                        children: visibleItems.map((lvl, i)=>{
                            const isCenter = i === 2;
                            const offset = Math.abs(i - 2);
                            const lineW = LINE_WIDTH[offset];
                            if (lvl === null) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: "24px",
                                    width: "100%"
                                }
                            }, `empty-${i}`, false, {
                                fileName: "[project]/components/DroneControllerNew.tsx",
                                lineNumber: 1323,
                                columnNumber: 50
                            }, this);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>{
                                    if (!isCenter) openConfirm(lvl);
                                },
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "16px",
                                    width: "100%",
                                    cursor: isCenter ? "default" : "pointer"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: lineW,
                                            height: isCenter ? "2px" : "1px",
                                            backgroundColor: isCenter ? "#ffffff" : "rgba(255,255,255,0.25)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/DroneControllerNew.tsx",
                                        lineNumber: 1332,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: "40px",
                                            textAlign: "center",
                                            fontSize: isCenter ? "15px" : "14px",
                                            fontWeight: isCenter ? 600 : 400,
                                            color: isCenter ? "#ffffff" : "rgba(255,255,255,0.32)"
                                        },
                                        children: lvl
                                    }, void 0, false, {
                                        fileName: "[project]/components/DroneControllerNew.tsx",
                                        lineNumber: 1333,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: lineW,
                                            height: isCenter ? "2px" : "1px",
                                            backgroundColor: isCenter ? "#ffffff" : "rgba(255,255,255,0.25)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/DroneControllerNew.tsx",
                                        lineNumber: 1336,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, lvl, true, {
                                fileName: "[project]/components/DroneControllerNew.tsx",
                                lineNumber: 1325,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 1318,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: stepDown,
                        disabled: selectedIndex === 0,
                        style: {
                            width: "44px",
                            height: "44px",
                            borderRadius: "50%",
                            backgroundColor: "#3a3a3a",
                            border: "none",
                            cursor: selectedIndex === 0 ? "default" : "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            opacity: selectedIndex === 0 ? 0.3 : 1
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AltTriDown, {}, void 0, false, {
                            fileName: "[project]/components/DroneControllerNew.tsx",
                            lineNumber: 1358,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 1342,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 1278,
                columnNumber: 13
            }, this),
            pendingAltitude !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 10000
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: "#111",
                        padding: "20px",
                        borderRadius: "12px",
                        border: "1px solid rgba(255,255,255,0.1)",
                        width: "280px",
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                color: "#fff",
                                marginBottom: "10px"
                            },
                            children: "Confirm Altitude Change"
                        }, void 0, false, {
                            fileName: "[project]/components/DroneControllerNew.tsx",
                            lineNumber: 1375,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: "#aaa",
                                marginBottom: "16px"
                            },
                            children: [
                                "Change altitude to ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    style: {
                                        color: "#fff"
                                    },
                                    children: pendingAltitude
                                }, void 0, false, {
                                    fileName: "[project]/components/DroneControllerNew.tsx",
                                    lineNumber: 1377,
                                    columnNumber: 48
                                }, this),
                                "?"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DroneControllerNew.tsx",
                            lineNumber: 1376,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: "10px",
                                justifyContent: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: cancelChange,
                                    style: {
                                        padding: "8px 12px",
                                        background: "#333",
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: "6px",
                                        cursor: "pointer"
                                    },
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/DroneControllerNew.tsx",
                                    lineNumber: 1380,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: confirmChange,
                                    style: {
                                        padding: "8px 12px",
                                        background: "#ff3b3b",
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: "6px",
                                        cursor: "pointer"
                                    },
                                    children: "Confirm"
                                }, void 0, false, {
                                    fileName: "[project]/components/DroneControllerNew.tsx",
                                    lineNumber: 1383,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DroneControllerNew.tsx",
                            lineNumber: 1379,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DroneControllerNew.tsx",
                    lineNumber: 1374,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 1363,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true);
}
_s2(AltitudeControl, "LFGrwv5YY+ZCmurkM3okc9QemPU=");
_c11 = AltitudeControl;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "DroneController");
__turbopack_context__.k.register(_c1, "DirectionalPad");
__turbopack_context__.k.register(_c2, "DPadBtn");
__turbopack_context__.k.register(_c3, "SmallDiag");
__turbopack_context__.k.register(_c4, "TriUp");
__turbopack_context__.k.register(_c5, "TriDown");
__turbopack_context__.k.register(_c6, "TriLeft");
__turbopack_context__.k.register(_c7, "TriRight");
__turbopack_context__.k.register(_c8, "Compass");
__turbopack_context__.k.register(_c9, "AltTriUp");
__turbopack_context__.k.register(_c10, "AltTriDown");
__turbopack_context__.k.register(_c11, "AltitudeControl");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/map-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapView",
    ()=>MapView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanSearch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scan-search.js [app-client] (ecmascript) <export default as ScanSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$alerts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/alerts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$sensors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/sensors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$droneos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/droneos.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$maps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/maps.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$droneCommand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/droneCommand.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$map$2d$renderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/map-renderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$telemetry$2d$window$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/telemetry-window.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$smartmeter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/smartmeter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$voice$2d$recorder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-voice-recorder.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DroneControllerNew$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DroneControllerNew.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
;
;
;
;
const BATTLE_DRONES = [
    {
        id: "falcon",
        name: "Falcon",
        type: "Reconnaissance",
        color: "#3b82f6",
        icon: "🛰️",
        range: 25000,
        speed: 22,
        payload: "EO Camera",
        latitude: 28.642,
        longitude: 77.192
    },
    {
        id: "viper",
        name: "Viper",
        type: "Strike",
        color: "#ef4444",
        icon: "🚀",
        range: 18000,
        speed: 30,
        payload: "Missile",
        latitude: 28.641,
        longitude: 77.228
    },
    {
        id: "specter",
        name: "Specter",
        type: "Kamikaze",
        color: "#f59e0b",
        icon: "💥",
        range: 40000,
        speed: 38,
        payload: "Loitering Munition",
        latitude: 28.6205,
        longitude: 77.212
    },
    {
        id: "sentinel",
        name: "Sentinel",
        type: "Surveillance",
        color: "#10b981",
        icon: "🛡️",
        range: 32000,
        speed: 18,
        payload: "Thermal Camera",
        latitude: 28.598,
        longitude: 77.194
    }
];
;
const SOCKET_URL = ("TURBOPACK compile-time value", "http://localhost:5001") || "http://localhost:5000";
const REACH_RADIUS_METERS = 6;
const DRONE_LOCATION_TIMEOUT_MS = 5000;
const STALE_DATA_THRESHOLD_MS = 10000;
const CRITICAL_LOSS_THRESHOLD_MS = 12000;
const DRONE_STATUS_REFRESH_MS = 5000;
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:5001") || "http://localhost:5000";
const ZOOM_SCALE_CONFIG = {
    minZoom: 10,
    maxZoom: 40,
    minSize: 18,
    maxSize: 48
};
function calculateMarkerSize(zoom) {
    const { minZoom, maxZoom, minSize, maxSize } = ZOOM_SCALE_CONFIG;
    const normalizedZoom = Math.max(minZoom, Math.min(maxZoom, zoom));
    const progress = (normalizedZoom - minZoom) / (maxZoom - minZoom);
    return Math.round(minSize + (maxSize - minSize) * progress);
}
function MapView({ mode = "operations" }) {
    _s();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { isListening, isUploading, toggleRecording } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$voice$2d$recorder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceRecorder"])(mode, {
        "MapView.useVoiceRecorder": (result)=>{
            console.log(result);
        }
    }["MapView.useVoiceRecorder"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const CLICK_DELAY_MS = 250;
    const clickTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mapConfig, setMapConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentZoom, setCurrentZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(18);
    const [liveDronePositions, setLiveDronePositions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [battleDronePositions, setBattleDronePositions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [droneStatus, setDroneStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [battleDroneStatus, setBattleDroneStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loadingMapConfig, setLoadingMapConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingSensors, setLoadingSensors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingAlerts, setLoadingAlerts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingDrones, setLoadingDrones] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingSmartMeters, setLoadingSmartMeters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [sensorSearchInput, setSensorSearchInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sensorSearchResults, setSensorSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [focusedSensorId, setFocusedSensorId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [scanning, setScanning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sensors, setSensors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [smartMeters, setSmartMeters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeAlerts, setActiveAlerts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [drones, setDrones] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [socket, setSocket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [socketConnected, setSocketConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedSensor, setSelectedSensor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedAlert, setSelectedAlert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedDroneId, setSelectedDroneId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [actionLoading, setActionLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [markerUpdateKey, setMarkerUpdateKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [telemetryWindowOpen, setTelemetryWindowOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedDroneIdForTelemetry, setSelectedDroneIdForTelemetry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const droneTelemetryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const [droneTelemetryData, setDroneTelemetryData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [battleDroneTelemetryData, setBattleDroneTelemetryData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const launchAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timeoutRefsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const statusUpdateIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [autoDispatchCountdown, setAutoDispatchCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const autoDispatchTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [autoDispatchBlocked, setAutoDispatchBlocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const sensorsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const dronesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [showController, setShowController] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showVideo, setShowVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // =========================
    // Battle Planner
    // =========================
    const [battleDroneId, setBattleDroneId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [battleSensorId, setBattleSensorId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [battleStarted, setBattleStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const battleDrone = BATTLE_DRONES.find((d)=>d.id === battleDroneId);
    const battleSensor = sensors.find((s)=>s.id === battleSensorId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            if (!battleStarted || !battleDrone || !battleSensor) return;
            const pos = battleDronePositions[battleDrone.id];
            if (!pos) return;
            const distance = Math.sqrt(Math.pow(pos.lat - battleSensor.latitude, 2) + Math.pow(pos.lng - battleSensor.longitude, 2)) * 111000;
            if (distance <= REACH_RADIUS_METERS) {
                stopLaunchSound();
                setBattleStarted(false);
                toast({
                    title: "🎯 Mission Completed",
                    description: `${battleDrone.droneId} successfully reached ${battleSensor.sensorId}`
                });
            }
        }
    }["MapView.useEffect"], [
        battleStarted,
        battleDrone,
        battleSensor,
        battleDronePositions,
        toast
    ]);
    // const liveTelemetry = selectedDroneIdForTelemetry
    //   ? (droneTelemetryData[selectedDroneIdForTelemetry] ?? null)
    //   : null;
    const liveTelemetry = selectedDroneIdForTelemetry ? {
        ...droneTelemetryData[selectedDroneIdForTelemetry],
        videoLink: drones.find((d)=>d.id === selectedDroneIdForTelemetry)?.videoLink ?? null
    } : null;
    const clearFocusedSensor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MapView.useCallback[clearFocusedSensor]": ()=>{
            setFocusedSensorId(null);
            setSensorSearchResults([]);
            setSensorSearchInput("");
        }
    }["MapView.useCallback[clearFocusedSensor]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            droneTelemetryRef.current = droneTelemetryData;
        }
    }["MapView.useEffect"], [
        droneTelemetryData
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            launchAudioRef.current = new Audio("/sounds/attack2.mp3");
            return ({
                "MapView.useEffect": ()=>{
                    launchAudioRef.current?.pause();
                    if (launchAudioRef.current) {
                        launchAudioRef.current.currentTime = 0;
                    }
                }
            })["MapView.useEffect"];
        }
    }["MapView.useEffect"], []);
    const playLaunchSound = ()=>{
        if (!launchAudioRef.current) return;
        launchAudioRef.current.currentTime = 0;
        launchAudioRef.current.play().catch(()=>{});
    };
    const stopLaunchSound = ()=>{
        if (!launchAudioRef.current) return;
        launchAudioRef.current.pause();
        launchAudioRef.current.currentTime = 0;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            if (mode !== "battle-planner") {
                stopLaunchSound();
            }
        }
    }["MapView.useEffect"], [
        mode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            const handleVisibility = {
                "MapView.useEffect.handleVisibility": ()=>{
                    if (document.hidden) {
                        stopLaunchSound();
                    }
                }
            }["MapView.useEffect.handleVisibility"];
            document.addEventListener("visibilitychange", handleVisibility);
            return ({
                "MapView.useEffect": ()=>document.removeEventListener("visibilitychange", handleVisibility)
            })["MapView.useEffect"];
        }
    }["MapView.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            const handleKeyDown = {
                "MapView.useEffect.handleKeyDown": (e)=>{
                    if (e.key === "Escape") {
                        // Clear focused sensor
                        setFocusedSensorId(null);
                        // Clear search UI (optional but UX-correct)
                        setSensorSearchResults([]);
                        setSensorSearchInput("");
                    }
                }
            }["MapView.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "MapView.useEffect": ()=>{
                    window.removeEventListener("keydown", handleKeyDown);
                }
            })["MapView.useEffect"];
        }
    }["MapView.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            const fetchActiveMap = {
                "MapView.useEffect.fetchActiveMap": async ()=>{
                    setLoadingMapConfig(true);
                    try {
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$maps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveMap"])();
                        if (res.success && res.data) {
                            setMapConfig(res.data);
                            setCurrentZoom(res.data.minZoom);
                        } else {
                            setError(res.error || "No active offline map configured");
                        }
                    } catch (err) {
                        console.error("Error loading active map:", err);
                        setError("Failed to load active map");
                    } finally{
                        setLoadingMapConfig(false);
                    }
                }
            }["MapView.useEffect.fetchActiveMap"];
            fetchActiveMap();
        }
    }["MapView.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            const loadSensors = {
                "MapView.useEffect.loadSensors": async ()=>{
                    setLoadingSensors(true);
                    try {
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$sensors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllSensors"])({
                            include: true,
                            page: 1,
                            limit: 10000
                        });
                        if (res.success && res.data) {
                            setSensors(res.data);
                        } else {
                            toast({
                                title: "Error",
                                description: res.error || "Failed to load sensors",
                                variant: "destructive"
                            });
                        }
                    } catch (err) {
                        console.error("Error loading sensors:", err);
                        toast({
                            title: "Error",
                            description: "Failed to load sensors",
                            variant: "destructive"
                        });
                    } finally{
                        setLoadingSensors(false);
                    }
                }
            }["MapView.useEffect.loadSensors"];
            const loadSmartMeters = {
                "MapView.useEffect.loadSmartMeters": async ()=>{
                    setLoadingSmartMeters(true);
                    try {
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$smartmeter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllSmartMeters"])({
                            include: true,
                            page: 1,
                            limit: 10000
                        });
                        console.log(res);
                        if (res.success && res.data && res.data.length !== 0) {
                            setSmartMeters(res.data);
                        } else {
                        // toast({
                        //   title: "Error",
                        //   description: res.error || "No Smart Meters in the databse",
                        //   variant: "destructive",
                        // });
                        }
                    } catch (err) {
                        console.error("Error loading smartMeters:", err);
                        toast({
                            title: "Error",
                            description: "Failed to load smartMeters",
                            variant: "destructive"
                        });
                    } finally{
                        setLoadingSmartMeters(false);
                    }
                }
            }["MapView.useEffect.loadSmartMeters"];
            loadSensors();
            if (mode === "sensor-health") {
                loadSmartMeters();
            }
        }
    }["MapView.useEffect"], [
        toast
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            sensorsRef.current = sensors;
        }
    }["MapView.useEffect"], [
        sensors
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            const loadDrones = {
                "MapView.useEffect.loadDrones": async ()=>{
                    setLoadingDrones(true);
                    try {
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$droneos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllDroneOS"])({
                            include: true
                        });
                        if (res.success && res.data) {
                            setDrones(res.data);
                            const initialStatus = {};
                            const initialPositions = {};
                            console.table(res.data.map({
                                "MapView.useEffect.loadDrones": (d)=>({
                                        id: d.id,
                                        droneId: d.droneId,
                                        name: d.droneOSName
                                    })
                            }["MapView.useEffect.loadDrones"]));
                            res.data.forEach({
                                "MapView.useEffect.loadDrones": (drone)=>{
                                    initialStatus[drone.id] = {
                                        id: drone.id,
                                        droneId: drone.droneId,
                                        isLive: false,
                                        lastUpdateTime: 0,
                                        isStale: false,
                                        hasAlert: false,
                                        hasEverReceivedTelemetry: false
                                    };
                                    if (drone.latitude != null && drone.longitude != null) {
                                        initialPositions[drone.id] = {
                                            droneDbId: drone.id,
                                            droneId: drone.droneId,
                                            lat: drone.latitude,
                                            lng: drone.longitude,
                                            alt: null,
                                            ts: Date.now()
                                        };
                                    }
                                }
                            }["MapView.useEffect.loadDrones"]);
                            setDroneStatus(initialStatus);
                            setLiveDronePositions(initialPositions);
                            const initialBattlePositions = {};
                            BATTLE_DRONES.forEach({
                                "MapView.useEffect.loadDrones": (drone)=>{
                                    initialBattlePositions[drone.id] = {
                                        droneDbId: drone.id,
                                        droneId: drone.id,
                                        lat: drone.latitude,
                                        lng: drone.longitude,
                                        alt: 0,
                                        ts: Date.now()
                                    };
                                }
                            }["MapView.useEffect.loadDrones"]);
                            setBattleDronePositions(initialBattlePositions);
                        }
                    } catch (err) {
                        console.error("[MapView] Error loading drones:", err);
                        toast({
                            title: "Error",
                            description: "Failed to load drones",
                            variant: "destructive"
                        });
                    } finally{
                        setLoadingDrones(false);
                    }
                }
            }["MapView.useEffect.loadDrones"];
            loadDrones();
        }
    }["MapView.useEffect"], [
        toast
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            if (autoDispatchBlocked) {
                setModalOpen(false);
            }
        }
    }["MapView.useEffect"], [
        autoDispatchBlocked
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            dronesRef.current = drones;
        }
    }["MapView.useEffect"], [
        drones
    ]);
    //Scanning Handelling
    const handleScanSensors = async ()=>{
        try {
            setScanning(true);
            const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:5001")}/api/camera/status/activeShuruMode`, {
                method: "GET"
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Scan failed");
            }
            const sensorRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$sensors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllSensors"])({
                include: true,
                page: 1,
                limit: 10000
            });
            if (sensorRes.success && sensorRes.data) {
                setSensors(sensorRes.data);
            }
            toast({
                title: "Success",
                description: "Sensor scan completed"
            });
        } catch (error) {
            toast({
                title: "Error",
                description: error.message,
                variant: "destructive"
            });
        } finally{
            setScanning(false);
        }
    };
    const handleAlertDispatch = (alert)=>{
        const sensor = sensorsRef.current.find((s)=>s.id === alert.sensorDbId);
        if (!sensor || sensor.sendDrone !== "Yes") {
            return;
        }
        // un-comment this when the areaId should be same of the drone and the target sensor
        // const dronesInArea = dronesRef.current.filter(
        //   (d) => d.areaId === sensor.areaId,
        // );
        const dronesInArea = dronesRef.current;
        const flyingDrone = dronesInArea.find((d)=>{
            const telemetry = droneTelemetryRef.current[d.id];
            return telemetry?.status === "on_air";
        });
        if (flyingDrone) {
            showAutoDispatchBlockedModal(sensor, alert, `Auto-dispatch is disabled because ${flyingDrone.droneOSName} is currently in the air. Please wait for the drone to land.`);
            // neutraliseAlert(alert.id, "auto_skipped:drone_flying");
            return;
        }
        const availableDrone = dronesInArea.find((d)=>{
            const telemetry = droneTelemetryRef.current[d.id];
            return telemetry?.status !== "on_air";
        });
        if (!availableDrone) {
            showAutoDispatchBlockedModal(sensor, alert, "No drones are currently available in this area. All drones are assigned to other missions.");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$alerts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["neutraliseAlert"])(alert.id, "auto_skipped:no_available_drone");
            return;
        }
        if (isDroneBusy(availableDrone.id)) {
            showAutoDispatchBlockedModal(sensor, alert, "Auto-dispatch blocked because the drone is currently flying or executing another mission.");
            return;
        }
        startAutoDispatchCountdown(sensor, alert, availableDrone.id);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            const loadAlerts = {
                "MapView.useEffect.loadAlerts": async ()=>{
                    setLoadingAlerts(true);
                    try {
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$alerts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveAlerts"])();
                        if (res.success && res.data) {
                            setActiveAlerts(res.data);
                        } else {
                            toast({
                                title: "Error",
                                description: res.error || "Failed to load active alerts",
                                variant: "destructive"
                            });
                        }
                    } catch (err) {
                        console.error("Error loading active alerts:", err);
                        toast({
                            title: "Error",
                            description: "Failed to load active alerts",
                            variant: "destructive"
                        });
                    } finally{
                        setLoadingAlerts(false);
                    }
                }
            }["MapView.useEffect.loadAlerts"];
            loadAlerts();
            const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(API_BASE_URL, {
                reconnection: true,
                reconnectionDelay: 1000,
                reconnectionDelayMax: 5000,
                reconnectionAttempts: 5
            });
            s.on("drone_position", {
                "MapView.useEffect": (pos)=>{
                    if (mode === "battle-planner") {
                        setBattleDronePositions({
                            "MapView.useEffect": (prev)=>({
                                    ...prev,
                                    [pos.id]: pos
                                })
                        }["MapView.useEffect"]);
                    } else {
                        setLiveDronePositions({
                            "MapView.useEffect": (prev)=>({
                                    ...prev,
                                    [pos.id]: pos
                                })
                        }["MapView.useEffect"]);
                    }
                    setDroneStatus({
                        "MapView.useEffect": (prev)=>({
                                ...prev,
                                [pos.id]: {
                                    ...prev[pos.id],
                                    isLive: true,
                                    lastUpdateTime: Date.now(),
                                    connectionLossTime: undefined,
                                    isStale: false,
                                    hasAlert: false
                                }
                            })
                    }["MapView.useEffect"]);
                }
            }["MapView.useEffect"]);
            s.on("sensor_status_updated", {
                "MapView.useEffect": (payload)=>{
                    setSensors({
                        "MapView.useEffect": (prev)=>prev.map({
                                "MapView.useEffect": (sensor)=>sensor.sensorId === payload.sensorId ? {
                                        ...sensor,
                                        activeShuruMode: payload.status
                                    } : sensor
                            }["MapView.useEffect"])
                    }["MapView.useEffect"]);
                }
            }["MapView.useEffect"]);
            s.on("drone_telemetry", {
                "MapView.useEffect": (telemetry)=>{
                    // console.log("Telemetry:", telemetry);
                    setDroneStatus({
                        "MapView.useEffect": (prev)=>{
                            console.log("Telemetry:", telemetry.droneDbId, telemetry.lat, telemetry.lng);
                            const prevStatus = prev[telemetry.droneDbId];
                            // 🔑 Check if drone just landed
                            const isNowGrounded = telemetry.status === "ground";
                            // 🔑 First-ever telemetry?
                            const firstTelemetry = !prevStatus?.hasEverReceivedTelemetry;
                            // 🔑 Clear timeout if drone is grounded
                            if (isNowGrounded && timeoutRefsRef.current[telemetry.droneDbId]) {
                                clearTimeout(timeoutRefsRef.current[telemetry.droneDbId]);
                                delete timeoutRefsRef.current[telemetry.droneDbId];
                            }
                            // 🔑 Arm timeout ONLY when telemetry exists
                            if (firstTelemetry && !isNowGrounded) {
                                if (timeoutRefsRef.current[telemetry.droneDbId]) {
                                    clearTimeout(timeoutRefsRef.current[telemetry.droneDbId]);
                                }
                                timeoutRefsRef.current[telemetry.droneDbId] = setTimeout({
                                    "MapView.useEffect": ()=>{
                                        setDroneStatus({
                                            "MapView.useEffect": (inner)=>({
                                                    ...inner,
                                                    [telemetry.droneDbId]: {
                                                        ...inner[telemetry.droneDbId],
                                                        isLive: false,
                                                        connectionLossTime: inner[telemetry.droneDbId].connectionLossTime ?? Date.now()
                                                    }
                                                })
                                        }["MapView.useEffect"]);
                                    }
                                }["MapView.useEffect"], DRONE_LOCATION_TIMEOUT_MS);
                            }
                            const wasLost = prevStatus?.connectionLossTime && Date.now() - prevStatus.connectionLossTime > STALE_DATA_THRESHOLD_MS;
                            return {
                                ...prev,
                                [telemetry.droneDbId]: {
                                    ...prevStatus,
                                    hasEverReceivedTelemetry: !isNowGrounded,
                                    isLive: !isNowGrounded,
                                    lastUpdateTime: telemetry.ts,
                                    connectionLossTime: undefined,
                                    isStale: false,
                                    hasAlert: false,
                                    recovered: Boolean(wasLost)
                                }
                            };
                        }
                    }["MapView.useEffect"]);
                    // Positions
                    const updatePosition = {
                        "MapView.useEffect.updatePosition": (prev)=>({
                                ...prev,
                                [telemetry.droneDbId]: {
                                    droneDbId: telemetry.droneDbId,
                                    droneId: telemetry.droneId,
                                    lat: telemetry.lat,
                                    lng: telemetry.lng,
                                    alt: telemetry.alt,
                                    ts: telemetry.ts
                                }
                            })
                    }["MapView.useEffect.updatePosition"];
                    setLiveDronePositions(updatePosition);
                    // Telemetry payload
                    // setDroneTelemetryData((prev) => ({
                    //   ...prev,
                    //   [telemetry.droneDbId]: telemetry,
                    // }));
                    setDroneTelemetryData({
                        "MapView.useEffect": (prev)=>{
                            const drone = dronesRef.current.find({
                                "MapView.useEffect.drone": (d)=>d.id === telemetry.droneDbId
                            }["MapView.useEffect.drone"]);
                            return {
                                ...prev,
                                [telemetry.droneDbId]: {
                                    ...telemetry,
                                    videoLink: drone?.videoLink ?? null
                                }
                            };
                        }
                    }["MapView.useEffect"]);
                }
            }["MapView.useEffect"]);
            s.on("battle_drone_telemetry", {
                "MapView.useEffect": (telemetry)=>{
                    setBattleDronePositions({
                        "MapView.useEffect": (prev)=>({
                                ...prev,
                                [telemetry.droneDbId]: {
                                    droneDbId: telemetry.droneDbId,
                                    droneId: telemetry.droneId,
                                    lat: telemetry.lat,
                                    lng: telemetry.lng,
                                    alt: telemetry.alt,
                                    ts: telemetry.ts
                                }
                            })
                    }["MapView.useEffect"]);
                    setBattleDroneStatus({
                        "MapView.useEffect": (prev)=>({
                                ...prev,
                                [telemetry.droneDbId]: {
                                    ...prev[telemetry.droneDbId] ?? {},
                                    hasEverReceivedTelemetry: true,
                                    isLive: true,
                                    lastUpdateTime: telemetry.ts,
                                    connectionLossTime: undefined,
                                    isStale: false,
                                    hasAlert: false,
                                    recovered: false
                                }
                            })
                    }["MapView.useEffect"]);
                    setBattleDroneTelemetryData({
                        "MapView.useEffect": (prev)=>({
                                ...prev,
                                [telemetry.droneDbId]: telemetry
                            })
                    }["MapView.useEffect"]);
                }
            }["MapView.useEffect"]);
            s.on("connect", {
                "MapView.useEffect": ()=>{
                    setSocketConnected(true);
                }
            }["MapView.useEffect"]);
            s.on("disconnect", {
                "MapView.useEffect": ()=>{
                    setSocketConnected(false);
                    setDroneStatus({
                        "MapView.useEffect": (prev)=>{
                            const updated = {
                                ...prev
                            };
                            Object.keys(updated).forEach({
                                "MapView.useEffect": (droneId)=>{
                                    updated[droneId] = {
                                        ...updated[droneId],
                                        isLive: false,
                                        connectionLossTime: Date.now(),
                                        isStale: true,
                                        hasAlert: true
                                    };
                                }
                            }["MapView.useEffect"]);
                            return updated;
                        }
                    }["MapView.useEffect"]);
                    Object.values(timeoutRefsRef.current).forEach(clearTimeout);
                    timeoutRefsRef.current = {};
                    setMarkerUpdateKey({
                        "MapView.useEffect": (k)=>k + 1
                    }["MapView.useEffect"]);
                }
            }["MapView.useEffect"]);
            s.on("alert_active", {
                "MapView.useEffect": (alert)=>{
                    setActiveAlerts({
                        "MapView.useEffect": (prev)=>{
                            if (prev.some({
                                "MapView.useEffect": (a)=>a.id === alert.id
                            }["MapView.useEffect"])) return prev;
                            return [
                                alert,
                                ...prev
                            ];
                        }
                    }["MapView.useEffect"]);
                    handleAlertDispatch(alert);
                    setMarkerUpdateKey({
                        "MapView.useEffect": (k)=>k + 1
                    }["MapView.useEffect"]);
                }
            }["MapView.useEffect"]);
            s.on("alert_created", {
                "MapView.useEffect": (alert)=>{
                    setActiveAlerts({
                        "MapView.useEffect": (prev)=>{
                            if (prev.some({
                                "MapView.useEffect": (a)=>a.id === alert.id
                            }["MapView.useEffect"])) return prev;
                            return [
                                alert,
                                ...prev
                            ];
                        }
                    }["MapView.useEffect"]);
                    handleAlertDispatch(alert);
                    setMarkerUpdateKey({
                        "MapView.useEffect": (k)=>k + 1
                    }["MapView.useEffect"]);
                }
            }["MapView.useEffect"]);
            s.on("alert_resolved", {
                "MapView.useEffect": (payload)=>{
                    setActiveAlerts({
                        "MapView.useEffect": (prev)=>prev.filter({
                                "MapView.useEffect": (a)=>a.id !== payload.id
                            }["MapView.useEffect"])
                    }["MapView.useEffect"]);
                    setSelectedAlert({
                        "MapView.useEffect": (current)=>current && current.id === payload.id ? null : current
                    }["MapView.useEffect"]);
                    setModalOpen({
                        "MapView.useEffect": (open)=>selectedAlert && selectedAlert.id === payload.id ? false : open
                    }["MapView.useEffect"]);
                    setMarkerUpdateKey({
                        "MapView.useEffect": (k)=>k + 1
                    }["MapView.useEffect"]);
                }
            }["MapView.useEffect"]);
            s.on("alert_updated", {
                "MapView.useEffect": (alert)=>{
                    setActiveAlerts({
                        "MapView.useEffect": (prev)=>{
                            const filtered = prev.filter({
                                "MapView.useEffect.filtered": (a)=>a.id !== alert.id
                            }["MapView.useEffect.filtered"]);
                            if (alert.status === "ACTIVE") return [
                                alert,
                                ...filtered
                            ];
                            return filtered;
                        }
                    }["MapView.useEffect"]);
                    setSelectedAlert({
                        "MapView.useEffect": (prev)=>{
                            if (!prev) return prev;
                            if (prev.id !== alert.id) return prev;
                            return alert.status === "ACTIVE" ? alert : null;
                        }
                    }["MapView.useEffect"]);
                    setMarkerUpdateKey({
                        "MapView.useEffect": (k)=>k + 1
                    }["MapView.useEffect"]);
                }
            }["MapView.useEffect"]);
            setSocket(s);
            statusUpdateIntervalRef.current = setInterval(updateAllDroneStatuses, DRONE_STATUS_REFRESH_MS);
            return ({
                "MapView.useEffect": ()=>{
                    s.disconnect();
                    if (statusUpdateIntervalRef.current) {
                        clearInterval(statusUpdateIntervalRef.current);
                    }
                    Object.values(timeoutRefsRef.current).forEach(clearTimeout);
                    timeoutRefsRef.current = {};
                }
            })["MapView.useEffect"];
        }
    }["MapView.useEffect"], []);
    function acknowledgeRecovery(droneId) {
        setDroneStatus((prev)=>({
                ...prev,
                [droneId]: {
                    ...prev[droneId],
                    recovered: false
                }
            }));
    }
    const updateAllDroneStatuses = ()=>{
        setDroneStatus((prev)=>{
            const now = Date.now();
            let hasChanges = false;
            const updated = {
                ...prev
            };
            Object.keys(updated).forEach((droneId)=>{
                const drone = updated[droneId];
                // ✅ Skip timeout check for drones that never received telemetry (includes grounded)
                if (!drone.hasEverReceivedTelemetry) {
                    return;
                }
                if (droneTelemetryData[droneId]?.status === "ground" && !drone.isLive) {
                    // landed drones should not escalate to alert
                    return;
                }
                // ⏱️ Telemetry timeout detection
                if (drone.hasEverReceivedTelemetry && drone.isLive && now - drone.lastUpdateTime > DRONE_LOCATION_TIMEOUT_MS) {
                    updated[droneId] = {
                        ...drone,
                        isLive: false,
                        connectionLossTime: drone.connectionLossTime ?? now
                    };
                    hasChanges = true;
                }
            });
            Object.keys(updated).forEach((droneId)=>{
                const drone = updated[droneId];
                if (drone.hasEverReceivedTelemetry && !drone.isLive && drone.connectionLossTime) {
                    const timeLosses = now - drone.connectionLossTime;
                    const wasStale = drone.isStale;
                    const hadAlert = drone.hasAlert;
                    const newIsStale = timeLosses > STALE_DATA_THRESHOLD_MS;
                    const newHasAlert = timeLosses > CRITICAL_LOSS_THRESHOLD_MS;
                    if (newHasAlert) {
                        // Hard telemetry loss → invalidate mission visually
                        setDroneTelemetryData((prev)=>{
                            const copy = {
                                ...prev
                            };
                            if (copy[droneId]) {
                                copy[droneId] = {
                                    ...copy[droneId],
                                    targetLat: null,
                                    targetLng: null,
                                    status: "ground"
                                };
                            }
                            return copy;
                        });
                    }
                    if (wasStale !== newIsStale || hadAlert !== newHasAlert) {
                        updated[droneId] = {
                            ...drone,
                            isStale: newIsStale,
                            hasAlert: newHasAlert
                        };
                        hasChanges = true;
                    }
                }
            });
            if (hasChanges) {
                setMarkerUpdateKey((k)=>k + 1);
            }
            return hasChanges ? updated : prev;
        });
    };
    const dronesInSameArea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapView.useMemo[dronesInSameArea]": ()=>{
            // un-comment this when the areaId should be same of the drone and the target sensor
            // if (!selectedSensor) return [];
            // return drones.filter((drone) => {
            //   // CASE 1: both use areaId directly
            //   if (drone.areaId && selectedSensor.areaId) {
            //     return drone.areaId === selectedSensor.areaId;
            //   }
            //   // CASE 2: nested area object
            //   // if (drone.area?.id && selectedSensor.area?.id) {
            //   //   return drone.area.id === selectedSensor.area.id;
            //   // }
            //   return false;
            // });
            const battleDrone = drones.find({
                "MapView.useMemo[dronesInSameArea].battleDrone": (d)=>d.id === battleDroneId
            }["MapView.useMemo[dronesInSameArea].battleDrone"]);
            const battleSensor = sensors.find({
                "MapView.useMemo[dronesInSameArea].battleSensor": (s)=>s.id === battleSensorId
            }["MapView.useMemo[dronesInSameArea].battleSensor"]);
            return drones;
        }
    }["MapView.useMemo[dronesInSameArea]"], [
        drones
    ]);
    // }, [drones, selectedSensor]);
    const alertBySensorDbId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapView.useMemo[alertBySensorDbId]": ()=>{
            const map = {};
            for (const alert of activeAlerts){
                if (alert.status === "ACTIVE") {
                    map[alert.sensorDbId] = alert;
                }
            }
            return map;
        }
    }["MapView.useMemo[alertBySensorDbId]"], [
        activeAlerts
    ]);
    function openSensorModal(sensor) {
        if (autoDispatchBlocked) {
            // System state active → no user modal
            return;
        }
        const alert = alertBySensorDbId[sensor.id];
        setSelectedSensor(sensor);
        setSelectedAlert(alert ?? null);
        setSelectedDroneId("");
        setModalOpen(true);
    }
    function closeModal() {
        cancelAutoDispatch();
        setAutoDispatchBlocked(null);
        setModalOpen(false);
        setSelectedSensor(null);
        setSelectedAlert(null);
        setSelectedDroneId("");
        setActionLoading(false);
    }
    const handleDroneMarkerClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MapView.useCallback[handleDroneMarkerClick]": (droneDbId, e)=>{
            // Ctrl / Cmd + click → open in new tab
            if (e?.ctrlKey || e?.metaKey) {
                window.open(`/drones/${droneDbId}`, "_blank");
                return;
            }
            // Double click → navigate
            if (clickTimeoutRef.current) {
                clearTimeout(clickTimeoutRef.current);
                clickTimeoutRef.current = null;
                router.push(`/drones/${droneDbId}`);
                return;
            }
            // Single click → open telemetry (delay to detect double click)
            clickTimeoutRef.current = setTimeout({
                "MapView.useCallback[handleDroneMarkerClick]": ()=>{
                    setSelectedDroneIdForTelemetry(droneDbId);
                    setTelemetryWindowOpen(true);
                    clickTimeoutRef.current = null;
                }
            }["MapView.useCallback[handleDroneMarkerClick]"], CLICK_DELAY_MS);
        }
    }["MapView.useCallback[handleDroneMarkerClick]"], [
        router
    ]);
    function closeTelemetryWindow() {
        setTelemetryWindowOpen(false);
        setSelectedDroneIdForTelemetry(null);
        setShowController(false);
    }
    async function handleDropPayload() {
        if (!selectedDroneIdForTelemetry) return;
        toast({
            title: "Payload dropped",
            description: `Payload dropped for drone ${selectedDroneIdForTelemetry}`
        });
    }
    async function handleRecall() {
        if (!selectedDroneIdForTelemetry) return;
        toast({
            title: "Recall initiated",
            description: `Recall command sent to ${selectedDroneIdForTelemetry}`
        });
    }
    const handleSendDrone = async ()=>{
        if (!selectedDroneId) {
            toast({
                title: "Select a drone",
                description: "Please choose a drone to dispatch.",
                variant: "destructive"
            });
            return;
        }
        if (isDroneBusy(selectedDroneId)) {
            toast({
                title: "Drone unavailable",
                description: "Drone is currently in the air. Wait until it reaches the target.",
                variant: "destructive"
            });
            return;
        }
        if (!selectedSensor) return;
        const { latitude, longitude } = selectedSensor;
        if (typeof latitude !== "number" || typeof longitude !== "number") {
            toast({
                title: "Invalid target location",
                description: "Sensor coordinates are missing or invalid.",
                variant: "destructive"
            });
            return;
        }
        setActionLoading(true);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$droneCommand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendDrone"])({
                mode: "operations",
                droneDbId: selectedDroneId,
                sensorId: selectedSensor.sensorId,
                alertId: selectedAlert?.id,
                targetLatitude: latitude,
                targetLongitude: longitude
            });
            console.log(res);
            if (!res.success) {
                throw new Error(res.error || "Failed to send drone");
            }
            toast({
                title: "Drone dispatched",
                description: selectedAlert ? `Drone sent for alert (Flight ID: ${res.flightId})` : `Drone sent for manual mission (Flight ID: ${res.flightId})`
            });
            closeModal();
        } catch (err) {
            console.error("Error sending drone:", err);
            toast({
                title: "Error",
                description: err instanceof Error ? err.message : "Failed to send drone",
                variant: "destructive"
            });
        } finally{
            setActionLoading(false);
        }
    };
    function isDroneBusy(droneId) {
        // const telemetry = droneTelemetryData[droneId];
        // return telemetry?.status === "on_air";
        const telemetry = droneTelemetryData[droneId];
        const status = droneStatus[droneId];
        if (status?.recovered) return true;
        // 🚫 If telemetry explicitly says flying → block
        if (telemetry?.status === "on_air") return true;
        if (telemetry?.status === "ground") return false;
        if (status?.hasEverReceivedTelemetry && !status?.isLive) return true;
        // ✅ Otherwise ALWAYS allow command
        return false;
    }
    function showAutoDispatchBlockedModal(sensor, alert, reason) {
        setAutoDispatchBlocked({
            sensor,
            alert,
            reason
        });
    }
    function startAutoDispatchCountdown(sensor, alert, droneId) {
        const telemetry = droneTelemetryRef.current[droneId];
        if (telemetry?.status === "on_air") {
            showAutoDispatchBlockedModal(sensor, alert, "Drone is currently flying. Auto-dispatch aborted.");
            return;
        }
        // Open modal with everything pre-filled
        setSelectedSensor(sensor);
        setSelectedAlert(alert);
        setSelectedDroneId(droneId);
        setModalOpen(true);
        // Clear any existing timer
        if (autoDispatchTimerRef.current) {
            clearInterval(autoDispatchTimerRef.current);
        }
        let remaining = 5; // seconds
        setAutoDispatchCountdown(remaining);
        autoDispatchTimerRef.current = setInterval(async ()=>{
            remaining -= 1;
            setAutoDispatchCountdown(remaining);
            if (remaining <= 0) {
                clearInterval(autoDispatchTimerRef.current);
                autoDispatchTimerRef.current = null;
                setAutoDispatchCountdown(null);
                // Safety check: verify drone is not flying before dispatch
                const droneStatus = droneTelemetryData[droneId];
                if (droneStatus?.status === "on_air") {
                    closeModal();
                    return;
                }
                try {
                    setActionLoading(true);
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$droneCommand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendDrone"])({
                        mode: "operations",
                        droneDbId: droneId,
                        sensorId: sensor.sensorId,
                        alertId: alert.id,
                        targetLatitude: sensor.latitude,
                        targetLongitude: sensor.longitude
                    });
                    toast({
                        title: "Drone auto-dispatched",
                        description: `Drone sent automatically for alert ${alert.id}`
                    });
                    closeModal();
                } catch (err) {
                    toast({
                        title: "Auto-dispatch failed",
                        description: err instanceof Error ? err.message : "Failed to auto-send drone",
                        variant: "destructive"
                    });
                } finally{
                    setActionLoading(false);
                }
            }
        }, 1000);
    }
    function cancelAutoDispatch() {
        if (autoDispatchTimerRef.current) {
            clearInterval(autoDispatchTimerRef.current);
            autoDispatchTimerRef.current = null;
        }
        setAutoDispatchCountdown(null);
        toast({
            title: "Auto-dispatch cancelled",
            description: "Drone was not sent automatically."
        });
    }
    const handleNeutralise = async ()=>{
        if (!selectedAlert) return;
        try {
            setActionLoading(true);
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$alerts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["neutraliseAlert"])(selectedAlert.id, "Neutralised from map");
            if (res.success) {
                toast({
                    title: "Alert neutralised",
                    description: "Alert has been marked as neutralised."
                });
                closeModal();
            } else {
                toast({
                    title: "Error",
                    description: res.error || "Failed to neutralise alert",
                    variant: "destructive"
                });
            }
        } catch (err) {
            console.error("Error neutralising alert:", err);
            toast({
                title: "Error",
                description: "Failed to neutralise alert",
                variant: "destructive"
            });
        } finally{
            setActionLoading(false);
        }
    };
    // const handleOpenVideoFeed = async () => {
    //   if (!selectedSensor) return;
    //   if (!("rtspUrl" in selectedSensor) || !selectedSensor.rtspUrl) {
    //     toast({
    //       title: "No RTSP configured",
    //       description: "This sensor has no RTSP URL configured in the backend.",
    //       variant: "destructive",
    //     });
    //     return;
    //   }
    //   try {
    //     setActionLoading(true);
    //     const res = await openRtspBySensor(selectedSensor.id);
    //     if (res && res.success) {
    //       const extra = res.data
    //         ? ` ${res.data.pid ? `(pid ${res.data.pid})` : ""}`
    //         : "";
    //       toast({
    //         title: "Video Feed launched",
    //         description:
    //           res.message || `Launched video on server.${extra}`.trim(),
    //       });
    //     } else {
    //       const msg =
    //         (res && (res.error || (res.details && String(res.details)))) ||
    //         "Server could not launch the video feed.";
    //       toast({
    //         title: "Failed to launch video",
    //         description: msg,
    //         variant: "destructive",
    //       });
    //     }
    //   } catch (err) {
    //     console.error("Error opening RTSP:", err);
    //     toast({
    //       title: "Network / Server error",
    //       description:
    //         err instanceof Error ? err.message : "Unable to reach backend.",
    //       variant: "destructive",
    //     });
    //   } finally {
    //     setActionLoading(false);
    //   }
    // };
    const handleOpenVideoFeed = ()=>{
        console.log("called");
        setShowVideo((prev)=>!prev);
    };
    const center = mapConfig != null ? [
        (mapConfig.north + mapConfig.south) / 2,
        (mapConfig.east + mapConfig.west) / 2
    ] : null;
    const isLoading = loadingMapConfig || loadingSensors || loadingAlerts;
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full w-full items-center justify-center bg-[#111]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-400",
                children: "Loading map..."
            }, void 0, false, {
                fileName: "[project]/components/map-view.tsx",
                lineNumber: 1393,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/map-view.tsx",
            lineNumber: 1392,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full w-full items-center justify-center bg-[#111] px-4 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-red-400",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/map-view.tsx",
                lineNumber: 1401,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/map-view.tsx",
            lineNumber: 1400,
            columnNumber: 7
        }, this);
    }
    if (!mapConfig || !center) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full w-full items-center justify-center bg-[#111] px-4 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-400",
                children: [
                    "No active offline map configured. Go to",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono",
                        children: "/maps/manage"
                    }, void 0, false, {
                        fileName: "[project]/components/map-view.tsx",
                        lineNumber: 1411,
                        columnNumber: 11
                    }, this),
                    " and create / activate one."
                ]
            }, void 0, true, {
                fileName: "[project]/components/map-view.tsx",
                lineNumber: 1409,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/map-view.tsx",
            lineNumber: 1408,
            columnNumber: 7
        }, this);
    }
    const goToSensor = (sensorId)=>{
        router.push(`/sensors/${sensorId}`);
    };
    const goToSmartMeter = (smartMeterId)=>{
        router.push(`/smartmeter/${smartMeterId}`);
    };
    function goToDronePage(droneDbId) {
        router.push(`/drones/${droneDbId}`);
    }
    const selectedDrone = drones.find((d)=>d.id === selectedDroneIdForTelemetry);
    const battleMapDrones = BATTLE_DRONES.map((drone)=>({
            id: drone.id,
            droneId: drone.id,
            droneOSName: drone.name,
            droneType: drone.type,
            latitude: drone.latitude,
            longitude: drone.longitude,
            color: drone.color,
            icon: drone.icon,
            range: drone.range,
            payload: drone.payload
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            autoDispatchBlocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-4 left-1/2 z-50 w-[90%] max-w-2xl -translate-x-1/2 rounded-lg border border-red-700 bg-red-950/90 p-4 shadow-xl backdrop-blur",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-semibold text-red-300",
                                    children: "🚫 Auto-dispatch blocked"
                                }, void 0, false, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1454,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-xs text-red-200",
                                    children: autoDispatchBlocked.reason
                                }, void 0, false, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1458,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-[11px] text-red-300",
                                    children: [
                                        "Sensor: ",
                                        autoDispatchBlocked.sensor.name,
                                        " (",
                                        autoDispatchBlocked.sensor.sensorId,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1462,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[11px] text-red-300",
                                    children: [
                                        "Alert ID: ",
                                        autoDispatchBlocked.alert.id
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1467,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/map-view.tsx",
                            lineNumber: 1453,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "sm",
                            variant: "outline",
                            className: "border-red-500 text-red-300 hover:bg-red-900/40",
                            onClick: ()=>setAutoDispatchBlocked(null),
                            children: "Acknowledge"
                        }, void 0, false, {
                            fileName: "[project]/components/map-view.tsx",
                            lineNumber: 1472,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/map-view.tsx",
                    lineNumber: 1452,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/map-view.tsx",
                lineNumber: 1451,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 z-10 w-80",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 sm:flex-row max-w-[250px] sm:max-w-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: sensorSearchInput,
                                onChange: (e)=>setSensorSearchInput(e.target.value),
                                onKeyDown: (e)=>{
                                    if (e.key === "Enter") {
                                        const q = sensorSearchInput.trim().toLowerCase();
                                        if (!q) return;
                                        const matches = sensors.filter((s)=>s.name.toLowerCase().includes(q) || s.sensorId.toLowerCase().includes(q));
                                        setSensorSearchResults(matches.slice(0, 15)); // cap results
                                    }
                                },
                                placeholder: "Search sensor → Press Enter",
                                className: "w-full rounded-md border border-[#333] bg-black/80 px-3 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur"
                            }, void 0, false, {
                                fileName: "[project]/components/map-view.tsx",
                                lineNumber: 1485,
                                columnNumber: 11
                            }, this),
                            mode === "sensor-health" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleScanSensors,
                                disabled: scanning,
                                className: " h-10 px-4 bg-white-500/90 hover:bg-blue-300 text-black border border-green-400/30 shadow-lg shadow-green-500/20 text-white flex items-center gap-2 ",
                                children: scanning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-5 w-5 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1522,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanSearch$3e$__["ScanSearch"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1525,
                                            columnNumber: 19
                                        }, this),
                                        "SCAN"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/components/map-view.tsx",
                                lineNumber: 1507,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/map-view.tsx",
                        lineNumber: 1484,
                        columnNumber: 9
                    }, this),
                    sensorSearchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 max-h-72 overflow-auto rounded-md border border-[#333] bg-black/90 text-xs shadow-xl backdrop-blur",
                        children: sensorSearchResults.map((sensor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex w-full flex-col px-3 py-2 text-left hover:bg-[#1f2933]",
                                onClick: ()=>{
                                    setFocusedSensorId(sensor.id);
                                    setSensorSearchResults([]);
                                    setSensorSearchInput("");
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-white",
                                        children: sensor.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/map-view.tsx",
                                        lineNumber: 1545,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-gray-400",
                                        children: [
                                            sensor.sensorId,
                                            " · ",
                                            sensor.sensorType
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/map-view.tsx",
                                        lineNumber: 1546,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, sensor.id, true, {
                                fileName: "[project]/components/map-view.tsx",
                                lineNumber: 1536,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/map-view.tsx",
                        lineNumber: 1534,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/map-view.tsx",
                lineNumber: 1483,
                columnNumber: 7
            }, this),
            scanning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 z-[1100] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute h-40 w-full animate-[scan_2.5s_linear_infinite] bg-gradient-to-b from-green-500/0 via-green-500/20 to-green-500/0"
                        }, void 0, false, {
                            fileName: "[project]/components/map-view.tsx",
                            lineNumber: 1558,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/map-view.tsx",
                        lineNumber: 1557,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 backdrop-blur-[2px] bg-green-500/10"
                    }, void 0, false, {
                        fileName: "[project]/components/map-view.tsx",
                        lineNumber: 1562,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/map-view.tsx",
                lineNumber: 1555,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$map$2d$renderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                mode: mode,
                mapConfig: mapConfig,
                sensors: sensors,
                smartMeters: smartMeters,
                drones: mode === "battle-planner" ? battleMapDrones : drones,
                alertBySensorDbId: alertBySensorDbId,
                dronePositions: mode === "battle-planner" ? battleDronePositions : liveDronePositions,
                droneStatus: mode === "battle-planner" ? battleDroneStatus : droneStatus,
                droneTelemetryData: mode === "battle-planner" ? battleDroneTelemetryData : droneTelemetryData,
                currentZoom: currentZoom,
                socketConnected: socketConnected,
                markerUpdateKey: markerUpdateKey,
                onZoomChange: setCurrentZoom,
                onSensorClick: (sensor)=>{
                    if (mode === "battle-planner") {
                        setBattleSensorId(sensor.id);
                        return;
                    } else {
                        openSensorModal(sensor);
                    }
                },
                onDroneMarkerClick: (droneId, e)=>{
                    if (mode === "battle-planner") {
                        setBattleDroneId(droneId);
                        return;
                    }
                    handleDroneMarkerClick(droneId, e);
                },
                focusedSensorId: focusedSensorId,
                battleMode: mode === "battle-planner",
                selectedBattleDroneId: battleDroneId,
                selectedBattleSensorId: battleSensorId,
                selectedBattleDrone: battleDrone,
                onSmartMeterClick: (smartMeter)=>router.push(`/smartmeter/${smartMeter.id}`)
            }, void 0, false, {
                fileName: "[project]/components/map-view.tsx",
                lineNumber: 1565,
                columnNumber: 7
            }, this),
            mode === "battle-planner" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 z-50 px-6 pb-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-hidden rounded-2xl border border-[#4d5562] bg-[#22262d]/95 shadow-2xl backdrop-blur-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-[#3f4752] bg-[#2a2f37] px-5 py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `h-3 w-3 rounded-full ${battleStarted ? "bg-green-400 animate-pulse" : "bg-yellow-400 animate-pulse"}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1621,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-base font-semibold tracking-[2px] text-gray-100",
                                                children: "ICCS BATTLE PLANNER"
                                            }, void 0, false, {
                                                fileName: "[project]/components/map-view.tsx",
                                                lineNumber: 1630,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1629,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1620,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-6 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-gray-500 uppercase tracking-wider",
                                                    children: "Link"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/map-view.tsx",
                                                    lineNumber: 1639,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-2 w-2 rounded-full bg-green-400 animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/map-view.tsx",
                                                            lineNumber: 1644,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-green-400",
                                                            children: "ONLINE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/map-view.tsx",
                                                            lineNumber: 1646,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/map-view.tsx",
                                                    lineNumber: 1643,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1638,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-8 w-px bg-[#4a5562]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1650,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-gray-500 uppercase tracking-wider",
                                                    children: "Mission"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/map-view.tsx",
                                                    lineNumber: 1653,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `mt-1 font-semibold ${battleStarted ? "text-green-400" : "text-yellow-300"}`,
                                                    children: battleStarted ? "ACTIVE" : "READY"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/map-view.tsx",
                                                    lineNumber: 1657,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1652,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1637,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/map-view.tsx",
                            lineNumber: 1618,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-7 gap-3 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "mb-1 block text-[10px] uppercase tracking-wider text-gray-400",
                                            children: "Drone"
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1675,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: battleDroneId,
                                            onChange: (e)=>setBattleDroneId(e.target.value),
                                            className: "w-full rounded-md border border-[#505865] bg-[#313844] px-3 py-2 text-sm text-gray-100 outline-none focus:border-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/map-view.tsx",
                                                    lineNumber: 1684,
                                                    columnNumber: 19
                                                }, this),
                                                BATTLE_DRONES.map((drone)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: drone.id,
                                                        children: drone.name
                                                    }, drone.id, false, {
                                                        fileName: "[project]/components/map-view.tsx",
                                                        lineNumber: 1687,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1679,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1674,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "mb-1 block text-[10px] uppercase tracking-wider text-gray-400",
                                            children: "Target"
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1697,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: battleSensorId,
                                            onChange: (e)=>setBattleSensorId(e.target.value),
                                            className: "w-full rounded-md border border-[#505865] bg-[#313844] px-3 py-2 text-sm text-gray-100 outline-none focus:border-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/map-view.tsx",
                                                    lineNumber: 1706,
                                                    columnNumber: 19
                                                }, this),
                                                sensors.map((sensor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: sensor.id,
                                                        children: sensor.sensorId
                                                    }, sensor.id, false, {
                                                        fileName: "[project]/components/map-view.tsx",
                                                        lineNumber: 1709,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1701,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1696,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg border border-[#4d5562] bg-[#313844] px-3 py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] uppercase tracking-widest text-gray-400",
                                            children: "Range"
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1719,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-xl font-semibold text-cyan-300",
                                            children: battleDrone ? `${battleDrone.range / 1000} km` : "--"
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1723,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1718,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg border border-[#4d5562] bg-[#313844] px-3 py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] uppercase tracking-widest text-gray-400",
                                            children: "ETA"
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1731,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-xl font-semibold text-green-400",
                                            children: battleDrone && battleSensor ? "4 min." : "--"
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1735,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1730,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg border border-[#4d5562] bg-[#313844] px-3 py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] uppercase tracking-widest text-gray-400",
                                            children: "Battery"
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1743,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-xl font-semibold text-yellow-300",
                                            children: "94%"
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1747,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1742,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg border border-[#4d5562] bg-[#313844] px-3 py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] uppercase tracking-widest text-gray-400",
                                            children: "Mission"
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1755,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-lg font-semibold text-white",
                                            children: battleDrone ? battleDrone.type === "Kamikaze" ? "Strike" : battleDrone.type === "Recon" ? "Recon" : "Intercept" : "--"
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1759,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1754,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        disabled: !battleDrone || !battleSensor || battleStarted,
                                        onClick: async ()=>{
                                            if (!battleDrone || !battleSensor) return;
                                            // Play sound only in Battle Planner
                                            playLaunchSound();
                                            setBattleStarted(true);
                                            try {
                                                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$droneCommand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendDrone"])({
                                                    mode: "battle",
                                                    droneDbId: battleDrone.id,
                                                    sensorId: battleSensor.sensorId,
                                                    targetLatitude: battleSensor.latitude,
                                                    targetLongitude: battleSensor.longitude
                                                });
                                                if (!res.success) throw new Error(res.error);
                                                toast({
                                                    title: "Mission Started",
                                                    description: `${battleDrone.droneId} dispatched`
                                                });
                                            } catch (err) {
                                                setBattleStarted(false);
                                                toast({
                                                    title: "Mission Failed",
                                                    description: err instanceof Error ? err.message : "Failed",
                                                    variant: "destructive"
                                                });
                                            }
                                        },
                                        className: `h-11 w-full rounded-lg border font-semibold tracking-wider transition-all ${battleStarted ? "border-green-500 bg-green-600 text-white" : "border-gray-500 bg-[#3a414d] text-gray-100 hover:bg-[#48515f]"} disabled:cursor-not-allowed disabled:opacity-40`,
                                        children: battleStarted ? "MISSION ACTIVE" : "LAUNCH"
                                    }, void 0, false, {
                                        fileName: "[project]/components/map-view.tsx",
                                        lineNumber: 1772,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1771,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/map-view.tsx",
                            lineNumber: 1669,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/map-view.tsx",
                    lineNumber: 1614,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/map-view.tsx",
                lineNumber: 1613,
                columnNumber: 9
            }, this),
            mode === "operations" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 left-9 z-[1200] flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: toggleRecording,
                        disabled: isUploading,
                        className: `
  relative
  flex h-14 w-14 items-center justify-center
  rounded-full
  shadow-lg
  transition-all duration-300
  ${isListening ? "bg-red-600 scale-105" : isUploading ? "bg-yellow-500 animate-pulse" : "bg-gray-700 hover:scale-105"}
`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `absolute inset-0 rounded-full ${isListening ? "animate-ping bg-red-100/30" : "bg-cyan-400/20 animate-pulse"}`
                            }, void 0, false, {
                                fileName: "[project]/components/map-view.tsx",
                                lineNumber: 1843,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                className: "relative z-10 h-6 w-6 text-white"
                            }, void 0, false, {
                                fileName: "[project]/components/map-view.tsx",
                                lineNumber: 1851,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/map-view.tsx",
                        lineNumber: 1824,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-2 text-[10px] text-gray-300",
                        children: isUploading ? "Processing..." : isListening ? "Listening..." : "Voice"
                    }, void 0, false, {
                        fileName: "[project]/components/map-view.tsx",
                        lineNumber: 1854,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/map-view.tsx",
                lineNumber: 1823,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: modalOpen && autoDispatchBlocked === null,
                onOpenChange: (open)=>{
                    if (!open && !autoDispatchBlocked) {
                        closeModal();
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "border-[#333] bg-[#111] text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    onClick: ()=>goToSensor(selectedSensor?.id || ""),
                                    className: "text-lg font-semibold hover:cursor-pointer hover:underline",
                                    children: selectedSensor ? selectedSensor.name : "Sensor"
                                }, void 0, false, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1874,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                            className: "text-xs text-gray-400",
                                            children: [
                                                selectedSensor?.sensorId,
                                                " ·",
                                                " ",
                                                selectedSensor?.sensorType || "Unknown type"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1881,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            className: `w-fit px-2 rounded-xl ${selectedSensor?.addedBy.toLowerCase() ? "bg-yellow-400 text-black " : "bg-red-600/20 text-red-400 hover:bg-red-600/30 "}`,
                                            children: selectedSensor?.addedBy || "N/A"
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1885,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1880,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/map-view.tsx",
                            lineNumber: 1873,
                            columnNumber: 11
                        }, this),
                        autoDispatchBlocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-md border border-red-700 bg-red-950/40 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-semibold text-red-300",
                                    children: "🚫 Auto-dispatch blocked"
                                }, void 0, false, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1899,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-xs text-red-200",
                                    children: autoDispatchBlocked.reason
                                }, void 0, false, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1903,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 text-[11px] text-red-300",
                                    children: [
                                        "Sensor: ",
                                        autoDispatchBlocked.sensor.name,
                                        " (",
                                        autoDispatchBlocked.sensor.sensorId,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1907,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-[11px] text-red-300",
                                    children: [
                                        "Alert ID: ",
                                        autoDispatchBlocked.alert.id
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1912,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/map-view.tsx",
                            lineNumber: 1898,
                            columnNumber: 13
                        }, this),
                        autoDispatchCountdown !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-md border border-amber-500 bg-amber-950/40 p-3 text-xs text-amber-200",
                            children: [
                                "🚨 Auto-dispatching drone in",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold",
                                    children: [
                                        autoDispatchCountdown,
                                        "s"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1921,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        variant: "outline",
                                        className: "border-amber-500 text-amber-300 hover:bg-amber-900/40 bg-transparent",
                                        onClick: cancelAutoDispatch,
                                        children: "Cancel Auto Send"
                                    }, void 0, false, {
                                        fileName: "[project]/components/map-view.tsx",
                                        lineNumber: 1923,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1922,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/map-view.tsx",
                            lineNumber: 1919,
                            columnNumber: 13
                        }, this),
                        selectedSensor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 py-2 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-md border border-[#333] bg-[#1a1a1a] p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-xs text-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Lat: ",
                                                        selectedSensor.latitude.toFixed(5),
                                                        ", Lon:",
                                                        " ",
                                                        selectedSensor.longitude.toFixed(5)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/map-view.tsx",
                                                    lineNumber: 1939,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Status: ",
                                                        selectedSensor.status
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/map-view.tsx",
                                                    lineNumber: 1943,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1938,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-xs text-gray-400",
                                            children: [
                                                "Area: ",
                                                selectedSensor.area?.name || "Unassigned"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1945,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1937,
                                    columnNumber: 15
                                }, this),
                                selectedAlert ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-md border border-red-700 bg-red-950/40 p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-semibold text-red-300",
                                            children: "Active Alert"
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1952,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 text-sm text-red-100",
                                            children: selectedAlert.message
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1955,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-[11px] text-red-200",
                                            children: [
                                                "Created at:",
                                                " ",
                                                new Date(selectedAlert.createdAt).toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1958,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1951,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-md border border-[#333] bg-[#18181b] p-3 text-xs text-gray-300",
                                    children: [
                                        "No active alert on this sensor.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1966,
                                            columnNumber: 19
                                        }, this),
                                        "You can still manually dispatch a drone from here."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1964,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-300",
                                            children: "Select Drone to Dispatch:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1972,
                                            columnNumber: 17
                                        }, this),
                                        loadingDrones ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 rounded-md border border-[#333] bg-[#111] p-2 text-xs text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "h-3 w-3 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/map-view.tsx",
                                                    lineNumber: 1978,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Loading drones..."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/map-view.tsx",
                                                    lineNumber: 1979,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1977,
                                            columnNumber: 19
                                        }, this) : dronesInSameArea.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-md border border-amber-700 bg-amber-950/40 p-3 text-xs text-amber-200",
                                            children: "No drones available in this sensor's area."
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1982,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: selectedDroneId,
                                                    onChange: (e)=>{
                                                        setSelectedDroneId(e.target.value);
                                                    },
                                                    disabled: actionLoading,
                                                    className: "h-9 w-full rounded-md border border-[#333] bg-[#111] px-3 text-xs text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#2563EB]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            className: "bg-[#111] text-gray-400",
                                                            children: "Select a drone"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/map-view.tsx",
                                                            lineNumber: 1995,
                                                            columnNumber: 23
                                                        }, this),
                                                        dronesInSameArea.map((drone)=>{
                                                            const telemetry = droneTelemetryData[drone.id];
                                                            const status = droneStatus[drone.id];
                                                            let availabilityLabel = "● Ready";
                                                            if (telemetry?.status === "on_air") {
                                                                availabilityLabel = "✈ In Flight";
                                                            } else if (status?.recovered) {
                                                                availabilityLabel = "⚠ Telemetry Recovering";
                                                            } else if (!status?.hasEverReceivedTelemetry) {
                                                                availabilityLabel = "● Ready";
                                                            } else if (!status?.isLive) {
                                                                availabilityLabel = "○ Link Unavailable";
                                                            } else if (telemetry?.status === "reached") {
                                                                availabilityLabel = "🎯 At Target";
                                                            }
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: drone.id,
                                                                disabled: isDroneBusy(drone.id),
                                                                className: "bg-[#111] text-gray-100",
                                                                children: [
                                                                    drone.droneOSName,
                                                                    " · ",
                                                                    drone.droneType,
                                                                    " —",
                                                                    " ",
                                                                    availabilityLabel
                                                                ]
                                                            }, drone.id, true, {
                                                                fileName: "[project]/components/map-view.tsx",
                                                                lineNumber: 2017,
                                                                columnNumber: 27
                                                            }, this);
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/map-view.tsx",
                                                    lineNumber: 1987,
                                                    columnNumber: 21
                                                }, this),
                                                selectedDroneId && isDroneBusy(selectedDroneId) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-md border border-amber-700 bg-amber-950/30 p-2 text-xs text-amber-200 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "⚠️"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/map-view.tsx",
                                                            lineNumber: 2032,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: droneTelemetryData[selectedDroneId]?.status === "on_air" ? "This drone is currently in the air. Please wait for it to land." : "This drone is executing another mission."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/map-view.tsx",
                                                            lineNumber: 2033,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/map-view.tsx",
                                                    lineNumber: 2031,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1986,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1971,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/map-view.tsx",
                            lineNumber: 1936,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            className: "mt-2 flex flex-col gap-2 sm:flex-row sm:justify-end",
                            children: [
                                selectedAlert && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    variant: "outline",
                                    className: "border-red-700 bg-transparent text-red-400 hover:bg-red-900/30 hover:text-red-200",
                                    disabled: actionLoading,
                                    onClick: handleNeutralise,
                                    children: "Neutralise Alert"
                                }, void 0, false, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 2049,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    variant: "ghost",
                                    className: "border-[#333] bg-[#111] text-white hover:bg-[#222]",
                                    onClick: ()=>setShowVideo(true),
                                    disabled: actionLoading || !selectedSensor || !("rtspUrl" in (selectedSensor || {})) || !selectedSensor?.rtspUrl,
                                    children: actionLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "mr-2 h-4 w-4 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/components/map-view.tsx",
                                                lineNumber: 2074,
                                                columnNumber: 19
                                            }, this),
                                            "Launching..."
                                        ]
                                    }, void 0, true) : "Video Feed"
                                }, void 0, false, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 2060,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    className: "bg-[#2563EB] text-white hover:bg-[#1D4ED8] disabled:opacity-50",
                                    disabled: actionLoading || !selectedSensor || !selectedDroneId || drones.length === 0 || selectedDroneId && isDroneBusy(selectedDroneId),
                                    onClick: handleSendDrone,
                                    children: selectedAlert ? "Send Drone (ड्रोन भेजिए)" : "Send Drone (ड्रोन भेजिए)"
                                }, void 0, false, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 2082,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/map-view.tsx",
                            lineNumber: 2047,
                            columnNumber: 11
                        }, this),
                        showVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 rounded-md overflow-hidden border border-[#333] bg-black",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                src: "/videos/343478.mp4",
                                controls: true,
                                autoPlay: true,
                                muted: true,
                                playsInline: true,
                                className: "w-full h-auto"
                            }, void 0, false, {
                                fileName: "[project]/components/map-view.tsx",
                                lineNumber: 2101,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/map-view.tsx",
                            lineNumber: 2100,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/map-view.tsx",
                    lineNumber: 1872,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/map-view.tsx",
                lineNumber: 1864,
                columnNumber: 7
            }, this),
            telemetryWindowOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$telemetry$2d$window$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TelemetryWindow"], {
                telemetry: liveTelemetry,
                isOpen: telemetryWindowOpen,
                onClose: closeTelemetryWindow,
                onDropPayload: handleDropPayload,
                onRecall: handleRecall,
                // onToggleController={() => setShowController((prev) => !prev)}
                // isControllerOpen={showController}
                onToggleController: ()=>router.push(`/drones/${selectedDroneIdForTelemetry}/control`),
                isControllerOpen: false
            }, void 0, false, {
                fileName: "[project]/components/map-view.tsx",
                lineNumber: 2115,
                columnNumber: 9
            }, this),
            selectedDroneIdForTelemetry && showController && // <DroneController
            //   droneId={selectedDroneIdForTelemetry}
            //   currentAltitude={selectedDrone?.targetAltitude ?? 0}
            //   onClose={() => setShowController(false)}
            // />
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DroneControllerNew$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                droneId: selectedDroneIdForTelemetry,
                currentAltitude: selectedDrone?.targetAltitude ?? 0,
                telemetry: droneTelemetryData[selectedDroneIdForTelemetry],
                onClose: ()=>setShowController(false)
            }, void 0, false, {
                fileName: "[project]/components/map-view.tsx",
                lineNumber: 2135,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(MapView, "KhrQZXfzazmWgTuCtzf9bC9EqDE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$voice$2d$recorder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceRecorder"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = MapView;
var _c;
__turbopack_context__.k.register(_c, "MapView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(protected)/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$map$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/map-view.tsx [app-client] (ecmascript)");
"use client";
;
;
function DashboardPage() {
    // sensor-health operations
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$map$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapView"], {
        mode: "operations"
    }, void 0, false, {
        fileName: "[project]/app/(protected)/page.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = DashboardPage;
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0b0c6a67._.js.map