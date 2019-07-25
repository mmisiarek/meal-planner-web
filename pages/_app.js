import App, { Container } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from "../src/theme";

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </Container>
        );
    }
}
