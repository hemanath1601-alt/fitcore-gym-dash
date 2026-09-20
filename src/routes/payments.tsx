import { createFileRoute } from "@tanstack/react-router"
import { PaymentsPage } from "@/components/fitcore/route-pages"
export const Route=createFileRoute("/payments")({head:()=>({meta:[{title:"Payments — FITCORE"},{name:"description",content:"Manage Payments in the FITCORE gym membership system."},{property:"og:title",content:"Payments — FITCORE"},{property:"og:description",content:"Professional gym management for Payments."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:PaymentsPage})
