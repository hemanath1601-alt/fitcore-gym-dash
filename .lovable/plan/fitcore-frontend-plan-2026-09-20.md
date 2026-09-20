# FITCORE frontend plan

## Build
- Create a reusable FITCORE shell with responsive sidebar, mobile drawer, branded header, and shared page layout.
- Add realistic frontend-only sample data and reusable cards, status badges, tables, search/filter controls, and dialogs.
- Build all ten requested screens: login, dashboard, members, payments, trainers, attendance, membership plans, member search, payment history, and pending fees.
- Match the selected bento glass-grid direction with charcoal surfaces, red accents, Space Grotesk/Inter typography, restrained motion, and clear mobile adaptations.

## Interactions
- Make navigation, login, searching, filtering, pagination, add/edit forms, check-in, payment recording, and fee reminders usable with local in-memory state.
- Keep the experience presentation-ready without database calls or AI features.

## Validation
- Confirm every screen has unique page metadata.
- Verify desktop and mobile rendering, navigation, dialogs, tables, and key actions in the live preview.

## Technical details
- Use TanStack Router routes and existing React/Tailwind tooling.
- Centralize semantic color, type, glass, and animation tokens in the global design system.
- Use Lucide icons and existing design-system controls rather than raw action buttons.
