import styled from "styled-components";

export const SectionEsqStyle = styled.section`

    width: 80vw;
    max-width: 300px;

    display: flex;
    flex-direction: column;
    align-items: cente;
    justify-content: center;

    .logo {
      width: 243.43px;
      height: 35.4px;
    }

    @media (min-width: 900px) {
        height: 80vh;
    }
  

    p {
        font-weight: 400;
        font-size: 14px;
        color: var(--color-grey-300);
        
    }

    span {
        color: var(--color-black);
        font-weight: bold;
    }

   div {
    display: flex;
    align-items: center;
    border: 2px solid var(--color-grey-0);
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    padding: 10px;
    gap: 10px;
    margin-top: 10px;
  }

  @media (min-width: 900px) {
    div {
        max-width: 350px;
    }
    
  }

   div > div {
    background-color: red;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: rgba(39, 174, 96, 0.1);
  };

`

export const SectionDirStyle = styled.section`
  width: 80vw;
  max-width: 300px;
  height: max-content;
  padding: 15px;

  @media (min-width: 900px) {
    height: 70vh;
  }

  background: #FFFFFF;
  border: 2px solid #F5F5F5;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: 700;
    font-size: 18px;
  }
`