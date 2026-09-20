import { createFileRoute } from "@tanstack/react-router"
import { AttendancePage } from "@/components/fitcore/route-pages"
export const Route=createFileRoute("/attendance")({head:()=>({meta:[{title:"Attendance — FITCORE"},{name:"description",content:"Manage Attendance in the FITCORE gym membership system."},{property:"og:title",content:"Attendance — FITCORE"},{property:"og:description",content:"Professional gym management for Attendance."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:AttendancePage})
