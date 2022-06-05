import {
  Box,
  Stack,
  Text,
  Container,
  ButtonGroup,
  IconButton,
  Link,
  Divider,
} from "@chakra-ui/react";

import {FaLinkedin, FaGithub, FaStackOverflow, FaWhatsapp, FaTelegram} from "react-icons/fa";
import Logo from "../Logo";
import {SiFreelancer} from "react-icons/si";

const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{ base: "4", md: "8" }}
  >
    <Container maxW="container.lg">
      <Stack
        direction="row"
        spacing="4"
        align="center"
        justify="space-between"
        pb={5}
      >
        <Logo />
        <ButtonGroup variant="ghost">




          <IconButton
            as="a"
            href="https://wa.me/+989204117120"
            aria-label="Whatsapp"
            icon={<FaWhatsapp fontSize="20px" />}
          />
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/pouria-sharifi"
            aria-label="Linkedin"
            icon={<FaLinkedin fontSize="20px" />}
          />
          <IconButton
            as="a"
            href="https://github.com/pouriaSharifi"
            aria-label="Github"
            icon={<FaGithub fontSize="20px" />}
          />
          <IconButton
            as="a"
            href="https://stackoverflow.com/users/9276984/pouria-sharifi"
            aria-label="stackoverflow"
            icon={<FaStackOverflow fontSize="20px" />}
          />
          <IconButton
              as="a"
              href="https://t.me/puriya_75"
              aria-label="Telegram"
              icon={<FaTelegram fontSize="20px" />}
          />
          <IconButton
              as="a"
              href="https://www.freelancer.com/u/puridev"
              aria-label="freelancer"
              icon={<SiFreelancer fontSize="20px" />}
          />
        </ButtonGroup>
      </Stack>
      <Divider pt={2} />
      <Stack direction="row" align="center" justify="space-between" pt={5}>
        <Text fontSize="md">
          &copy; {new Date().getFullYear()} Pouria Sharifi{" "}
        </Text>
        <IconButton
          as={Link}
          rounded="md"
          aria-label="Github Repo"
          rel="noopener"
          href="https://github.com/pouriaSharifi"
          isExternal
          icon={<FaGithub fontSize="18px" />}
        />
      </Stack>
    </Container>
  </Box>
);

export default Footer;
