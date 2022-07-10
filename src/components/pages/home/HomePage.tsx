import { ReactElement } from "react";
import { Megamenu } from "../../megamenu/Megamenu";
import { PageStyled } from "../PageStyled";
import { IHomePageProps } from "./types";

export function HomePage(props: IHomePageProps): ReactElement {
  return (
    <PageStyled>
      Home
      <Megamenu />
    </PageStyled>
  );
}