import { FiSearch } from "react-icons/fi";
import * as S from "./styles";

export const Search = () => {
  return (
    <S.SearchWrapper>
        <FiSearch color="#fff"/>
        <input type="text" placeholder="Search"/>
    </S.SearchWrapper>
  )
}
