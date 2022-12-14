import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
    name: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "o nome precisa de pelo menos 3 caracteres")
    .max(200, "O nome pode ter no máximo 200 caracteres"),
    email: yup.string()
    .required("O email é obrigatório")
    .email("O email digitado é inválido"),
    password: yup
    .string()
    .required("A senha é obrigatória")
    .matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula")
    .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula")
    .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número")
    .matches(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere especial")
    .min(6, "É necessário pelo menos 6 caracteres"),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Confirmação de senha deve ser igual senha")
    .required("A senha é obrigatória"),
})