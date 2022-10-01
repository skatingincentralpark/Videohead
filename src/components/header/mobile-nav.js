import styled from "@emotion/styled";
import { m } from "framer-motion";
import Logo from "../logo";
import SocialLogo from "../social-logo";
import Link from "../link";

const parentVariants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0 },
  },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
  exit: { transition: { duration: 0 } },
};

const MobileNav = ({ closeNav, toggleDarkMode }) => {
  return (
    <StyledMobileNav
      variants={parentVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Nav>
        <div>
          <ChildTransitionWrapper>
            <Link href="/work" onClick={closeNav}>
              Work
            </Link>
          </ChildTransitionWrapper>
          <ChildTransitionWrapper>
            <Link href="/contact" onClick={closeNav}>
              Contact
            </Link>
          </ChildTransitionWrapper>
        </div>
        <div>
          <ChildTransitionWrapper>
            <a
              href="https://www.facebook.com/videoheadco-103976897860912"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeNav}
            >
              Facebook
            </a>
          </ChildTransitionWrapper>
          <ChildTransitionWrapper>
            <a
              href="https://www.instagram.com/videoheadco/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeNav}
            >
              Instagram
            </a>
          </ChildTransitionWrapper>
          <ChildTransitionWrapper>
            <a
              href="https://vimeo.com/user48058060"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeNav}
            >
              Vimeo
            </a>
          </ChildTransitionWrapper>
          <div>
            <ChildTransitionWrapper>
              <small onClick={toggleDarkMode}>Dark Mode</small>
            </ChildTransitionWrapper>
          </div>
        </div>
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
      </Nav>
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

  padding: var(--gap-m);

  display: none;

  @media screen and (max-width: 700px) {
    display: block;
  }

  & svg {
    width: 60%;
  }

  & > * {
    margin-bottom: var(--gap-xxl);
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;

  & > div {
    font-size: 1.7rem;
    line-height: 2em;
    margin-bottom: var(--gap-l);
  }
`;

const ChildTransitionWrapper = ({ children }) => {
  const childVariants = {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <m.div variants={childVariants} key={Math.floor(Math.random() * 100)}>
      {children}
    </m.div>
  );
};
