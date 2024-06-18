"use client"

import {
    Avatar,
    Box,
    Collapse,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Icon,
    IconButton,
    Text,
    Tag,
    TagLabel,
    useColorModeValue,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Code

} from "@chakra-ui/react";
import { FaBell, FaClipboardCheck, FaRss } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { HiCode } from "react-icons/hi";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { UserButton } from "@clerk/nextjs";


export default function StartLayout({ children }: { children: React.ReactNode }) {
    const sidebar = useDisclosure();
    const integrations = useDisclosure();
    const color = useColorModeValue("gray.600", "gray.300");
    const { isOpen, onOpen, onClose } = useDisclosure();


    const NavItem = (props: any) => {
        const { icon, children, ...rest } = props;
        return (
            <Flex
                align="center"
                px="4"
                pl="4"
                py="3"
                cursor="pointer"
                color="inherit"
                _dark={{ color: "gray.400" }}
                _hover={{
                    bg: "gray.100",
                    _dark: { bg: "gray.900" },
                    color: "gray.900",
                }}
                role="group"
                fontWeight="semibold"
                transition=".15s ease"
                {...rest}
            >
                {icon && (
                    <Icon
                        mx="2"
                        boxSize="4"
                        _groupHover={{
                            color: color,
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        );
    };

    const SidebarContent = (props: any) => (
        <Box
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            zIndex="sticky"
            h="full"
            pb="10"
            overflowX="hidden"
            overflowY="auto"
            bg="white"
            _dark={{ bg: "gray.800" }}
            border
            color="inherit"
            borderRightWidth="1px"
            w="60"
            {...props}
        >
            <Flex px="4" py="5" align="center">

                <Text
                    fontSize="2xl"
                    ml="2"
                    color="brand.500"
                    _dark={{ color: "white" }}
                    fontWeight="semibold"
                >
                    Choc UI
                </Text>
            </Flex>
            <Flex
                direction="column"
                as="nav"
                fontSize="sm"
                color="gray.600"
                aria-label="Main Navigation"
            >

                <Link href='/start'>
                    <NavItem icon={MdHome}>Configrator</NavItem>
                </Link>

                {/* <NavItem icon={FaRss}>Articles</NavItem> */}
                {/* <NavItem icon={HiCollection}>Collections</NavItem> */}
                <Link href='start/docs'>
                    <NavItem icon={FaClipboardCheck}>Docs</NavItem>
                </Link>
                <NavItem icon={HiCode} onClick={integrations.onToggle}>
                    Integrations
                    <Icon
                        as={MdKeyboardArrowRight}
                        ml="auto"
                        transform={integrations.isOpen ? "rotate(90deg)" : ""}
                    />
                </NavItem>
                <Collapse in={integrations.isOpen}>
                    <NavItem pl="12" py="2" onClick={onOpen}>
                        Change Home Pose
                    </NavItem>
                    <NavItem pl="12" py="2">
                        Contack Info
                    </NavItem>
                    <Link href="/">
                        <NavItem pl="12" py="2">
                            Exit
                        </NavItem>
                    </Link>
                </Collapse>
                {/* <NavItem icon={AiFillGift}>Changelog</NavItem> */}
                <NavItem icon={BsGearFill}>Settings</NavItem>
            </Flex>

            {/* Modal for Home Pose Change */}
            <Modal onClose={onClose} isOpen={isOpen} isCentered >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Home Pose Change</ModalHeader>

                    <ModalCloseButton />
                    <ModalBody>
                        hi there this is the form where homepose change operation occurs
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
    return (
        <Box as="section" bg="gray.50" _dark={{ bg: "gray.900" }} minH="100vh">
            <SidebarContent display={{ base: "none", md: "unset" }} />
            <Drawer
                isOpen={sidebar.isOpen}
                onClose={sidebar.onClose}
                placement="left"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <SidebarContent w="full" borderRight="none" />
                </DrawerContent>
            </Drawer>
            <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                <Flex
                    as="header"
                    align="center"
                    justify="space-between"
                    w="full"
                    px="4"
                    bg="white"
                    _dark={{ bg: "gray.800" }}
                    borderBottomWidth="1px"
                    color="inherit"
                    h="14"
                >
                    <IconButton
                        aria-label="Menu"
                        display={{ base: "inline-flex", md: "none" }}
                        onClick={sidebar.onOpen}
                        icon={<FiMenu />}
                        size="sm"
                    />
                    {/* <InputGroup w="96" display={{ base: "none", md: "flex" }}>
                        <InputLeftElement color="gray.500">
                            <FiSearch />
                        </InputLeftElement>
                        <Input placeholder="Search for articles..." />
                    </InputGroup> */}
                    <Image src="/autospray.png" alt="AutoSpray Logo" width={120} height={32} priority />

                    <div className="flex items-center justify-center gap-2">
                        <Tag
                            size='md'
                            borderRadius='full'
                            variant='solid'
                            colorScheme='green'
                        >
                            <TagLabel>v{process.env.NEXT_PUBLIC_VERSION_NUMBER}</TagLabel>
                        </Tag>

                        {/* Nortification */}
                        <Popover isLazy>
                            <PopoverTrigger>
                                <IconButton aria-label="Notifications" icon={<FaBell />} size="sm" variant="ghost" />
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader fontWeight='semibold'>Robot Logs</PopoverHeader>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverBody >
                                    <Code colorScheme="yellow">what the fuck</Code>
                                    <Text textAlign='center' fontSize="x-small" color="gray.500" pt={1}>Logs are updated every 2 seconds.</Text>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>

                        <UserButton />
                    </div>
                </Flex>

                <Box as="main" p="4">
                    {/* Add content here, remove div below  */}
                    {children}
                    {/* <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" /> */}
                </Box>
            </Box>
        </Box>
    );
};