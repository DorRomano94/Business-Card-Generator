# Business Card Generator
[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://dors-business-card-generator.web.app/)
---

Live Demo: https://dors-business-card-generator.web.app
---
>Implented MERN Stack CRUD Operations with React, Node.js, MySQL and Express.


## Table of contents
* [General info](#general-info)
* [Features](#features)
* [Technologies](#technologies)
* [Setup](#setup)
* [Contact](#contact)

## General info
The 'Business Card Generator' is a web application that allows the user to create a personal or business card of their choice from several templates.
At the end of the process the user will get a personal url which will show the card he created.
You can create multiple templates.
For the client side i used 'React' with Redux for state management , and for the backend/server side i used 'ExpressJS, Database - MySQL.
The client side communicates with the server through HTTP requests. 

### Flow
1. The user views the React web app with a browser.
2. The React front end communicates with the Express back end via RESTful APIs.
3. The back-end Express application uses the MySQL database for storing and retrieving data.
4. Back-end results are communicated back to the the front end.
5. User authentication using JWT.
6. The React front-end stored the results in Redux store.
7. Front-end results are rendered in a human readable format to the user.


## Features
<br>

<b>Client Features</b>
| Feature  |  Coded?       | Description  |
|----------|:-------------:|:-------------|
| Create a User | &#10004; | Register Action|
| Login User | &#10004; | Login Action - The user must log in to create cards|
| Choose template | &#10004; | Select a card template and fill in the details that will appear on the card |
| Get URL | &#10004; | Once the card is created you will get a unique url address which will show your card |


<br>


## Technologies
Client-side | Server-side
--- | ---
react: ^17.0.1| bcryptjs: ^2.4.3
react-dom: ^17.0.1|dotenv: ^8.2.0
react-modal: ^3.11.2| express: ^4.17.1
react-chartjs-2: ^2.11.1|express: ^4.14.0
react-redux: ^7.2.2 |jsonwebtoken: ^8.5.1
react-dom: ^16.2.0 | mysql: ^2.18.1"
react-reveal: ^1.2.2| 
react-router-dom: ^5.2.0 | 
redux: ^4.0.5 |
redux-thunk: ^2.3.0 |
material-ui 4.11.4|



## Setup
---
### Demo Live: https://dors-business-card-generator.web.app/
<br>

Clone this repo to your desktop and run npm install to install all the dependencies.
### Server Side :
After you clone this repo to your desktop, go to its root directory and run npm install to install its dependencies.
>cd server <br>
>npm install<br>

Once the dependencies are installed, you can run npm start to start the application. You will then be able to access it at localhost:8080
>npm run start


### Client Side :
After you clone this repo to your desktop, go to its root directory and run npm install to install its dependencies.
>cd client <br>
>npm install<br>

Once the dependencies are installed, you can run npm start to start the application. You will then be able to access it at localhost:3000
>npm start


## Contact
Created by [Dor Romano](https://www.linkedin.com/in/dor-romano-164667197/) - feel free to contact me!
