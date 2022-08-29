import { LazyMotion, domAnimation, AnimatePresence, m } from "framer-motion";
import GlobalStyles from "../styles/global";
import { useRouter } from "next/router";
import Header from "../components/header";

const pageTransitionAnim = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.2,
      ease: "linear",
      when: "beforeChildren",
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "linear",
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
            initial="hide"
            animate="show"
            exit="hide"
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
