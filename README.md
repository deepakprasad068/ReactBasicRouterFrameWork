# React Router Starter Framework

A reusable React starter framework built with **React, Vite, and React Router**. This project provides a basic application structure with routing, route loaders, a shared layout, navigation bar, and footer to help you start new React projects quickly.

Instead of configuring routing and the application layout from scratch every time, you can use this framework as a starting point and customize it according to your project's requirements.

## Features

- **React Router Setup** — Client-side navigation between pages.
- **Route Loaders** — Load data before rendering the destination route.
- **Shared Layout** — Reusable layout for pages with common UI elements.
- **Navigation Bar** — Navigate between Home and About pages.
- **Nested Routing** — Render child pages inside a shared layout using `Outlet`.
- **Reusable Components** — Extend the framework with additional pages and components.
- **Vite** — Fast development server and build tooling.
- **CSS Support** — Style components using regular CSS or CSS Modules.

## Tech Stack

- React
- Vite
- React Router DOM
- JavaScript
- CSS

## Project Structure

```text
src/
├── LayoutComponent/
│   └── HomeLayout.jsx
├── AboutPage.jsx
├── router.jsx
├── main.jsx
├── index.css
└── App.jsx
```

_The structure may be extended as your application grows._

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/deepakprasad068/ReactBasicRouterFrameWork.git
```

### 2. Navigate to the Project Directory

```bash
cd ReactBasicRouterFrameWork
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

## Routing Architecture

The framework uses `createBrowserRouter` and `RouterProvider` from React Router DOM.

The shared layout contains:

- Navigation bar
- `Outlet` for rendering child routes
- Footer

Example route configuration:

```jsx
{
  path: "/",
  element: <HomeLayout />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: "about",
      element: <AboutPage />,
      loader: aboutLoader,
    },
  ],
}
```

### How Route Loaders Work

A loader runs when React Router loads a route that uses it. It can retrieve data from an API or perform other asynchronous operations before the route component renders.

Example:

```jsx
export async function aboutLoader() {
  const response = await fetch("YOUR_API_URL");

  if (!response.ok) {
    throw new Response("Failed to load data", {
      status: response.status,
    });
  }

  return response.json();
}
```

Access the returned data inside the route component using `useLoaderData()`:

```jsx
import { useLoaderData } from "react-router-dom";

export default function AboutPage() {
  const data = useLoaderData();

  return <div>{JSON.stringify(data)}</div>;
}
```

Replace `YOUR_API_URL` with your actual backend endpoint and adjust the rendering to match the returned data.

## Adding a New Page

1. Create a new page component.
2. Add a route configuration in `router.jsx`.
3. Add a loader if the page needs data before rendering.
4. Add a navigation link if users need to access the page from the navbar.
5. Customize the page's styling and content.

## Use Cases

This framework can serve as a starting point for:

- CRUD applications
- Product management dashboards
- Portfolio websites
- Admin panels
- API-driven React applications
- Other React projects that need reusable layouts and route loaders

## Purpose

The goal of this repository is to maintain a **simple, reusable React foundation** that reduces repetitive setup work and allows development to focus on the actual features of each new project.

## License

You may add a license of your choice depending on how you intend to share and reuse this project.
