module.exports = [
"[project]/lib/api/identities.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getIdentities",
    ()=>getIdentities,
    "getIdentity",
    ()=>getIdentity,
    "getIdentityTimeline",
    ()=>getIdentityTimeline,
    "getRecentIdentities",
    ()=>getRecentIdentities
]);
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";
async function getIdentities() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/identities`, {
            cache: "no-store",
            credentials: "include"
        });
        const data = await response.json();
        return data.success ? data.data : [];
    } catch (error) {
        console.error("Failed to fetch identities:", error);
        return [];
    }
}
async function getRecentIdentities() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/identities/recent`, {
            cache: "no-store",
            credentials: "include"
        });
        const data = await response.json();
        return data.success ? data.data : [];
    } catch (error) {
        console.error("Failed to fetch recent identities:", error);
        return [];
    }
}
async function getIdentity(identityId) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/identities/${identityId}`, {
            cache: "no-store",
            credentials: "include"
        });
        const data = await response.json();
        return data.success ? data.data : null;
    } catch (error) {
        console.error(`Failed to fetch identity ${identityId}:`, error);
        return null;
    }
}
async function getIdentityTimeline(identityId) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/identities/${identityId}/observations`, {
            cache: "no-store",
            credentials: "include"
        });
        const data = await response.json();
        return data.success ? data.data : [];
    } catch (error) {
        console.error(`Failed to fetch timeline for identity ${identityId}:`, error);
        return [];
    }
}
}),
"[project]/app/(protected)/identities/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IdentitiesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$identities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/identities.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function IdentitiesPage() {
    const [identities, setIdentities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function load() {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$identities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIdentities"])();
            setIdentities(data.data || []);
        }
        load();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-xl font-bold mb-4",
                children: "Identities"
            }, void 0, false, {
                fileName: "[project]/app/(protected)/identities/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: identities.map((identity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#222] p-3 rounded border border-[#333]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "ID: ",
                                    identity.identityId
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(protected)/identities/page.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "Detections: ",
                                    identity.detectionCount
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(protected)/identities/page.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this)
                        ]
                    }, identity.identityId, true, {
                        fileName: "[project]/app/(protected)/identities/page.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(protected)/identities/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(protected)/identities/page.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_e6829ccd._.js.map