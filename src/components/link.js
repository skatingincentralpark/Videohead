import { default as NextLink } from "next/link";
import styled from "@emotion/styled";

const Link = ({ children, href, onClick, ...rest }) => {
  return (
    <NextLink href={href} scroll={false}>
      <StyledLink onClick={onClick} {...rest}>
        {children}
      </StyledLink>
    </NextLink>
  );
};

export default Link;

const StyledLink = styled.a`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
`;
