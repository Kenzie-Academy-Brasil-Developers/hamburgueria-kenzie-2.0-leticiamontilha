import styled from "styled-components";

export const BackgroundModal = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.50);

display: flex;
flex-direction:column;
justify-content: center;

.modal {
    background-color: var(--color-white);
    width: 80%;
    max-width: 400px;
    height: 300px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
}

.headerModal {
    background-color: #27AE60;
    width: 100%;
    max-width: 400px;
    height: 40px;
    display: flex;
    justify-content:space-between;
    padding: 10px;
    border-radius: 8px;
    color: var(--color-white);
    font-size: 12px;

    button {
        background: transparent;
        border: transparent;
        color: var(--color-white);
        font-weight: bold;
    }
}
`

export const UlCartList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    div {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
`


export const LiCard = styled.li`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #F5F5F5;
    border-radius: 8px;
    padding: 5px;

    img {
        width: 40px;
    }

    h6, p{
        font-size: 12px;
    }

    button {
        background-color: transparent;
        border: none;
    }
`