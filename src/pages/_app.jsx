import "tailwindcss/tailwind.css";
import Head from "next/head";
import { AppLayout } from "src/layouts/AppLayout";
import { SWRConfig } from "swr";

export const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("エラー発生");
  }

  const json = await res.json();
  return json;
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig value={{ fetcher }}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </SWRConfig>
    </>
  );
};

export default MyApp;
