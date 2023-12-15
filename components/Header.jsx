"use client";

//import navLogo from "/images/logos/Portfolio-Logo.svg";
import { useState } from "react";
import Link from "next/link";
import { motion as m } from "framer-motion";

const Header = (props) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <m.header
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      id={props.HeaderPosition}
      className="Header"
    >
      <nav className="Nav">
        <div className="NavContainer">
          <div className="NavBar">
            <div className="MainLogo">
              <Link
                className="HomePageLogoLink"
                href="/"
                aria-label="Return to the home page"
              >
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 69 86"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_659_2175)">
                    <path
                      d="M56.4254 63.5338V63.4022C63.6946 61.5628 66.9695 57.4892 66.9695 53.0229C66.9695 47.3732 62.2545 42.5779 51.5792 42.5779H38.6554L33.1038 28.9197C36.9054 30.4767 38.9763 33.628 38.9763 37.3351V41.357H40.0319V37.1944C40.0319 34.1605 41.3681 27.3162 41.3681 27.3162H40.4538C39.7504 29.2923 39.1872 30.3501 37.2879 30.421C36.3393 29.4694 34.8346 28.3326 32.5649 27.5956L21.3506 0H20.3687L5.56675 38.8242C4.4536 41.7144 3.34045 42.7004 1.30994 42.7004H0V43.6853H12.1154V42.7004H10.1505C7.13807 42.7004 5.69693 41.189 6.6143 38.8242L10.8055 27.8538H20.9843C15.5437 29.8683 12.8088 34.6474 12.8088 40.5796C12.8088 58.0784 39.4688 52.5745 39.4688 64.6402C39.4688 70.214 34.5449 73.3896 28.1436 73.3896C19.7733 73.3896 14.146 68.3098 14.146 62.6642V58.9956H13.0903V64.7111C13.0903 69.0853 12.5978 73.9545 12.5978 73.9545H13.5122C13.7937 72.4725 14.5678 70.215 16.0443 69.9326C18.0839 71.9785 21.8825 74.4485 28.1436 74.4485C33.6104 74.4485 37.4595 72.5626 39.8563 69.7595V85.016H34.0272V86.001H52.2988C64.0872 86.001 68.999 80.6145 68.999 74.3078C68.999 68.7897 64.8734 65.1109 56.4244 63.5338H56.4254ZM46.2738 43.5628H51.3824C56.6222 43.5628 60.224 46.2566 60.224 53.8763C60.224 61.496 56.5566 63.2706 51.6448 63.2706H46.2748V43.5628H46.2738ZM18.0758 8.73727L25.4762 26.8688H11.1335L18.0758 8.73727ZM16.2562 37.3341C16.2562 32.0032 19.6239 28.3923 25.9001 27.9307L31.8937 42.7004H27.3089V43.6853H39.8553V52.6615C32.8515 45.1491 16.2552 46.7982 16.2552 37.3331L16.2562 37.3341ZM52.2342 85.015H46.2748V64.2555H52.104C58.6527 64.2555 62.2555 66.9493 62.2555 73.9778C62.2555 81.0063 58.8495 85.014 52.2352 85.014L52.2342 85.015Z"
                      fill="#C6C0C4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_659_2175">
                      <rect width="69" height="86" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                {/* <img
                  src={navLogo}
                  width="45px"
                  height="45px"
                  alt="The initials A S B in elegant font, all connected to one another, in pale black"
                ></img> */}
              </Link>
            </div>
            <button
              className="MenuToggle"
              aria-label="Menu Toggle"
              onClick={() => setNavOpen(!navOpen)}
            >
              <div
                className={
                  navOpen
                    ? "HamburgerContainer HamburgerContainerOpen"
                    : "HamburgerContainer"
                }
              >
                <span className={navOpen ? "LineTop Spin" : "LineTop"}></span>
                <span
                  className={navOpen ? "LineBottom Spin" : "LineBottom"}
                ></span>
              </div>
            </button>
            <a
              className="HireCTAHeader"
              href="mailto:business@amansinghbhogal.com"
            >
              Hire
            </a>
          </div>
          <div
            className="NavOverlay"
            style={{
              opacity: navOpen ? "1" : "0",
              visibility: navOpen ? "visible" : "hidden",
            }}
          >
            <ul className="NavLinks">
              <li className="NavItems">
                <Link href="/">Home</Link>
                <div className="NavItemWrapper"></div>
              </li>
              <li className="NavItems">
                <Link href="/about">About</Link>
                {/* <div className="NavItemWrapper"></div> */}
              </li>
              <li className="NavItems">
                <Link href="/portfolio">Portfolio</Link>
                {/* <div className="NavItemWrapper"></div> */}
              </li>
              <li className="NavItems">
                <Link
                  href="/AmanSinghBhogal-Brand-Manifesto.pdf"
                  target="_blank"
                >
                  Brand Manifesto
                </Link>
                {/* <div className="NavItemWrapper"></div> */}
              </li>
              <li className="NavItems">
                <Link href="/testimonials">Testimonials</Link>
                {/* <div className="NavItemWrapper"></div> */}
              </li>
              <li className="NavItems">
                <Link href="/additionalservices">Additional Services</Link>
                {/* <div className="NavItemWrapper"></div> */}
              </li>
              <li className="NavItems">
                <Link href="/freeresources">Free Resources</Link>
                {/* <div className="NavItemWrapper"></div> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </m.header>
  );
};

export default Header;
