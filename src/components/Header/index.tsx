import { StyledHeader } from "./style"
import logo from "../../assets/img/logo.svg"
import logoutIcon from "../../assets/img/logout_icon.svg"
import cartIcon from "../../assets/img/cart_icon.svg"
import { BiSearchAlt } from "react-icons/bi"

export const Header = () => {
    return (
        <StyledHeader>
            <img src={logo} alt="Logo Hamburgueria" />
           <div>
                <form>
                    <input type="text" placeholder="Digitar Pesquisa"/>
                    <button type="submit"><BiSearchAlt/></button>
                </form>
                <div>
                    <button><img src={cartIcon} alt="carrinho de compras" /></button>
                    <button><img src={logoutIcon} alt="logout" /></button>
                </div>
            </div>
        </StyledHeader>
    )
}

