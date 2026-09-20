import { createFileRoute } from "@tanstack/react-router"
import { Dashboard } from "@/components/fitcore/dashboard"
export const Route=createFileRoute("/")({head:()=>({meta:[{title:"Dashboard — FITCORE"},{name:"description",content:"FITCORE gym operations dashboard with membership, attendance, trainer, and payment insights."},{property:"og:title",content:"FITCORE Gym Dashboard"},{property:"og:description",content:"A modern command center for gym membership operations."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Dashboard})
