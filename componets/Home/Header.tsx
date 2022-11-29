import Head from "next/head";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <Head>
      <title>My Next App</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};

export default Header;
