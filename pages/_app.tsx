import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Nunito } from "@next/font/google";
import Head from "next/head";

const nunito = Nunito({ weight: ["400", "700"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  // console.log(nunito.className);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>ICCCT 2023</title>
        <meta property="og:title" content="ICCCT 2023" key="title" />
        <meta
          name="title"
          content="International Conference on Communication and Computational Technology"
        />
        <meta
          name="description"
          content="International Conference on Communication and Computational Technologies 2023 held by Odisha University of Technology and Research, Bhubaneswar"
        />
        <meta
          name="keywords"
          content="International Conference on Communication and Computational Technologies, 2023, conference, tech conference, international conference, teleconference, outr, odisha university of technology and research, outer, cet, college of engineering and technology"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="2 days" />
        <meta
          name="author"
          content="Odisha University of Technology and Research"
        />
      </Head>
      <main className={nunito.className}>
        <style jsx global>{`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          th,
          tr {
            font-family: ${nunito.style.fontFamily}!important;
          }
        `}</style>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </main>
    </>
  );
}

export function reportWebVitals(metric: any) {
  console.log(metric);
}
