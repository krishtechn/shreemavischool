import { FC, useState } from 'react';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import NextLink from '../links/NextLink';


import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';


// =========================================
type ProductCardProps = {
  image: string;
  title: string;
};






const ProductCard: FC<ProductCardProps> = (props) => {
  const { image, title } = props;
  let [show, setshow] = useState(true);

  const onInit = () => {
    // console.log('lightGallery has been initialized');
  };

  return (
    <div style={{ width: "300px", height: "100%", margin: "10px" }} className='my-5'>

      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        nextHtml='next'
        prevHtml='previous'
      >

{/* 
          <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={image}
            /> */}

        <a href={image} className='hover:overlay'>
          <Box
          style={{transform:"scale(1.09)"}}
            onClick={() => setshow(true)}
            rounded={'lg'}
            pos={'relative'}
            margin={1}
            height={'auto'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={"330px"}
              width={282}
              objectFit={'cover'}
              src={image}
            />
            {/* <h1>{title}</h1> */}
          </Box>
           {/* <h1>{title}</h1> */}

        </a>
      </LightGallery>


      {/* <h2 className="px-5 py-4 w-[100%]">
          <NextLink title={title} href='' className="link-dark" />
        </h2> */}
      {/* </figure> */}
      {/* 
   <div style={{height:"100px"}}>
      <h2 className="post-title h3 my-5">
          <NextLink title={title} href='' className="link-dark" />
        </h2>
   </div> */}
    </div>
  );
};

export default ProductCard;
