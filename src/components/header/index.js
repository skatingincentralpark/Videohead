import { useState } from "react";
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
          <Socials>
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
          </Socials>
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
  font-size: 1rem;
  animation: fadeIn 2s linear;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

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

  & > nav {
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 700px) {
      display: none;
    }

    & > * {
      width: fit-content;
    }

    & > a {
      padding: var(--gap-l) var(--gap-s);
    }
  }
`;

const Socials = styled.div`
  display: flex;
  flex-direction: row;

  & > a {
    padding: var(--gap-xs) var(--gap-xxs);
    margin: 0 var(--gap-3xs);
    display: flex;
    flex-direction: row;
    width: 2.2rem;
    cursor: pointer;
  }

  & > a:last-of-type {
    margin-right: calc(var(--gap-l) - var(--gap-xxs));
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
