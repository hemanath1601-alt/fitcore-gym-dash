export type Member = { id: string; name: string; phone: string; plan: string; trainer: string; status: "Active" | "Expiring" | "Overdue" | "Paused"; joined: string; expires: string; due: number }
export const members: Member[] = [
 { id:"FC-1042", name:"Priya Sharma", phone:"+91 98765 21042", plan:"Annual Pro", trainer:"Vikram Singh", status:"Active", joined:"12 Mar 2025", expires:"12 Mar 2026", due:0 },
 { id:"FC-1041", name:"Rohan Mehta", phone:"+91 98220 41041", plan:"6-Month", trainer:"Ananya Rao", status:"Expiring", joined:"21 Nov 2024", expires:"21 Sep 2026", due:0 },
 { id:"FC-1038", name:"Neha Kapoor", phone:"+91 99876 51038", plan:"Monthly", trainer:"Vikram Singh", status:"Overdue", joined:"02 Jan 2026", expires:"02 Sep 2026", due:2500 },
 { id:"FC-1035", name:"Arjun Verma", phone:"+91 97654 31035", plan:"Annual Pro", trainer:"Kabir Khan", status:"Active", joined:"30 Nov 2025", expires:"30 Nov 2026", due:0 },
 { id:"FC-1029", name:"Sana Iqbal", phone:"+91 98989 71029", plan:"Quarterly", trainer:"Ananya Rao", status:"Paused", joined:"15 Jun 2026", expires:"15 Oct 2026", due:0 },
 { id:"FC-1022", name:"Karan Singh", phone:"+91 91234 51022", plan:"6-Month", trainer:"Kabir Khan", status:"Overdue", joined:"08 Feb 2026", expires:"08 Aug 2026", due:12000 },
]
export const trainers = [
 { name:"Vikram Singh", specialty:"Strength & Conditioning", clients:32, shift:"06:00 – 14:00", status:"On floor" },
 { name:"Ananya Rao", specialty:"Functional Training", clients:28, shift:"10:00 – 18:00", status:"On floor" },
 { name:"Kabir Khan", specialty:"Body Transformation", clients:24, shift:"14:00 – 22:00", status:"Next shift" },
 { name:"Meera Joshi", specialty:"Yoga & Mobility", clients:19, shift:"07:00 – 15:00", status:"On leave" },
]
export const payments = [
 { receipt:"RC-8412", member:"Priya Sharma", amount:24000, method:"UPI", date:"20 Sep 2026", status:"Paid" },
 { receipt:"RC-8411", member:"Arjun Verma", amount:24000, method:"Card", date:"19 Sep 2026", status:"Paid" },
 { receipt:"RC-8409", member:"Sana Iqbal", amount:6500, method:"Cash", date:"18 Sep 2026", status:"Paid" },
 { receipt:"RC-8406", member:"Rohan Mehta", amount:12000, method:"UPI", date:"17 Sep 2026", status:"Paid" },
 { receipt:"RC-8401", member:"Neha Kapoor", amount:2500, method:"Card", date:"02 Aug 2026", status:"Failed" },
]
export const attendance = [
 { member:"Priya Sharma", id:"FC-1042", checkIn:"06:42", checkOut:"08:08", duration:"1h 26m" },
 { member:"Arjun Verma", id:"FC-1035", checkIn:"07:15", checkOut:"09:02", duration:"1h 47m" },
 { member:"Rohan Mehta", id:"FC-1041", checkIn:"08:10", checkOut:"09:25", duration:"1h 15m" },
 { member:"Sana Iqbal", id:"FC-1029", checkIn:"09:32", checkOut:"—", duration:"In gym" },
]
export const plans = [
 { name:"Monthly", price:2500, duration:"30 days", members:184, features:["Gym floor access","General trainer","Locker access"] },
 { name:"Quarterly", price:6500, duration:"90 days", members:276, features:["Everything in Monthly","2 fitness assessments","Diet consultation"] },
 { name:"6-Month", price:12000, duration:"180 days", members:332, features:["Everything in Quarterly","Personal program","Priority booking"] },
 { name:"Annual Pro", price:24000, duration:"365 days", members:492, features:["Unlimited access","Monthly PT session","Recovery zone access"] },
]
export const formatMoney = (value:number) => new Intl.NumberFormat("en-IN", { style:"currency", currency:"INR", maximumFractionDigits:0 }).format(value)
