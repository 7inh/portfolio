import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import theme from "src/common/theme";
import ErrorBoundaryWrapper from "src/components/ErrorBoundary/ErrorBoundary";
import LayoutMain from "src/layouts/LayoutMain/LayoutMain";
import NavProvider from "src/providers/NavProvider";
import SnackbarProvider from "src/providers/SnackbarProvider";
import TranslationProvider from "src/providers/TranslationProvider";
import "./index.css";
import Portfolio from "src/pages/Portfolio";

const queryClient = new QueryClient();
const router = createBrowserRouter([
    {
        element: <ErrorBoundaryWrapper />,
        children: [
            {
                path: "/",
                element: <LayoutMain />,
                children: [
                    {
                        path: "/",
                        element: <Portfolio />,
                    },
                ],
            },
            {
                path: "*",
                element: <div>404</div>,
            },
        ],
    },
]);

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <TranslationProvider>
                    <SnackbarProvider>
                        <NavProvider>
                            <RouterProvider router={router} />
                        </NavProvider>
                    </SnackbarProvider>
                </TranslationProvider>
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById("root") as HTMLElement
);
