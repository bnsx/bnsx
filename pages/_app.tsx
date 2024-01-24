import "@/styles/globals.css";
import { IBM_Plex_Sans_Thai } from "next/font/google";
const font = IBM_Plex_Sans_Thai({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "500", "700"],
});

export default function App({ Component, pageProps }: any) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
}
