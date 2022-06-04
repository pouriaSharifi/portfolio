import {Heading, SlideFade, Grid,} from "@chakra-ui/react";
import WorkCard from "../../WorkCard";

const Works = () => {
    const data = [
        {
            title:"Hamrah Konkur",
            desc:"A twa application for educating students"
        },
    ]
    return (
        <SlideFade in={true} offsetY={80} delay={0.2}>
            <Heading
                as="h1"
                fontSize={{base: "24px", md: "30px", lg: "36px"}}
                mb={3}
            >
                My Works
            </Heading>
            <Grid mt={10} templateColumns={{base:"repeat(1,1fr)",md:"repeat(3,1fr)"}} gap={"5"}>
                {data.map((item,index)=>(
                    <WorkCard {...item} key={index}/>
                ))}
            </Grid>
        </SlideFade>
    );
};

export default Works;
