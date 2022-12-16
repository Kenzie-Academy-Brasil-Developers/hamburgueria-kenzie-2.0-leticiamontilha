import { Dispatch, SetStateAction } from "react";
import { iProductsApiResponse } from "./CartContext";


export interface iCartContextProps{
    children: React.ReactNode;
}

export interface iCartProducts{
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
}

export interface iValueContext{
    isModalCart: boolean;
    setIsModalCart: Dispatch<SetStateAction<boolean>>;
    listProducts: iProductsApiResponse[];
    setListProducts: React.Dispatch<React.SetStateAction<iProductsApiResponse[]>>;
    cartItens:  iCartProducts[];
    setCartItens: React.Dispatch<React.SetStateAction<iCartProducts[]>>;
    allProducts: iProductsApiResponse[];
    setAllProducts: React.Dispatch<React.SetStateAction<iProductsApiResponse[]>>;
}
