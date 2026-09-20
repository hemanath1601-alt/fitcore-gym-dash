import { createFileRoute } from "@tanstack/react-router"
import { TrainersPage } from "@/components/fitcore/route-pages"
export const Route=createFileRoute("/trainers")({head:()=>({meta:[{title:"Trainers — FITCORE"},{name:"description",content:"Manage Trainers in the FITCORE gym membership system."},{property:"og:title",content:"Trainers — FITCORE"},{property:"og:description",content:"Professional gym management for Trainers."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:TrainersPage})
