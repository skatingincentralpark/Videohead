import { LazyMotion, domAnimation, AnimatePresence, m } from "framer-motion";
import GlobalStyles from "../styles/global";
import { useRouter } from "next/router";
import Header from "../components/header";

const pageTransitionAnim = {
  initial: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      when: "beforeChildren",
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -300,
    transition: {
      duration: 0.4,
      ease: "easeIn",
      when: "beforeChildren",
    },
  },
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <GlobalStyles />
      <Header />
      <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter>
          <m.div
            key={router.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransitionAnim}
          >
            <Component {...pageProps} />
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </>
  );
}

export default MyApp;
