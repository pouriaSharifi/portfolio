import Head from "next/head";
import {
    Box,
    Container,
    Heading,
    SlideFade,
    Divider,
    Button,
    Collapse,
    LightMode,
    Tag,
} from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";
import {useState} from "react";

const About = () => {
    const [show, setShow] = useState(false);

    const [coolStuff] = useState([
        "React",
        "Javascript",
        "Golang",
        "Laravel",
        "AI",
        "Ios",
        "Android",
        "Flutter",
        "ReactNative",
        "Twa",
        "Pwa",
        "TypeScript",
        "Sql",
        "Mongodb",

    ]);
    const [notCoolStuff] = useState([
        "Angular",
        "Jquery",
        "Coffee",
        "Politics",
        "Narrow-minded",
        "Working Overtime",
    ]);

    const handleToggle = () => setShow(!show);

    return (
        <div>
            <Head>
                <title>Pouria Sharifi | About</title>
                <meta
                    name="description"
                    content="Pouria Sharifi | Full stack developer"
                />
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://sharifi.top"/>
                <meta
                    property="og:title"
                    content="Pouria Sharifi | Full stack developer"
                />
                <meta property="og:image" content="/meta-image.jpg"/>
            </Head>
            <main>
                <Container maxW="container.lg" mt={10}>
                    <SlideFade in={true} offsetY={80}>
                        <Box>
                            <Heading
                                as="h1"
                                fontSize={{base: "28px", md: "32px", lg: "36px"}}
                                mb={4}
                            >
                                About Me
                            </Heading>
                            <Collapse in={show} startingHeight={100}>
                                <Paragraph fontSize="xl" lineHeight={1.6}>
                                    I love React and Golang and I have been using them since 2015. After years of
                                    experience in frontend and backend development, I am looking for new challenges to
                                    learn more and discover new possibilities in software development. To this end I am
                                    open to remote positions with any company located in all over the world. Please
                                    contact me if you need a job that would be beneficial to your team
                                </Paragraph>
                            </Collapse>
                            <LightMode>
                                <Button
                                    size="sm"
                                    onClick={handleToggle}
                                    mt="1rem"
                                    colorScheme="green"
                                    bg="green.500"
                                >
                                    Show {show ? "Less" : "More"}
                                </Button>
                            </LightMode>
                        </Box>
                        <Divider my={10}/>
                    </SlideFade>
                    <SlideFade in={true} offsetY={80} delay={0.2}>
                        <Heading
                            as="h1"
                            fontSize={{base: "24px", md: "30px", lg: "36px"}}
                            mb={3}
                        >
                            Cool Stuff
                        </Heading>
                        <Paragraph fontSize="xl" lineHeight={1.6}>
                            {coolStuff.map((item) => (
                                <Tag
                                    size="lg"
                                    colorScheme="green"
                                    key={item}
                                    marginY={2}
                                    marginRight={2}
                                >
                                    {item}
                                </Tag>
                            ))}
                        </Paragraph>
                        <Heading
                            as="h1"
                            fontSize={{base: "24px", md: "30px", lg: "36px"}}
                            mt={10}
                            mb={3}
                        >
                            Meh..
                        </Heading>
                        <Paragraph fontSize="xl" lineHeight={1.6}>
                            {notCoolStuff.map((item) => (
                                <Tag
                                    size="lg"
                                    colorScheme="red"
                                    key={item}
                                    marginY={2}
                                    marginRight={2}
                                >
                                    {item}
                                </Tag>
                            ))}
                        </Paragraph>
                    </SlideFade>
                </Container>
            </main>
        </div>
    );
};

export default About;
