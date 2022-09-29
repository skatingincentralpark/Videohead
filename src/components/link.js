import { default as NextLink } from "next/link";
import styled from "@emotion/styled";

const Link = ({ children, href, onClick, ...rest }) => {
  return (
    <NextLink href={href} scroll={false}>
      <StyledLink onClick={onClick}>{children}</StyledLink>
    </NextLink>
  );
};

export default Link;

const StyledLink = styled.a`
  position: relative;
  display: block;
  width: 100%;
  cursor: pointer;
`;
