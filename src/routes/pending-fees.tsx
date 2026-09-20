import { createFileRoute } from "@tanstack/react-router"
import { PendingFeesPage } from "@/components/fitcore/route-pages"
export const Route=createFileRoute("/pending-fees")({head:()=>({meta:[{title:"Pending Fees — FITCORE"},{name:"description",content:"Manage Pending Fees in the FITCORE gym membership system."},{property:"og:title",content:"Pending Fees — FITCORE"},{property:"og:description",content:"Professional gym management for Pending Fees."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:PendingFeesPage})
