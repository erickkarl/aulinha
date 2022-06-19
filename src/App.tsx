import Button from "./components/Button/Button";
import { ContainerDiv } from "./styles";

const App = () => {
  return (
    <ContainerDiv>
      <Button
        text="hello you guys"
        variant="secondary2"
        onClick={() => {
          console.log("clicou no botao");
        }}
      />
    </ContainerDiv>
  );
};

export default App;
