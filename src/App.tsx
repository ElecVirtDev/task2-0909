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

import DVDList from "./data/DVDList";
import DGBLCListGET from "./data/DGBLCListGET";
import DGBLCListNEED from "./data/DGBLCListNEED";

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
      list={DVDList}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="대구광역시 북구_지방세 징수 현황_20241231"
      list={DGBLCListGET}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="대구광역시 북구_지방세 체납 현황_20241231"
      list={DGBLCListNEED}
      edit={EditGuesser}
      show={ShowGuesser}
    />
  </Admin>
);
