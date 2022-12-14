import styled from "styled-components";

export const StyledHeader = styled.header`
display: flex;
flex-direction: column;
align-items: center;
padding: 25px;

background-color: var(--color-grey-100);


@media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    
}

div {
    display: flex;
    gap: 15px;
    align-items: center;
}
    

`