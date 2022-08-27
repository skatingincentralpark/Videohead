import { useState } from "react";
import { default as NextLink } from "next/link";
import styled from "@emotion/styled";
import Logo from "../logo";
import MobileNav from "./mobile-nav";
import Link from "../link";

const Header = () => {
  const [mobNavOpen, setMobNavOpen] = useState(false);

  const toggleNav = () => setMobNavOpen((x) => !x);
  const closeNav = () => setMobNavOpen(false);

  return (
    <>
      <HeaderWrapper>
        <HeaderInner>
          <NextLink href="/">
            <a onClick={closeNav}>
              <Logo />
            </a>
          </NextLink>
          <nav>
            <Link href="/music-video" onClick={closeNav}>
              Music Video
            </Link>
            <Link href="/commercial" onClick={closeNav}>
              Commercial
            </Link>
            <Link href="/film" onClick={closeNav}>
              Film
            </Link>
            <Link href="/contact" onClick={closeNav}>
              Contact
            </Link>
          </nav>
          <MobileToggle onClick={toggleNav}>
            {mobNavOpen ? "Close" : "Menu"}
          </MobileToggle>
        </HeaderInner>
      </HeaderWrapper>
      {mobNavOpen && <MobileNav closeNav={closeNav} />}
    </>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  padding: var(--gap-l);
  width: 100%;
  position: fixed;
  mix-blend-mode: exclusion;
  z-index: 3;
  top: 0;
  left: 0;
`;

const HeaderInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > * {
    color: white;
  }

  & > nav {
    flex-shrink: 0;

    @media screen and (max-width: 700px) {
      display: none;
    }

    & > * {
      margin-left: var(--gap-l);
      display: inline;
    }
  }

  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & svg {
    width: 15rem;
    fill: white;
    cursor: pointer;
  }
`;

const MobileToggle = styled.div`
  display: none;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 700px) {
    display: block;
  }
`;
