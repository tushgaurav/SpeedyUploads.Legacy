"use client";
import { useState } from "react";
import {
  Box,
  Text,
  VStack,
  Link,
  Icon,
  Divider,
  Badge,
  Tooltip,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  SimpleGrid,
  Image,
  chakra,
} from "@chakra-ui/react";
import { FiFile } from "react-icons/fi";
import { formatDistanceToNow } from "date-fns";
import { CoolMode } from "./UI/CoolMode";

const CustomModalContent = chakra(ModalContent, {
  baseStyle: {
    bg: "#EAEDFE", // Custom background color
    // color: "white", // Custom text color
  },
});

const FileExplorer = ({ upload }) => {
  const { id, userId, slug, permission, createdAt, files } = upload;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDoubleClick = (file) => {
    setSelectedFile(file);
    onOpen();
  };

  return (
    <Box width="100%">
      <div className="flex justify-between items-center w-full">
        <Text fontSize="xl" pb="2" fontWeight="bold">
          File Explorer
        </Text>
        <CoolMode>
          <Badge colorScheme="green">{permission}</Badge>
        </CoolMode>
      </div>

      <VStack align="start" spacing={4}>
        <Box>
          <Text fontSize="sm" color="gray.500">
            Upload ID: {id}
          </Text>
          <Text fontSize="sm" color="gray.500">
            Created:{" "}
            {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
          </Text>
        </Box>

        <Divider />
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={5}
          width="100%"
          className=" border-2 rounded-md border-primaryblue/30 p-4"
        >
          {files.map((file) => (
            // <Tooltip
            //   label={`Name: ${file.name}\nSize: ${(
            //     file.size /
            //     (1024 * 1024)
            //   ).toFixed(2)} MB\nCreated: ${formatDistanceToNow(
            //     new Date(file.createdAt),
            //     {
            //       addSuffix: true,
            //     }
            //   )}`}
            //   aria-label="File Info"
            //   placement="top"
            //   hasArrow
            // >
            <Box
              key={file.id}
              p={4}
              borderWidth="1px"
              borderRadius="md"
              onDoubleClick={() => handleDoubleClick(file)}
              cursor="pointer"
              width="100%"
              className="bg-primaryblue/10"
            >
              <VStack align="start" spacing={2}>
                <Icon as={FiFile} w={6} h={6} />
                <Link href={file.permaLink} isExternal color="blue.500">
                  {file.name}
                </Link>
                <div>
                  <Text fontSize="sm" color="gray.500">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {formatDistanceToNow(new Date(file.createdAt), {
                      addSuffix: true,
                    })}
                  </Text>
                </div>
              </VStack>
            </Box>
            // </Tooltip>
          ))}
        </SimpleGrid>
      </VStack>

      {selectedFile && (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          isCentered
          motionPreset="slideInBottom"
          size="xl"
        >
          <ModalOverlay />
          <CustomModalContent
            className="
          bg-red-700 
          "
          >
            <ModalHeader>File Viewer</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box>
                <Text fontSize="lg" fontWeight="bold">
                  {selectedFile.name}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Size: {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Created:{" "}
                  {formatDistanceToNow(new Date(selectedFile.createdAt), {
                    addSuffix: true,
                  })}
                </Text>
                {selectedFile.extension === "png" ||
                selectedFile.extension === "jpg" ||
                selectedFile.extension === "jpeg" ? (
                  <Box mt={4}>
                    <Image
                      src={selectedFile.permaLink}
                      alt={selectedFile.name}
                      maxWidth="100%"
                    />
                  </Box>
                ) : (
                  <Text mt={4}>
                    File preview not available for this file type.
                  </Text>
                )}
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="outline"
                colorScheme="blue"
                mr={3}
                size="sm"
                onClick={onClose}
              >
                Close
              </Button>
              <Button
                as={Link}
                target="_blank"
                href={selectedFile.permaLink}
                size="sm"
                isExternal
                colorScheme="blue"
              >
                Download
              </Button>
            </ModalFooter>
          </CustomModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default FileExplorer;
