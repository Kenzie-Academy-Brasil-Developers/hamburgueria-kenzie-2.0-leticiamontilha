import styled from "styled-components";

export const StyledHeader = styled.header`
background-color:#F5F5F5; 
display: flex;
flex-direction: column;
align-items: center;
padding: 25px;

width: 100%;
height: 160px;


@media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    height: 100px;
    
}

div {
    display: flex;
    gap: 15px;
    align-items: center;
}

.divIcons {
    display: flex;
}

form {
    width: 80%;
    border: 1px solid var(--color-grey-100);
    border-radius: 8px;
    background-color: var(--color-white);
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

@media (min-width: 900px) {
    form {
        width: 365px;
    }
    
}

form > button {
    width: 53px;
    height: 40px;       
    background: #27AE60;
    border: 2px solid #27AE60;
    border-radius: 8px;
    color: var(--color-white);
}

input {
    width: 80%;
    border: none;
    height: 40px;
    outline: none;
}

.cartIcon{
    display: flex;
    flex-direction: column;
    border: 1px solid var(--color-grey-100);
    position: relative;
}

span {
    background: #27AE60;
    width: 20px;
    height: 20px;
    color: var(--color-white);
    font-weight: bold;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

    position: absolute;
    top: -17px;
    right: -8px;
}
    

`