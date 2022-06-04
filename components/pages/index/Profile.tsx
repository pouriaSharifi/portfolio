import {
    Box,
    Heading,
    SlideFade,
    Link,
    LightMode,
    Button,
    ButtonGroup,
} from "@chakra-ui/react";

import {FaEnvelope, FaWhatsapp} from "react-icons/fa";
import Paragraph from "../../Paragraph";

const Profile = () => {
    return (
        <SlideFade in={true} offsetY={80}>
            <Box>
                <Heading
                    as="h1"
                    fontSize={{base: "28px", md: "40px", lg: "48px"}}
                    mb={3}
                >
                    Hey , I’m Pouria Sharifi
                </Heading>
                <Paragraph fontSize="2xl" lineHeight={1.6}>
                    Full stack developer - Web Designer, focused on Javascript ,
                    <Link
                        color="green.500"
                        href="https://go.dev/"
                        isExternal
                        fontWeight="500"
                    >

                        Golang ,

                    </Link>
                    {" "}
                    <Link
                        color="green.500"
                        href="https://laravel.com/"
                        isExternal
                        fontWeight="500"
                    >
                        laravel ,

                    </Link>
                    {" "}
                    <Link
                        color="green.500"
                        href="https://www.nodejs.org"
                        isExternal
                        fontWeight="500"
                    >
                        Nodejs ,
                    </Link>
                    {" "}
                    <Link
                        color="green.500"
                        href="https://www.reactjs.org"
                        fontWeight="500"
                        isExternal
                    >
                        React ,
                    </Link>
                    {" "}
                    <Link
                        color="green.500"
                        href="https://www.typescriptlang.org/"
                        fontWeight="500"
                        isExternal
                    >
                        TypeScript ,
                    </Link>
                    {" "}
                    <Link
                        color="green.500"
                        href="https://dotnet.microsoft.com/en-us/apps/aspnet/mvc"
                        fontWeight="500"
                        isExternal
                    >
                        Asp.net Mvc
                    </Link>

                    . I work as a full stack developer. You’ve found my personal website
                    on the internet.
                </Paragraph>
                <Box mt={10}>
                    <LightMode>
                        <ButtonGroup>
                            <Button
                                colorScheme="green"
                                bg="green.500"
                                href="mailto:poriya1375@gmail.com"
                                borderRadius={5}
                                p={3}
                                as="a"
                                leftIcon={<FaEnvelope/>}
                            >
                                poriya1375@gmail.com
                            </Button>
                            <Button
                                colorScheme="green"
                                bg="green.500"
                                href=" https://wa.me/+989204117120"
                                borderRadius={5}
                                p={3}
                                as="a"
                                leftIcon={<FaWhatsapp/>}
                            >
                                WhatsApp
                            </Button>
                        </ButtonGroup>
                    </LightMode>
                </Box>
            </Box>
        </SlideFade>
    );
};

export default Profile;
