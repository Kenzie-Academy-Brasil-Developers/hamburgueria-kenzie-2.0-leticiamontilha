import { createContext, useEffect, useState } from "react";
import api from "../../services/api";
import { iCartContextProps, iCartProducts, iValueContext } from "./types";

export const CartContext = createContext<iValueContext>({} as iValueContext);

export interface iProductsApiResponse {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
  }


export const CartProvider = ({children}: iCartContextProps) => {

    const [isModalCart, setIsModalCart ] = useState(false);
    const [listProducts, setListProducts] = useState<iProductsApiResponse[]>([]);
    const [cartItens, setCartItens] = useState<iCartProducts[]>([]);

    const tokenUser = localStorage.getItem("@TOKEN:")

    useEffect(() => {
       async function getProducts () {
            try {
                api.defaults.headers.common.authorization = `Bearer ${tokenUser}`;
                const response = await api.get<iProductsApiResponse[]>("/products")

                setListProducts(response.data)
                
            } catch (error) {
                console.log(error)
            }
        }

        getProducts()

    }, [])


    return (
        <CartContext.Provider value={{ isModalCart, setIsModalCart, listProducts, setListProducts, cartItens, setCartItens }}>
            {children}
        </CartContext.Provider>
    )
}