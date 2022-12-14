import { type AppType } from "next/app";

import { trpc } from "../utils/trpc";
import { AuthContextProvider } from "../features/auth/hooks/use-auth-context";
import { Layout } from "../features/layout/components/layout";

import "../styles/globals.css";
import { QueryClientProvider, useQueryClient } from "@tanstack/react-query";
import { CookiesProvider } from "react-cookie";

const MyApp: AppType = ({ Component, pageProps }) => {
  const queryClient = useQueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <AuthContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthContextProvider>
      </CookiesProvider>
    </QueryClientProvider>
  );
};

export default trpc.withTRPC(MyApp);
