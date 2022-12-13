import logo from "../../assets/img/logo.svg"
import bag from "../../assets/img/shopping-bag.svg"
import { MainPage } from "../../components/Main"
import { SectionDirStyle, SectionEsqStyle } from "../Login/style"
import { FormRegister } from "../../components/Form"
import { DivStyle } from "./style"
import { Link } from "react-router-dom"

export const RegisterPage = () => {
    return (
        <>
        <MainPage>
        <SectionEsqStyle>
                <img className="logo" src={logo} alt="logo hamburgueria" />
               
                <div>
                    <div>
                        <img src={bag} alt="" />
                    </div>
                    <p>A vida é como um sanduíche, é preciso recheá-la com os <span>melhores</span> ingredientes.</p>
                </div>
            </SectionEsqStyle>

            <SectionDirStyle>
                <DivStyle>
                    <h1>Cadastro</h1>
                    <Link to="/">Retornar para o login</Link>
                </DivStyle>
                <FormRegister />
            </SectionDirStyle>
        </MainPage>
        </>
    )
}