import styled from "styled-components";
import { theme } from "../../../../theme";

export const ContainerDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 500;
`;

export const TextDiv = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.p`
  font-size: ${theme.fonts.h2.size};
  font-family: ${theme.fonts.h2.fontFamily};
  line-height: ${theme.fonts.h2.lineHeight};
  font-style: ${theme.fonts.h2.fontStyle};
`;

export const Text = styled.p`
  font-size: ${theme.fonts.body.size};
  font-family: ${theme.fonts.body.fontFamily};
  line-height: ${theme.fonts.body.lineHeight};
  font-style: ${theme.fonts.body.fontStyle};
`;
