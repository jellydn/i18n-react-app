import React, { useContext } from "react";
import { I18nContext } from "./i18n/i18n-react";
import { Locales } from "./i18n/i18n-types";

export const LanguageSelection = () => {
  const { locale, isLoadingLocale, setLocale } = useContext(I18nContext);

  if (isLoadingLocale) {
    return <div>loading...</div>;
  }

  return (
    <select
      onChange={(evt) => setLocale(evt.target.value as Locales)}
      className="language-selection"
      defaultValue={locale}
    >
      <option value="en">English</option>
      <option value="de">Deutsch</option>
    </select>
  );
};
