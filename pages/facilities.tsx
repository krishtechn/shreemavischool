import { NextPage } from 'next';
import { Fragment } from 'react';
import { Navbar } from 'components/blocks/navbar';
import { Footer } from 'components/blocks/footer';
import { Banner1, Banner3 } from 'components/blocks/banner';
import PageProgress from 'components/common/PageProgress';
import { GalleryCard } from 'components/reuseable/Gallery-cards';
import { transportation, computerlab, medical, Librarydata } from 'data/facilities';
import Head from 'next/head';
import {Text} from '@chakra-ui/react';
import Hero2 from './Components/hero2';
import { Button } from '@chakra-ui/react';
import NextNProgress from 'nextjs-progressbar';
import { herofacilities, navsociallinks } from 'data/data';
import Link from 'next/link';

const Services: NextPage = () => {


  return (
    <Fragment>
      <PageProgress />

      <Head>
        <title>Facilities:- SHREE MA. VI SECONDARY SCHOOL</title>
      </Head>

      {/* ========== header section ========== */}
      <header className="w-100" style={{ zIndex: "100",paddingLeft:"10px",paddingRight:"10px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",position:"sticky",top:0,left:0,right:0,background:"white"}}>
  <NextNProgress />
        <Navbar
          navClassName="navbar navbar-expand-lg center-nav transparent navbar-light"
          button={
            <Link href={navsociallinks.facilitiespage}>
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

      <Hero2 data={herofacilities} />


      <Banner1 />

 
<p style={{textAlign:"center",marginTop:"25px",color:"orange",fontSize:"20px"}}>Facilities</p>

<div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",width:"100%",paddingTop:"30px",marginTop:"30px"}}>
      {/* transportation features  */}
      <div className='py-3 mx-15' style={{justifyContent:"center",alignItems:"center",width:"80%"}}>
        <h1>Transportation</h1>
        <Text>The Transportation facility of our school is provided for every level of student. It is specially provided for students who live far from the school and for tiny children. We have three school buses numbered 1, 2, and 3, respectively.</Text>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%",flexWrap:"wrap" }}>
          {transportation.map((item: any) => (
            <GalleryCard {...item} key={item.id} />
          ))}
        </div>
      </div>




      {/* computer lab features  */}
      <div className='py-3 mx-5' style={{justifyContent:"center",alignItems:"center",width:"80%"}}>
        <h1>Computer lab</h1>
        <Text>In today's educational system, theory is insufficient without application. The most significant aspect in meeting the actual purpose of education is practical and research. Our school offers two computer laboratories for the finest practical results. This school's labs are quite efficient, with a total of 20 computers and a fast internet connection. An air conditioner is installed in the lab. </Text>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%",flexWrap:"wrap" }}>
          {computerlab.map((item) => (
            <GalleryCard {...item} key={item.id} />
          ))}
        </div>
      </div>

      {/* computer lab features  */}
      <div className='py-3 mx-5' style={{justifyContent:"center",alignItems:"center",width:"80%"}}>
        <h1>Library</h1>
        <Text>In today's educational system, theory is insufficient without application. The most significant aspect in meeting the actual purpose of education is practical and research. Our school offers two computer laboratories for the finest practical results. This school's labs are quite efficient, with a total of 20 computers and a fast internet connection. An air conditioner is installed in the lab. </Text>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%",flexWrap:"wrap" }}>
          {Librarydata?.map((item) => (
            <GalleryCard {...item} key={item.id} />
          ))}
        </div>
      </div>

      {/* medical features  */}
      <div className='py-3 mx-5' style={{justifyContent:"center",alignItems:"center",width:"80%"}}>
        <h1>Medical</h1>
        <Text>Students with minor injuries are treated in the school restroom by seniors. In case of severe illness or injuries, students are admitted to the nearest hospital and parents are informed immediately. Payment for any kind of treatment attended outside the school infirmary has to be made by the parents themselves. The school will not be held responsible for injuries that may occur during activities or excursions. </Text>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%",flexWrap:"wrap" }}>
          {medical.map((item) => (
            <GalleryCard {...item} key={item.id} />
          ))}
        </div>
      </div>

      </div>

      {/* ========== footer section ========== */}
      <Footer />
    </Fragment>
  );
};

export default Services;
