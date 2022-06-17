import styled from "styled-components";
import { theme } from "./theme";

export const ContainerDiv = styled.div`
  background-color: ${theme.colors.blue1};
  padding: 50px;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 16px;
`;

export const HeaderDiv = styled.div`
  background-color: ${theme.colors.blue2};
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: 100px;
  height: 50px;
`;

export const BodyDiv = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: row;
`;

export const Card = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 7px;
  background-color: ${theme.colors.blue4};
  border: 2px solid black;
`;

export const Button = styled.button`
  border-radius: 100px;
  width: 100px;
  border: none;
  background-color: ${theme.colors.blue3};
  &:hover {
    cursor: pointer;
  }
`;
