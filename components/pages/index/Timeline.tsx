import { Heading, SlideFade, List, ListItem, ListIcon, Link } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const Timeline = () => {
  return (
    <SlideFade in={true} offsetY={80} delay={0.2}>
    <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        Timeline
      </Heading>
      <Heading mt={10} mb={5} as="h2" size="md">
        2022
      </Heading>
      <List spacing={18} fontSize="18">
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          full-stack developer at <Link href="https://hamrahkonkur.ir">Hamrah Konkur</Link>
        </ListItem>

        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Front-end developer at <Link href="http://daalagency.ir">Daal Agency</Link>
        </ListItem>

        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Graduated from <Link href="https://quera.org">quera</Link> college
        </ListItem>
      </List>


    </SlideFade>
  );
};

export default Timeline;
