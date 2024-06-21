"use client"

import { Box, Flex, Text, Button, Icon, useClipboard } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { FaExternalLinkAlt } from "react-icons/fa";

const UploadSuccess = ({ fileLink }: { fileLink: string }) => {
    const { hasCopied, onCopy } = useClipboard(fileLink);

    return (
        <Flex
            direction="column"
            align="center"
            justify="center"
            p={4}
        >
            <Box
                bg="white"
                p={8}
                rounded="lg"
                textAlign="center"
                maxWidth="sm"
                w="full"
            >
                <Icon as={CheckCircleIcon} w={12} h={12} color="#2D4AF1" />
                <Text fontSize="xl" fontWeight="bold" mt={4} mb={2}>
                    Upload Successful!
                </Text>
                <Text fontSize="md" color="gray.600" mb={6}>
                    Your file has been uploaded successfully. You can share the link below:
                </Text>
                <Box
                    p={2}
                    border="1px"
                    borderColor="gray.300"
                    rounded="md"
                    mb={4}
                    wordBreak="break-all"
                >
                    {fileLink}
                </Box>
                <Button
                    colorScheme="blue"
                    onClick={onCopy}
                    w="full"
                    mb={2}
                >
                    {hasCopied ? 'Copied' : 'Copy Link'}
                </Button>

                {/* <div onClick={() => window.open(fileLink, '_blank')}>
                    <FaExternalLinkAlt />
                </div> */}

                <Button variant="link" size="sm" color="gray.500" mt={4} onClick={() => window.location.reload()}>
                    Upload Another File
                </Button>
            </Box>
        </Flex>
    );
};

export default UploadSuccess;
