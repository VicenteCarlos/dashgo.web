import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import { QueryClientProvider, QueryClient } from "react-query";
import { UserProvider } from "./contexts/UserProvider";
import { ContextProvider } from "./contexts";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <RouterProvider router={router} />
        </ContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
