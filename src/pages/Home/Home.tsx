import Button from "../../components/Button/Button";
import { ContainerDiv, HeaderDiv, HeaderText, SubHeaderDiv } from "./styles";
import Logo from "../../assets/svgs/Logo.svg";

const Home = () => {
  return (
    <ContainerDiv>
      <Button
        text="Oxi"
        onClick={() => {
          console.log("cliquei");
        }}
      />
    </ContainerDiv>
  );
};

export default Home;
