'use client'
import React,{ useState,useEffect } from 'react';
import { Fragment } from 'react';
import type { NextPage } from 'next';
import { Navbar } from 'components/blocks/navbar';
import PageProgress from 'components/common/PageProgress';
import useReplaceMe from 'hooks/useReplaceMe';
import useLightBox from 'hooks/useLightBox';
import { Banner1 } from 'components/blocks/banner';
import Features from './Components/features';
import { Footer } from 'components/blocks/footer';
import CounterApp from './Components/counter';
import ServiceApp from './Components/services';
import ProgramEvent from './Components/programevent';
import Services12 from 'components/blocks/services';
import { motion } from 'framer-motion';
import Subscribenewsletter from './Components/subscribenewsletter';
import Hero2 from './Components/hero2';
import { Button } from '@chakra-ui/react';
import NextNProgress from 'nextjs-progressbar';
import { herohomepage } from 'data/data';
// import {Banner3} from 'components/blocks/banner';
// import FAQ from 'components/blocks/faq/FAQ1';
import Hero from './Components/hero';
import Link from 'next/link';
import { navsociallinks } from 'data/data';


const Home: NextPage = () => {

  // used for hero area text change
  useReplaceMe();

  // use for show popup on the images
  useLightBox();

  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
  <header className="w-100" style={{ zIndex: "100",paddingLeft:"10px",paddingRight:"10px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",position:"sticky",top:0,left:0,right:0,background:"white"}}>
  <NextNProgress />
        <Navbar
          navClassName="navbar navbar-expand-lg center-nav transparent navbar-light"
          button={
            <Link href={navsociallinks.homepage}><Button
            bg={'black'}
              rounded={'full'}
              px={5}
              shadow={"2xl"}
              fontSize={'15px'}
              _hover={{color:"white",bg:"orange"}}
              fontWeight={'normal'}
              color={'white'}>
               Get In Touch
            </Button></Link>
          }
        />

      </header>

      {/* hero section hom page */}
      <Hero2 data={herohomepage} />

      {/* hero sections  */}
      {/* <Hero /> */}


   {/* online class banner sections  */}
      <Banner1 />

     {/* <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"90%",margin:"auto",flexDirection:"column"}}>
      <FAQ />
     </div> */}

      {/* ========== banner section ========== */}
      {/* <Banner3 />  */}

   {/* home page services section  */}
      <ServiceApp />

 {/* counter section  */}
      <CounterApp />

    {/* services section  */}
      <motion.div animate={{
        x: 0,
        backgroundColor: "#000",
        boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
        position: "fixed",
        transitionEnd: {
          display: "none",
        },
      }} style={{ margin: "10px" }}>
        <Services12 />
      </motion.div >

       {/* program and events sections  */}
      <ProgramEvent />

        {/* principle section  */}
        <div style={{width:"100%"}}>
     <div style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"30px",margin:"auto",width:"100%",flexDirection:"column"}} className='principlesection'>
       <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div style={{borderRadius:"100%",justifyContent:"center",alignItems:"center",width:"350px",height:"350px",padding:"20px"}}>
        <img src='https://www.venkateshwaragroup.in/vgiblog/wp-content/uploads/2022/09/Untitled-design-2-1.jpg' style={{width:"100%",height:"100%",borderRadius:"100%"}}/>
        </div>
       </div>

       <div style={{width:"100%",padding:"20px"}}>
            <p style={{fontWeight:"normal"}}>Learn about Shree Ma.Vi Secondary School</p>
            <h1 style={{fontWeight:"bold",fontSize:"30px"}}>MESSAGE FROM PRINCIPAL</h1>
            <p style={{fontSize:"14px",marginTop:"20px",color:"gray",marginBottom:"20px"}}>“Education is a shared commitment between dedicated teachers, motivated students and enthusiastic parents with high expectations.” Education is an extremely important instrument of human development. The main aim of education is to provide excellence in all aspects of life of the children. Our main objectives are to develop the children physically, socially, morally, intellectually and spiritually through constructive education. So that children can face the challenges of their lives and fulfill their duties and responsibilities well. Today, the role of a school is not only to pursue academic excellence but also to motivate and empower the students to be lifelong learners, critical thinkers and productive members of an ever-changing global society. Our school is striving hard to make the best positive effort to inculcate strong values combining with academics and extracurricular activities in the children. </p>
            <Link href={'/'} className='shadow-full' style={{background:"black",color:"white",paddingLeft:"30px",paddingRight:"30px",paddingTop:"10px",paddingBottom:"10px",borderRadius:"100px",cursor:"pointer"}}>
            Contact With Us
            </Link>
       </div>
     </div>
     </div>
     {/* end principle section */}
        
        {/*  features sections  */}
      <section className="wrapper bg-soft-primary" id="demos">
        <div className="container">
          <Features />
        </div>

      </section>

      {/* subscribe to newsletter section  */}
      {/* <Subscribenewsletter /> */}

  {/* footer section  */}
      <Footer />
    </Fragment>
  );
};


export default Home;



