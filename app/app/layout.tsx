'use client'

import Image from 'next/image'
import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Text,
    Drawer,
    DrawerContent,
    useDisclosure,
    BoxProps,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
} from '@chakra-ui/react'
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
    FiBell,
    FiChevronDown,
} from 'react-icons/fi'
import { IconType } from 'react-icons'
import { UserButton } from '@clerk/nextjs'

interface LinkItemProps {
    name: string
    icon: IconType
    link: string
}

interface NavItemProps extends FlexProps {
    icon: IconType
    children: React.ReactNode,
    link: string
}

interface MobileProps extends FlexProps {
    onOpen: () => void
}

interface SidebarProps extends BoxProps {
    onClose: () => void
}

const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: FiHome, link: '/' },
    { name: 'Upload', icon: FiTrendingUp, link: '/app/upload' },
    { name: 'History', icon: FiCompass, link: '/history' },
    { name: 'Quota', icon: FiStar, link: '/quota' },
    { name: 'Settings', icon: FiSettings, link: '/settings' },
]

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            transition="3s ease"
            className="bg-primaryblue text-white"
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Image src="/logo_bg.png" alt="Logo" width={120} height={50} />
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon} link={link.link}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    )
}

const NavItem = ({ icon, link, children, ...rest }: NavItemProps) => {
    return (
        <Box
            as="a"
            href={link}
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.100',
                    color: 'black',
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'black',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Box>
    )
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="14"
            alignItems="center"
            className='bg-primaryblue text-blue-100'
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}>
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Image src="/logo_bg.png" alt="Logo" width={120} height={50} className='md:hidden' />

            <HStack spacing={{ base: '0', md: '6' }}>
                <FiBell />
                <Flex alignItems={'center'}>
                    <UserButton />
                </Flex>
            </HStack>
        </Flex>
    )
}

const SidebarWithHeader = ({ children }: { children: React.ReactNode }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box minH="100vh" className='bg-blue-100'>
            <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} p="4">
                {children}
            </Box>
        </Box>
    )
}

export default SidebarWithHeader