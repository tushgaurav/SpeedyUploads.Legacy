'use client'

import {
    Box,
    Flex,
    HStack,
    Stack,
    useDisclosure,
} from '@chakra-ui/react'

import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from '@clerk/nextjs'
import Image from 'next/image'
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
interface Props {
    children: React.ReactNode
    href: string
}

const Links = ['Dashboard', 'Projects', 'Team']
const Hrefs = ['/app', '#', '#']

const NavLink = (props: Props) => {
    const { children, href } = props
    return (
        <Box
            as="a"
            px={2}
            py={1}
            rounded={'md'}
            href={href}
            className='text-sm hover:scale-105 hover:text-blue-300 transition ease-in-out duration-300'
        >
            {children}
        </Box>
    )
}

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div className='bg-primaryblue text-blue-100'>
            <Box className='max-w-7xl px-4 mx-auto'>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <div
                        aria-label={'Open Menu'}
                        // display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                        className='font-bold text-2xl cursor-pointer hover:text-blue-300 transition ease-in-out duration-300 md:hidden'
                    >
                        {isOpen ? <MdClose /> : <GiHamburgerMenu />}
                    </div>
                    <HStack spacing={8} alignItems={'center'}>
                        <Image src="/logo_bg.svg" alt="Logo" width={120} height={50} />
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link, index) => (
                                <NavLink key={link} href={Hrefs[index]}>{link}</NavLink>
                            ))}
                        </HStack>

                    </HStack>
                    <Flex alignItems={'center'}>
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link, index) => (
                                <NavLink key={link} href={Hrefs[index]}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}

            </Box>
        </div>
    )
}