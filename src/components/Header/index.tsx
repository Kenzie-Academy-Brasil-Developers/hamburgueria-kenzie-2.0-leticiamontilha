import { StyledHeader } from "./style"
import logo from "../../assets/img/logo.svg"
import { FiLogOut } from "react-icons/fi"
import { BiSearchAlt } from "react-icons/bi"
import { BsCart4 } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext/UserContext"
import { CartModal } from "../Modal"
import { CartContext } from "../../context/CartContext/CartContext"

export const Header = () => {

    const { setUser } = useContext(UserContext)
    const { isModalCart, setIsModalCart, cartItens} = useContext(CartContext)
    
    const navigate = useNavigate()

    const logout = () => {
        setUser(null)
        localStorage.clear()
        navigate("/")
    }


    return (
        <StyledHeader>
            <img src={logo} alt="Logo Hamburgueria" />
           <div>
                <form >
                    <input type="text" placeholder="Digitar Pesquisa"/>
                    <button type="submit"><BiSearchAlt/></button>
                </form>
                <div className="divIcons">
                    <div className="cartIcon">
                        <span>{cartItens.length}</span>
                        <BsCart4 onClick={() => setIsModalCart(true)}/>
                    </div>
                    <FiLogOut onClick={logout}/>
                </div>
            </div>
            {isModalCart && <CartModal/>}
        </StyledHeader>
    )
}

