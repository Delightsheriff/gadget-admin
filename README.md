# GadgetApp Admin Dashboard

This is the admin dashboard for GadgetApp, a modern e-commerce platform for the latest tech gadgets. This dashboard is built with Next.js, Supabase, and Tailwind CSS.

There is also a landing page for the user-facing mobile app included in this project.

## Features

The admin dashboard allows you to manage:

-   **Dashboard:** View key metrics and statistics.
-   **Products:** Add, edit, and delete products.
-   **Categories:** Manage product categories.
-   **Orders:** View and manage customer orders.

## Tech Stack

-   [Next.js](https://nextjs.org/) - React framework for production.
-   [Supabase](https://supabase.io/) - Open source Firebase alternative for database, auth, and storage.
-   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
-   [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript.
-   [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI components.
-   [Zod](https://zod.dev/) - TypeScript-first schema validation.
-   [React Hook Form](https://react-hook-form.com/) - Performant, flexible and extensible forms with easy-to-use validation.
-   [Recharts](https://recharts.org/) - A composable charting library built on React components.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 20 or later) and a package manager like [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/) installed.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/shop-admin.git
    cd shop-admin
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

### Environment Variables

This project uses Supabase for its backend. You will need to create a `.env.local` file in the root of the project and add your Supabase credentials.

1.  Go to [Supabase](https://supabase.com/) and create a new project.
2.  Navigate to your project's **Settings** > **API**.
3.  Find your **Project URL** and **Project API keys** (the `anon` `public` key).
4.  Create a `.env.local` file in the root of your project and add the following:

    ```env
    NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
    ```

## Available Scripts

In the project directory, you can run:

-   `npm run dev`: Runs the app in development mode with Turbopack. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
-   `npm run build`: Builds the app for production.
-   `npm run start`: Starts a production server.
-   `npm run lint`: Runs the linter to check for code quality issues.
