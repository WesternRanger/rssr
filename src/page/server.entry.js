import React from 'react';
import { renderToString } from 'react-dom/server';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import Home from './home/index';
import About from './about/index';
import NoMatch from './noMatch/index';

function Root(req) {
  const { path } = req || {};
  let CompName = Home;
  switch(path) {
    case '/':
    case '/home':
      CompName = Home;
      break;
    case '/about':
      CompName = About;
      break;
    case '/noMatch':
      CompName = NoMatch;
      break;
  }
  const css = new Set() // CSS for all rendered React components
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()));
  const body = renderToString(
    <StyleContext.Provider value={{ insertCss }}>
      <CompName/>
    </StyleContext.Provider>
  );
  const html = `<!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RRv6</title>
        <style type="text/css">${[...css].join('')}</style>
      </head>
      <body><div id="app">${body}</div></body>
      <script src="/static/${path === '/' ? 'home' : path}.js"></script>
    </html>`;
  return html;
}
export default Root;