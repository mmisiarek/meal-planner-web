import App, { Container } from "next/app";
import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";

import withApolloClient from "../lib/with-apollo-client";

import theme from "../src/theme";

class MyApp extends App {
    render() {
        const { Component, pageProps, apolloClient } = this.props;
        return (
            <Container>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <ApolloProvider client={apolloClient}>
                        <Component {...pageProps} />
                    </ApolloProvider>
                </ThemeProvider>
            </Container>
        );
    }
}

export default withApolloClient(MyApp);
