// #region Global Imports
import path from "path";
import NextI18Next from "next-i18next";
// #endregion Global Imports

export const translations = ["en", "pt"] as const;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: translations[0],
  otherLanguages: [translations[1]],
  localePath: path.resolve("./public/static/locales"),
});

export const { appWithTranslation, withTranslation } = NextI18NextInstance;

export default NextI18NextInstance;
