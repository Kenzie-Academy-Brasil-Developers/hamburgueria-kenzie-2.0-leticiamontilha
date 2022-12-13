import logo from "../../assets/img/logo.svg"
import bag from "../../assets/img/shopping-bag.svg"
import { FormLogin } from "../../components/Form"
import { MainPage } from "../../components/Main"
import { SectionDirStyle, SectionEsqStyle } from "./style"


export const LoginPage = () => {
    return (
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
                <h1>Login</h1>
                <FormLogin />
            </SectionDirStyle>
        </MainPage>
    )
}