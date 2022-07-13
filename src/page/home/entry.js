import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import StyleContext from 'isomorphic-style-loader/StyleContext';
const insertCss = (...styles) => {
    const removeCss = styles.map(style => style._insertCss())
    return () => removeCss.forEach(dispose => dispose())
}
import Home from './index';
hydrateRoot(
    document.getElementById("app"),
        <StyleContext.Provider value={{ insertCss }}>
            <Home/>
        </StyleContext.Provider>
      );
