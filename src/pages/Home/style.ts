import styled from "styled-components";

export const Ulstyle = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;

    width: 90%;

    @media (min-width: 765px) {
        flex-direction: row;
    
    }
`