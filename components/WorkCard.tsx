import {
    Box,
    Heading, GridItem, Text,
} from "@chakra-ui/react";

const WorkCard = ({desc,title}: any) => {
    return (
        <GridItem>
            <Box p={5}  borderWidth='1px'>
                <Heading fontSize='xl'>{title}</Heading>
                <Text mt={4} >{desc}</Text>
            </Box>
        </GridItem>
    );
};

export default WorkCard;
