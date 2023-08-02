import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import Link from 'next/link';
import { Navbar } from 'components/blocks/navbar';
import { Footer } from 'components/blocks/footer';
import Contact2 from 'components/blocks/contact';
import PageProgress from 'components/common/PageProgress';
import ContactForm from 'components/common/ContactForm';
import NextLink from 'components/reuseable/links/NextLink';
import Head from 'next/head';
import Hero2 from './Components/hero2';
import { Button } from '@chakra-ui/react';
import NextNProgress from 'nextjs-progressbar';
import { herocontact, navsociallinks } from 'data/data';

const ContactThree: NextPage = () => {
  
  return (
    <Fragment>
      <PageProgress />
      <header className="w-100" style={{ zIndex: "100",paddingLeft:"10px",paddingRight:"10px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",position:"sticky",top:0,left:0,right:0,background:"white"}}>
  <NextNProgress />
        <Navbar
          navClassName="navbar navbar-expand-lg center-nav transparent navbar-light"
          button={
            <Link href={navsociallinks.contactpage}>
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

      <Hero2 data={herocontact} />

      <Head>
        <title>Contact us :- SHREE MA. VI SECONDARY SCHOOL</title>
      </Head>

      {/* <Hero2 data={{title:"contact with us",btn1:"Show Me More",btn2:"Join With Us"}}/> */}

      <main className="content-wrapper">


        <div className="wrapper bg-light pt-10">
          <div className="container pb-14 pb-md-160">
            {/* ========== newsletter section ========== */}
         

            <div className="row">
              <div className="col-xl-10 mx-auto">
                <div className="row gy-10 gx-lg-8 gx-xl-12">
                  {/* ========== contact form section ========== */}
                  <div className="col-lg-8">
                    <ContactForm />
                  </div>

                  {/* ========== contact info section ========== */}
                  <div className="col-lg-4">
                    <div className="d-flex flex-row">
                      <div>
                        <div className="icon text-primary fs-28 me-4 mt-n1">
                          <i className="uil uil-location-pin-alt" />
                        </div>
                      </div>
                      <div>
                        <h5 className="mb-1">Address</h5>
                        <address>Digambarpur, Kshireshwornath, Dhanusha</address>
                      </div>
                    </div>

                    <div className="d-flex flex-row">
                      <div>
                        <div className="icon text-primary fs-28 me-4 mt-n1">
                          <i className="uil uil-phone-volume" />
                        </div>
                      </div>
                      <div>
                        <h5 className="mb-1">Phone</h5>
                        <p>
                          9817173283
                        </p>
                      </div>
                    </div>

                    <div className="d-flex flex-row">
                      <div>
                        <div className="icon text-primary fs-28 me-4 mt-n1">
                          <i className="uil uil-envelope" />
                        </div>
                      </div>
                      <div>
                        <h5 className="mb-1">E-mail</h5>
                        <p className="mb-0">
                          <a href="mailto:krishkharal190@gmail.com" className="link-body">
                            krishkharal190@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* ========== footer section ========== */}
      <Footer />
    </Fragment>
  );
};

export default ContactThree;
