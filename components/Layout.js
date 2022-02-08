import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import Head from "next/head";
import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>amazona</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All rights reserved. Next Amazona</Typography>
      </footer>
    </div>
  );
}
