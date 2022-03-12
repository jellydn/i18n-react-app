import React, { useContext } from 'react';

import { I18nContext } from './i18n/i18n-react';

export function Hello() {
    const { LL } = useContext(I18nContext);
    return (
        <p>
            {LL.Hello({
                name: 'Vite + React!',
            })}{' '}
        </p>
    );
}
