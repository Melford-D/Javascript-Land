import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Head from "next/head";
import NextLink from "next/link";
import useStyles from "../utils/styles";
import React from "react";

export default function Layout({ title, description, children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Amazona` : `Next Amazona`} </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link style={{ textDecoration: "none", color: "#fff" }}>
              <Typography className={classes.brand}>amazona</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link style={{ textDecoration: "none", color: "#fff" }}>
                Cart
              </Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link style={{ textDecoration: "none", color: "#fff" }}>
                Login
              </Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. Next Amazona</Typography>
      </footer>
    </div>
  );
}
