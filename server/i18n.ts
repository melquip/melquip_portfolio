// #region Global Imports
import path from "path";
import NextI18Next from "next-i18next";
// #endregion Global Imports

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["pt"],
  localePath: path.resolve('./public/static/locales')
});

export const { appWithTranslation, withTranslation } = NextI18NextInstance;

export default NextI18NextInstance;
