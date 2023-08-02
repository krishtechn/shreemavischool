import React from 'react'
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import BlogSidebar from 'components/reuseable/BlogSidebar';
import BlogTemplate from 'components/common/BlogTemplate';
import { BiLeftArrowAlt,BiRightArrowAlt } from 'react-icons/bi';
import Carousel from 'components/reuseable/Carousel';
import Carousel2 from 'components/reuseable/Carousel2';


const carousels = () => {
  // These are the images used in the slide
  const cards = [
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sfGVufDB8fDB8fHww&w=1000&q=80',
    'https://www.greatschools.org/gk/wp-content/uploads/2014/03/The-school-visit-what-to-look-for-what-to-ask-1.jpg',
    'https://english.makalukhabar.com/wp-content/uploads/2021/08/kathmandu-old-school-cover-5-MK-.jpg',
  ];
  return (
            <Carousel grabCursor slidesPerView={1} navigation={false} autoplay={true}>
               {cards.map((items)=>{
                   return <img src={items} style={{width:"100%",height:"90vh"}}/>
               })}
            </Carousel>
  )
}

export default carousels