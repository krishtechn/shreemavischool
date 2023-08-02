import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import BlogTemplate from 'components/common/BlogTemplate';
import BlogSidebar from 'components/reuseable/BlogSidebar';
import NextLink from 'components/reuseable/links/NextLink';
import Head from 'next/head';
import { Button } from '@chakra-ui/react';
import NextNProgress from 'nextjs-progressbar';

import Hero2 from './Components/hero2';
import { heronews, navsociallinks } from 'data/data';
import Link from 'next/link';

const BlogThree: NextPage = () => {



  return (
    <Fragment>
      <PageProgress />

      <Head>
        <title>News:- SHREE MA. VI SECONDARY SCHOOL</title>
      </Head>
      {/* ========== header section ========== */}
      <header className="w-100" style={{ zIndex: "100",paddingLeft:"10px",paddingRight:"10px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",position:"sticky",top:0,left:0,right:0,background:"white"}}>
  <NextNProgress />
        <Navbar
          navClassName="navbar navbar-expand-lg center-nav transparent navbar-light"
          button={
            <Link href={navsociallinks.newspage}>
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


      
      <Hero2 data={heronews} />

      <main className="content-wrapper">
    
        <section className="wrapper bg-light">
          <div className="container">
            <div className="row gx-lg-8 gx-xl-12 py-3">
              {/* ========== sidebar section ========== */}
              <aside className="col-lg-4 sidebar">
                <BlogSidebar />
              </aside>

              {/* ========== blog details section ========== */}
              <div className="col-lg-8">
                <BlogTemplate />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer />
    </Fragment>
  );
};

export default BlogThree;
