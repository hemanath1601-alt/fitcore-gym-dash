import { createFileRoute } from "@tanstack/react-router"
import { MemberSearchPage } from "@/components/fitcore/route-pages"
export const Route=createFileRoute("/member-search")({head:()=>({meta:[{title:"Member Search — FITCORE"},{name:"description",content:"Manage Member Search in the FITCORE gym membership system."},{property:"og:title",content:"Member Search — FITCORE"},{property:"og:description",content:"Professional gym management for Member Search."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:MemberSearchPage})
