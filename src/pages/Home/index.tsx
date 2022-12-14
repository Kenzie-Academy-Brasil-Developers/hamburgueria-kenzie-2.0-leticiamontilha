import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { Header } from "../../components/Header"
import { MainPage } from "../../components/Main"
import api from "../../services/api"
import { Ulstyle } from "./style"


export interface iProductsApiResponse {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
  }

export const HomePage = () => {

    const tokenUser = localStorage.getItem("@TOKEN:")
    const [listProducts, setListProducts] = useState<iProductsApiResponse[]>([])

    useEffect(() => {

       async function getProducts () {
            try {
                api.defaults.headers.common.authorization = `Bearer ${tokenUser}`;
                const response = await api.get<iProductsApiResponse[]>("/products")

                console.log(response.data)

                setListProducts(response.data)
                
            } catch (error) {

                console.log(error)
                
            }
        }

        getProducts()

    }, [])


    return (
        <>
        {tokenUser? <>
            <Header/>
            <MainPage>
                <Ulstyle>
                    {listProducts.map(product => {
                        return (
                            <li>
                            <div className="divImg">
                                <img src={product.img} alt="" />
                            </div>
                            <div className="divDescription">
                                <h4>{product.name}</h4>
                                <p>{product.category}</p>
                                <span>R$ {product.price}</span>
                                <button>Adicionar</button>
                            </div>
                        </li>
                        )
                    })}
                </Ulstyle>
            </MainPage>
        </>: <Navigate to="/" />}
        </>
    )
}