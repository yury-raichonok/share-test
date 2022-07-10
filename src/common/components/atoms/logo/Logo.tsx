import { ReactElement } from "react";
import { ILogoProps } from "./types";
import { LogoStyled } from "./LogoStyled";

export function Logo(props: ILogoProps): ReactElement {
  return (
    <LogoStyled>
      Logo
    </LogoStyled>
  );
}