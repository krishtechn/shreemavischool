import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
} from 'react-icons/fc';
import Link from 'next/link';

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      h={'300px'}
      borderWidth="1px"
      bg={'white'}
      borderRadius="xl"
      shadow={'2xl'}
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
          h={'full'}
          style={{justifyContent:"center",alignItems:"center",flexDirection:"column",textAlign:"center"}}>
          <Heading style={{fontSize:"20px"}} alignItems={"center"}>{heading}</Heading>
          <Text mt={3} fontSize={15}>
            {description}
          </Text>

          <Link href='/programevents' style={{background:"black",color:"white",paddingLeft:"30px",paddingRight:"30px",paddingTop:"10px",paddingBottom:"10px",width:"350px",fontSize:"14px",borderRadius:"100px",marginTop:"20px"}} className='shadow rounded-full'>Learn more</Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default function gridListWith() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: 'xl', sm: '3xl' }} fontWeight={'bold'} fontFamily='sans-serif'>
          Our Facilities
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'xl', sm: 'lg' }} fontFamily='sans-serif' style={{fontSize:"16px"}}>
        A service is an act or use for which a consumer, firm, or government is willing to pay. Examples include work done by barbers, doctors, lawyers, mechanics, banks, insurance companies, and so on.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={9} justify="center"  alignItems={"center"} fontFamily={"sans-serif"} autoCapitalize='true'>
          <Card
            heading={'Transportation Facilities'}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              'The Transportation facility of our school is provided for every level of student. '
            }
            href={'#'}
          />
          <Card
            heading={'Computer Lab'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              'Our school offers two computer laboratories for the finest practical results.'
            }
            href={'#'}
          />
          <Card
            heading={'Medical'}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              'Students with minor injuries are treated in the school restroom by seniors.'
            }
            href={'#'}
          />
          <Card
            heading={'Library'}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={
              'The library at Shree Ma. Vi Secondary School is more than just a collection of books. '
            }
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  );
}