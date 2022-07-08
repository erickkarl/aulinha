import Button from "../../components/Button/Button";
import { ContainerDiv, HeaderDiv, HeaderText, SubHeaderDiv } from "./styles";
import Logo from "../../assets/svgs/Logo.svg";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectNumero } from "../../redux/auth/authSelectors";
import { decrement, increment } from "../../redux/auth/auth";

const Home = () => {
  const numero = useSelector(selectNumero);
  const dispatch = useDispatch();

  return (
    <ContainerDiv>
      <HeaderText>{`${numero}`}</HeaderText>
      <Button
        text={"Aumentar"}
        onClick={() => {
          dispatch(increment());
        }}
      />
      <Button
        text={"Diminuir"}
        onClick={() => {
          dispatch(decrement());
        }}
      />
      <Outlet />
    </ContainerDiv>
  );
};

export default Home;
