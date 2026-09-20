export { MembersPage, MemberSearchPage, TrainersPage, AttendancePage, PlansPage, PendingFeesPage } from "./pages"
export { PaymentsPage } from "./pages"
import { PaymentsPage as Payments } from "./pages"
export function PaymentHistoryPage(){return <Payments history/>}
