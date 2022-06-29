import Button from "../../../../components/Button/Button";
import { ContainerDiv, Text, TextDiv, Title } from "./styles";

export interface ImageCardProps {
  image: string;
  onClick: () => void;
  position?: "left" | "right";
  text: string;
  title: string;
  buttonText: string;
}

const ImageCard = ({
  image,
  position = "left",
  text,
  onClick,
  title,
  buttonText,
}: ImageCardProps) => {
  return (
    <ContainerDiv>
      {position === "left" && (
        <img src={image} style={{ flex: 1, width: "50%" }} />
      )}
      <TextDiv style={{ flex: 1 }}>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Button
          variant="secondary1"
          text={buttonText}
          onClick={onClick}
        ></Button>
      </TextDiv>
      {position === "right" && (
        <img src={image} style={{ flex: 1, width: "50%" }} />
      )}
    </ContainerDiv>
  );
};

export default ImageCard;
