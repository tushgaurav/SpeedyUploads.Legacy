// Chakra imports
import {
    Flex,
    Stat,
    StatHelpText,
    StatLabel,
    StatNumber,

} from "@chakra-ui/react";
// Custom components
import Card from "@/components/UI/Card/Card";
import CardBody from "@/components/UI/Card/CardBody";
import IconBox from "@/components/UI/Icons/IconBox";
import React from "react";

const MiniStatistics = ({ title, amount, percentage, icon }: { title: string, amount: string, percentage: number, icon: any }) => {
    const textColor = "gray.800";

    return (
        <Card minH='83px'>
            <CardBody>
                <Flex flexDirection='row' align='center' justify='center' w='100%'>
                    <Stat me='auto'>
                        <StatLabel
                            fontSize='sm'
                            color="gray.800"
                            fontWeight='bold'
                            pb='.1rem'>
                            {title}
                        </StatLabel>
                        <Flex>
                            <StatNumber fontSize='lg' color={textColor}>
                                {amount}
                            </StatNumber>
                            <StatHelpText
                                alignSelf='flex-end'
                                justifySelf='flex-end'
                                m='0px'
                                color={percentage > 0 ? "green.600" : "red.600"}
                                fontWeight='bold'
                                ps='3px'
                                fontSize='sm'>
                                {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
                            </StatHelpText>
                        </Flex>
                    </Stat>
                    <IconBox as='box' h={"45px"} w={"45px"} >
                        {icon}
                    </IconBox>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default MiniStatistics;
