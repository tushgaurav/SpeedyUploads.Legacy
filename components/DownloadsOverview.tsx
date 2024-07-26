// Chakra imports
import { Box, Flex, Text } from "@chakra-ui/react";
// Custom components
import NumberTicker from "@/components/UI/NumberTicker";
import Card from "@/components/UI/Card/Card";
import CardHeader from "@/components/UI/Card/CardHeader";

const DownloadsOverview = ({ title, chart }: { title: string, chart: any }) => {
    const textColor = "gray.700";
    return (
        <Card p='28px 10px 16px 0px' mb={{ sm: "26px", lg: "0px" }}  >
            <CardHeader mb='20px' pl='22px'>
                <Flex direction='row' alignSelf='center' justify='space-between' align="center">
                    <Text fontSize='lg' color={textColor} fontWeight='bold' mb='6px'>
                        {title}
                    </Text>
                    <div className="whitespace-pre-wrap font-medium tracking-tighter text-black">
                        +<NumberTicker value={100} />
                    </div>
                </Flex>
            </CardHeader>
            <Box w='100%' h={{ sm: "300px" }} ps='8px'>
                {chart}
            </Box>
        </Card>
    );
};

export default DownloadsOverview;
