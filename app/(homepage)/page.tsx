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
  Icon,
  IconProps,
} from '@chakra-ui/react'
import { SignedOut, SignedIn } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: 'SpeedyUploads.com - Fast Uploads and File Sharing',
  description: 'Fast Uploads, Effortless Shares.',
}

export default function Page() {
  return (
    <div className='bg-blue-100 text-black'>
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={200}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Fast Uploads, Effortless Shares.
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            Experience the speed of instant uploads and the ease of effortless file sharing.
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
                rounded={'full'}
                px={6}
                colorScheme={'blue'}
                bg={'blue.400'}
                _hover={{ bg: 'blue.500' }}>
                Upload Now!
              </Button>
            </SignedIn>
            <Button rounded={'full'} px={6} _hover={{ bg: 'blue.200' }}>
              Learn more
            </Button>
          </Stack>
          <Flex w={'full'}>
            <Image height={{ sm: '24rem', lg: '28rem' }} className='mx-auto' mt={{ base: 12, sm: 16 }} src="hero.png" alt='hero' />
          </Flex>
        </Stack>
      </Container>

    </div>
  )
}

