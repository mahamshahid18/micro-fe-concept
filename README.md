# Micro-Frontend POC with Single-SPA

This is a simple project which is built to test out the concept of having multiple Micro-Frontend apps co-existing. This demo/POC has been built with the [single-spa](https://single-spa.js.org/) framework (which makes it easier to have multiple micro-apps - built with different JS frameworks - work together well).

# Project Architecture

The project consists of several micro-apps, and also a consumer app (which renders everything). There are multiple routes on which different micro-apps become active. Some micro-apps have their internal local state. There is also a message passing mechanism implemented to enable communication between:

- The consumer app and micro-apps
- Different micro-apps

## The Consumer App

The consumer app is the main project itself. This is denoted by the `index.html` file. 

### Structure of `index.html` file

This file defines two parts. The first part is a global button (with blue background) which is visible globally as part of the app. The second part is containers for different micro-apps to be rendered inside. This can be be better defined as one part is some global functionality of the consumer that is always required and the 2nd part is the template for micro-apps to be rendered depending on different routes.

The consumer app is denoted by blue color:

![Consumer App](docs/consumer.png)

## App Routes

## The Micro-Apps

## App Communication

### Between consumer & micro-app

### Between different micro-apps


- Consumer
- Routes
- Micro-Apps (overview)
    - explanation of each route and what app it triggers
- Explanation of structuring of each micro-app
- Communication between consumer & micro-app
- Communication between micro-apps