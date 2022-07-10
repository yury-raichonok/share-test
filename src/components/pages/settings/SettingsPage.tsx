import { ReactElement } from "react";
import { PageStyled } from "../PageStyled";
import { ISettingsPageProps } from "./types";

export function SettingsPage(props: ISettingsPageProps): ReactElement {
  return (
    <PageStyled>
      Settings
    </PageStyled>
  );
}