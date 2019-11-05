import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

import { App } from './root.component.js';
import { messageHandler } from './event-handler';

function domElementGetter() {
  return document.getElementById('reacttasks')
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter,
})

export function bootstrap() {
  window.addEventListener('message', messageHandler);
  return Promise.resolve();
}

export function unmount() {
  window.removeEventListener('message');
  return Promise.resolve();
}

export const mount = [
  reactLifecycles.mount,
];
