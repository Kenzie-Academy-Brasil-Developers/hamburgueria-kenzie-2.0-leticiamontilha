import { useContext } from "react"
import { CartContext } from "../../context/CartContext/CartContext"
import { BackgroundModal, LiCard, UlCartList } from "./style"
import { BiTrashAlt } from "react-icons/bi"
import { TotalCart } from "../TotalCart"
import { ValorTotal } from "../TotalCart/style"


export const CartModal = () => {
    const { setIsModalCart, cartItens, setCartItens } = useContext(CartContext)

    const RemoveCard = (id: number) => {
     
        let filtro = cartItens.filter(elem => elem.id !== id)

           setCartItens(filtro)
       
   }


    return(
        <BackgroundModal>
            <div className="modal">
                <div className="headerModal">
                    <h3>Carrinho de compras</h3>
                    <button onClick={() => setIsModalCart(false)}>X</button>
                </div>
                <UlCartList> 
                { cartItens.length === 0 ? (
                    <div>
                        <h5>Sua sacola está vazia</h5>
                        <p>Adicione itens</p>
                    </div>
                    ) : (
                        <>
                            {
                            cartItens.map(el => {
                                return (
                                    <LiCard key={el.id}>
                                        <img src={el.img}alt="" />
                                            <h6>{el.name}</h6>
                                            <p>{el.category}</p>
                                            <BiTrashAlt  onClick={() => RemoveCard(el.id)}/>
                                    </LiCard>
                                )
                            })
                            }
                        </>
                    )}
                </UlCartList>
            </div>
            { cartItens.length !== 0 ? (<ValorTotal> <TotalCart/> <button onClick={() => setCartItens([])}>Remover Todos</button> </ValorTotal>):(<></>)}
        </BackgroundModal>
    )
}