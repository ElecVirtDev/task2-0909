import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  radiantLightTheme,
  radiantDarkTheme,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import koreanMessages from "./ra-language-korean.ts";
import polyglotI18nProvider from "ra-i18n-polyglot";

const messages = {
  ko: koreanMessages,
};
const i18nProvider = polyglotI18nProvider((locale) => messages[locale], "ko");

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
    locale="ko"
    i18nProvider={i18nProvider}
    theme={radiantLightTheme}
    darkTheme={radiantDarkTheme}
  >
    <Resource
      name="경기도 성남시 성남 미디어센터 DVD 정보 (2025/05/29)"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
  </Admin>
);
