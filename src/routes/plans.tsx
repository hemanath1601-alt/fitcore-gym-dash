import { createFileRoute } from "@tanstack/react-router"
import { PlansPage } from "@/components/fitcore/route-pages"
export const Route=createFileRoute("/plans")({head:()=>({meta:[{title:"Membership Plans — FITCORE"},{name:"description",content:"Manage Membership Plans in the FITCORE gym membership system."},{property:"og:title",content:"Membership Plans — FITCORE"},{property:"og:description",content:"Professional gym management for Membership Plans."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:PlansPage})
