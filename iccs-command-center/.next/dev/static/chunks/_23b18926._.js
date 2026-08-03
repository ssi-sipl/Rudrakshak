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
function getDroneIcon(zoom, isOnline, isStale, hasAlert, status, staticIcon = false) {
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
    if (staticIcon) {
        animation = ""; // ❌ no pulse, no scale
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
        0% { box-shadow: 0 0 0 0 ${glowColor}; }
        70% { box-shadow: 0 0 0 10px rgba(0,0,0,0); }
        100% { box-shadow: 0 0 0 0 rgba(0,0,0,0); }
      }
      @keyframes drone-reached {
        0%, 100% { 
          box-shadow: 0 0 0 0 ${glowColor};
          transform: scale(1);
        }
        50% { 
          box-shadow: 0 0 0 8px rgba(0,0,0,0);
          transform: scale(1.15);
        }
      }
    </style>
    <div style="
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
function MapRenderer({ mode, mapConfig, sensors, smartMeters, onSmartMeterClick, focusedSmartMeterId, drones, alertBySensorDbId, dronePositions, droneStatus, currentZoom, socketConnected, markerUpdateKey, onZoomChange, onSensorClick, onDroneMarkerClick, droneTelemetryData, focusedSensorId }) {
    _s();
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
    const getMemoizedDroneIcon = (isOnline, isStale, hasAlert, status, staticIcon = false)=>{
        const key = `${currentZoom}-${isOnline}-${isStale}-${hasAlert}-${status}`;
        if (!droneIconCache.current.has(key)) {
            droneIconCache.current.set(key, getDroneIcon(currentZoom, isOnline, isStale, hasAlert, status, staticIcon));
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
            return drones.filter({
                "MapRenderer.useMemo[visibleDrones]": (drone)=>{
                    // ❌ area inactive
                    if (drone.area?.status !== "Active") return false;
                    return true;
                }
            }["MapRenderer.useMemo[visibleDrones]"]);
        }
    }["MapRenderer.useMemo[visibleDrones]"], [
        drones,
        mode
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
                        lineNumber: 945,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "  w-4  h-4 rounded-full bg-blue-600 "
                            }, void 0, false, {
                                fileName: "[project]/components/map-renderer.tsx",
                                lineNumber: 948,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Sensor available in network"
                            }, void 0, false, {
                                fileName: "[project]/components/map-renderer.tsx",
                                lineNumber: 950,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/map-renderer.tsx",
                        lineNumber: 947,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "      w-4 h-4 rounded-full bg-red-600 "
                            }, void 0, false, {
                                fileName: "[project]/components/map-renderer.tsx",
                                lineNumber: 954,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Sensor unavailable / cannot ping"
                            }, void 0, false, {
                                fileName: "[project]/components/map-renderer.tsx",
                                lineNumber: 956,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/map-renderer.tsx",
                        lineNumber: 953,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "  w-4   h-4   rounded-full bg-gray-500 "
                            }, void 0, false, {
                                fileName: "[project]/components/map-renderer.tsx",
                                lineNumber: 960,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Monitoring disabled"
                            }, void 0, false, {
                                fileName: "[project]/components/map-renderer.tsx",
                                lineNumber: 962,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/map-renderer.tsx",
                        lineNumber: 959,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/map-renderer.tsx",
                lineNumber: 929,
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
                        lineNumber: 990,
                        columnNumber: 9
                    }, this),
                    visibleSensors.map((sensor)=>{
                        const alert = alertBySensorDbId[sensor.id];
                        const hasActiveAlert = !!alert && alert.status === "ACTIVE";
                        // const droneOnSensor =
                        //   getDroneOnSensor(sensor, dronePositions, droneTelemetryData) !==
                        //   null;
                        const droneOnSensor = mode === "operations" ? getDroneOnSensor(sensor, dronePositions, droneTelemetryData) !== null : false;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Marker, {
                            position: [
                                sensor.latitude,
                                sensor.longitude
                            ],
                            icon: getMemoizedSensorIcon(sensor, hasActiveAlert, droneOnSensor, sensor.id === focusedSensorId),
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
                                            lineNumber: 1060,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-700",
                                            children: sensor.sensorType
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-renderer.tsx",
                                            lineNumber: 1062,
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
                                                            lineNumber: 1069,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: sensor.status === "Active" ? "text-blue-600 font-semibold" : "text-gray-500 font-semibold",
                                                            children: sensor.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/map-renderer.tsx",
                                                            lineNumber: 1071,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/map-renderer.tsx",
                                                    lineNumber: 1068,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Network Status:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/map-renderer.tsx",
                                                            lineNumber: 1083,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: sensor.activeShuruMode === "Active" ? "text-blue-600 font-semibold" : "text-red-600 font-semibold",
                                                            children: sensor.activeShuruMode
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/map-renderer.tsx",
                                                            lineNumber: 1085,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/map-renderer.tsx",
                                                    lineNumber: 1082,
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
                                                    lineNumber: 1098,
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
                                                    lineNumber: 1103,
                                                    columnNumber: 23
                                                }, this),
                                                hasActiveAlert && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: " text-red-500 font-semibold ",
                                                    children: "🚨 ACTIVE ALERT"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/map-renderer.tsx",
                                                    lineNumber: 1109,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-renderer.tsx",
                                    lineNumber: 1059,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/map-renderer.tsx",
                                lineNumber: 1058,
                                columnNumber: 15
                            }, this)
                        }, sensor.id, false, {
                            fileName: "[project]/components/map-renderer.tsx",
                            lineNumber: 1019,
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
                                            lineNumber: 1145,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px]",
                                            children: smartMeter.location
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-renderer.tsx",
                                            lineNumber: 1149,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "System Status:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/map-renderer.tsx",
                                                    lineNumber: 1152,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: smartMeter.status === "Active" ? "text-blue-600 font-semibold" : "text-gray-500 font-semibold",
                                                    children: smartMeter.status
                                                }, void 0, false, {
                                                    fileName: "[project]/components/map-renderer.tsx",
                                                    lineNumber: 1154,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/map-renderer.tsx",
                                            lineNumber: 1151,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Network Status:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/map-renderer.tsx",
                                                    lineNumber: 1166,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: smartMeter.NetworkStatus === "Active" ? "text-blue-600 font-semibold" : "text-red-600 font-semibold",
                                                    children: smartMeter.NetworkStatus
                                                }, void 0, false, {
                                                    fileName: "[project]/components/map-renderer.tsx",
                                                    lineNumber: 1168,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/map-renderer.tsx",
                                            lineNumber: 1165,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] text-blue-600 font-medium",
                                            children: "Click to open Smart Meter"
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-renderer.tsx",
                                            lineNumber: 1179,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-renderer.tsx",
                                    lineNumber: 1144,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/map-renderer.tsx",
                                lineNumber: 1143,
                                columnNumber: 15
                            }, this)
                        }, `smartmeter-${smartMeter.id}`, false, {
                            fileName: "[project]/components/map-renderer.tsx",
                            lineNumber: 1135,
                            columnNumber: 13
                        }, this);
                    }),
                    visibleDrones.map((drone)=>{
                        const pos = dronePositions[drone.id];
                        const status = droneStatus[drone.id];
                        const telemetry = droneTelemetryData[drone.id]; // Get telemetry for status
                        // console.log(dronePositions);
                        // console.log(droneTelemetryData);
                        // console.log(pos);
                        if (!pos) return null;
                        const markerPos = [
                            pos.lat,
                            pos.lng
                        ];
                        const isOnline = status?.isLive === true;
                        const isStale = status?.isStale === true;
                        const hasAlert = status?.hasAlert === true;
                        // Get status from telemetry (renamed to avoid conflict)
                        const currentDroneStatus = status?.isLive === false ? null : telemetry?.status ?? null;
                        // Status display based on telemetry.status
                        let statusDisplay = "Offline";
                        let statusColor = "text-gray-500";
                        let statusEmoji = "⚪";
                        let statusBadge = "";
                        if (isOnline) {
                            switch(currentDroneStatus){
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
                            switch(currentDroneStatus){
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
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Marker, {
                            position: markerPos,
                            icon: getMemoizedDroneIcon(isOnline, isStale, hasAlert, currentDroneStatus),
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
                                            lineNumber: 1297,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] text-black-300",
                                            children: drone.droneOSName
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-renderer.tsx",
                                            lineNumber: 1300,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-[10px] font-bold ${tooltipStatusColor}`,
                                            children: tooltipStatusText
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-renderer.tsx",
                                            lineNumber: 1304,
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
                                            lineNumber: 1311,
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
                                            lineNumber: 1320,
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
                                            lineNumber: 1324,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-renderer.tsx",
                                    lineNumber: 1296,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/map-renderer.tsx",
                                lineNumber: 1295,
                                columnNumber: 15
                            }, this)
                        }, `drone-${drone.id}`, false, {
                            fileName: "[project]/components/map-renderer.tsx",
                            lineNumber: 1275,
                            columnNumber: 13
                        }, this);
                    }),
                    visibleDrones.map((drone)=>{
                        const telemetry = droneTelemetryData[drone.id];
                        const pos = dronePositions[drone.id];
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
                                            lineNumber: 1377,
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
                                            lineNumber: 1378,
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
                                            lineNumber: 1381,
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
                                            lineNumber: 1384,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-renderer.tsx",
                                    lineNumber: 1376,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/map-renderer.tsx",
                                lineNumber: 1375,
                                columnNumber: 15
                            }, this)
                        }, `base-${drone.id}`, false, {
                            fileName: "[project]/components/map-renderer.tsx",
                            lineNumber: 1362,
                            columnNumber: 13
                        }, this);
                    }),
                    visibleDrones.map((drone)=>{
                        const telemetry = droneTelemetryData[drone.id];
                        if (!telemetry) return null;
                        // Only draw when drone is flying
                        const status = droneStatus[drone.id];
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
                            lineNumber: 1412,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/components/map-renderer.tsx",
                lineNumber: 967,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/map-renderer.tsx",
        lineNumber: 911,
        columnNumber: 5
    }, this);
}
_s(MapRenderer, "jEiTM1/jrvbaziEKCiXiod8A+KY=");
_c5 = MapRenderer;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c6 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(MapRenderer);
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "MapContainer");
__turbopack_context__.k.register(_c1, "TileLayer");
__turbopack_context__.k.register(_c2, "Marker");
__turbopack_context__.k.register(_c3, "Tooltip");
__turbopack_context__.k.register(_c4, "Polyline");
__turbopack_context__.k.register(_c5, "MapRenderer");
__turbopack_context__.k.register(_c6, "%default%");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$rtsp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/rtsp.ts [app-client] (ecmascript)");
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
function TelemetryWindow({ telemetry, isOpen, onClose, onDropPayload, onRecall }) {
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
    const recallAutoCloseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropCooldownRemaining = lastDropAt === null ? 0 : Math.max(0, DROP_PAYLOAD_COOLDOWN_MS - (now - lastDropAt));
    const recallCooldownRemaining = lastRecallAt === null ? 0 : Math.max(0, RECALL_COOLDOWN_MS - (now - lastRecallAt));
    const dropDisabled = dropCooldownRemaining > 0;
    const recallDisabled = recallCooldownRemaining > 0;
    const canDrop = telemetry?.status !== "ground" && !dropDisabled;
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
    const handleOpenVideoFeed = async ()=>{
        if (!telemetry?.videoLink) return;
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$rtsp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openRtsp"])({
                rtspUrl: telemetry.videoLink
            });
            if (!res.success) {
                console.error("Failed to open RTSP:", res.error);
            }
        } catch (err) {
            console.error("Video open error:", err);
        }
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
                                lineNumber: 191,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2 w-2 rounded-full bg-gray-500 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 203,
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
                                        lineNumber: 206,
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
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/telemetry-window.tsx",
                        lineNumber: 189,
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
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: "h-3 w-3 sm:h-4 sm:w-4 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 230,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 222,
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
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/telemetry-window.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/telemetry-window.tsx",
                lineNumber: 188,
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
                                lineNumber: 248,
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
                                                lineNumber: 253,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-200 font-mono text-[9px] sm:text-[10px] truncate",
                                                children: toNumber(telemetry?.lat)?.toFixed(6) ?? "N/A"
                                            }, void 0, false, {
                                                fileName: "[project]/components/telemetry-window.tsx",
                                                lineNumber: 254,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 252,
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
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-200 font-mono text-[9px] sm:text-[10px] truncate",
                                                children: toNumber(telemetry?.lng)?.toFixed(6) ?? "N/A"
                                            }, void 0, false, {
                                                fileName: "[project]/components/telemetry-window.tsx",
                                                lineNumber: 260,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 258,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 251,
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
                                                lineNumber: 268,
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
                                                lineNumber: 271,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 267,
                                        columnNumber: 17
                                    }, this),
                                    telemetry?.targetDistance !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400",
                                                children: "To Target:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/telemetry-window.tsx",
                                                lineNumber: 278,
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
                                                lineNumber: 279,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 277,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 265,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/telemetry-window.tsx",
                        lineNumber: 247,
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
                                lineNumber: 294,
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
                                        lineNumber: 298,
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
                                                lineNumber: 302,
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
                                                lineNumber: 311,
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
                                                lineNumber: 316,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 301,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 297,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/telemetry-window.tsx",
                        lineNumber: 289,
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
                                lineNumber: 327,
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
                                                lineNumber: 333,
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
                                                lineNumber: 334,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 332,
                                        columnNumber: 17
                                    }, this),
                                    telemetry?.speed !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400",
                                                children: "Speed:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/telemetry-window.tsx",
                                                lineNumber: 349,
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
                                                lineNumber: 350,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 348,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 330,
                                columnNumber: 13
                            }, this),
                            telemetry?.mode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400 text-[10px] sm:text-xs",
                                        children: "Mode:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 358,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-purple-400 font-semibold text-[10px] sm:text-xs truncate",
                                        children: telemetry?.mode
                                    }, void 0, false, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 361,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 357,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/telemetry-window.tsx",
                        lineNumber: 326,
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
                                lineNumber: 370,
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
                                                lineNumber: 376,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-green-400 font-semibold text-[9px] sm:text-[10px]",
                                                children: telemetry?.gpsFix
                                            }, void 0, false, {
                                                fileName: "[project]/components/telemetry-window.tsx",
                                                lineNumber: 377,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 375,
                                        columnNumber: 17
                                    }, this),
                                    telemetry?.satellites !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400",
                                                children: "Satellites:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/telemetry-window.tsx",
                                                lineNumber: 384,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-200 font-semibold text-[9px] sm:text-[10px]",
                                                children: toNumber(telemetry?.satellites) ?? "N/A"
                                            }, void 0, false, {
                                                fileName: "[project]/components/telemetry-window.tsx",
                                                lineNumber: 385,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/telemetry-window.tsx",
                                        lineNumber: 383,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 373,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/telemetry-window.tsx",
                        lineNumber: 369,
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
                                lineNumber: 397,
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
                                            lineNumber: 403,
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
                                            lineNumber: 404,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 402,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 400,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/telemetry-window.tsx",
                        lineNumber: 396,
                        columnNumber: 13
                    }, this),
                    telemetry?.videoLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md bg-[#1a1a1a] p-2.5 sm:p-3 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wide",
                                children: "Video Feed"
                            }, void 0, false, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 416,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                variant: "outline",
                                onClick: handleOpenVideoFeed,
                                className: "w-full border-green-700 text-green-400 hover:bg-green-900/30 hover:cursor-pointer",
                                children: "Open Live Video"
                            }, void 0, false, {
                                fileName: "[project]/components/telemetry-window.tsx",
                                lineNumber: 420,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/telemetry-window.tsx",
                        lineNumber: 415,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[8px] sm:text-[10px] text-gray-500 text-center pt-1",
                        children: [
                            "Last update: ",
                            formatTime(telemetry?.ts)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/telemetry-window.tsx",
                        lineNumber: 432,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/telemetry-window.tsx",
                lineNumber: 245,
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
                        lineNumber: 441,
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
                        lineNumber: 453,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/telemetry-window.tsx",
                lineNumber: 440,
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
                            lineNumber: 472,
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
                                            lineNumber: 480,
                                            columnNumber: 19
                                        }, this),
                                        "Ensure airspace is clear."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 478,
                                    columnNumber: 17
                                }, this),
                                recallError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-2 text-xs text-red-400",
                                    children: recallError
                                }, void 0, false, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 485,
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
                                            lineNumber: 489,
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
                                            lineNumber: 499,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 488,
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
                                    lineNumber: 536,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold text-blue-400",
                                    children: "Recall command sent"
                                }, void 0, false, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 538,
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
                                    lineNumber: 542,
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
                                        lineNumber: 548,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 547,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/telemetry-window.tsx",
                            lineNumber: 535,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/telemetry-window.tsx",
                    lineNumber: 471,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/telemetry-window.tsx",
                lineNumber: 470,
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
                            lineNumber: 566,
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
                                            lineNumber: 574,
                                            columnNumber: 19
                                        }, this),
                                        ".",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/telemetry-window.tsx",
                                            lineNumber: 578,
                                            columnNumber: 19
                                        }, this),
                                        "Enter PIN to proceed."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 572,
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
                                    lineNumber: 582,
                                    columnNumber: 17
                                }, this),
                                dropPinError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-2 text-xs text-red-400",
                                    children: dropPinError
                                }, void 0, false, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 594,
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
                                    lineNumber: 599,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold text-green-400",
                                    children: "Payload successfully dropped"
                                }, void 0, false, {
                                    fileName: "[project]/components/telemetry-window.tsx",
                                    lineNumber: 600,
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
                                    lineNumber: 603,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/telemetry-window.tsx",
                            lineNumber: 598,
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
                                    lineNumber: 610,
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
                                    lineNumber: 624,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/telemetry-window.tsx",
                            lineNumber: 609,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/telemetry-window.tsx",
                    lineNumber: 565,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/telemetry-window.tsx",
                lineNumber: 564,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/telemetry-window.tsx",
        lineNumber: 186,
        columnNumber: 5
    }, this);
}
_s(TelemetryWindow, "fy3LBUOElhPE5rKJQZ57RV3oZgQ=");
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
        window.location.href = "/forbidden";
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
async function sendVoiceCommand(audioBlob) {
    const form = new FormData();
    form.append("file", audioBlob, "voice.webm");
    const response = await fetch(`${API_URL}/api/voice-command/transcribe`, {
        method: "POST",
        body: form
    });
    const data = await response.json();
    console.log(response);
    if (!response.ok) {
        alert(data.message);
    }
    return data;
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
;
function useVoiceRecorder() {
    _s();
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioChunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const stopTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /**
   * Sends recorded audio to backend
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVoiceRecorder.useEffect": ()=>{
            return ({
                "useVoiceRecorder.useEffect": ()=>{
                    if (stopTimeoutRef.current) {
                        clearTimeout(stopTimeoutRef.current);
                    }
                    mediaRecorderRef.current?.stop();
                    streamRef.current?.getTracks().forEach({
                        "useVoiceRecorder.useEffect": (track)=>track.stop()
                    }["useVoiceRecorder.useEffect"]);
                }
            })["useVoiceRecorder.useEffect"];
        }
    }["useVoiceRecorder.useEffect"], []);
    const sendAudioToBackend = async ()=>{
        try {
            setIsUploading(true);
            if (audioChunksRef.current.length === 0) {
                return;
            }
            const audioBlob = new Blob(audioChunksRef.current, {
                type: "audio/webm"
            });
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$voice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendVoiceCommand"])(audioBlob);
            console.log("Voice Response:", response);
            return response;
        } catch (error) {
            console.error("Voice upload failed:", error);
            throw error;
        } finally{
            setIsUploading(false);
            // clear previous recording
            audioChunksRef.current = [];
        }
    };
    /**
   * Starts microphone recording
   */ const startRecording = async ()=>{
        if (isListening || isUploading) return null;
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            const recorder = new MediaRecorder(stream);
            audioChunksRef.current = [];
            streamRef.current = stream;
            recorder.ondataavailable = (event)=>{
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };
            mediaRecorderRef.current = recorder;
            setIsListening(true);
            return new Promise((resolve, reject)=>{
                recorder.onstop = async ()=>{
                    try {
                        const result = await sendAudioToBackend();
                        resolve(result);
                    } catch (err) {
                        reject(err);
                    }
                };
                recorder.start();
                stopTimeoutRef.current = setTimeout(()=>{
                    stopRecording();
                }, 6000);
            });
        } catch (error) {
            console.error("Unable to start recording:", error);
            setIsListening(false);
            throw error;
        }
    };
    /**
   * Stops recording
   */ const stopRecording = ()=>{
        if (mediaRecorderRef.current?.state !== "inactive") {
            mediaRecorderRef.current?.stop();
        }
        streamRef.current?.getTracks().forEach((track)=>track.stop());
        streamRef.current = null;
        if (stopTimeoutRef.current) {
            clearTimeout(stopTimeoutRef.current);
            stopTimeoutRef.current = null;
        }
        setIsListening(false);
    };
    /**
   * Toggle recording
   */ const toggleRecording = async ()=>{
        if (isUploading) return null;
        if (isListening) {
            stopRecording();
            return null;
        }
        return await startRecording();
    };
    return {
        isListening,
        isUploading,
        startRecording,
        stopRecording,
        toggleRecording
    };
}
_s(useVoiceRecorder, "dcK33Qj6r4H6j6Ezp5PxDDu867M=");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$rtsp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/rtsp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$droneCommand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/droneCommand.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$map$2d$renderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/map-renderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$telemetry$2d$window$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/telemetry-window.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$smartmeter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/smartmeter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$voice$2d$recorder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-voice-recorder.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$FlightConfirmationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/FlightConfirmationContext.tsx [app-client] (ecmascript)");
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
;
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
    const { isListening, isUploading, toggleRecording } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$voice$2d$recorder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceRecorder"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const CLICK_DELAY_MS = 250;
    const clickTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mapConfig, setMapConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentZoom, setCurrentZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(18);
    const [dronePositions, setDronePositions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [droneStatus, setDroneStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
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
    const timeoutRefsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const statusUpdateIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [autoDispatchCountdown, setAutoDispatchCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const autoDispatchTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { flightConfirmation, showFlightConfirmation, hideFlightConfirmation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$FlightConfirmationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFlightConfirmation"])();
    const [autoDispatchBlocked, setAutoDispatchBlocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const sensorsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const dronesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
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
                                            id: drone.id,
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
                            setDronePositions(initialPositions);
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
            s.on("flight_completed", {
                "MapView.useEffect": (data)=>{
                    console.log(data);
                    showFlightConfirmation(data.droneId);
                }
            }["MapView.useEffect"]);
            s.on("drone_position", {
                "MapView.useEffect": (pos)=>{
                    setDronePositions({
                        "MapView.useEffect": (prev)=>({
                                ...prev,
                                [pos.id]: pos
                            })
                    }["MapView.useEffect"]);
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
                    setDroneStatus({
                        "MapView.useEffect": (prev)=>{
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
                    setDronePositions({
                        "MapView.useEffect": (prev)=>({
                                ...prev,
                                [telemetry.droneDbId]: {
                                    id: telemetry.droneDbId,
                                    droneId: telemetry.droneId,
                                    lat: telemetry.lat,
                                    lng: telemetry.lng,
                                    alt: telemetry.alt,
                                    ts: telemetry.ts
                                }
                            })
                    }["MapView.useEffect"]);
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
                droneDbId: selectedDroneId,
                sensorId: selectedSensor.sensorId,
                alertId: selectedAlert?.id,
                targetLatitude: latitude,
                targetLongitude: longitude
            });
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
    const handleOpenVideoFeed = async ()=>{
        if (!selectedSensor) return;
        if (!("rtspUrl" in selectedSensor) || !selectedSensor.rtspUrl) {
            toast({
                title: "No RTSP configured",
                description: "This sensor has no RTSP URL configured in the backend.",
                variant: "destructive"
            });
            return;
        }
        try {
            setActionLoading(true);
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$rtsp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openRtspBySensor"])(selectedSensor.id);
            if (res && res.success) {
                const extra = res.data ? ` ${res.data.pid ? `(pid ${res.data.pid})` : ""}` : "";
                toast({
                    title: "Video Feed launched",
                    description: res.message || `Launched video on server.${extra}`.trim()
                });
            } else {
                const msg = res && (res.error || res.details && String(res.details)) || "Server could not launch the video feed.";
                toast({
                    title: "Failed to launch video",
                    description: msg,
                    variant: "destructive"
                });
            }
        } catch (err) {
            console.error("Error opening RTSP:", err);
            toast({
                title: "Network / Server error",
                description: err instanceof Error ? err.message : "Unable to reach backend.",
                variant: "destructive"
            });
        } finally{
            setActionLoading(false);
        }
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
                lineNumber: 1171,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/map-view.tsx",
            lineNumber: 1170,
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
                lineNumber: 1179,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/map-view.tsx",
            lineNumber: 1178,
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
                        lineNumber: 1189,
                        columnNumber: 11
                    }, this),
                    " and create / activate one."
                ]
            }, void 0, true, {
                fileName: "[project]/components/map-view.tsx",
                lineNumber: 1187,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/map-view.tsx",
            lineNumber: 1186,
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
                                    lineNumber: 1214,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-xs text-red-200",
                                    children: autoDispatchBlocked.reason
                                }, void 0, false, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1218,
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
                                    lineNumber: 1222,
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
                                    lineNumber: 1227,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/map-view.tsx",
                            lineNumber: 1213,
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
                            lineNumber: 1232,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/map-view.tsx",
                    lineNumber: 1212,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/map-view.tsx",
                lineNumber: 1211,
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
                                lineNumber: 1246,
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
                                    lineNumber: 1283,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanSearch$3e$__["ScanSearch"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1286,
                                            columnNumber: 19
                                        }, this),
                                        "SCAN"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/components/map-view.tsx",
                                lineNumber: 1268,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/map-view.tsx",
                        lineNumber: 1245,
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
                                        lineNumber: 1306,
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
                                        lineNumber: 1307,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, sensor.id, true, {
                                fileName: "[project]/components/map-view.tsx",
                                lineNumber: 1297,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/map-view.tsx",
                        lineNumber: 1295,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/map-view.tsx",
                lineNumber: 1244,
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
                            lineNumber: 1320,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/map-view.tsx",
                        lineNumber: 1319,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 backdrop-blur-[2px] bg-green-500/10"
                    }, void 0, false, {
                        fileName: "[project]/components/map-view.tsx",
                        lineNumber: 1324,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/map-view.tsx",
                lineNumber: 1317,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$map$2d$renderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                mode: mode,
                mapConfig: mapConfig,
                sensors: sensors,
                smartMeters: smartMeters,
                drones: drones,
                alertBySensorDbId: alertBySensorDbId,
                dronePositions: dronePositions,
                droneStatus: droneStatus,
                droneTelemetryData: droneTelemetryData,
                currentZoom: currentZoom,
                socketConnected: socketConnected,
                markerUpdateKey: markerUpdateKey,
                onZoomChange: setCurrentZoom,
                onSensorClick: openSensorModal,
                onDroneMarkerClick: handleDroneMarkerClick,
                focusedSensorId: focusedSensorId,
                onSmartMeterClick: (smartMeter)=>router.push(`/smartmeter/${smartMeter.id}`)
            }, void 0, false, {
                fileName: "[project]/components/map-view.tsx",
                lineNumber: 1335,
                columnNumber: 7
            }, this),
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
                                    lineNumber: 1367,
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
                                            lineNumber: 1374,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            className: `w-fit px-2 rounded-xl ${selectedSensor?.addedBy.toLowerCase() ? "bg-yellow-400 text-black " : "bg-red-600/20 text-red-400 hover:bg-red-600/30 "}`,
                                            children: selectedSensor?.addedBy || "N/A"
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1378,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1373,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/map-view.tsx",
                            lineNumber: 1366,
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
                                    lineNumber: 1392,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-xs text-red-200",
                                    children: autoDispatchBlocked.reason
                                }, void 0, false, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1396,
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
                                    lineNumber: 1400,
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
                                    lineNumber: 1405,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/map-view.tsx",
                            lineNumber: 1391,
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
                                    lineNumber: 1414,
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
                                        lineNumber: 1416,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1415,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/map-view.tsx",
                            lineNumber: 1412,
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
                                                    lineNumber: 1432,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Status: ",
                                                        selectedSensor.status
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/map-view.tsx",
                                                    lineNumber: 1436,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1431,
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
                                            lineNumber: 1438,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1430,
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
                                            lineNumber: 1445,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 text-sm text-red-100",
                                            children: selectedAlert.message
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1448,
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
                                            lineNumber: 1451,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1444,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-md border border-[#333] bg-[#18181b] p-3 text-xs text-gray-300",
                                    children: [
                                        "No active alert on this sensor.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1459,
                                            columnNumber: 19
                                        }, this),
                                        "You can still manually dispatch a drone from here."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1457,
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
                                            lineNumber: 1465,
                                            columnNumber: 17
                                        }, this),
                                        loadingDrones ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 rounded-md border border-[#333] bg-[#111] p-2 text-xs text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "h-3 w-3 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/map-view.tsx",
                                                    lineNumber: 1471,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Loading drones..."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/map-view.tsx",
                                                    lineNumber: 1472,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1470,
                                            columnNumber: 19
                                        }, this) : dronesInSameArea.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-md border border-amber-700 bg-amber-950/40 p-3 text-xs text-amber-200",
                                            children: "No drones available in this sensor's area."
                                        }, void 0, false, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1475,
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
                                                            lineNumber: 1488,
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
                                                                lineNumber: 1510,
                                                                columnNumber: 27
                                                            }, this);
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/map-view.tsx",
                                                    lineNumber: 1480,
                                                    columnNumber: 21
                                                }, this),
                                                selectedDroneId && isDroneBusy(selectedDroneId) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-md border border-amber-700 bg-amber-950/30 p-2 text-xs text-amber-200 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "⚠️"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/map-view.tsx",
                                                            lineNumber: 1525,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: droneTelemetryData[selectedDroneId]?.status === "on_air" ? "This drone is currently in the air. Please wait for it to land." : "This drone is executing another mission."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/map-view.tsx",
                                                            lineNumber: 1526,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/map-view.tsx",
                                                    lineNumber: 1524,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/map-view.tsx",
                                            lineNumber: 1479,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1464,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/map-view.tsx",
                            lineNumber: 1429,
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
                                    lineNumber: 1542,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    variant: "ghost",
                                    className: "border-[#333] bg-[#111] text-white hover:bg-[#222]",
                                    onClick: handleOpenVideoFeed,
                                    disabled: actionLoading || !selectedSensor || !("rtspUrl" in (selectedSensor || {})) || !selectedSensor?.rtspUrl,
                                    children: actionLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "mr-2 h-4 w-4 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/components/map-view.tsx",
                                                lineNumber: 1567,
                                                columnNumber: 19
                                            }, this),
                                            "Launching..."
                                        ]
                                    }, void 0, true) : "Video Feed"
                                }, void 0, false, {
                                    fileName: "[project]/components/map-view.tsx",
                                    lineNumber: 1553,
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
                                    lineNumber: 1575,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/map-view.tsx",
                            lineNumber: 1540,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/map-view.tsx",
                    lineNumber: 1365,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/map-view.tsx",
                lineNumber: 1357,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 left-90 z-[1200] flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: async ()=>{
                            try {
                                const result = await toggleRecording();
                                if (!result) return;
                                console.log(result);
                            } catch (err) {
                                toast({
                                    title: "Voice Command Failed",
                                    description: "Unable to process voice command.",
                                    variant: "destructive"
                                });
                            }
                        },
                        disabled: isUploading,
                        className: `
relative
flex h-14 w-14 items-center justify-center
rounded-full
transition-all duration-300
shadow-lg
${isListening ? "bg-red-600 scale-105" : isUploading ? "bg-yellow-500 animate-pulse" : "bg-gray-700 hover:scale-105"}
`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `absolute inset-0 rounded-full ${isListening ? "animate-ping bg-red-100/30" : "bg-cyan-400/20 animate-pulse"}`
                            }, void 0, false, {
                                fileName: "[project]/components/map-view.tsx",
                                lineNumber: 1630,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                className: "relative z-10 h-6 w-6 text-white"
                            }, void 0, false, {
                                fileName: "[project]/components/map-view.tsx",
                                lineNumber: 1638,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/map-view.tsx",
                        lineNumber: 1597,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-2 text-[10px] text-gray-300",
                        children: isUploading ? "Processing..." : isListening ? "Listening..." : "Voice"
                    }, void 0, false, {
                        fileName: "[project]/components/map-view.tsx",
                        lineNumber: 1641,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/map-view.tsx",
                lineNumber: 1596,
                columnNumber: 7
            }, this),
            telemetryWindowOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$telemetry$2d$window$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TelemetryWindow"], {
                telemetry: liveTelemetry,
                isOpen: telemetryWindowOpen,
                onClose: closeTelemetryWindow,
                onDropPayload: handleDropPayload,
                onRecall: handleRecall
            }, void 0, false, {
                fileName: "[project]/components/map-view.tsx",
                lineNumber: 1651,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(MapView, "2yAMNtRc/EINVLhed+kugwNaaGg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$voice$2d$recorder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceRecorder"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$FlightConfirmationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFlightConfirmation"]
    ];
});
_c = MapView;
var _c;
__turbopack_context__.k.register(_c, "MapView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(protected)/health/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$map$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/map-view.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/UserContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function DashboardPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            if (!loading && user?.role !== "ADMIN") {
                router.replace("/forbidden");
            }
        }
    }["DashboardPage.useEffect"], [
        loading,
        user,
        router
    ]);
    // sensor-health operations
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$map$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapView"], {
        mode: "sensor-health"
    }, void 0, false, {
        fileName: "[project]/app/(protected)/health/page.tsx",
        lineNumber: 19,
        columnNumber: 10
    }, this);
}
_s(DashboardPage, "q4OzjIV1scCf7vKmYBluHYUej40=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"]
    ];
});
_c = DashboardPage;
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_23b18926._.js.map