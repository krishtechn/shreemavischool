import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Typewriter from "typewriter-effect";

export default function WithBackgroundImage(props: any) {
  let { title, btn1, btn2, subtitle, image } = props.data;
  let route = useRouter();
  let path = route.asPath;
  let text = "WELCOME TO SHREE MA. VI SECONDARY SCHOOL";

  return (
    <Flex
      w={'full'}
      h={'55vh'}
      backgroundImage={`url(${image})`}
      backgroundSize={'cover'}
      backgroundRepeat={'no-repeat'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack width={"45%"} align={'center'} display={"flex"} justifyContent={"center"} spacing={6}>
          <Text
            style={{textTransform:"capitalize"}}
              color={'white'}
              fontWeight={700}
              textAlign={"center"}
              lineHeight={1.2}
              fontSize={"30px"}
              >
              {/* {title} */}
              {/* Welcome to  */}
              <Typewriter

onInit={(typewriter) => {
  typewriter
    .typeString(
      path == "/"?text:""
    )
    .pauseFor(1000)
    .deleteAll()
    .typeString(title)
    .start();
}}
/>
            </Text>
          <Stack direction={'row'} justifyContent={"center"} width={"full"}>
            {/* {/* <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                {btn1}
              </Button> */}
          
            {
              path == '/' ? <Link href={"https://www.facebook.com/krish.kharal.14"} target='_blank'><Button
              bg={'transparent'}
                rounded={'full'}
                px={6}
                style={{border:"2px solid white"}}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                {btn2}
              </Button></Link> : ""
            }

          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}