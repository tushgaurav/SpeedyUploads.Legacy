
import { Section, SectionContent, SectionTitle } from "@/app/_components/SectionEssentials/Section"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Flex,
    Icon,
} from '@chakra-ui/react'
import { PrivacyPolicyData } from "./privacy-policy-data";

const CustomAccordionItem = ({ title, text, icon }: { title: string, text: string, icon: React.ReactNode }) => {
    return (
        <AccordionItem
            borderColor="gray.200"
            _dark={{
                borderColor: "gray.700",
            }}
        >
            <AccordionButton>
                <Box flex="1" textAlign="left">
                    <Flex alignItems="center" minH={12}>
                        <Flex
                            shrink={0}
                            alignItems="center"
                            justifyContent="center"
                            h={{
                                base: 8,
                                md: 12,
                            }}
                            w={{
                                base: 8,
                                md: 12,
                            }}
                            rounded="md"
                            color="white"
                            className="bg-primaryblue"
                        >
                            <Icon className="text-2xl">
                                {icon}
                            </Icon>
                        </Flex>
                        <Box
                            ml={{
                                base: 2,
                                md: 4,
                            }}
                        >
                            <dt className="text-lg font-medium leading-6 text-gray-900" >
                                {title}
                            </dt>
                        </Box>
                    </Flex>
                </Box>
                <AccordionIcon
                    _dark={{
                        color: "white",
                    }}
                />
            </AccordionButton>
            <AccordionPanel pb={4}>
                <dd className="mt-2 pb-2  max-w-[76ch]">
                    {text}
                </dd>
            </AccordionPanel>
        </AccordionItem>
    );
};


export default function PrivacyPolicyPage() {
    return (
        <div>
            <Section >
                <SectionTitle>Privacy Policy</SectionTitle>
                <SectionContent>
                    <h2 className="text-5xl font-bold text-center py-8">yes, we're complying to this GDPR thing.</h2>
                    <p className="pb-4 max-w-[90ch] pt-8">Here's your superfluous notice letting you know that we're not selling your info, you're free to use our service without worry, yada yada. We're "GDPR compliant." We do this whole file uploading and sharing thing to make your life easier, not to make money off of your data or whatever... we wouldn't even know how to do such a thing.</p>
                    <p className="pb-2">If you want an official "privacy policy," just scroll down and read the boring stuff below. We promise it’s there.</p>


                    <Accordion allowToggle allowMultiple className="py-6">
                        {PrivacyPolicyData.map((item, index) => (
                            <CustomAccordionItem
                                key={index}
                                title={item.title}
                                text={item.text}
                                icon={item.icon}
                            />
                        ))
                        }
                    </Accordion>
                </SectionContent>
            </Section>
        </div>
    )
}