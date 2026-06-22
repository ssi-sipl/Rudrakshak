module.exports = [
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
    ()=>getSmartMeterById
]);
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:5001") || "http://localhost:5000";
async function getAllSmartMeters() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/smartmeters`, {
            credentials: "include",
            cache: "no-store"
        });
        if (!response.ok) {
            throw new Error("Failed to fetch smart meters");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return {
            success: false,
            data: []
        };
    }
}
async function createSmartMeter(data) {
    try {
        console.log(data);
        const response = await fetch(`${API_BASE_URL}/api/smartmeters`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        console.log(response);
        return await response.json();
    } catch (error) {
        console.error(error);
        return {
            success: false,
            error: "Failed to create Smart Meter"
        };
    }
}
async function deleteSmartMeter(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/smartmeters/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to delete SmartMeter");
        }
        return await response.json();
    } catch (error) {
        console.error("Error deleting SmartMeter", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to delete SmartMeter"
        };
    }
}
async function getSmartMeterById(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/smartmeters/${id}`, {
            credentials: "include",
            cache: "no-store"
        });
        if (!response.ok) {
            throw new Error("Failed to fetch Smart Meter");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return {
            success: false,
            data: null,
            error: "Failed to fetch Smart Meter"
        };
    }
}
}),
"[project]/app/(protected)/smartmeter/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/app/(protected)/smartmeter/page.tsx'\n\nUnterminated string constant");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
];

//# sourceMappingURL=_0e78a574._.js.map