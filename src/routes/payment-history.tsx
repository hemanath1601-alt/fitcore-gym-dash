import { createFileRoute } from "@tanstack/react-router"
import { PaymentHistoryPage } from "@/components/fitcore/route-pages"
export const Route=createFileRoute("/payment-history")({head:()=>({meta:[{title:"Payment History — FITCORE"},{name:"description",content:"Manage Payment History in the FITCORE gym membership system."},{property:"og:title",content:"Payment History — FITCORE"},{property:"og:description",content:"Professional gym management for Payment History."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:PaymentHistoryPage})
