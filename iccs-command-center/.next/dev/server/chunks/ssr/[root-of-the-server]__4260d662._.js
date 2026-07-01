module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/(protected)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(protected)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/(protected)/smartmeter/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// "use client";
// import {
//   Eye,
//   Pencil,
//   Trash2,
// } from "lucide-react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import {
//   Search,
//   Plus,
//   Cpu,
//   Activity,
//   Router,
//   Loader2,
// } from "lucide-react";
// export default function SmartMeterListPage() {
//   const [loading, setLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [smartMeters, setSmartMeters] = useState([
//     {
//       id: "1",
//       smartMeterId: "SM-001",
//       name: "North Hub",
//       location: "Sector A",
//       status: "Active",
//       sensors: new Array(12),
//       mediaConverters: new Array(4),
//     },
//     {
//       id: "2",
//       smartMeterId: "SM-002",
//       name: "South Hub",
//       location: "Sector B",
//       status: "Active",
//       sensors: new Array(8),
//       mediaConverters: new Array(2),
//     },
//   ]);
//   const filteredMeters = smartMeters.filter(
//     (meter) =>
//       meter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       meter.smartMeterId.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   return (
//     <div className="p-4 md:p-6 lg:p-8">
//       <div className="mx-auto max-w-7xl">
//         {/* Header */}
//         <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <h1 className="text-2xl font-bold text-white md:text-3xl">
//               Smart Meter Management
//             </h1>
//             <p className="mt-1 text-sm text-gray-400">
//               Manage and monitor all deployed smart meters
//             </p>
//           </div>
//           <Link href="/smartmeter/add">
//             <Button className="gap-2 bg-[#8B0000] text-white hover:bg-[#6B0000]">
//               <Plus className="h-4 w-4" />
//               Add Smart Meter
//             </Button>
//           </Link>
//         </div>
//         {/* Stats Cards */}
//         <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <div className="rounded-lg border border-[#333] bg-[#222] p-4">
//             <div className="flex items-center justify-between">
//               <p className="text-sm text-gray-400">
//                 Total Smart Meters
//               </p>
//               <Cpu className="h-5 w-5 text-blue-400" />
//             </div>
//             <h3 className="mt-3 text-3xl font-bold text-white">
//               {smartMeters.length}
//             </h3>
//           </div>
//           <div className="rounded-lg border border-[#333] bg-[#222] p-4">
//             <div className="flex items-center justify-between">
//               <p className="text-sm text-gray-400">
//                 Active Meters
//               </p>
//               <Activity className="h-5 w-5 text-green-400" />
//             </div>
//             <h3 className="mt-3 text-3xl font-bold text-green-400">
//               {
//                 smartMeters.filter(
//                   (meter) => meter.status === "Active"
//                 ).length
//               }
//             </h3>
//           </div>
//                     <div className="rounded-lg border border-[#333] bg-[#222] p-4">
//             <div className="flex items-center justify-between">
//               <p className="text-sm text-gray-400">
//                 Connected Devices
//               </p>
//               <Activity className="h-5 w-5 text-cyan-400" />
//             </div>
//             <h3 className="mt-3 text-3xl font-bold text-cyan-400">
//               {smartMeters.reduce(
//                 (total, meter) => total + meter.sensors.length,
//                 0
//               )}
//             </h3>
//           </div>
//           <div className="rounded-lg border border-[#333] bg-[#222] p-4">
//             <div className="flex items-center justify-between">
//               <p className="text-sm text-gray-400">
//                 Media Converters
//               </p>
//               <Router className="h-5 w-5 text-yellow-400" />
//             </div>
//             <h3 className="mt-3 text-3xl font-bold text-yellow-400">
//               {smartMeters.reduce(
//                 (total, meter) =>
//                   total + meter.mediaConverters.length,
//                 0
//               )}
//             </h3>
//           </div>
//         </div>
//         {/* Search Section */}
//         <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
//           <div className="relative flex-1 sm:max-w-md">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
//             <Input
//               placeholder="Search smart meters..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="
//                 border-[#333]
//                 bg-[#222]
//                 pl-10
//                 text-white
//                 placeholder:text-gray-500
//                 focus:border-[#8B0000]
//                 focus:ring-[#8B0000]
//               "
//             />
//           </div>
//           <p className="text-sm text-gray-400">
//             Showing {filteredMeters.length} smart meters
//           </p>
//         </div>
//         {/* Loading State */}
//         {loading && (
//           <div className="flex flex-col items-center justify-center rounded-lg border border-[#333] bg-[#222] py-12">
//             <Loader2 className="mb-4 h-12 w-12 animate-spin text-[#8B0000]" />
//             <p className="text-lg font-medium text-gray-400">
//               Loading smart meters...
//             </p>
//           </div>
//         )}
//         {/* Table Starts Here */}
//         {!loading && (
//             <div className="hidden rounded-lg border border-[#333] bg-[#222] md:block">
//   <Table>
//     <TableHeader>
//       <TableRow className="border-[#333] hover:bg-transparent">
//         <TableHead className="text-gray-400">
//           Meter ID
//         </TableHead>
//         <TableHead className="text-gray-400">
//           Name
//         </TableHead>
//         <TableHead className="text-gray-400">
//           Location
//         </TableHead>
//         <TableHead className="text-gray-400">
//           Devices
//         </TableHead>
//         <TableHead className="text-gray-400">
//           Converters
//         </TableHead>
//         <TableHead className="text-gray-400">
//           Status
//         </TableHead>
//         <TableHead className="text-right text-gray-400">
//           Actions
//         </TableHead>
//       </TableRow>
//     </TableHeader>
//     <TableBody>
//       {filteredMeters.map((meter) => (
//         <TableRow
//           key={meter.id}
//           className="border-[#333] hover:bg-[#2a2a2a]"
//         >
//           <TableCell className="font-medium text-white">
//             {meter.smartMeterId}
//           </TableCell>
//           <TableCell className="text-gray-300">
//             {meter.name}
//           </TableCell>
//           <TableCell className="text-gray-400">
//             {meter.location || "N/A"}
//           </TableCell>
//           <TableCell>
//             <Badge className="bg-blue-600/20 text-blue-400 hover:bg-blue-600/30">
//               {meter.sensors.length} Devices
//             </Badge>
//           </TableCell>
//           <TableCell>
//             <Badge className="bg-yellow-600/20 text-yellow-400 hover:bg-yellow-600/30">
//               {meter.mediaConverters.length} Converters
//             </Badge>
//           </TableCell>
//           <TableCell>
//             <Badge
//               className={
//                 meter.status === "Active"
//                   ? "bg-green-600/20 text-green-400 hover:bg-green-600/30"
//                   : "bg-red-600/20 text-red-400 hover:bg-red-600/30"
//               }
//             >
//               {meter.status}
//             </Badge>
//           </TableCell>
//           <TableCell className="text-right">
//             <div className="flex items-center justify-end gap-2">
//               <Link href={`/smartmeter/${meter.id}`}>
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="
//                     h-8 w-8
//                     text-gray-400
//                     hover:bg-[#333]
//                     hover:text-white
//                   "
//                 >
//                   <Eye className="h-4 w-4" />
//                 </Button>
//               </Link>
//               <Link href={`/smartmeter/${meter.id}/edit`}>
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="
//                     h-8 w-8
//                     text-gray-400
//                     hover:bg-[#333]
//                     hover:text-white
//                   "
//                 >
//                   <Pencil className="h-4 w-4" />
//                 </Button>
//               </Link>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="
//                   h-8 w-8
//                   text-gray-400
//                   hover:bg-red-600/20
//                   hover:text-red-400
//                 "
//               >
//                 <Trash2 className="h-4 w-4" />
//               </Button>
//             </div>
//           </TableCell>
//         </TableRow>
//       ))}
//     </TableBody>
//   </Table>
// </div>
// {/* Mobile Cards */}
// {!loading && (
//   <div className="flex flex-col gap-4 md:hidden">
//     {filteredMeters.map((meter) => (
//       <div
//         key={meter.id}
//         className="
//           rounded-lg
//           border border-[#333]
//           bg-[#222]
//           p-4
//         "
//       >
//         <div className="mb-3 flex items-start justify-between">
//           <div>
//             <p className="text-xs text-gray-500">
//               {meter.smartMeterId}
//             </p>
//             <h3 className="font-medium text-white">
//               {meter.name}
//             </h3>
//           </div>
//           <Badge
//             className={
//               meter.status === "Active"
//                 ? "bg-green-600/20 text-green-400"
//                 : "bg-red-600/20 text-red-400"
//             }
//           >
//             {meter.status}
//           </Badge>
//         </div>
//         <div className="mb-4 space-y-2">
//           <div className="flex justify-between text-sm">
//             <span className="text-gray-400">
//               Location
//             </span>
//             <span className="text-white">
//               {meter.location || "N/A"}
//             </span>
//           </div>
//           <div className="flex justify-between text-sm">
//             <span className="text-gray-400">
//               Devices
//             </span>
//             <span className="font-medium text-blue-400">
//               {meter.sensors.length}
//             </span>
//           </div>
//           <div className="flex justify-between text-sm">
//             <span className="text-gray-400">
//               Converters
//             </span>
//             <span className="font-medium text-yellow-400">
//               {meter.mediaConverters.length}
//             </span>
//           </div>
//         </div>
//         <div className="flex gap-2">
//           <Link
//             href={`/smartmeter/${meter.id}`}
//             className="flex-1"
//           >
//             <Button
//               variant="outline"
//               size="sm"
//               className="
//                 w-full
//                 gap-2
//                 border-[#333]
//                 bg-transparent
//                 text-white
//                 hover:bg-[#333]
//               "
//             >
//               <Eye className="h-4 w-4" />
//               View
//             </Button>
//           </Link>
//           <Link
//             href={`/smartmeter/${meter.id}/edit`}
//             className="flex-1"
//           >
//             <Button
//               variant="outline"
//               size="sm"
//               className="
//                 w-full
//                 gap-2
//                 border-[#333]
//                 bg-transparent
//                 text-white
//                 hover:bg-[#333]
//               "
//             >
//               <Pencil className="h-4 w-4" />
//               Edit
//             </Button>
//           </Link>
//           <Button
//             variant="outline"
//             size="sm"
//             className="
//               border-[#333]
//               bg-transparent
//               text-red-400
//               hover:bg-red-600/20
//             "
//           >
//             <Trash2 className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>
//     ))}
//   </div>
// )}
// {!loading && filteredMeters.length === 0 && (
//   <div
//     className="
//       flex flex-col
//       items-center
//       justify-center
//       rounded-lg
//       border border-[#333]
//       bg-[#222]
//       py-12
//     "
//   >
//     <Cpu className="mb-4 h-12 w-12 text-gray-600" />
//     <p className="text-lg font-medium text-gray-400">
//       No Smart Meters Found
//     </p>
//     <p className="text-sm text-gray-500">
//       Try adjusting your search or add a new smart meter
//     </p>
//   </div>
// )}
}),
"[project]/app/(protected)/smartmeter/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(protected)/smartmeter/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4260d662._.js.map