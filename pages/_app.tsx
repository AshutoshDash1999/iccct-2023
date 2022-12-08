import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Nunito } from "@next/font/google";

const nunito = Nunito({weight: ['400', '700'], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  // console.log(nunito.className);
  
  return (
    <main className={nunito.className}>
      <style jsx global>{`
        h1, h2, h3, h4, h5, h6, th, tr {
          font-family: ${nunito.style.fontFamily}!important;
        }
      `}</style>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  );
}
