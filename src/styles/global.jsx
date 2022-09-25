import { Global, css } from "@emotion/react";
import cssVariables from "./css-variables";
import cssReset from "./css-reset";

const GlobalStyles = () => {
  const styles = [
    cssVariables,
    cssReset,
    css`
      @font-face {
        font-family: "Poppins";
        src: url(/fonts/Poppins-Bold.ttf) format("truetype");
        font-style: normal;
        font-weight: 700;
        font-display: swap;
      }
      @font-face {
        font-family: "Poppins";
        src: url(/fonts/Poppins-Regular.ttf) format("truetype");
        font-style: normal;
        font-weight: 400;
        font-display: swap;
      }
      @font-face {
        font-family: "Poppins";
        src: url(/fonts/Poppins-Light.ttf) format("truetype");
        font-style: normal;
        font-weight: 300;
        font-display: swap;
      }
      @font-face {
        font-family: "Poppins";
        src: url(/fonts/Poppins-ExtraLight.ttf) format("truetype");
        font-style: normal;
        font-weight: 200;
        font-display: swap;
      }

      html,
      body {
        height: 100%;
      }
      html {
        background-color: var(--background-color);
        font-family: var(--font-family-primary), -apple-system,
          BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
          "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 12px;
        line-height: clamp(1.3em, 1.4em, 2em);
        font-weight: 300;
        color: var(--primary-color);
        overflow-y: scroll;
        min-height: fit-content;
      }
      *,
      *:after,
      *:before {
        box-sizing: border-box;
      }
      body {
        padding: 0;
        margin: 0;
      }
      img,
      picture,
      video,
      canvas,
      svg {
        display: block;
        max-width: 100%;
      }
      input,
      button,
      textarea,
      select {
        font: inherit;
      }
      p,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      a,
      span,
      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        margin: 0;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        text-decoration: inherit;
        overflow-wrap: break-word;
      }

      h1 {
        font-size: 2rem;
        line-height: 1.4em;
        margin-bottom: var(--gap-s);
        font-weight: 600;
      }

      p {
        margin-bottom: var(--gap-s);
      }

      /* @media screen and (min-width: 1600px) {
        html {
          font-size: 14px;
        }
      } */
    `,
  ];

  return <Global styles={styles} />;
};

export default GlobalStyles;
