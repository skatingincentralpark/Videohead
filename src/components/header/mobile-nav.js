import styled from "@emotion/styled";
import Logo from "../logo";
import SocialLogo from "../social-logo";
import Link from "../link";

const MobileNav = ({ closeNav }) => {
  return (
    <StyledMobileNav>
      <Link href="/" onClick={closeNav}>
        <Logo />
      </Link>
      <Nav>
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
      </Nav>
      <Socials>
        <a
          href="https://www.facebook.com/videoheadco-103976897860912"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialLogo type="fb" onClick={closeNav} />
        </a>
        <a
          href="https://www.instagram.com/videoheadco/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialLogo type="ig" onClick={closeNav} />
        </a>
        <a
          href="https://vimeo.com/user48058060"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialLogo type="vimeo" onClick={closeNav} />
        </a>
      </Socials>
      <p>
        About
        <br />
        Videohead is a video production company based in Sydney, Australia. We
        tell stories of some of Australia&apos;s most exciting creatives
      </p>
      <p>
        Contact
        <br />
        Raghav Rampal
        <br />
        raghav@videohead.com.au
        <br />
        +61 423 371 400
        <br />
      </p>
      <p>Site designed and developed by @skatingincentralpark</p>
    </StyledMobileNav>
  );
};

export default MobileNav;

const StyledMobileNav = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;

  color: white;

  padding: 7rem var(--gap-l) 0 var(--gap-l);

  display: none;

  @media screen and (max-width: 700px) {
    display: block;
  }

  & > * {
    margin-bottom: var(--gap-xxl);
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  & > *:first-of-type {
    border-top: var(--border);
  }

  & > * {
    border-bottom: var(--border);
    padding: var(--gap-xs) 0;
  }
`;

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;

  & > * {
    background-color: var(--ghost-white);
    border-radius: 1rem;
    cursor: pointer;
  }

  & > *:not(:first-of-type) {
    margin-left: var(--gap-xs);
  }
`;
