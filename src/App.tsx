import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
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
  >
    <Resource
      name="OPENAPI 활용신청 TOP 10 (2025.08)"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="OPENAPI 활용신청 TOP 20 (2025.01~2025.08)"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="경기도 성남시 성남 미디어센터 DVD 정보 (2025/05/29)"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
  </Admin>
);
