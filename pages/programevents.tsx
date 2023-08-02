import React from 'react'
import Hero2 from './Components/hero2';
import ServiceApp from './Components/services';
import ProgramEvent from './Components/programevent';
import { Navbar } from 'components/blocks/navbar';
import { Footer } from 'components/blocks/footer';
import { Button } from '@chakra-ui/react';
import NextNProgress from 'nextjs-progressbar';
import { heroprogarmevents, navsociallinks } from 'data/data';
import Link from 'next/link';

const programevents = () => {   
  return (
    <div>
         {/* ========== header section ========== */}
         <header className="w-100" style={{ zIndex: "100",paddingLeft:"10px",paddingRight:"10px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",position:"sticky",top:0,left:0,right:0,background:"white"}}>
  <NextNProgress />
        <Navbar
          navClassName="navbar navbar-expand-lg center-nav transparent navbar-light"
          button={
            <Link href={navsociallinks.Eventspage}>
            <Button
            bg={'black'}
              rounded={'full'}
              px={5}
              shadow={"2xl"}
              fontSize={'15px'}
              _hover={{color:"white",bg:"orange"}}
              fontWeight={'normal'}
              color={'white'}>
               Get In Touch
            </Button>
            </Link>
          }
        />

      </header>
      <Hero2 data={heroprogarmevents} />
      {/* <ServiceApp /> */}
      <ProgramEvent />
      <Footer />
    </div>
  )
}

export default programevents