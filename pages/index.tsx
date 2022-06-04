import type { NextPage } from 'next'
import { Container, Divider } from "@chakra-ui/react";
import Head from "next/head";
import Stack from "../components/pages/index/Stack";
import Timeline from "../components/pages/index/Timeline";
import Works from "../components/pages/index/Works";
import Profile from "../components/pages/index/Profile";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pouria Sharifi | Home</title>
        <meta
            name="description"
            content="Pouria Sharifi | Full stack developer"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta property="og:url" content="https://sharifi.top" />
        <meta name="color-scheme" content="light" />
        <meta
            property="og:title"
            content="Pouria Sharifi | Full stack developer"
        />
        <meta property="og:image" content="/meta-image.jpg" />
      </Head>
      <main>
        <Container maxW="container.lg" mt={["5", "10"]}>
          <Profile />
          <Divider my={10} />
          <Stack />
          <Divider my={10} />
          <Works />
          <Divider my={10} />
          <Timeline />
        </Container>
      </main>
    </>
  )
}

export default Index
