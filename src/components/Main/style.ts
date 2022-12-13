import styled from "styled-components";

export const MainStyle = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 25px;
  
  @media (min-width: 900px) {
    width: 1200px;
    flex-direction: row;
    gap: 80px;
  }

`

