import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    VisuallyHidden,
    Image,
    Button,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { ReactNode } from 'react'
import Link from 'next/link'

const Logo = (props: any) => {
    return (
        <Link href="/">
            <Image w="120px" src="/logo_bg.svg" alt="logo" {...props} />
        </Link>
    )
}

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode
    label: string
    href: string
}) => {
    return (
        <Button
            variant={'unstyled'}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: "blue.800",
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </Button>
    )
}

export default function Footer() {
    return (
        <Box className='bg-primaryblue text-white'>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                spacing={4}
                justify={'center'}
                align={'center'}>
                <div className='flex items-center gap-8 flex-wrap pb-2'>
                    <Logo />
                    <Text className='text-xs font-bold hover:cursor-not-allowed'>A Prokits Digital Brand</Text>
                </div>
                <Stack direction={'row'} spacing={6}>
                    <Box as="a" href={'https://speedyuploads.instatus.com/'}>
                        System Status
                    </Box>
                    <Box as="a" href={'#'}>
                        About
                    </Box>
                    <Box as="a" href={'/privacy'}>
                        Privacy Policy
                    </Box>
                </Stack>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
            >
                <Container
                    as={Stack}
                    maxW={'7xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <Text>© 2024 Prokits Digital Pvt. Ltd. All rights reserved</Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Twitter'} href={'#'}>
                            <FaTwitter />
                        </SocialButton>
                        <SocialButton label={'YouTube'} href={'#'}>
                            <FaYoutube />
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={'#'}>
                            <FaInstagram />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    )
}