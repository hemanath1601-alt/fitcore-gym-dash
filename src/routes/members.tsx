import { createFileRoute } from "@tanstack/react-router"
import { MembersPage } from "@/components/fitcore/route-pages"
export const Route=createFileRoute("/members")({head:()=>({meta:[{title:"Members — FITCORE"},{name:"description",content:"Manage Members in the FITCORE gym membership system."},{property:"og:title",content:"Members — FITCORE"},{property:"og:description",content:"Professional gym management for Members."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:MembersPage})
