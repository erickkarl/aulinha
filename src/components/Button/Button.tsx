import ButtonIcon from "../../assets/svgs/ButtonIcon.svg";
import {
  ButtonFont,
  ButtonFont2,
  PrimaryButton,
  SecondaryButton1,
  SecondaryButton2,
} from "./styles";

export interface ButtonProps {
  onClick: () => void;
  variant?: "primary" | "secondary1" | "secondary2";
  text: string;
}

const Button = ({ variant = "primary", text, onClick }: ButtonProps) => {
  if (variant === "primary") {
    return (
      <PrimaryButton onClick={onClick}>
        <img src={ButtonIcon} />
        <ButtonFont>{text}</ButtonFont>
      </PrimaryButton>
    );
  } else if (variant === "secondary1") {
    return (
      <SecondaryButton1 onClick={onClick}>
        <ButtonFont2>{text}</ButtonFont2>
      </SecondaryButton1>
    );
  } else {
    return (
      <SecondaryButton2 onClick={onClick}>
        <ButtonFont>{text}</ButtonFont>
      </SecondaryButton2>
    );
  }
};

export default Button;
