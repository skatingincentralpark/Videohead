import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";
import Logo from "../logo";
import MobileNav from "./mobile-nav";
import Link from "../link";
import { DarkModeContext } from "../../lib/context";

const transientOptions = {
  shouldForwardProp: (propName) => !propName.startsWith("$"),
};

const Header = () => {
  const [mobNavOpen, setMobNavOpen] = useState(false);

  const toggleNav = () => setMobNavOpen((x) => !x);
  const closeNav = () => setMobNavOpen(false);

  const router = useRouter();
  const isHome = router.pathname === "/";

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const logoVariants = {
    initial: {
      left: `50%`,
      x: `-50%`,
    },
    animate: {
      left: `var(--gap-s)`,
      x: `0%`,
    },
  };

  return (
    <>
      <LazyMotion features={domAnimation} strict>
        <HeaderWrapper>
          <SocialWrapper
            $isHome={isHome}
            $mobNavOpen={mobNavOpen}
          ></SocialWrapper>
          <LogoWrapper $isHome={isHome} $mobNavOpen={mobNavOpen}>
            <m.div
              variants={logoVariants}
              initial="initial"
              animate={mobNavOpen ? "animate" : "initial"}
            >
              <Link href="/" onClick={closeNav}>
                <Logo />
              </Link>
            </m.div>
          </LogoWrapper>
          <NavWrapper $isHome={isHome}>
            <MenuButton
              onClick={toggleNav}
              isOpen={mobNavOpen}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              isHome={isHome}
              mobNavOpen={mobNavOpen}
            />
          </NavWrapper>
        </HeaderWrapper>

        <AnimatePresence exitBeforeEnter>
          {mobNavOpen && (
            <MobileNav
              closeNav={closeNav}
              toggleDarkMode={toggleDarkMode}
              darkMode={darkMode}
            />
          )}
        </AnimatePresence>
      </LazyMotion>
    </>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  z-index: 3;
  display: grid;
  grid-template-columns: 4fr 15rem 4fr;
  width: 100%;
  position: fixed;
  top: 0;
  height: 6rem;
  padding: 0 var(--gap-s);
  backdrop-filter: blur(5px);

  @media screen and (min-width: 400px) {
    padding: 0 var(--gap-s) 0 var(--gap-l);
  }
`;

const LogoWrapper = styled(m.div, transientOptions)`
  left: 0;
  top: 0;

  & > div {
    position: relative;
    display: flex;
    align-items: center;
    position: fixed;
    height: 6rem;
    width: 15rem;
    transform-origin: left;
  }

  & svg {
    height: 100%;
    transition: fill 500ms;
    fill: ${({ $isHome, $mobNavOpen }) =>
      $isHome && !$mobNavOpen && `var(--home-color)`};
  }
`;

const SocialWrapper = styled(`div`, transientOptions)`
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
    transition: background-color 100ms ease;

    @media screen and (min-width: 700px) {
      display: flex;
    }

    &:hover {
      @media screen and (min-width: 700px) {
        & svg {
          fill: black;
        }
        background-color: white;
      }
    }

    &:active {
      background-color: darkgray;
    }

    & svg {
      fill: ${({ $isHome }) => $isHome && `var(--home-color)`};
      width: 1.2rem;
      transition: fill 100ms ease;
      aspect-ratio: 1;
    }
  }
`;

const NavWrapper = styled(`nav`, transientOptions)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  color: ${({ $isHome }) => $isHome && `var(--home-color)`};

  /* & > a,
  & > button {
    margin-left: var(--gap-s);
    padding: 0 var(--gap-xxs);
    border-radius: 0.25rem;
    width: auto;
    transition: background-color 100ms ease, color 100ms ease;
    display: none;
    cursor: pointer;

    @media screen and (min-width: 700px) {
      display: block;
    }

    &:hover {
      @media screen and (min-width: 700px) {
        background-color: white;
        color: black;
      }
    }

    &:active {
      background-color: darkgray;
      color: black;
    }
  }

  & > button {
    width: 6.5rem;
    margin-left: var(--gap-xs);
  } */
`;

const MenuButton = ({
  isOpen = false,
  width = 24,
  height = 24,
  strokeWidth = 1,
  color = "#000",
  transition = null,
  lineProps = null,
  isHome = false,
  mobNavOpen = false,
  onClick = () => {},
  ...props
}) => {
  const variant = isOpen ? "opened" : "closed";

  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  };
  lineProps = {
    stroke:
      isHome && !mobNavOpen ? `var(--home-color)` : `var(--primary-color)`,
    strokeWidth: strokeWidth,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition,
    ...lineProps,
  };
  const unitHeight = 4;
  const unitWidth = (unitHeight * width) / height;

  return (
    <BurgerWrapper onClick={onClick}>
      <m.svg
        viewBox={`0 0 ${unitWidth} ${unitHeight}`}
        overflow="visible"
        preserveAspectRatio="none"
        width={width}
        height={height}
        {...props}
      >
        <m.line
          x1="0"
          x2={unitWidth}
          y1="0"
          y2="0"
          variants={top}
          {...lineProps}
        />
        <m.line
          x1="0"
          x2={unitWidth}
          y1="2"
          y2="2"
          variants={center}
          {...lineProps}
        />
        <m.line
          x1="0"
          x2={unitWidth}
          y1="4"
          y2="4"
          variants={bottom}
          {...lineProps}
        />
      </m.svg>
    </BurgerWrapper>
  );
};

const BurgerWrapper = styled(`button`, transientOptions)`
  height: 5rem;
  width: 5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 700px) {
    display: block;
  }
  & > svg {
    padding: 0.2rem;
  }
`;
