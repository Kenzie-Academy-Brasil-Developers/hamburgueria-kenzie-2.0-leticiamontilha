import { useContext } from "react"
import { CartContext } from "../../context/CartContext/CartContext"

export const TotalCart = () => {

    const { cartItens } = useContext(CartContext)

    let somaValores = cartItens.reduce((valorAnterior, valorAtual) => {
        
        return valorAnterior + (valorAtual.price)
    }, 0)
    
    return(
        <div>
            <p>Total</p>
            <p className="ValueTotal">R$ {Number(somaValores).toFixed(2)}</p>
        </div>
    )
}