import type { AppProps } from "next/app";
import "app/app.scss";
import { Layout } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import { Header as CustomHeader } from "widgets/Header";
import Head from "next/head";
import { Providers } from "../src/app/providers/Providers";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Head>
        <title>Крестики-нолики</title>
      </Head>
      <Layout style={{ height: "100vh" }}>
        <Header style={{ minHeight: "64px", height: "auto", padding: 0 }}>
          <CustomHeader></CustomHeader>
        </Header>
        <Content>
          <Component {...pageProps} />
        </Content>
      </Layout>
    </Providers>
  );
}

export default MyApp;
