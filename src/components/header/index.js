import { useState } from "react";
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
      {/* If nav open, hide logo, because it's large one is in nav */}
      {!mobNavOpen && (
        <HeaderLeft>
          <Link href="/" onClick={closeNav}>
            <Logo />
          </Link>
        </HeaderLeft>
      )}
      <HeaderRight>
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
      </HeaderRight>
      {mobNavOpen && <MobileNav closeNav={closeNav} />}
    </>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  mix-blend-mode: exclusion;

  & * {
    color: white;
  }
`;

const HeaderLeft = styled(StyledHeader)`
  left: 0;
  z-index: 6;

  & > a {
    padding: var(--header-padding-left);
  }

  & svg {
    width: 15rem;
    fill: white;
    cursor: pointer;
  }
`;

const HeaderRight = styled(StyledHeader)`
  right: 0;
  z-index: 5;
  text-align: right;

  & a {
    padding: var(--gap-l) var(--gap-m);
  }

  & a:last-of-type {
    padding-right: var(--gap-l);
  }

  & > nav {
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 700px) {
      display: none;
    }

    & > * {
      width: fit-content;
    }
  }
`;

const MobileToggle = styled.div`
  display: none;
  cursor: pointer;
  user-select: none;
  padding: var(--header-padding-right);

  @media screen and (max-width: 700px) {
    display: block;
  }
`;
