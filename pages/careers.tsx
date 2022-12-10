import Head from "next/head";

import { ComingSoon } from "../components/templates";

import type { NextPage } from "next";

const Careers: NextPage = () => {
  return (
    <>
      <Head>
        <title>codepolyglots - careers</title>
        <meta name="description" content="Code Polyglots" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ComingSoon />
    </>
  );
};

export default Careers;
