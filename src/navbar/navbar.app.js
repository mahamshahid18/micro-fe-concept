import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import { Navbar } from './navbar.component';

function domElementGetter() {
  return document.getElementById('navbar')
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Navbar,
  domElementGetter,
})

export const bootstrap = [
  reactLifecycles.bootstrap,
];

export const mount = [
  reactLifecycles.mount,
];

export const unmount = [
  reactLifecycles.unmount,
];
