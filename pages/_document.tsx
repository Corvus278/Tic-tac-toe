import { FC } from "react";
import { Head, Html, Main, NextScript } from "next/document";

const Document: FC = () => {
  return (
    <Html lang={"ru"}>
      <Head></Head>
      <body>
        <Main></Main>
        <NextScript></NextScript>
      </body>
    </Html>
  );
};

export default Document;
