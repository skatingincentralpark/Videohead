import { useState } from "react";
import { LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";
import Logo from "../logo";
import MobileNav from "./mobile-nav";
import Link from "../link";
import SocialLogo from "../social-logo";

const Header = () => {
  const [mobNavOpen, setMobNavOpen] = useState(false);

  const toggleNav = () => setMobNavOpen((x) => !x);
  const closeNav = () => setMobNavOpen(false);

  return (
    <>
      <HeaderWrapper>
        <SocialWrapper>
          <a
            href="https://www.facebook.com/videoheadco-103976897860912"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialLogo size="small" type="fb" onClick={closeNav} />
          </a>
          <a
            href="https://www.instagram.com/videoheadco/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialLogo size="small" type="ig" onClick={closeNav} />
          </a>
          <a
            href="https://vimeo.com/user48058060"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialLogo size="small" type="vimeo" onClick={closeNav} />
          </a>
        </SocialWrapper>
        <LogoWrapper>
          <Link href="/" onClick={closeNav}>
            <Logo />
          </Link>
        </LogoWrapper>
        <NavWrapper>
          <Link href="/music-video" onClick={closeNav}>
            Music Video
          </Link>
          <Link href="/contact" onClick={closeNav}>
            Contact
          </Link>
          <MobileToggle onClick={toggleNav}>
            {mobNavOpen ? "Close" : "Menu"}
          </MobileToggle>
          <LazyMotion features={domAnimation} strict>
            <AnimatePresence exitBeforeEnter>
              {mobNavOpen && <MobileNav closeNav={closeNav} />}
            </AnimatePresence>
          </LazyMotion>
        </NavWrapper>
      </HeaderWrapper>
    </>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  z-index: 2;
  display: grid;
  grid-template-columns: 4fr 15rem 4fr;
  width: 100%;
  position: fixed;
  top: 0;
  height: 6rem;
  padding: 0 var(--gap-l);
`;

const LogoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SocialWrapper = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;

  & > a {
    margin-right: var(--gap-m);
    display: flex;
    flex-direction: row;
    border-radius: 0.25rem;
    padding: 0.4rem;
    height: fit-content;
    cursor: pointer;
    display: none;
    transition: background-color 300ms ease;

    @media screen and (min-width: 700px) {
      display: flex;
    }

    &:hover {
      & svg {
        fill: black;
      }
      background-color: white;
    }

    &:active {
      background-color: darkgray;
    }

    & svg {
      width: 1.2rem;
      transition: fill 300ms ease;
      aspect-ratio: 1;
    }
  }
`;

const NavWrapper = styled.nav`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  display: flex;

  & > a {
    margin-left: var(--gap-s);
    padding: 0 var(--gap-xxs);
    border-radius: 0.25rem;
    width: auto;
    transition: background-color 300ms ease, color 300ms ease;
    display: none;

    @media screen and (min-width: 700px) {
      display: block;
    }

    &:hover {
      background-color: white;
      color: black;
    }

    &:active {
      background-color: darkgray;
      color: black;
    }
  }
`;

const MobileToggle = styled.div`
  display: none;
  cursor: pointer;
  user-select: none;
  padding: var(--header-padding-right);
  z-index: 3;
  padding: 0 var(--gap-xxs);

  @media screen and (max-width: 700px) {
    display: block;
  }

  border-radius: 0.25rem;
  transition: background-color 300ms ease, color 300ms ease, transform 100ms;

  &:hover {
    background-color: white;
    color: black;
  }

  &:active {
    background-color: darkgray;
    color: black;
    transform: scale(0.9);
  }
`;
