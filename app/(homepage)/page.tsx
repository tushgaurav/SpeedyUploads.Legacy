// app/page.tsx
import { Metadata } from 'next'
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Image,
} from '@chakra-ui/react'
import { FaArrowRightLong as ArrowRightIcon } from "react-icons/fa6";
import AnimatedShinyText from "@/components/UI/AnimatedShinyText";
import { VelocityScroll } from '@/components/UI/VelocityScroll'
import { SignedOut, SignedIn } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: 'SpeedyUploads.com - Fast Uploads and File Sharing',
  description: 'Fast Uploads, Effortless Shares.',
}

export default function Page() {
  return (
    <div className='bg-blue-100 text-black'>

      <div className='py-10'>
        <div className='relative'>
          <div className='absolute top-0 left-0 right-0 bottom-0 z-0'>
            <VelocityScroll
              text="Speed   ."
              default_velocity={5}
              className="font-display text-center text-4xl font-black tracking-[-0.02em] text-primaryblue drop-shadow-sm md:text-7xl md:leading-[5rem] opacity-10 select-none"
            />
          </div>
          <Heading
            fontWeight={200}
            className='text-center'
            p={{ base: 4, sm: 6, md: 10 }}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            <span className='text-primaryblue font-bold z-50'>Fast Uploads,</span> Effortless Shares.
          </Heading>
        </div>
      </div>

      <Container maxW={'7xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 6, md: 8 }}
          pt={{ base: 8, md: 10 }}
          pb={{ base: 20, md: 28 }}>
          <Text
            fontWeight={600}
            fontSize={{ base: 'lg', md: 'xl' }}
            color={'gray.500'}>
            SpeedyUploads is the fastest way to upload and share your files.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <SignedOut>
              <Button
                rounded={'full'}
                px={6}
                colorScheme={'blue'}
                bg={'blue.400'}
                _hover={{ bg: 'blue.500' }}>
                Get started
              </Button>
            </SignedOut>
            <SignedIn>
              <Button
                as={'a'}
                href='/app/upload'
                rounded={'full'}
                px={6}
                colorScheme={'blue'}
                bg={'blue.400'}
                _hover={{ bg: 'blue.500' }}>
                Upload Now!
              </Button>
            </SignedIn>
            <Button rounded={'full'} px={6} background={'lightblue'} _hover={{ bg: 'blue.200' }}>
              Learn more
            </Button>
          </Stack>
          <Flex w={'full'}>
            <Image height={{ sm: '24rem', lg: '28rem' }} className='mx-auto' mt={{ base: 12, sm: 16 }} src="hero.png" alt='hero' />
          </Flex>
        </Stack>


        <Container
          maxW={{ base: 'xl', md: '7xl' }}
        >
          <Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}

            direction={{ base: 'column', md: 'row' }}>
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                className='font-bold'
                lineHeight={1.1}
                fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                <Text as={'span'}>
                  Ultra Fast
                </Text>
                <br />
                <Text as={'span'} className='text-primaryblue font-light'>
                  File Uploads
                </Text>
              </Heading>
              <Text color={'gray.500'} className='max-w-[72ch]'>
                SpeedyUploads uses Azure Blob Storage to provide you with the fastest file uploads possible. No more waiting for your files to upload. Upload your files instantly.
              </Text>
              <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                <Button
                  rounded={'full'}
                  size={'md'}
                  fontWeight={'semibold'}
                  px={6}
                  colorScheme={'blue'}
                  bg={'blue.400'}
                  _hover={{ bg: 'blue.500' }}>
                  Get started
                </Button>
                <Button
                  rounded={'full'}
                  size={'md'}
                  fontWeight={'semibold'}

                  px={6}
                >
                  How It Works
                </Button>
              </Stack>
            </Stack>
            <Flex
              justify={'center'}
              align={'center'}
            >
              <Image
                alt={'Hero Image'}
                align={'center'}
                w={'100%'}
                src='/fast_upload.png'
                maxH={{ base: '20rem', md: '24rem' }}
              />
            </Flex>
          </Stack>
        </Container>
      </Container>

    </div >
  )
}

