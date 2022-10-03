import { default as NextLink } from "next/link";
import styled from "@emotion/styled";

const Link = ({ children, href, onClick, ...rest }) => {
  return (
    <StyledLink onClick={onClick} {...rest}>
      <NextLink href={href} scroll={false}>
        {children}
      </NextLink>
    </StyledLink>
  );
};

export default Link;

const StyledLink = styled.a`
  position: relative;
  display: block;
  width: 100%;
  cursor: pointer;
`;
