import styled from "styled-components";
import { theme } from "../../theme";

export const ContainerDiv = styled.div`
  padding: 64px 108px 0px 165px;
`;

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderText = styled.span<{ selected: boolean }>`
  cursor: pointer;
  color: ${({ selected }) =>
    selected === true ? theme.colors.sdc : theme.colors.gDarkBlue};
  font-family: Public Sans;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

export const SubHeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 42px;
`;
