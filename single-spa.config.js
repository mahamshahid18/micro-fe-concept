import { registerApplication, start } from 'single-spa'

registerApplication(
  'navbar',
  () => import('./src/navbar/navbar.app.js'),
  () => true
)

registerApplication(
  'home',
  () => import('./src/home/home.app.js'),
  () => location.pathname === "" || location.pathname === "/"
)

registerApplication(
  'vue', 
  () => import('./src/vue/vue.app.js'),
  () => location.pathname.indexOf('/vue') === 0 ? true : false
);

registerApplication(
  'react',
  () => import('./src/react/main.app.js'),
  () => location.pathname.indexOf('/react') === 0  ? true : false
);

registerApplication(
  'tasks-react',
  () => import('./src/react/main.app.js'),
  () => location.pathname.indexOf('/tasksComm') === 0  ? true : false
);

registerApplication(
  'tasks-react2',
  () => import('./src/home/home.app.js'),
  () => location.pathname.indexOf('/tasksComm') === 0  ? true : false
);

start();
