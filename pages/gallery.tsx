import { NextPage } from 'next';
import { Fragment } from 'react';
import { useState } from 'react';
// -------- custom component -------- //
import Select from 'components/reuseable/Select';
import ShopService from 'components/common/ShopService';
import Breadcrumb from 'components/reuseable/Breadcrumb';
import Pagination from 'components/reuseable/Pagination';
import PageProgress from 'components/common/PageProgress';
import { Navbar } from 'components/blocks/navbar';
import { Footer } from 'components/blocks/footer';
import { GalleryCard } from 'components/reuseable/Gallery-cards';
import Head from 'next/head';
import Hero2 from './Components/hero2';
import { galleryitems, navsociallinks } from 'data/data';
import 'lightbox.js-react/dist/index.css'
import { Button } from '@chakra-ui/react';
import NextNProgress from 'nextjs-progressbar';
import { herogallery } from 'data/data';
import Link from 'next/link';

const Shop: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      <Head>
        <title>Gallery:- SHREE MA. VI SECONDARY SCHOOL</title>
      </Head>

      {/* ========== header section ========== */}
      <header className="w-100" style={{ zIndex: "100", paddingLeft: "10px", paddingRight: "10px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", position: "sticky", top: 0, left: 0, right: 0, background: "white" }}>
        <NextNProgress />
        <Navbar
          navClassName="navbar navbar-expand-lg center-nav transparent navbar-light"
          button={
            <Link href={navsociallinks.gallerypage}>
            <Button
              bg={'black'}
              rounded={'full'}
              px={5}
              shadow={"2xl"}
              fontSize={'15px'}
              _hover={{ color: "white", bg: "orange" }}
              fontWeight={'normal'}
              color={'white'}>
              Get In Touch
            </Button>
            </Link>
          }
        />

      </header>

      <Hero2 data={herogallery} />

      <main className="content-wrapper">


        {/* ========== products section ========== */}
        <section className="wrapper bg-light">
          <div className="container">

            <p style={{ textAlign: "center", marginTop: "25px", color: "orange", fontSize: "14px" }}>Gallery</p>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", flexWrap: "wrap" }}>
              {galleryitems.map((item) => (
                <GalleryCard {...item} key={item.id} />
              ))}

              {/* <SlideshowLightbox className="container grid grid-cols-3 gap-2 mx-auto">
    <img className="w-full rounded" src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200" />
    <img className="w-full rounded" src="https://source.unsplash.com/AYS2sSAMyhc/1400x1200" />  
    <img className="w-full rounded" src="https://source.unsplash.com/Kk8mEQAoIpI/1600x1200" />
    <img className="w-full rounded" src="https://source.unsplash.com/HF3X2TWv1-w/1600x1200" />
</SlideshowLightbox> */}
              {/* </div> */}


              <button style={{ background: "orange", color: "white", padding: "15px", width: "200px", marginBottom: "30px", textDecoration: "underline", borderRadius: "30px" }}>Load More</button>
            </div>
            <div>
         
            </div>
          </div>

        </section>

      </main>

      {/* ========== footer section ========== */}
      <Footer />
    </Fragment>
  );
};

export default Shop;
