import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iLoginFormValues, iRegisterFormValues } from "../../components/Form";
import api from "../../services/api";
import { iRegisterApiResponse, iUserApiResponse, iUserContextProps, iValueContext } from "./types";


export const UserContext = createContext<iValueContext>({} as iValueContext);

export const UserProvider = ({children}: iUserContextProps) => {

    const [ user, setUser ] = useState<iUserApiResponse | {}>({})

    const navigate = useNavigate()

    const userLogin = async (formData : iLoginFormValues) => {

        try {
            const response = await api.post<iUserApiResponse>("/login ", formData);
            const token = response.data.accessToken
            const usuarioLogado = response.data.user

            toast.success("Login realizado com sucesso!")

            setUser(usuarioLogado)
            
            localStorage.clear()
            localStorage.setItem("@TOKEN:", token)

            navigate("/Home")

        } catch (error) {
            console.log(error)
            toast.error("Usuário e/ou senha inválidos")
        }

    }

    const userRegister = async (formData: iRegisterFormValues) => {
      
        try {
            await api.post<iRegisterApiResponse>("/users", formData);
            
            toast.success("Cadastro realizado com sucesso!")
            navigate("/")
            
        } catch (error) {
            toast.error("O cadastro não pode ser realizado, tente novamente")
            console.log(error)
        } 
    }

    return (
        <UserContext.Provider value={{ userLogin, userRegister }}>
            {children}
        </UserContext.Provider>
    )
}