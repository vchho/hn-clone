import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";

import { ChakraProvider } from "@chakra-ui/react";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import TopStories from "./pages/topstories.tsx";
import { Navbar } from "./components/navbar.tsx";
import StoryView from "./components/story-view.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/top-stories" />,
  },
  {
    path: "/top-stories",
    element: <TopStories />,
  },
  {
    path: "/top-stories/:id",
    element: <StoryView />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Navbar />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
