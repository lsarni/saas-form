import "@/styles/globals.css";
import { SaasProvider } from "@saas-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SaasProvider>
      <Component {...pageProps} />
    </SaasProvider>
  );
}
