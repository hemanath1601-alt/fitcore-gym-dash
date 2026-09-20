import type { ReactNode } from "react"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

export function GlassCard({children,className}:{children:ReactNode;className?:string}){return <section className={cn("glass-panel rounded-2xl",className)}>{children}</section>}
export function PageTitle({eyebrow,title,description,action}:{eyebrow:string;title:string;description:string;action?:ReactNode}){return <header className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4"><div className="min-w-0"><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p><h1 className="mt-1 truncate font-display text-2xl font-bold text-foreground sm:text-3xl">{title}</h1><p className="mt-1 text-sm text-muted-foreground">{description}</p></div>{action&&<div className="shrink-0">{action}</div>}</header>}
export function StatusBadge({status}:{status:string}){const good=["Active","Paid","On floor","Present"].includes(status);const warn=["Expiring","Next shift","Paused"].includes(status);return <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold",good?"border-success/25 bg-success/10 text-success":warn?"border-warning/25 bg-warning/10 text-warning":"border-primary/25 bg-primary/10 text-accent-foreground")}><span className="size-1.5 rounded-full bg-current"/>{status}</span>}
export function SearchBox({value,onChange,placeholder="Search..."}:{value:string;onChange:(v:string)=>void;placeholder?:string}){return <div className="relative w-full sm:w-72"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"/><Input value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} className="h-10 rounded-xl bg-secondary/60 pl-9"/></div>}
export const initials=(name:string)=>name.split(" ").map(x=>x[0]).join("").slice(0,2)
