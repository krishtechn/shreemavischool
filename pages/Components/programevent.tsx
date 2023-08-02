import { useRouter } from 'next/router';
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
    FcAbout,
    FcAssistant,
    FcCollaboration,
    FcDonate,
    FcManager,
} from 'react-icons/fc';
import Carousel from 'components/reuseable/Carousel';



interface CardProps {
    heading: string;
    description: string;
    icon: ReactElement;
    href: string;
}
const carouselBreakpoints = {
    0: { slidesPerView: 1 },
    100: { slidesPerView: 2 },
    600: { slidesPerView: 3 },
    1100: { slidesPerView: 4 },
    1600: { slidesPerView: 5 }
  };


const Card = ({ heading, description, icon, href }: CardProps) => {
   
    return (
        <Box
            maxW={{ base: 'full', md: '275px' }}
            w={'full'}
            borderWidth="1px"
            borderRadius="lg"
            shadow={"2xl"}
            overflow="hidden"
            p={5}>
            <Stack align={'start'} spacing={2}>
                <Flex
                    w={'full'}
                    h={'full'}
                    align={'center'}
                    justify={'center'}
                    color={'white'}
                    rounded={'full'}>
                    {icon}
                </Flex>
                <Box mt={2}
                    w={'full'}
                    style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",textAlign:"center"}}
                    h={'full'}>
                    <Heading style={{ fontSize: "20px" }} alignItems={"center"}>{heading}</Heading>
                    <Text mt={3} fontSize={17}>
                        {description}
                    </Text>

                    <button className='btn btn-outline-primary'>Learn more</button>
                </Box>
            </Stack>
        </Box>
    );
};

export default function gridListWith() {
    return (
        <Box p={4} mb={20}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>   

                <Heading fontSize={{ base: 'xl', sm: '2xl' }} fontWeight={'bold'} fontFamily='sans-serif'>
                    Our Program and Events
                </Heading>

                <Text color={'gray.600'} fontFamily='sans-serif' style={{ fontSize: "16px" }}>
                    The main objective of this project is to expand the supply of skilled and employable labor by increasing access to quality training programs.
                </Text>
            </Stack>

            <Container maxW={'5xl'} mt={12}>
                <Flex flexWrap="wrap" gridGap={9} alignItems={"center"} fontFamily={"sans-serif"} autoCapitalize='true'>
                    <Carousel grabCursor spaceBetween={0} navigation={false} autoplay={true} allowSlideNext={true} breakpoints={carouselBreakpoints}>
                   
                    <Card
                        heading={'Badminton'}
                        icon={<Icon as={FcAssistant} w={10} h={10} />}
                        description={
                            'We recommend badminton for a variety of health reasons, including greater cardiovascular fitness, hand-eye coordination, and agility.'
                        }
                        href={'#'}
                    />
                    <Card
                        heading={'Futsal tournament'}
                        icon={<Icon as={FcCollaboration} w={10} h={10} />}
                        description={
                            'A futsal tournament is a competition in which teams play in the sport of futsal, an indoor soccer version.'
                        }
                        href={'#'}
                    />
                    <Card
                        heading={'Dance & music competitions'}
                        icon={<Icon as={FcAbout} w={10} h={10} />}
                        description={
                            'Dance and music competitions are events in which students demonstrate. '
                        }
                        href={'#'}
                    />
                    <Card
                        heading={'Painting competitions'}
                        icon={<Icon as={FcAbout} w={10} h={10} />}
                        description={
                            'Painting competitions are occasions where students demonstrate their abilities.'
                        }
                        href={'#'}
                    />
                    <Card
                        heading={'Debates / Speeches'}
                        icon={<Icon as={FcAbout} w={10} h={10} />}
                        description={
                            'Painting competitions are occasions where students demonstrate their abilities. '
                        }
                        href={'#'}
                    />
                    </Carousel>
                </Flex>
            </Container>
        </Box>
    );
}