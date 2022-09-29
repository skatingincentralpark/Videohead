import styled from "@emotion/styled";
import { m } from "framer-motion";
import Logo from "../logo";
import SocialLogo from "../social-logo";
import Link from "../link";

const parentVariants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.2 },
    // transition: {
    //   staggerDirection: -1,
    //   staggerChildren: 0.1,
    //   when: "afterChildren",
    // },
  },
  show: {
    opacity: 1,
    transition: { duration: 0.2 },
    // transition: {
    //   staggerChildren: 0.1,
    // },
  },
};

const childVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const MobileNav = ({ closeNav }) => {
  return (
    <StyledMobileNav
      variants={parentVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <Link href="/" onClick={closeNav}>
        <Logo />
      </Link>
      <Nav>
        <Link href="/music-video" onClick={closeNav}>
          Music Video
        </Link>
        {/* <ChildTransitionWrapper>
          <Link href="/commercial" onClick={closeNav}>
            Commercial
          </Link>
        </ChildTransitionWrapper>
        <ChildTransitionWrapper>
          <Link href="/film" onClick={closeNav}>
            Film
          </Link>
        </ChildTransitionWrapper> */}
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
        <strong>About</strong>
        <br />
        Videohead is a video production company based in Sydney, Australia. We
        tell stories of some of Australia&apos;s most exciting creatives
      </p>
      <p>
        <strong>Contact</strong>
        <br />
        Raghav Rampal
        <br />
        raghav@videohead.com.au
        <br />
        +61 423 371 400
        <br />
      </p>
      <p>
        Site designed and developed by
        <a
          href="https://www.nakedlunch.studio/about"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline" }}
        >
          @skatingincentralpark
        </a>
      </p>
    </StyledMobileNav>
  );
};

export default MobileNav;

const StyledMobileNav = styled(m.div)`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  background-color: var(--background-color);
  color: var(--primary-color);

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
    border-top: 1px solid var(--primary-color);
  }

  & > * {
    border-bottom: 1px solid var(--primary-color);
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
    max-width: 6rem;
  }

  & > *:not(:first-of-type) {
    margin-left: var(--gap-xs);
  }
`;

const ChildTransitionWrapper = ({ children }) => {
  return (
    <m.div variants={childVariants} key={Math.floor(Math.random() * 100)}>
      {children}
    </m.div>
  );
};
