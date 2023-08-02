import Link from 'next/link';
import { FC, Fragment, ReactElement, useRef } from 'react';
// -------- custom hook -------- //
import useSticky from 'hooks/useSticky';
import { Menu,MenuButton,MenuList,MenuItem, useColorMode } from '@chakra-ui/react';

// -------- data -------- //
import {
  navlinks,
} from 'data/navigation';

// ===================================================================
type NavbarProps = {
  info?: boolean;
  cart?: boolean;
  fancy?: boolean;
  logoAlt?: string;
  search?: boolean;
  social?: boolean;
  language?: boolean;
  stickyBox?: boolean;
  navClassName?: string;
  button?: ReactElement;
  navOtherClass?: string;
};
// ===================================================================

const Navbar: FC<NavbarProps> = (props) => {
  const { navClassName, info, search, social, language, button, cart, fancy, navOtherClass, stickyBox, logoAlt } =
    props;

  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically render the logo
  const logo = sticky ? 'logo-dark' : logoAlt ?? 'logo-dark';
  // dynamically added navbar classname
  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';


  // all main header contents
  const headerContent = (
    <Fragment>

      {/* navbar logo */}
      <div className="navbar-brand" style={{width:"100%",position:"sticky",top:0,left:0,right:0,padding:"10px"}}>
        <Link href={"/"} className='fw-bold' style={{marginTop:"20px",fontSize:"20px"}}>Shree Ma.Vi</Link>
      </div>

      <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start" >
        <div className="offcanvas-header d-lg-none">
          <h3 className="text-white fs-30 mb-0" style={{fontFamily:"sans-serif"}}>Shree Ma. Vi Secondary School </h3>
          <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="btn-close btn-close-white" />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100 w-full" style={{color:"black"}}>
       
        <ul className="navbar-nav text-black w-full" style={{width:"100%"}}>
            {/* ===================== demos nav item ===================== */}
     
                {navlinks.map(({ id, title,url }) => {
                  return <Link key={id} className='text-blue mx-3 my-3' style={{fontFamily:"serif",fontWeight:"500",fontSize:"17px"}} href={url}>{title}</Link>
                })}
          </ul>
       
        </div>

      </div>
        {/* <Button
        aria-label="Toggle Color Mode"
        onClick={toggleColorMode}
        _focus={{ boxShadow: 'none' }}
        w="fit-content"
        >
        {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
      </Button> */}

      {/* ============= right side header content ============= */}
      <div className={navOtherClass}>
        <ul className="navbar-nav flex-row align-items-center ms-auto text-white">
          {/* ============= language dropdwown ============= */}
          {/* {language && <Language />} */}

          {/* ============= info button ============= */}
          {info && (
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-info">
                <i className="uil uil-info-circle" />
              </a>
            </li>
          )}

          {/* ============= search icon button ============= */}
          {search && (
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-search">
                <i className="uil uil-search" />
              </a>
            </li>
          )}

          {/* ============= contact button ============= */}
          {button && <li className="nav-item d-none d-md-block">{button}</li>}

          {/* ============= social icons link ============= */}
          {/* {social && <Social />} */}

          {/* ============= humburger button for small device ============= */}
          <li className="nav-item d-lg-none">
            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas-nav" className="hamburger offcanvas-nav-btn">
              <span />
            </button>
          </li>
        </ul>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {/* {stickyBox && <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />} */}

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName} >
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="flex-lg-row flex-nowrap" style={{display:"flex",justifyContent:"center",alignItems:"center",height:"70px",width:"100%"}}>{headerContent}</div>
        )}
      </nav>

   
    </Fragment>
  );
};

// set deafult Props
Navbar.defaultProps = {
  cart: false,
  info: false,
  social: false,
  search: false,
  language: false,
  stickyBox: true,
  navOtherClass: 'navbar-other w-100 d-flex ms-auto',
  navClassName: 'navbar navbar-expand-lg center-nav transparent'
};
// style={{backgroundImage: "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)"}}
export default Navbar;
