import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: ${(props) => `1px solid ${props.theme.colors.gray500}`};
`;

export const LogoContainer = styled.div`
  strong {
    font-size: 24px;
    color: ${(props) => props.theme.colors.gray300}
  }
  span {
    color: ${(props) => props.theme.colors.blue500};
  }
`;

export const SearchContainer = styled.div``;

export const NavContainer = styled.div`
    width: 100px;

    display: flex;
    justify-content: space-evenly;

`;
