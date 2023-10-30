import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import TopStories from "./pages/topstories.tsx";
import StoryView from "./components/story-view.tsx";
import NewStories from "./pages/newstories.tsx";

import { ChakraProvider } from "@chakra-ui/react";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        index: true,
        path: "/top-stories",
        element: <TopStories />,
      },
      {
        path: "/top-stories/:id",
        element: <StoryView />,
      },
      {
        path: "/new-stories",
        element: <NewStories />,
      },
    ],
  },

  {
    path: "*",
    element: <Navigate to={"/top-stories"} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
