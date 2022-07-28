import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;

export const Title = styled.p`
    width: auto;
    height: 25px;
    font-family: monospace;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 24px;
    line-height: 25px;
    letter-spacing: -0.08em;
    margin: 25px;
    color: #333333;
`;

export const Title2 = styled.h2`
    font-family: monospace;
    font-weight: 700;
    font-size: 64px;
    line-height: 95px;
    letter-spacing: -0.035em;
    color: #333333;

    @media (max-width: 768px) {
       font-size: 48px;
       line-height: 71px;
    }
    @media  (min-width: 769px) and (max-width: 1200px){
        font-size: 48px;
    }
`;

export const Message = styled.p`
    font-family: monospace;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.035em;
    color: #4F4F4F;
    display: block;
    width: 55%;
    //text-align: justify;
    margin-block: 25px;

    @media (max-width: 768px) {
    width: 80%;
       font-size: 18px;
       line-height: 27px;
  }
  @media (min-width: 769px) {
    width: 90%;
    font-size: 20px;
    line-height: 36px;
  }
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 89vh;

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 90vh;
  }

  @media (min-width: 769px){
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 89vh;
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;

    @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 90vw;
  }
  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    width: 40%;
  }
`;

export const Button = styled.button`
    background-color: #333333;
    text-align: center;
    font-family: monospace;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.035em;
    text-transform: uppercase;
    color: #ffffff;
    padding: 15px;
    width: 30%;

       @media (max-width: 768px) {
       width: 60%;
       font-size: 14px;
       line-height: 21px;
       margin-top: 25px;
  }

  @media (min-width: 769px) {
        font-size: 14px;
        line-height: 21px;
        width: 60%;
  }
`;

export const Image = styled.img`
    width: 40%;
    margin-inline: 100px;

    @media (max-width: 768px) {
    width: 80%;
  }
  @media (min-width: 769px) {
        width: 40%;
  }
`;

export const FooterContainer = styled.div`
    position: relative;
    width: 100vw;
    bottom: 1vh;
  
    @media (max-width: 768px) {
        position: relative;
        width: 100vw;
        bottom: 1vh;
        margin-top: 10vh;
  }

  @media (min-width: 769px) {
    position: relative;
    width: 100vw;
    bottom: 1vh;
  }
`;
export const Footer = styled.footer`
    p{
        font-family: monospace;
        font-size: 14px;
        line-height: 17px;
        font-style: normal;
        font-weight: 500;
        text-align: center;
        color: #BDBDBD;
    }
        position: absolute;
        width: 100%;
        bottom: 20px;
        margin: auto;

        @media (max-width: 768px) {
        //position: absolute;
        width: 100%;
        bottom: 20px;
        margin-top: 50px;
  }

  @media (min-width: 769px) {
    width: 100vw;
    bottom: 1vh;
  }
`;

export const Link = styled.a`
    color: #BDBDBD;
    font-weight: bold;
`;