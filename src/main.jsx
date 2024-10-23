import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';  // Make sure to import the CSS where Tailwind is included
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Layout } from "./layout/Layout";
import CodeEditor from "./components/CodeEditor/CodeEditor";
import { Box } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.js";
import FileExplorerPage from "./DirectoryFile/FileExplorerPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="/Code-Editor" element={
          <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
            <CodeEditor />
          </Box>
        } />
        <Route path="/Code-Editor-dir" element={<FileExplorerPage />} />
      </Route>
    </>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
);
