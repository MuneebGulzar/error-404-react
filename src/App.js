import { GlobalStyle, MainContainer, Title, Image, Container, Title2, Message, Button, Footer, Link, FooterContainer } from "./Styles/Styles";
import Scarecrow from './img/Scarecrow.png';
function App() {
  return (
    <>
      <GlobalStyle />
      <Title>404 not found</Title>
      <MainContainer>
        <Image src={Scarecrow}/>
        <Container>
          <Title2>I have bad news for you</Title2>
          <Message>The page you are looking for might be removed or is temporarily unavaliable</Message>
          <Button>Back to homepage</Button>
        </Container>
      </MainContainer>
     <FooterContainer>
     <Footer><p>created by <Link href="https://github.com/MuneebGulzar" target="_blank">MuneebGulzar</Link> - devChallenges.io </p></Footer>
     </FooterContainer>
    </>
  );
}

export default App;
