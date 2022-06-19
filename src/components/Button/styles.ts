import styled from "styled-components";
import { theme } from "../../theme";

export const PrimaryButton = styled.button`
  padding: 0;
  border: 0;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.darkBlue};
  cursor: pointer;
  :hover {
    background-color: ${theme.colors.sdc};
  }
`;

export const SecondaryButton1 = styled.button`
  padding: 0;
  border: 0;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: ${theme.colors.gDarkBlue};
  border: 1px solid ${theme.colors.gDarkBlue};
  cursor: pointer;
  :hover {
    background-color: ${theme.colors.gDarkBlue};
    color: white;
  }
`;

export const SecondaryButton2 = styled.button`
  padding: 0;
  border: 0;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.darkBlue};
  cursor: pointer;
  :hover {
    background-color: ${theme.colors.sdc};
  }
`;

export const ButtonFont = styled.span`
  font-family: Public Sans;
  font-weight: 100;
  font-size: 24px;
  color: white;
  margin-right: 20px;
  margin-left: 20px;
`;

export const ButtonFont2 = styled.span`
  font-family: Public Sans;
  font-weight: 100;
  font-size: 24px;
  margin-right: 20px;
  margin-left: 20px;
`;
