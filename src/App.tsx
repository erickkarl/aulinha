import { useEffect, useState } from "react";
import { BodyDiv, Button, Card, ContainerDiv, HeaderDiv } from "./styles";
import logo from "./assets/images/albiolas.png";
import foto from "./assets/images/imagemwtf.jpg";
const App = () => {
  return (
    <ContainerDiv>
      <img src={logo} width="200px" style={{ alignSelf: "center" }} />
      <HeaderDiv>
        <Button>Principal</Button>
        <Button>Sobre</Button>
        <Button>Registrar</Button>
        <Button>Mundo</Button>
        <Button>Downloads</Button>
        <Button>nome1</Button>
        <Button>nome2</Button>
      </HeaderDiv>
      <BodyDiv>
        <Card style={{ width: "200px" }}>
          <h1>Noticias:</h1>
          <p>
            chupa cabra foi avistado hoje 14:00 na cidade de joi caerleon
            passando pelo australopithecus austriaco
          </p>
        </Card>
        <Card style={{ flex: 1 }}>
          <img src={foto} width="100px" />
          <p>CHUPA CABRA AVISTADO NA CIDADE DE JOI CAERLEON</p>
        </Card>
      </BodyDiv>
    </ContainerDiv>
  );
};

export default App;
