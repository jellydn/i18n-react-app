import React, { useContext } from 'react';

import { I18nContext } from './i18n/i18n-react';
import { Locales } from './i18n/i18n-types';
import { loadAllLocales } from './i18n/i18n-util.sync';

loadAllLocales();

export const LanguageSelection = () => {
    const { locale, setLocale } = useContext(I18nContext);

    const onSelectLocal = (selectedLocale: string) => {
        setLocale(selectedLocale as Locales);
    };

    return (
        <select
            onChange={(evt) => onSelectLocal(evt.target.value)}
            className="language-selection"
            defaultValue={locale}
        >
            <option value="en">English</option>
            <option value="de">Deutsch</option>
        </select>
    );
};
