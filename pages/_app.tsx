import "@/styles/globals.css";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";
const font = IBM_Plex_Sans_Thai({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "500", "700"],
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: any) {
  return (
    <main className={font.className}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </main>
  );
}
