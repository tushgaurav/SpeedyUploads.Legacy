"use client"

import { ReactNode } from 'react'

import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import Image from 'next/image'

const Logo = (props: any) => {
    return (
        <Image src="/logo_bg.png" alt="Logo" width={150} height={50} />
    )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    )
}

export default function Footer() {
    return (
        <Box className='bg-primaryblue text-blue-100'>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
                    spacing={8}>
                    <Stack spacing={6}>
                        <Box>
                            <Logo color={useColorModeValue('gray.700', 'white')} />
                            <Text fontWeight={'bold'} pt="4">
                                Lightning Fast File Sharing.
                            </Text>
                        </Box>
                        <Text fontSize={'sm'}>© 2024 SpeedyUploads. All rights reserved</Text>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Product</ListHeader>
                        <Box as="a" href={'#'}>
                            Overview
                        </Box>
                        <Box as="a" href={'#'}>
                            Features
                        </Box>
                        <Box as="a" href={'#'}>
                            Tutorials
                        </Box>
                        <Box as="a" href={'#'}>
                            Pricing
                        </Box>
                        <Box as="a" href={'#'}>
                            Releases
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Company</ListHeader>
                        <Box as="a" href={'#'}>
                            About
                        </Box>
                        <Box as="a" href={'#'}>
                            Press
                        </Box>
                        <Box as="a" href={'#'}>
                            Careers
                        </Box>
                        <Box as="a" href={'#'}>
                            Contact
                        </Box>
                        <Box as="a" href={'#'}>
                            Partners
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Support</ListHeader>
                        <Box as="a" href={'#'}>
                            Help Center
                        </Box>
                        <Box as="a" href={'#'}>
                            Terms of Service
                        </Box>
                        <Box as="a" href={'#'}>
                            Legal
                        </Box>
                        <Box as="a" href="/privacy">
                            Privacy Policy
                        </Box>
                        <Box as="a" href={'#'}>
                            Status
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Follow Us</ListHeader>
                        <Box as="a" href={'#'}>
                            Facebook
                        </Box>
                        <Box as="a" href={'#'}>
                            Twitter
                        </Box>
                        <Box as="a" href={'#'}>
                            Dribbble
                        </Box>
                        <Box as="a" href={'#'}>
                            Instagram
                        </Box>
                        <Box as="a" href={'#'}>
                            LinkedIn
                        </Box>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    )
}