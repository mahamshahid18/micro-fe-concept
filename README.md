# Micro-Frontend POC with Single-SPA

This is a simple project which is built to test out the concept of having multiple Micro-Frontend apps co-existing. This demo/POC has been built with the [single-spa](https://single-spa.js.org/) framework (which makes it easier to have multiple micro-apps - built with different JS frameworks - work together well).

# Project Architecture

The project consists of several micro-apps, and also a consumer app (which renders everything). There are multiple routes on which different micro-apps become active. Some micro-apps have their internal local state. There is also a message passing mechanism implemented to enable communication between:

- The consumer app and micro-apps
- Different micro-apps

Each micro-app needs to first be registered with single-spa in the config file. For this, we need the name of the app, a loading function and an activity function.

After registering applications, we need to implement a starter point for each application. This file usually calls the framework specific wrapper for our application (such as `singleSpaReact` for React) and passes in some information such as the reference to the DOM element where the app needs to be rendered in, and the root component of the application. Furthermore, it also exports 3 functions which all apps need to implement: 

- Bootstrap
- Mount
- Unmount

These 3 functions can have any implementation within them according to the scenario we require. However, single-spa expects these functions to return a Promise so that it knows when the function has finished and it can perform further executions.

Code for registration of application can be be found in the [single-spa.config.js](single-spa.config.js) file. Whereas, starter files for each app can be found in their directories. For example, for the React Tasks App, it can be found in the [main.app.js](src/react/main.app.js) file.

## The Consumer App

The consumer app is the main project itself. This is denoted by the `index.html` file. 

### Structure of `index.html` file

This file defines two parts. The first part is a global button (with blue background) which is visible globally as part of the app. The second part is containers for different micro-apps to be rendered inside. This can be be better defined as one part is some global functionality of the consumer that is always required and the 2nd part is the template for micro-apps to be rendered depending on different routes.

The consumer app is denoted by blue color:

![Consumer App](docs/consumer.png)

The consumer app can communicate with the `React Tasks App` but this only works when the `React Tasks App` is active.

## App Routes

The app has the following routes:

- / (root)
- /react
- /vue
- /tasksComm

Each route renders a different micro-app. The `/tasksComm` route renders 2 micro-apps together.

The app-level routing is handled by `single-spa`. However, we need to supply a method to tell single-spa when each app needs to be rendered. We can choose to use simple `location` API of the browser for this (like it is used in this project), or use a more complex solution for this if required.

Routing logic can be viewed in the [Single-Spa config file](single-spa.config.js).

## The Micro-Apps

This project is composed of 4 micro-apps

- Navbar App (left side navigation)
- Home App
- Tasks App
- Vue App

All 3 apps other than Vue App are built with React

### Navbar

- Technology used: React
- Which route is it active on: `*`
- Which container does it use: div with id `navbar`

![Navbar App](docs/navbar.png)

### Home

- Technology used: React
- Which route is it active on: `/`, `tasksComm`
- Which container does it use: div with id `home`

![Home App](docs/home.png)

This application does not have its own state, but has a way to communicate with the Tasks App. But this is only possible when the Tasks app is also active. More on this in the [App Communication section](#AppCommunication)

### Tasks

- Technology used: React
- Which route is it active on: `/react`, `/tasksComm`
- Which container does it use: div with id `reacttasks`

![Tasks App](docs/tasks.png)

This application has a local state as well. This is implemented using `Redux`

### Vue

- Technology used: Vue
- Which route is it active on: `/vue`
- Which container does it use: div with id `vue`

![Vue App](docs/vue.png)

## App Communication

### Between consumer & micro-app

### Between different micro-apps