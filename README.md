# NLW Agents

Welcome to the **NLW Agents** project! This modern web application was crafted as part of the NLW (Next Level Week) event, proudly hosted by Rocketseat. The project delivers a seamless and interactive experience for users to join and manage rooms in real time, showcasing the latest in web development best practices and technologies.

## 🚀 Technologies Used

- ⚛️ **React** & **React DOM**: UI library for building fast and interactive user interfaces.
- 🟦 **TypeScript**: Adds static typing to JavaScript, improving code quality and maintainability.
- ⚡ **Vite**: Next-generation frontend tooling for fast development and optimized builds.
- 🛣️ **React Router DOM**: Handles client-side routing for smooth navigation.
- 💨 **Tailwind CSS**, **@tailwindcss/vite**, **tailwind-merge**: Utility-first CSS framework and tools for rapid UI development and class management.
- 🧩 **@radix-ui/react-slot**: Primitives for building accessible design systems.
- 🧮 **@tanstack/react-query**: Powerful data-fetching and state management for React.
- 🎨 **lucide-react**: Icon library for beautiful and consistent icons.
- 🧰 **class-variance-authority**, **clsx**: Utilities for managing conditional CSS classes.

## 🗂️ Project Structure & Architecture

This project is organized for clarity, scalability, and maintainability. Here’s an overview of the main structure and architectural choices:

```
├── public/                # Static assets
├── src/
│   ├── app.tsx           # Main App component
│   ├── main.tsx          # Entry point for React
│   ├── index.css         # Global styles
│   ├── components/       # Reusable UI components
│   │   └── ui/           # Atomic UI elements (buttons, inputs, etc.)
│   ├── lib/              # Utility functions and helpers
│   └── pages/            # Page components mapped to routes
│       ├── create-room.tsx
│       └── room.tsx
├── index.html            # Main HTML file
├── package.json          # Project metadata and dependencies
├── tsconfig*.json        # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

### 🏗️ Architectural Highlights

- **Component-Based**: UI is built from small, reusable components.
- **Atomic Design**: Components are structured from atoms (UI primitives) to molecules and organisms.
- **Page Routing**: Each file in `src/pages/` represents a route.
- **Separation of Concerns**: Logic, UI, and utilities are organized in dedicated folders.
- **Utility-First CSS**: Tailwind CSS is used for rapid and consistent styling.
- **Hooks**: React hooks manage state and side effects for a clean, functional approach.

## 🚦 Getting Started

To run and continue developing this project, you’ll need:

- **Node.js** (v18 or newer)
- **npm** (v9 or newer)

1. Clone the repository:
   ```zsh
   git clone git@github.com:frediwilkens/nlw-agents-web.git
   cd nlw-agents/web
   ```
2. Install dependencies:
   ```zsh
   npm install
   ```
3. Start the development server:
   ```zsh
   npm run dev
   ```
4. Visit [http://localhost:5173](http://localhost:5173) in your browser to see the app running.

You’re ready to code and contribute!

---

Made with ❤️ during NLW by Rocketseat. Happy coding and keep leveling up!
