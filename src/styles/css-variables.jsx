import { css } from "@emotion/react";

const cssVariables = css`
  :root {
    // Color
    --gray-1: #f4f4f4;
    --gray-2: #cccccb;
    --gray-3: #b8b8b8;
    --gray-4: #6b6b6b;
    --green-1: #35b14a;
    --green-2: #2d963e;
    --green-3: #216f2e;
    --yellow-1: #fce200;
    --yellow-2: #eecb15;
    --yellow-3: #faff5ae4;
    --yellow-4: #f6ff00e5;
    --olive-1: #564f0a;
    --text-primary: #ffffff;
    --text-secondary: #a4a6a9;
    --border-color: #fff;
    --ghost-white: #ffffff25;
    // Font Size
    --font-size-xs: 0.7rem;
    --font-size-s: 0.8rem;
    --font-size-m: 1rem;
    --font-size-l: 1.2rem;
    --font-size-xl: 1.4rem;
    // Font Family
    --font-family-primary: "Poppins";
    // Gap
    --gap-3xs: 0.25rem;
    --gap-xxs: 0.5rem;
    --gap-xs: 0.75rem;
    --gap-s: 1rem;
    --gap-m: 1.5rem;
    --gap-l: 2rem;
    --gap-xl: 2.5rem;
    --gap-xxl: 3rem;
    --gap-3xl: 4rem;
    --gap-4xl: 5rem;
    --gap-5xl: 6rem;
    --gap-6xl: 7rem;
    --header-padding-left: var(--gap-l) var(--gap-s) var(--gap-l) var(--gap-l);
    --header-padding-right: var(--gap-l) var(--gap-l) var(--gap-l) var(--gap-s);
    // Stuff
    --button-height: 3rem;
    --header-height: 6rem;
    --gap-page-top: calc(var(--header-height) + var(--gap-m));
    --border: 0.5px solid #fff;
    // Molecules
    --home-color: #ffffff;

    @media screen and (min-width: 650px) {
      --button-height: 2.5rem;
    }
  }
`;

const darkVariables = css`
  :root {
    --primary-color: #ffffff;
    --secondary-color: var(--gray-3);
    --background-color: #000000;
    --background-color-transparent: rgba(0, 0, 0, 0.9);
  }
`;

const lightVariables = css`
  :root {
    --primary-color: #000000;
    --secondary-color: var(--gray-4);
    --background-color: #ffffff;
    --background-color-transparent: rgba(203, 203, 203, 0.7);
  }
`;

export { cssVariables, darkVariables, lightVariables };
