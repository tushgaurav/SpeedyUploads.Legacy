import {
    Button,
    Checkbox,
    Flex,
    Text,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
} from '@chakra-ui/react'
import Link from 'next/link';

const helloGreetingsInDiffrentLang = ["Hello", "Bonjour", "Hola", "Ciao", "Hallo", "Olá", "Namaste", "Konnichiwa", "Ni Hao", "Salam", "Merhaba", "Sawubona", "Jambo", "Zdravstvuyte", "Aloha", "Shalom", "Guten Tag", "Dzień dobry", "Kalimera", "Szia", "Dobrý den", "God dag", "Hyvää päivää", "God dag", "Dobrý deň", "Dobrý den", "Dzień dobry", "Kalimera", "Szia", "Guten Tag", "Shalom", "Aloha", "Zdravstvuyte", "Jambo", "Sawubona", "Merhaba", "Salam", "Ni Hao", "Konnichiwa", "Namaste", "Olá", "Hallo", "Ciao", "Hola", "Bonjour", "Hello"]

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const randomIndex = Math.floor(Math.random() * helloGreetingsInDiffrentLang.length)

    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} className='bg-primaryblue'>

            {/* Place the logo to the top right of the page */}
            <Link href='/'>
                <Image src="/logo_bg.png" width={120} alt="Logo" className='absolute top-4 left-4' />
            </Link>

            <Flex p={8} flex={1} align={'center'} justify={'center'} className='flex-col'>
                <h1 className='text-6xl mt-16 md:mt-0' style={{ color: "#D7DEFD" }}>{helloGreetingsInDiffrentLang[randomIndex]},</h1>
                <h1 className='text-5xl font-black text-white pb-4'>welcome!</h1>

                {children}
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src="/auth_page.webp"
                    className='hidden md:block w-full h-full object-cover'
                />
            </Flex>
        </Stack>
    )
}