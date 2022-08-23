import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css' 
import Link from 'next/link'
import Script from 'next/script'
import img from 'next/image'



const Home: NextPage = () => {
  return (
<>
<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
  <meta name="apple-touch-fullscreen" content="yes" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <title>AlphaDonki | Home</title>
  <meta name="description" content="AlphaDonki | are u alpha enuogh?" />
  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, user-scalable=no"/>
  <meta name="msapplication-TileColor" content="#000000" />
  <meta name="msapplication-TileImage" content="/images/ms-icon-144x144.png" />
  <meta name="theme-color" content="#000000" />
  <meta property="og:image" content="./assets/fav/bgg-12.png" />
  <meta property="og:title" content="AlphaDonki" />
  <meta property="og:description" content=" AlphaDonki | Are u alpha enough?" />
  <meta property="og:site_name" content="AlphaDonki" />
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="/assets/fav/apple-touch-icon.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="/assets/fav/favicon-32x32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="/assets/fav/favicon-16x16.png"
  />
  <link rel="manifest" href="/assets/fav/site.webmanifest" />
  <meta name="msapplication-TileColor" content="#da532c" />
  <meta name="theme-color" content="#ffffff" />
 
  <div className="bubbles_wrap">
    <div className="bubble x1" />
    <div className="bubble x2" />
    <div className="bubble x3" />
    <div className="bubble x4" />
    <div className="bubble x5" />
    <div className="bubble x6" />
    <div className="bubble x7" />
    <div className="bubble x8" />
    <div className="bubble x9" />
    <div className="bubble x10" />
  </div>
  <div className="loader">
    <img src="logo-intro.png" alt="Loading..." />
  </div>
</>

<>
  <div className="cloud-bg">
    <img src="" alt="" />
    <div className="lottie-animation" />
  </div>
  <div className="global-styles w-embed">
    <style
      dangerouslySetInnerHTML={{
        __html:
          '\n        /* Snippet gets rid of top margin on first element in any rich text*/\n        .w-richtext > :first-child {\n          margin-top: 0;\n        }\n\n        /* Snippet gets rid of bottom margin on last element in any rich text*/\n        .w-richtext > :last-child,\n        .w-richtext ol li:last-child,\n        .w-richtext ul li:last-child {\n          margin-bottom: 0;\n        }\n\n        /* Snippet makes all link elements listed below to inherit color from their parent */\n        a,\n        .w-tab-link,\n        .w-nav-link,\n        .w-dropdown-btn,\n        .w-dropdown-toggle,\n        .w-dropdown-link {\n          color: inherit;\n        }\n\n        /* Snippet prevents all click and hover interaction with an element */\n        .clickable-off {\n          pointer-events: none;\n        }\n\n        /* Snippet enables all click and hover interaction with an element */\n        .clickable-on {\n          pointer-events: auto;\n        }\n\n        /* Snippet enables you to add class of div-square which creates and maintains a 1:1 dimension of a div.*/\n        .div-square::after {\n          content: "";\n          display: block;\n          padding-bottom: 100%;\n        }\n\n        /*Hide focus outline for main content element*/\n        main:focus-visible {\n          outline: -webkit-focus-ring-color auto 0px;\n        }\n\n        /* Make sure containers never lose their center alignment*/\n        .container-medium,\n        .container-small,\n        .container-large {\n          margin-right: auto !important;\n          margin-left: auto !important;\n        }\n\n        /*Reset selects, buttons, and links styles*/\n        .w-input,\n        .w-select,\n        a {\n          color: inherit;\n          text-decoration: inherit;\n          font-size: inherit;\n        }\n\n        /*Apply "..." after 3 lines of text */\n        .text-style-3lines {\n          display: -webkit-box;\n          overflow: hidden;\n          -webkit-line-clamp: 3;\n          -webkit-box-orient: vertical;\n        }\n\n        /* Apply "..." after 2 lines of text */\n        .text-style-2lines {\n          display: -webkit-box;\n          overflow: hidden;\n          -webkit-line-clamp: 2;\n          -webkit-box-orient: vertical;\n        }\n        /* Apply "..." at 100% width */\n        .truncate-width {\n          width: 100%;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        /* Removes native scrollbar */\n        .no-scrollbar {\n          -ms-overflow-style: none; \n          overflow: -moz-scrollbars-none;\n        }\n\n        .no-scrollbar::-webkit-scrollbar {\n          display: none;\n        }\n      '}}/>
  </div>
  <div className="background"> </div>
  <div
    data-collapse="medium"
    data-animation="over-left"
    data-duration={400}
    data-w-id="f64aa1bf-a3b0-9533-c762-1410582692c6"
    data-easing="ease"
    data-easing2="ease"
    role="banner"
    className="navbar3_component navbar w-nav"
  >
    <div className="navbar3_container">
      <div
        id="w-node-f64aa1bf-a3b0-9533-c762-1410582692c8-582692c6"
        className="navbar3_menu-button w-nav-button"
      >
        <div className="menu-icon3">
          <div className="menu-icon3_line-top" />
          <div className="menu-icon3_line-middle" />
          <div className="menu-icon3_line-bottom" />
        </div>
      </div>
      <nav
        role="navigation"
        id="w-node-f64aa1bf-a3b0-9533-c762-1410582692cd-582692c6"
        className="navbar3_menu w-nav-menu  "
      >
        <a href="#" className="navbar3_logo-link-menu w-nav-brand">
          <img src="/ad-logo.svg" loading="lazy" alt="" />
        </a>
        <a className="navbar3_link w-nav-link">𝕊𝕋𝔸𝕂𝕀ℕ𝔾</a>
        <a className="navbar3_link w-nav-link">ℝ𝔸𝔽𝔽𝕃𝔼𝕊</a>
        <a className="navbar3_link w-nav-link">𝕊ℍ𝕆ℙ</a>
        <div
          data-hover="true"
          data-delay={200}
          data-w-id="f64aa1bf-a3b0-9533-c762-1410582692d6"
          className="navbar3_menu-dropdown w-dropdown"
        >
          <div className="navbar3_dropdown-toggle w-dropdown-toggle">
            <div className="dropdown-icon w-icon-dropdown-toggle" />
            <div>Link Three</div>
          </div>
          <nav className="navbar3_dropdown-list w-dropdown-list">
            <a href="#" className="navbar3_dropdown-link w-dropdown-link">
              Link Four
            </a>
            <a href="#" className="navbar3_dropdown-link w-dropdown-link">
              Link Five
            </a>
            <a href="#" className="navbar3_dropdown-link w-dropdown-link">
              Link Six
            </a>
          </nav>
        </div>
        <a href="#" className="navbar3_tablet-menu-button w-button">
          Button
        </a>
      </nav>
      <a
        href="#"
        id="w-node-f64aa1bf-a3b0-9533-c762-1410582692e4-582692c6"
        aria-current="page"
        className="navbar3_logo-link w-nav-brand w--current"
      >
        <img
          src="/ad-logo.svg"
          loading="lazy"
          alt=""
          className="navbar3_logo"
        />
      </a>
      <nav
        role="navigation"
        id="w-node-f64aa1bf-a3b0-9533-c762-1410582692e6-582692c6"
        className="navbar3_menu w-nav-menu"
        style={{ backgroundColor: "rgb(0, 0, 0)" }}
      >
        <a
          href="#"
          aria-current="page"
          className="mobile-nav-brand-block margin-bottom margin-medium w-inline-block w--current"
        >
          <img
            src="ad-logo.svg"
            loading="lazy"
            alt=""
            style={{ width: "10%" }}
          />
          <div className="mobilenav-menu-title margin-left margin-medium">
            AlphaDonki
          </div>
        </a>
        <a className="navbar3_link left-mobile w-nav-link">ℝ𝔸𝔽𝔽𝕃𝔼𝕊</a>
        <a className="navbar3_link left-mobile w-nav-link">𝕊ℍ𝕆ℙ</a>
        <a className="navbar3_link left-mobile w-nav-link">𝕊𝕋𝔸𝕂𝕀ℕ𝔾</a>
        <a className="navbar3_link w-nav-link">𝕋𝔼𝔸𝕄</a>
        <a className="navbar3_link w-nav-link">𝔸𝕃ℙℍ𝔸𝕄𝔸ℙ</a>
        <a className="navbar3_link w-nav-link">𝔸𝕃ℙℍ𝔸ℙ𝔸ℙ𝔼ℝ</a>
        <div
          data-hover="true"
          data-delay={200}
          data-w-id="f64aa1bf-a3b0-9533-c762-1410582692ed"
          className="navbar3_menu-dropdown w-dropdown"
        >
          <div className="navbar3_dropdown-toggle w-dropdown-toggle">
            <div className="dropdown-icon w-icon-dropdown-toggle" />
            <div>Link Three</div>
          </div>
          <nav className="navbar3_dropdown-list w-dropdown-list">
            <a href="#" className="navbar3_dropdown-link w-dropdown-link">
              Link Four
            </a>
            <a href="#" className="navbar3_dropdown-link w-dropdown-link">
              Link Five
            </a>
            <a href="#" className="navbar3_dropdown-link w-dropdown-link">
              Link Six
            </a>
          </nav>
        </div>
        <a href="#" className="navbar3_tablet-menu-button w-button">
          Button
        </a>
      </nav>
      <div className="navbar3_menu-background" />
    </div>
  </div>
  <div className="page-wrapper landing">
    <main className="main-wrapper-landing">
      <div className="div-block-5">
        <div className="div-block-4">
          <div className="div-block-19">
            <p> 𝕒𝕣𝕖 𝕦 𝕒𝕝𝕡𝕙𝕒 𝕖𝕟𝕠𝕦𝕘𝕙 ?</p>
            <h1 className="landing-heading">ALPHA</h1>
            <h1></h1>
            <div className="div-block-9">
              <h4>𝔻𝕆ℕ𝕂𝕀..</h4>
            </div>
          </div>
        </div>
        <div className="div-block" style={{ marginTop: 80 }}>
          <a
            href="https://twitter.com/alphadonki"
            rel="noopener"
            className="social-link w-inline-block"
          >
            <img
              src="twtter_1.svg"
              loading="lazy"
              alt=""
              className="icon-xsmall"
            />
          </a>
          <a href="https://discord.com/invite/ZpJ44GtWj9" rel="noopener" className="social-link w-inline-block">
            <img
              src="discord_1.svg"
              loading="lazy"
              alt=""
              className="icon-xsmall"
            />
          </a>
        </div>
      </div>
    </main>

   
    <div className="div-block-3">
      <img
        src="/2308.png"
        loading="lazy"
        srcSet="
    /500.png   500w,
    /800.png   800w,
    /1080.png  1080w,
    /1600.png  1600w,
    /2308.png  2308w
    "
        sizes="100vw"
        alt=""
        className="landing-bg"
      />
      <div className="w-layout-grid footer4_bottom-wrapper home-page">
        <a
          href="#"
          aria-current="page"
          className="footer4_legal-link w--current"
        >
          © 2022 AlphaDonki, We Are Alpha{" "}
        </a>
        <a className="footer4_legal-link" />
      </div>
    </div>
  </div>
</>

<Script src="/1.js" type="text/javascript"></Script>
<Script src="/2.js" type="text/javascript"></Script>
<Script src="/loader.js" type="text/javascript"></Script>
<Script src="/main.js" type="text/javascript"></Script>

</>)}
export default Home
