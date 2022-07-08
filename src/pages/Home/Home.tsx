import Button from "../../components/Button/Button";
import { ContainerDiv, HeaderDiv, HeaderText, SubHeaderDiv } from "./styles";
import Logo from "../../assets/svgs/Logo.svg";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/auth";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <ContainerDiv>
      <Button
        text={"Logar"}
        onClick={() => {
          dispatch(login({ user: "erickkarl", password: "senha" }));
        }}
      />

      <Outlet />
    </ContainerDiv>
  );
};

export default Home;
