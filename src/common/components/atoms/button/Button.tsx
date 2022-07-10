import { ReactElement } from "react";
import { IButtonProps } from "./types";
import { ButtonStyled } from "./ButtonStyled";

export function Button(props: IButtonProps): ReactElement {
  return (
    <ButtonStyled>
      {props.text}
    </ButtonStyled>
  );
}