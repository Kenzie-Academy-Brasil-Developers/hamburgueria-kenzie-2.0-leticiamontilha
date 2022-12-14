import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { Link } from "react-router-dom"
// import { LoginSchema } from "../../pages/Login/LoginSchema";
import { Formulario } from "./style"


interface iLoginFormValues{
    email: string;
    password: string;
}

export const FormLogin = () => {

    const { register, handleSubmit, reset, formState: {errors} } = useForm<iLoginFormValues>({
        // mode: "onBlur",
        // resolver: yupResolver(LoginSchema)
    });

    const submit: SubmitHandler<iLoginFormValues> = (data) => {

        console.log(data)
        reset()

    }



    return (
        <Formulario noValidate onSubmit={handleSubmit(submit)}>
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Email" {...register("email")} />
            {/* {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>} */}

            <label htmlFor="">Senha</label>
            <input type="password" placeholder="Senha" {...register("password")} />

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