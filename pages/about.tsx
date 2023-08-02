import React from 'react';
import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import Image from 'next/image';
import Team3 from 'components/blocks/team';
import SocialLinks from 'components/reuseable/SocialLinks';
import { Navbar } from 'components/blocks/navbar';
import { Footer } from 'components/blocks/footer';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import Head from 'next/head';
import Hero2 from './Components/hero2';
import { Button } from '@chakra-ui/react';
import NextNProgress from 'nextjs-progressbar';
import {heroabout} from 'data/data';

const About: NextPage = () => {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });



  return (
    <Fragment>

      <Head>
        <title>About us:- shree ma. vi secondary school</title>
      </Head>

      <header className="w-100" style={{ zIndex: "100",paddingLeft:"10px",paddingRight:"10px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",position:"sticky",top:0,left:0,right:0,background:"white"}}>
  <NextNProgress />
        <Navbar
          navClassName="navbar navbar-expand-lg center-nav transparent navbar-light"
          button={
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
          }
        />

      </header>


      <Hero2 data={heroabout} />


      <div className="container py-14">
        <div className="row gx-lg-8 gx-xl-12">
          {/* ========== sidebar section ========== */}
          <aside className="col-lg-4 sidebar">
            <div className="widget">
              <h4 className="widget-title mb-3">About Us</h4>

              <p className=''>
              Shree Ma. Vi Secondary School is located in the peaceful surroundings of Digambarpur, Kshireshwornath, Dhanusha. Established with a vision to impart quality education. Shree Ma. Vi Secondary School strives to create an inclusive and stimulating learning environment etc.
              </p>

              <SocialLinks className="nav social" />
            </div>
          </aside>

          {/* ========== blog details section ========== */}
          <div className="col-lg-8">
            <figure className="card-img-top overlay-1">
              <Image
                width={960}
                height={600}
                src="/img/photos/b1.jpg"
                alt="blog"
                style={{ width: '100%', height: 'auto' }}
              />
              <span className="bg" />

            </figure>
          </div>
        </div>
      </div>


       {/* school teacher section  */}
      <main className="content-wrapper">
        <Team3 />
      </main>

      <Footer />
    </Fragment>
  );
};

export default About;
