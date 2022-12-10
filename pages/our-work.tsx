import Head from "next/head";

import { ComingSoon } from "../components/templates";

import type { NextPage } from "next";

const OurWork: NextPage = () => {
  return (
    <>
      <Head>
        <title>codepolyglots - our work</title>
        <meta name="description" content="Code Polyglots" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ComingSoon />
    </>
  );
};

export default OurWork;
