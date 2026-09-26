# SPOT Landing Page — AI Agent Rules (React + Tailwind CSS + Axios)

## Project Context
You are an expert Frontend JavaScript Engineer building the **Landing Page & Early Access site for SPOT** (repo: `SPOT-LANDING-PAGE`).
- **Goal:** Present SPOT's value proposition, validate interest in Bucaramanga, and capture email/WhatsApp leads for the early access waitlist.
- **Frontend Stack:** React (Vite) + Tailwind CSS + Axios.
- **Backend Scope:** Consumes a lightweight lead-capture endpoint (`POST /api/leads`).
- **Core Philosophy:** Maintain clean separation of concerns, high security standards, and readable code accessible to a junior developer team. Avoid overengineering.

## Code Style & Standards (Airbnb Inspired)
- **Variables & Scope:** Always prefer `const`; use `let` only for reassignments. Never use `var`.
- **Naming Conventions:** 
  - `camelCase` for variables, functions, and props.
  - `PascalCase` for React components.
  - `UPPER_SNAKE_CASE` for static constants and configuration keys.
- **Formatting:** 2 spaces indentation, semicolons required, single quotes for strings (unless template literals), max line length ~100 characters.
- **Strict Equality:** Exclusively use `===` and `!==`. Never use loose equality (`==`).
- **Modern JavaScript Patterns:**
  - Use template literals for string interpolation and multi-line strings.
  - Use optional chaining (`?.`) and nullish coalescing (`??`).
  - Favor destructuring in function parameters and variable assignments.
  - Use spread (`...`) over `Object.assign`.
  - Prefer declarative array methods (`map`, `filter`, `find`) over imperative `for` loops.
  - Always use `async`/`await` instead of `.then()` promise chains.
- **Environment Variables:** Access client-side environment variables strictly via `import.meta.env.VITE_*` (never use `process.env`).

## Architecture & Clean Separation
- **Layer Separation:**
  - **Presentation Layer (`src/components/`, `src/pages/`):** Pure UI components responsible only for rendering and user event dispatching.
  - **Application / Logic Layer (`src/hooks/`):** Custom React hooks encapsulating form workflows, validation logic, and UI state management.
  - **Infrastructure Layer (`src/services/`, `src/api/`):** API communication, Axios client configuration, and external adapters.
- **Dependency Rule:** Presentation and Application layers must not depend on low-level transport details; UI components never execute raw HTTP requests directly.
- **Component Design:** Small, composable, single-responsibility functional components using named exports.
- **Hooks Placement:** Declare React hooks (`useState`, `useEffect`, custom hooks) at the top of the component before any helper logic or the JSX return.
- **Directory Layout:**
  - `src/components/`: Reusable UI elements (Hero, WaitlistForm, Footer, Navbar).
  - `src/hooks/`: Business logic and form handlers (`useWaitlistForm.js`).
  - `src/services/`: HTTP adapters and API calls (`leadsService.js`).
  - `src/assets/`: Static SVGs, images, and brand assets.

## Styling (Tailwind CSS)
- **Mobile-First:** Design for mobile screens first using responsive prefixes (`sm:`, `md:`, `lg:`).
- **Utility-First:** Use Tailwind utility classes directly in JSX.
- **Avoid `@apply` Abuse:** Encapsulate repetitive styles into reusable React components (e.g., ``, ``) rather than writing CSS classes with `@apply`.
- **Interactive Feedback:** Always define states for interactive elements (`hover:`, `focus:`, `active:`, `disabled:`).

## API Client & Networking (Axios)
- **Centralized Client:** Always instantiate Axios via `axios.create({ baseURL, timeout })` inside `src/services/apiClient.js`. Do not import or execute global `axios` calls directly in views.
- **Interceptors:** Use request interceptors for global headers and response interceptors for standardized error handling and formatting.
- **Service Isolation:** Encapsulate all API interactions inside explicit functions (e.g., `createLead(leadData)`) within `src/services/leadsService.js`.
- **UI States:** Ensure waitlist interactions account for all request lifecycles: `idle`, `loading`, `success`, and `error`.

## Web Security Standards
- **Input Sanitization & Validation:** Validate and sanitize all user inputs (emails, names, phone numbers) before sending payloads.
- **XSS Prevention:** Never insert unsanitized user content into the DOM via `dangerouslySetInnerHTML`. Rely on React’s built-in escaping.
- **Secret Protection:** Never commit API keys, database credentials, or secret tokens to version control. The client build must only expose public `VITE_*` values.
- **Safe External Links:** All external links opening in a new tab (`target="_blank"`) must include `rel="noopener noreferrer"`.
- **Security Headers & Cookies (Backend/Deployment):**
  - Configure production headers: `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, and `Strict-Transport-Security`.
  - Any session or tracking cookies must be marked with `HttpOnly`, `Secure`, and `SameSite=Strict`.

## Error Handling & Logging
- **Try/Catch Blocks:** Wrap all asynchronous operations and API calls in `try/catch/finally` structures.
- **User-Facing Error Boundaries:** Never fail silently. When network or validation issues arise, provide actionable, friendly feedback to the user.
- **Controlled Logging:** Restrict technical error traces (`console.error`) to development mode to prevent leaking sensitive context in production.