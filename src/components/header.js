import { default as NextLink } from "next/link";
import styled from "@emotion/styled";

const Header = () => {
  return (
    <StyledHeader>
      <NextLink href="/">Home</NextLink>
      <NextLink href="/music-video">Music Video</NextLink>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  padding: var(--gap-l);
  width: 100%;

  & > * {
    mix-blend-mode: exclusion;
    color: white;
    margin-right: var(--gap-l);
  }
`;
