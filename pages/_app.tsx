import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import {AuthProvider} from "../contexts/Auth";
import StyleMain from "../theme/StyleMain";
import Layout from "../components/Layout";

function MyApp({Component, pageProps}: AppProps) {

    return (
        <ChakraProvider theme={StyleMain}>
            <AuthProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AuthProvider>
        </ChakraProvider>
    )
}

export default MyApp
