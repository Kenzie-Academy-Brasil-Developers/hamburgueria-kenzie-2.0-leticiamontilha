import styled from "styled-components";

export const Formulario = styled.form`
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;

    label {
        font-weight: 400;
        font-size: 12px;
        color: #999999;
    }

    input {
        width: 100%;
        height: 40px;
        border: 2px solid #333333;
        border-radius: 8px;
        border: 1px solid #999999;
    }

    input::placeholder {
        padding: 10px;
        color: #999999;
    }
    
    a {
        text-decoration: none;
        color: #999999;
        font-weight: 400;
        font-size: 14px;
    }

    .btnLogar {
    width: 100%;
    height: 40px;
    background: #219653;
    border-radius: 8px;
    border: none;
    color: var(--color-white);
    font-size: 14px;
    font-weight: 500;
    }

    .btnFormCadastro {
    width: 100%;
    height: 40px;
    background: #F5F5F5;
    border-radius: 8px;
    color: #999999;
    font-size: 14px;
    font-weight: 500;
    border: none;
    }

    .btnCadastrar{
    width: 100%;
    height: 40px;
    background: #F5F5F5;
    border-radius: 8px;
    color: #999999;
    font-size: 14px;
    font-weight: 500;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    }

    .btnCadastrar:hover {
        background-color: var(--color-grey-100);
        color: #999999;
    }

`

export const ErrorMessage = styled.p`
font-size: 12px;
font-weight: 600;
color: red;
`