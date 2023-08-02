import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  ButtonGroup,
  Button
} from '@chakra-ui/react';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import { ReactElement } from 'react';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'} height={"100%"}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <div style={{backgroundColor:"#372C70",color:"white",height:"90vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
       
        <Stack spacing={4} p={9} >
    
          <Text color={"whiteAlpha.900"} fontSize={45}>Welcome TO Shree Ma. Vi <br/> Secondary School</Text>
          <Text color={'white'} fontSize={17}>
          Shree Ma. Vi Secondary School is located in the peaceful surroundings of Digambarpur, Kshireshwornath, Dhanusha. Established with a vision to impart quality education. Shree Ma. Vi Secondary School strives to create an inclusive and stimulating learning environment
          </Text>

          <ButtonGroup variant='outline' spacing='6'>
  <Button  _hover={{ bg: 'orange',border:"none" }} style={{paddingTop:"10px",paddingBottom:"10px",color:"white",paddingLeft:"30px",paddingRight:"30px",border:"2px solid white",borderRadius:"100px",fontSize:"20px",marginRight:"10px"}}>Learn More</Button>
  <Button style={{paddingTop:"10px",paddingBottom:"10px",paddingLeft:"30px",color:"white",paddingRight:"30px",borderRadius:"100px",border:"none",fontSize:"20px",background:"orange"}}>Join With Us</Button>
</ButtonGroup>
   
       
        </Stack>

        <Flex>
          <Image
            rounded={'xl'}
            p={10}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            objectFit={'cover'}
          />
        </Flex>

      </SimpleGrid>
     </div>
  );
}