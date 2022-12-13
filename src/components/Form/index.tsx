import { Link } from "react-router-dom"
import { Formulario } from "./style"

export const FormLogin = () => {
    return (
        <Formulario>
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Email" />

            <label htmlFor="">Senha</label>
            <input type="text" placeholder="Senha" />

            <button className="btnLogar">Logar</button>

            <Link to="/Register">Crie sua conta para saborear muitas delícias e matar sua fome!</Link>

            <Link to="/Register" className="btnCadastrar">Cadastrar</Link>
        </Formulario>
    )
}

export const FormRegister = () => {
    return (
        <Formulario>
            <label htmlFor="">Nome</label>
            <input type="text" placeholder="Digite seu nome" />

            <label htmlFor="">Email</label>
            <input type="email" placeholder="Digite seu email" />

            <label htmlFor="">Senha</label>
            <input type="password" placeholder="Digite sua senha" />

            <label htmlFor="">Confirmar Senha</label>
            <input type="password" placeholder="Confirmar senha" />

            <button className="btnFormCadastro" type="submit">Cadastrar</button>
        </Formulario>
    )
}