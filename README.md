# Angular Fundamentals

This project was created while following the [Angular Fundamentals tutorial](https://app.pluralsight.com/library/courses/angular-fundamentals/table-of-contents) on [Pluralsight](https://app.pluralsight.com) created by Joe Eames and Jim Cooper. It's main purpose is to showcase the most important capabilities of Angular, all combined within a single runnable project.

## Short description

The application loads Events from the server and lists them on the screen. The user can login, create new events, search existing ones and create sessions for events. 

## Prerequisites

 - Node.js - [download](https://nodejs.org/en/download/).

 - Angular - [how to install](https://angular.io/guide/quickstart).

## Running the app

 - Open the terminal (depending on which OS you are using it can be Powershell, Linux terminal etc.) and navigate to the root of the project.
 - Run `npm install` from the root folder to install all the necessary npm packages.
 - Run `npm run server` to start the back-end server that will serve all the data the Angular froned-end needs.
 - Open a new terminal windows and run `npm start` (or run `ng serve -o` if you are using the Angular CLI); after the app is ready it will automatically open in your default browser window on http://localhost:4200/events.

 ## License

 MIT.
