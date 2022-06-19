import Button from "./components/Button/Button";
import { ContainerDiv, HeaderDiv, HeaderText, SubHeaderDiv } from "./styles";
import Logo from "./assets/svgs/Logo.svg";

const App = () => {
  return (
    <ContainerDiv>
      <HeaderDiv>
        <img src={Logo} />
        <SubHeaderDiv>
          <HeaderText>HOME</HeaderText>
          <HeaderText>PORTFOLIO</HeaderText>
          <HeaderText>CONTATO</HeaderText>
        </SubHeaderDiv>
      </HeaderDiv>
    </ContainerDiv>
  );
};

export default App;
