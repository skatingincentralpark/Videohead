import styled from "@emotion/styled";

const SocialLogo = ({ type, size }) => {
  // type: fb, ig, yt, vimeo
  // size: small, large

  if (size === "small")
    switch (type) {
      case "fb":
        return (
          <SvgSmall
            id="Content"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 42.24 42.24"
          >
            <path d="M10.05,15.7h5.95c0-1.22-.07-2.34,.02-3.44,.17-2.07,.12-4.24,.74-6.17,.82-2.55,2.79-4.32,5.29-5.38C23.68,.02,25.41-.04,27.16,.02c1.34,.04,2.69,0,4.2,0V6.85c-1.31,0-2.63-.05-3.96,.01-1.93,.09-3.23,1.45-3.29,3.44-.05,1.7-.01,3.4-.01,5.34h7.31c-.21,1.49-.37,2.73-.57,3.97-.19,1.15-.43,2.29-.66,3.53h-6.02v19.09h-8.12V23.24h-5.99v-7.54Z" />
          </SvgSmall>
        );
      case "ig":
        return (
          <SvgSmall
            id="Content"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 42.24 42.24"
          >
            <path d="M21.03,42.24c-2.39,0-4.79-.16-7.16,.04-2.71,.24-5.18-.51-7.6-1.46-.97-.38-1.73-1.33-2.57-2.03C.9,36.43,.06,33.21,.01,29.76c-.08-6.02,.05-12.05-.06-18.07-.04-2.15,.88-4.05,1.57-5.85,.67-1.75,2.48-3.5,4.21-4.27C7.49,.8,9.41-.1,11.54-.08,17.9-.02,24.27-.2,30.63,0c2.9,.09,5.62,1.01,7.87,3.22,2.68,2.64,3.8,5.72,3.8,9.37,0,5.68-.11,11.37,.05,17.05,.07,2.38-.54,4.67-1.57,6.52-1.1,1.99-2.78,3.82-5.27,4.82-2.65,1.07-5.26,1.31-8,1.27-2.16-.03-4.32,0-6.48,0ZM4.09,20.74c0,3.41-.22,6.83,.05,10.22,.36,4.46,2.63,6.9,6.95,7.11,6.69,.32,13.41,.32,20.1,0,4.34-.2,6.75-2.66,6.94-7.09,.29-6.57,.29-13.18,0-19.76-.2-4.46-2.61-6.9-6.93-7.1-6.69-.32-13.4-.14-20.1-.04-1.22,.02-2.63,.38-3.61,1.07-2.25,1.59-3.5,3.83-3.42,6.73,.08,2.95,.02,5.91,.02,8.86Z" />
            <path d="M32.06,21.05c.27,5.98-5.21,11.01-10.87,11.02-5.98,.01-11.01-5.27-11.02-10.93-.01-5.98,5.27-11.01,10.93-11.02,5.98-.01,11.22,5.27,10.96,10.93Zm-17.74,0c-.22,1.78,.3,3.55,1.88,5.04,1.35,1.27,2.79,1.9,4.68,1.86,4.43-.08,7.07-2.49,7.08-6.68,.01-4.24-2.48-6.96-6.39-7-4.51-.04-7.23,2.39-7.25,6.78Z" />
            <path d="M34.79,9.83c0,1.91-.44,2.37-2.3,2.39-2.13,.03-2.52-.38-2.47-2.56,.04-1.88,.44-2.24,2.47-2.22,1.87,.02,2.3,.48,2.3,2.39Z" />
          </SvgSmall>
        );
      case "yt":
        return (
          <SvgSmall
            id="Content"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 42.24 42.24"
          >
            <path d="M21.13,6.43c3.16,.07,5.9,.12,8.63,.21,2.25,.08,4.49,.2,6.72,.5,1.44,.2,2.71,.7,3.7,1.81,.77,.86,1.14,1.89,1.34,3,.27,1.51,.43,3.04,.42,4.58-.02,3.4,.02,6.79-.02,10.19-.02,1.55-.2,3.11-.65,4.6-.63,2.12-2.11,3.38-4.28,3.73-1.31,.21-2.64,.34-3.96,.42-4.59,.28-9.18,.38-13.77,.31-3.23-.05-6.46-.16-9.68-.32-1.5-.07-3-.22-4.47-.52-2.21-.45-3.55-1.89-4.07-4.08-.38-1.61-.53-3.26-.61-4.9-.09-1.89-.16-3.78-.15-5.67,.01-2.5,.14-5,.5-7.48,.15-1,.3-2.01,.82-2.91,.93-1.61,2.32-2.54,4.16-2.73,1.92-.2,3.84-.38,5.76-.46,3.34-.14,6.68-.19,9.6-.26Zm-4.08,20.99l10.93-6.29-10.93-6.29v12.58Z" />
          </SvgSmall>
        );
      case "vimeo":
        return (
          <SvgSmall
            id="Content"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 42.24 42.24"
          >
            <path d="M35.74,2.82c5.01,0,6.85,4.03,6.46,8.57-.97,7.76-6.63,14.05-11.26,20.03-2.22,2.48-4.67,4.95-7.7,6.73C10.05,45.22,12.38,18.7,6,13.41c-1.35-.8-2.72,.93-3.88,1.52-.85,.17-1.35-1.62-2.06-2.14-.17-.14,.17-.45,.3-.5,.2-.18,.37-.4,.6-.53,.61-.57,1.23-1.11,1.85-1.65,1.64-1.43,3.12-2.95,5-4.33,3.17-2.89,7.68-3.78,9.54,.84,2.02,5.58,1.72,12,3.95,17.53,1.64,4.61,4.3,.48,5.83-1.81,1.53-2.73,4.17-6.18,2.5-9.36-1.2-1.4-3.46-1.02-5.05-.47-.22,.12-.52,.14-.3-.19,1.49-5.24,5.61-9.49,11.21-9.49h.25Z" />
          </SvgSmall>
        );
      default:
    }

  if (size === "large" || !size)
    switch (type) {
      case "fb":
        return (
          <Svg
            id="Content"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64.86 64.86"
          >
            <path d="M25.44,29.23h5.95c0-1.22-.07-2.34,.02-3.44,.17-2.07,.12-4.24,.74-6.17,.82-2.55,2.79-4.32,5.29-5.38,1.64-.7,3.37-.75,5.11-.69,1.34,.04,2.69,0,4.2,0v6.82c-1.31,0-2.63-.05-3.96,.01-1.93,.09-3.23,1.45-3.29,3.44-.05,1.7-.01,3.4-.01,5.34h7.31c-.21,1.49-.37,2.73-.57,3.97-.19,1.15-.43,2.29-.66,3.53h-6.02v19.09h-8.12v-19h-5.99v-7.54Z" />
          </Svg>
        );
      case "ig":
        return (
          <Svg
            id="Content"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64.86 64.86"
          >
            <path d="M32.31,53.55c-2.39,0-4.79-.16-7.16,.04-2.71,.24-5.18-.51-7.6-1.46-.97-.38-1.73-1.33-2.57-2.03-2.81-2.36-3.65-5.58-3.69-9.03-.08-6.02,.05-12.05-.06-18.07-.04-2.15,.88-4.05,1.57-5.85,.67-1.75,2.48-3.5,4.21-4.27,1.76-.78,3.67-1.68,5.8-1.66,6.36,.07,12.73-.12,19.09,.09,2.9,.09,5.62,1.01,7.87,3.22,2.68,2.64,3.8,5.72,3.8,9.37,0,5.68-.11,11.37,.05,17.05,.07,2.38-.54,4.67-1.57,6.52-1.1,1.99-2.78,3.82-5.27,4.82-2.65,1.07-5.26,1.31-8,1.27-2.16-.03-4.32,0-6.48,0ZM15.36,32.05c0,3.41-.22,6.83,.05,10.22,.36,4.46,2.63,6.9,6.95,7.11,6.69,.32,13.41,.32,20.1,0,4.34-.2,6.75-2.66,6.94-7.09,.29-6.57,.29-13.18,0-19.76-.2-4.46-2.61-6.9-6.93-7.1-6.69-.32-13.4-.14-20.1-.04-1.22,.02-2.63,.38-3.61,1.07-2.25,1.59-3.5,3.83-3.42,6.73,.08,2.95,.02,5.91,.02,8.86Z" />
            <path d="M43.34,32.36c.27,5.98-5.21,11.01-10.87,11.02-5.98,.01-11.01-5.27-11.02-10.93-.01-5.98,5.27-11.01,10.93-11.02,5.98-.01,11.22,5.27,10.96,10.93Zm-17.74,0c-.22,1.78,.3,3.55,1.88,5.04,1.35,1.27,2.79,1.9,4.68,1.86,4.43-.08,7.07-2.49,7.08-6.68,.01-4.24-2.48-6.96-6.39-7-4.51-.04-7.23,2.39-7.25,6.78Z" />
            <path d="M46.07,21.14c0,1.91-.44,2.37-2.3,2.39-2.13,.03-2.52-.38-2.47-2.56,.04-1.88,.44-2.24,2.47-2.22,1.87,.02,2.3,.48,2.3,2.39Z" />
          </Svg>
        );
      case "yt":
        return (
          <Svg
            id="Content"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64.86 64.86"
          >
            <path d="M32.44,17.74c3.16,.07,5.9,.12,8.63,.21,2.25,.08,4.49,.2,6.72,.5,1.44,.2,2.71,.7,3.7,1.81,.77,.86,1.14,1.89,1.34,3,.27,1.51,.43,3.04,.42,4.58-.02,3.4,.02,6.79-.02,10.19-.02,1.55-.2,3.11-.65,4.6-.63,2.12-2.11,3.38-4.28,3.73-1.31,.21-2.64,.34-3.96,.42-4.59,.28-9.18,.38-13.77,.31-3.23-.05-6.46-.16-9.68-.32-1.5-.07-3-.22-4.47-.52-2.21-.45-3.55-1.89-4.07-4.08-.38-1.61-.53-3.26-.61-4.9-.09-1.89-.16-3.78-.15-5.67,.01-2.5,.14-5,.5-7.48,.15-1,.3-2.01,.82-2.91,.93-1.61,2.32-2.54,4.16-2.73,1.92-.2,3.84-.38,5.76-.46,3.34-.14,6.68-.19,9.6-.26Zm-4.08,20.99l10.93-6.29-10.93-6.29v12.58Z" />
          </Svg>
        );
      case "vimeo":
        return (
          <Svg
            id="Content"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64.86 64.86"
          >
            <path d="M47.6,13.67c8.89,.08,7.5,11.6,3.99,16.96-4.14,6.81-13.64,21.89-22.48,20.83-8.33-3.13-6.42-23.45-13-27.05-3.12,.59-3.51,3.99-5.43-.72,1.54-1.43,3.13-2.77,4.67-4.18,11.05-10.81,14-3.65,15.31,8.5,1.83,10.09,3.59,14.49,9.68,3.01,2.76-4.63,1.76-9.67-4.6-7.23,.87-5.21,5.94-10.26,11.59-10.12h.26Z" />
          </Svg>
        );
      default:
    }

  return null;
};

export default SocialLogo;

const Svg = styled.svg`
  fill: var(--primary-color);
  aspect-ratio: 1;
  width: 100%;
`;

const SvgSmall = styled.svg`
  fill: var(--primary-color);
  aspect-ratio: 1;
  width: 100%;
`;
