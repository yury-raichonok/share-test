import { ReactElement } from "react";
import { IMegamenuProps } from "./types";
import { MegamenuStyled } from "./MegamenuStyled";
import { Button } from "../../common/components/atoms/button/Button";

export function Megamenu(props: IMegamenuProps): ReactElement {
  return (
    <MegamenuStyled>
      Megamenu
      <Button text='Tests' onClick={() => console.log('Tests')}/>
      <Button text='Settings' onClick={() => console.log('Settings')}/>
      <Button text='Exit' onClick={() => console.log('Exit')}/>
    </MegamenuStyled>
  );
}