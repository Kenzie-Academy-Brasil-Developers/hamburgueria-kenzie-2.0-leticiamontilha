import { useContext } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { Link } from "react-router-dom"
import { UserContext } from "../../context/UserContext/UserContext";
import { LoginSchema } from "../../pages/Login/LoginSchema";
import { ErrorMessage, Formulario } from "./style"
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../pages/Register/RegisterSchema";


export interface iLoginFormValues{
    email: string;
    password: string;
}

export const FormLogin = () => {

    const { userLogin } = useContext(UserContext)

    const { register, handleSubmit, reset, formState: {errors} } = useForm<iLoginFormValues>({
        mode: "onBlur",
        resolver: yupResolver(LoginSchema)
    });

    const submit: SubmitHandler<iLoginFormValues> = async (data: iLoginFormValues) => {
        await userLogin(data)
        reset()

    }

    return (
        <Formulario noValidate onSubmit={handleSubmit(submit)}>
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Email" {...register("email")} />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

            <label htmlFor="">Senha</label>
            <input type="password" placeholder="Senha" {...register("password")} />
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

            <button className="btnLogar">Logar</button>

            <Link to="/Register">Crie sua conta para saborear muitas delícias e matar sua fome!</Link>

            <Link to="/Register" className="btnCadastrar">Cadastrar</Link>
        </Formulario>
    )
}


export interface iRegisterFormValues{
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
}

export const FormRegister = () => {

    const { userRegister } = useContext(UserContext)
    const { register, handleSubmit, reset, formState: {errors} } = useForm<iRegisterFormValues>({
        mode: "onBlur",
        resolver: yupResolver(RegisterSchema)
    });

    const submit: SubmitHandler<iRegisterFormValues> = async (data: iRegisterFormValues) => {
        const newUser = {
            name: data.name,
            email: data.email,
            password: data.password
        }

        console.log(newUser)
        await userRegister(newUser)
        reset()

    }

    return (
        <Formulario noValidate onSubmit={handleSubmit(submit)}>
            <label htmlFor="">Nome</label>
            <input type="text" placeholder="Digite seu nome" {...register("name")}/>
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

            <label htmlFor="">Email</label>
            <input type="email" placeholder="Digite seu email" {...register("email")} />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

            <label htmlFor="">Senha</label>
            <input type="password" placeholder="Digite sua senha"  {...register("password")} />
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

            <label htmlFor="">Confirmar Senha</label>
            <input type="password" placeholder="Confirmar senha" {...register("confirmPassword")} />
            {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}

            <button className="btnFormCadastro" type="submit">Cadastrar</button>
        </Formulario>
    )
}