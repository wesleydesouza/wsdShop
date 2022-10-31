import { IoMdNotifications, IoMdCart } from "react-icons/io"
import { Button } from "../Button";

import { Search } from "../Search";
import * as S from "./style";


//rafc
export const Header = () => {
  
  return (
    <S.HeaderContainer>
        <S.LogoContainer>
            <strong>WSD<span>Shop</span></strong>
        </S.LogoContainer>

        <S.SearchContainer>
            <Search/>
        </S.SearchContainer>

        <S.NavContainer>
          <a><Button radius="50%" icon={<IoMdNotifications />}/></a>
          <a><Button radius="50%" icon={<IoMdCart />}/></a>
        </S.NavContainer>
    </S.HeaderContainer>
  );
};
