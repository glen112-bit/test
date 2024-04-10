import { createContext, useState } from "react";

export interface ItemInterface{
  key: number;
  name: string;
  brand: string;
  price: number;
  img: string;
  item: object;
  quantity?: number;
}
const ItemContext = createContext<ItemInterface>({} as ItemInterface);

const ItemProvider ({ children }: {children: JSX.Element }) => {
  const [state, setState] = useState({

  });

  return(
  <ItemContext.Provider value={{}}>
    <>{children}</>
  </ItemContext.Provider>
  )
}
