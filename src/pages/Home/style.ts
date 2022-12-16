import styled from "styled-components";

export const Ulstyle = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    width: 90%;
    flex-wrap: wrap;

    @media (min-width: 700px) {
        flex-direction: row;
    
    }

    li {
        display: flex;
        flex-direction: column;
        width: 200px;
        height: 300px;
        border: 2px solid #27AE60;
        border-radius: 5px;
    }
    
    .divImg {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #F5F5F5;
        margin-bottom: 10px;
    }

    .divImg > img {
        width: 60%;
    }

    .divDescription{
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .divDescription > h4 {
        font-weight: 700;
        font-size: 18px;
        color: #333333;
    }

    .divDescription > p {
        font-weight: 400;
        font-size: 12px;
        color: #828282;
    }

    .divDescription > span {
        font-weight: 600;
        font-size: 14px;
        color: #27AE60;

    }

    .divDescription > button {
        width: 106px;
        height: 40px;
        background: #BDBDBD;
        border: 2px solid #BDBDBD;
        border-radius: 8px;
        padding: 5px;
        color: #FFFFFF;

        &:hover{
            background: #27AE60;
            border: 2px solid #27AE60;
            border-radius: 8px;
        }

    }

    
`