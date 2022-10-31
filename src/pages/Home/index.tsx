import { useEffect, useState } from "react";

import { api } from "../../services/api";
import { ProductInterface } from "../../utils/Types/ProductInterface";
import { Header } from "../../components/Header";
import * as S from "./style";

export const Home = () =>  {const [productsList, setProductsList] = useState<ProductInterface[]>()
const [skip, setSkip] = useState(0);
const limit = 20;

// useEffect(() => {
//   api.get(`products`, {
//     params: {
//       skip,
//       limit
//     }
//   }).then(response => setProductsList(current => !current ? [...response.data.products] : [...current, ...response.data.products]))
// }, [skip])

return(
  <S.Wrapper>
    <Header/>
    {productsList?.map(product => (
      <div key={product.id}>
        <ul>
          <li>{product.title}</li>
        </ul>
      </div>
    ))}
    <button onClick={() => setSkip(current => current + 20)}>More itens</button>
    </S.Wrapper>
)}