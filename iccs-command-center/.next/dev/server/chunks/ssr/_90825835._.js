module.exports = [
"[project]/components/ui/spinner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Spinner",
    ()=>Spinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
function Spinner({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__["Loader2Icon"], {
        role: "status",
        "aria-label": "Loading",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('size-4 animate-spin', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/spinner.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/DroneControllerNew.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DroneController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$droneCommand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/droneCommand.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$spinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/spinner.tsx [app-ssr] (ecmascript)");
"use client";
;
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
    const isPage = variant === "page";
    const [activeMode, setActiveMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [altitude, setAltitude] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(currentAltitude);
    const [activeDirection, setActiveDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSending, setIsSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // ── Heading / compass ──────────────────────────────────────────────
    const [heading, setHeading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(telemetry?.heading ?? 0);
    const headingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(heading);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        headingRef.current = heading;
    }, [
        heading
    ]);
    // If live telemetry heading updates and the user isn't mid-drag, sync the dial to it.
    const isDraggingCompass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isDraggingCompass.current && typeof telemetry?.heading === "number") {
            setHeading(telemetry.heading);
        }
    }, [
        telemetry?.heading
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (typeof telemetry?.alt === "number") {
            setAltitude(telemetry.alt);
        }
    }, [
        telemetry?.alt
    ]);
    // ── Video feed (placeholder, wire up RTSP/WebRTC source later) ─────
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoSrc = "";
    const [feedStatus, setFeedStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [feedError, setFeedError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!videoRef.current) return;
        if ("TURBOPACK compile-time truthy", 1) {
            setFeedStatus("idle");
            setFeedError(null);
            return;
        }
        //TURBOPACK unreachable
        ;
    }, [
        videoSrc
    ]);
    const feedLabel = feedStatus === "loading" ? "Connecting to video feed..." : feedStatus === "ready" ? "Live feed ready" : feedStatus === "error" ? "Video feed error" : "";
    // ── Central command sender (same call the old panel used) ──────────
    const send = async (command, value)=>{
        if (!droneId) return;
        try {
            setIsSending(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$droneCommand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["manualControl"])({
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
    const rotateIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (rotateIntervalRef.current) clearInterval(rotateIntervalRef.current);
        };
    }, []);
    // ── Keyboard flight controls ────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
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
        };
        window.addEventListener("keydown", handleKeyDown);
        return ()=>window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        droneId
    ]);
    // ── Drop payload PIN modal ──────────────────────────────────────────
    const [showDropModal, setShowDropModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dropPin, setDropPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [dropPinError, setDropPinError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showRecallModal, setShowRecallModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
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
    const header = isPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4 flex items-center justify-between border-b border-neutral-800 pb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800/60 text-gray-300 transition-all duration-200 hover:bg-neutral-700 hover:text-white active:scale-95",
                        "aria-label": "Back to map",
                        children: "←"
                    }, void 0, false, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 270,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            typeof socketConnected === "boolean" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex items-center gap-2 rounded-full border px-3 py-1 text-xs ${socketConnected ? "border-emerald-700 bg-emerald-950/40 text-emerald-300" : "border-red-700 bg-red-950/40 text-red-300"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-3 flex items-start justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-gray-100",
                        children: "Flight Control Panel"
                    }, void 0, false, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 300,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
    const body = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            header,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full items-stretch gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: "2 1 0",
                            minHeight: "360px",
                            backgroundColor: "#1a1a1a",
                            borderRadius: "18px",
                            overflow: "hidden",
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 rounded-md overflow-hidden border border-[#333] bg-black",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            (feedStatus !== "ready" || feedError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "20px",
                                    pointerEvents: "none"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: feedLabel
                                        }, void 0, false, {
                                            fileName: "[project]/components/DroneControllerNew.tsx",
                                            lineNumber: 398,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 60 60",
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    isSending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$spinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Spinner"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: "8px"
                                },
                                children: FLIGHT_MODES.map((mode)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                ].map(({ label, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    justifyItems: "center",
                    gap: "24px",
                    width: "100%",
                    marginTop: "20px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DirectionalPad, {
                        activeDirection: activeDirection,
                        onMove: handleMove,
                        onDiagonal: handleDiagonal
                    }, void 0, false, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 596,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Compass, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AltitudeControl, {
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
            showDropModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,0,0,0.6)",
                    zIndex: 10000
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "12px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        dropPinError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: "10px",
                                justifyContent: "flex-end"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            showRecallModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 10000
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: "#111",
                        padding: "20px",
                        borderRadius: "12px",
                        border: "1px solid rgba(255,255,255,0.1)",
                        width: "320px",
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: "10px",
                                justifyContent: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen w-full bg-[#0d0d0d] p-5 text-white sm:p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
/* ── DIRECTIONAL PAD ── */ function DirectionalPad({ activeDirection, onMove, onDiagonal }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DPadBtn, {
                top: "24px",
                left: "50%",
                translateX: "-50%",
                active: activeDirection === "Forward",
                onClick: ()=>onMove("Forward", "FORWARD"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TriUp, {}, void 0, false, {
                    fileName: "[project]/components/DroneControllerNew.tsx",
                    lineNumber: 855,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 854,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DPadBtn, {
                top: "50%",
                left: "24px",
                translateY: "-50%",
                active: activeDirection === "Left",
                onClick: ()=>onMove("Left", "LEFT"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TriLeft, {}, void 0, false, {
                    fileName: "[project]/components/DroneControllerNew.tsx",
                    lineNumber: 859,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 858,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DPadBtn, {
                top: "50%",
                left: "50%",
                translateX: "-50%",
                translateY: "-50%",
                center: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 18 18",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DPadBtn, {
                top: "50%",
                right: "24px",
                translateY: "-50%",
                active: activeDirection === "Right",
                onClick: ()=>onMove("Right", "RIGHT"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TriRight, {}, void 0, false, {
                    fileName: "[project]/components/DroneControllerNew.tsx",
                    lineNumber: 870,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 869,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DPadBtn, {
                bottom: "24px",
                left: "50%",
                translateX: "-50%",
                active: activeDirection === "Backward",
                onClick: ()=>onMove("Backward", "BACKWARD"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TriDown, {}, void 0, false, {
                    fileName: "[project]/components/DroneControllerNew.tsx",
                    lineNumber: 874,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/DroneControllerNew.tsx",
                lineNumber: 873,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SmallDiag, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SmallDiag, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SmallDiag, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SmallDiag, {
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
function DPadBtn({ children, top, bottom, left, right, translateX, translateY, center, active, onClick }) {
    const size = center ? "64px" : "52px";
    const transform = [
        translateX && `translateX(${translateX})`,
        translateY && `translateY(${translateY})`
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
function SmallDiag({ top, bottom, left, right, rot, active, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "13",
            height: "13",
            viewBox: "0 0 100 100",
            fill: "none",
            style: {
                transform: `rotate(${rot + 180}deg)`
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const TriUp = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 100 100",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            transform: "rotate(90 50 50)",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const TriDown = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 100 100",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            transform: "rotate(-90 50 50)",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const TriLeft = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 100 100",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const TriRight = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 100 100",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            transform: "rotate(180 50 50)",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
/* ── COMPASS ── */ function Compass({ heading, setHeading, startRotating, stopRotating, onDragStart, onDragEnd }) {
    const [hoverCCW, setHoverCCW] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoverCW, setHoverCW] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const compassRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isDragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleMove = (e)=>{
            if (!isDragging.current || !compassRef.current) return;
            const rect = compassRef.current.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            setHeading(getAngle(cx, cy, e.clientX, e.clientY));
        };
        const handleUp = ()=>{
            if (isDragging.current) {
                isDragging.current = false;
                onDragEnd();
            }
        };
        window.addEventListener("mousemove", handleMove);
        window.addEventListener("mouseup", handleUp);
        return ()=>{
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseup", handleUp);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        setHeading
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "-20 -20 240 240",
                width: "180",
                height: "180",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "-20",
                        y: "105",
                        fill: "white",
                        children: "W"
                    }, void 0, false, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 1144,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "215",
                        y: "105",
                        fill: "white",
                        children: "E"
                    }, void 0, false, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 1145,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "100",
                        cy: "100",
                        r: "22",
                        fill: "#1a1a1a"
                    }, void 0, false, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 1146,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        stroke: "white",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        opacity: "0.9",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "92",
                                y1: "100",
                                x2: "108",
                                y2: "100"
                            }, void 0, false, {
                                fileName: "[project]/components/DroneControllerNew.tsx",
                                lineNumber: 1148,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
/* ── ALTITUDE CONTROL ── */ function AltTriUp() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
function AltTriDown() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const LEVELS = Array.from({
    length: 41
}, (_, i)=>i * 5); // 0,5,...,200
const LINE_WIDTH = {
    0: "95px",
    1: "64px",
    2: "36px"
};
function AltitudeControl({ altitude, onConfirm }) {
    const [pendingAltitude, setPendingAltitude] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
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
    const wheelAccum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
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
    const lastTouch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AltTriUp, {}, void 0, false, {
                            fileName: "[project]/components/DroneControllerNew.tsx",
                            lineNumber: 1315,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DroneControllerNew.tsx",
                        lineNumber: 1299,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            if (lvl === null) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: "24px",
                                    width: "100%"
                                }
                            }, `empty-${i}`, false, {
                                fileName: "[project]/components/DroneControllerNew.tsx",
                                lineNumber: 1323,
                                columnNumber: 50
                            }, this);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AltTriDown, {}, void 0, false, {
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
            pendingAltitude !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 10000
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: "#111",
                        padding: "20px",
                        borderRadius: "12px",
                        border: "1px solid rgba(255,255,255,0.1)",
                        width: "280px",
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: "#aaa",
                                marginBottom: "16px"
                            },
                            children: [
                                "Change altitude to ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: "10px",
                                justifyContent: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/app/(protected)/drones/[id]/control/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DroneControlPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$droneos$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/droneos.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DroneControllerNew$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DroneControllerNew.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:5001") || "http://localhost:5000";
function DroneControlPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const droneId = params.id;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [drone, setDrone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [telemetry, setTelemetry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [socketConnected, setSocketConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const droneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ── Load this drone's last-known record (name, videoLink, targetAltitude) ──
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let cancelled = false;
        const load = async ()=>{
            setLoading(true);
            setError(null);
            try {
                // NOTE: swap this for a dedicated getDroneById(droneId) call if/when
                // one exists on the backend — fetching the whole list is what MapView
                // already does today, so this keeps behavior consistent for now.
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$droneos$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllDroneOS"])({
                    include: true
                });
                if (cancelled) return;
                if (res.success && res.data) {
                    const found = res.data.find((d)=>d.id === droneId);
                    if (found) {
                        setDrone(found);
                        droneRef.current = found;
                    } else {
                        setError("Drone not found.");
                    }
                } else {
                    setError(res.error || "Failed to load drone.");
                }
            } catch (err) {
                console.error("[DroneControlPage] Error loading drone:", err);
                if (!cancelled) setError("Failed to load drone.");
            } finally{
                if (!cancelled) setLoading(false);
            }
        };
        if (droneId) load();
        return ()=>{
            cancelled = true;
        };
    }, [
        droneId
    ]);
    // ── This page's own socket connection, filtered to just this drone ──
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!droneId) return;
        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(API_BASE_URL, {
            reconnection: true,
            reconnectionDelay: 1000,
            reconnectionDelayMax: 5000,
            reconnectionAttempts: 5
        });
        socketRef.current = s;
        s.on("connect", ()=>setSocketConnected(true));
        s.on("disconnect", ()=>setSocketConnected(false));
        s.on("drone_telemetry", (t)=>{
            if (t.droneDbId !== droneId) return; // ignore telemetry for other drones
            setTelemetry({
                ...t,
                videoLink: droneRef.current?.videoLink ?? null
            });
        });
        s.on("drone_position", (pos)=>{
            if (pos.id !== droneId) return; // ignore positions for other drones
            setTelemetry((prev)=>prev ? {
                    ...prev,
                    lat: pos.lat,
                    lng: pos.lng,
                    alt: pos.alt ?? prev.alt,
                    ts: pos.ts
                } : {
                    droneDbId: droneId,
                    lat: pos.lat,
                    lng: pos.lng,
                    alt: pos.alt ?? null,
                    ts: pos.ts,
                    status: "ground",
                    videoLink: droneRef.current?.videoLink ?? null
                });
        });
        return ()=>{
            s.disconnect();
            socketRef.current = null;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        droneId
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-screen w-full items-center justify-center bg-[#0d0d0d]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-sm text-gray-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "h-4 w-4 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/app/(protected)/drones/[id]/control/page.tsx",
                        lineNumber: 128,
                        columnNumber: 21
                    }, this),
                    "Loading drone..."
                ]
            }, void 0, true, {
                fileName: "[project]/app/(protected)/drones/[id]/control/page.tsx",
                lineNumber: 127,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(protected)/drones/[id]/control/page.tsx",
            lineNumber: 126,
            columnNumber: 13
        }, this);
    }
    if (error || !drone) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-screen w-full flex-col items-center justify-center gap-4 bg-[#0d0d0d] px-4 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-red-400",
                    children: error || "Drone not found."
                }, void 0, false, {
                    fileName: "[project]/app/(protected)/drones/[id]/control/page.tsx",
                    lineNumber: 138,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>router.push("/"),
                    className: "rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 text-sm text-white transition hover:bg-neutral-700",
                    children: "Back to map"
                }, void 0, false, {
                    fileName: "[project]/app/(protected)/drones/[id]/control/page.tsx",
                    lineNumber: 139,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(protected)/drones/[id]/control/page.tsx",
            lineNumber: 137,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DroneControllerNew$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        variant: "page",
        droneId: droneId,
        droneName: drone.droneOSName,
        currentAltitude: drone.targetAltitude ?? 0,
        telemetry: telemetry,
        socketConnected: socketConnected,
        onClose: ()=>router.back()
    }, void 0, false, {
        fileName: "[project]/app/(protected)/drones/[id]/control/page.tsx",
        lineNumber: 150,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=_90825835._.js.map