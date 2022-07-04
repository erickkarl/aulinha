import Button from "../../components/Button/Button";
import { ContainerDiv, HeaderDiv, HeaderText, SubHeaderDiv } from "./styles";
import Logo from "../../assets/svgs/Logo.svg";
import ImageCard from "./components/ImageCard/ImageCard";
import Manage from "../../assets/images/manage/image-manage-preview-1.jpg";
import Bookmark from "../../assets/images/bookmark/image-bookmark-preview-1.jpg";

const Porfolio = () => {
  return (
    <ContainerDiv>
      <ImageCard
        image={Manage}
        position="right"
        text="Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais."
        title="Manage"
        buttonText="VER PROJETO"
        onClick={() => {
          console.log("clicou no botao");
        }}
      />
      <ImageCard
        image={Bookmark}
        position="left"
        text="Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como a área de Features."
        title="Bookmark"
        buttonText="VER PROJETO"
        onClick={() => {
          console.log("clicou no botao");
        }}
      />
      <ImageCard
        image={Manage}
        position="right"
        text="Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais."
        title="Manage"
        buttonText="VER PROJETO"
        onClick={() => {
          console.log("clicou no botao");
        }}
      />
    </ContainerDiv>
  );
};

export default Porfolio;
