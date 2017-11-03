# ClubManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



This project uses a cloud services provider called Firebase to store data. Below are the setup steps for Firebase:

* Create an account on www.firebase.google.com

* Click on 'Create a New Project' on the user dashboard area of the website and name your project

* Terminal- while in your project directory, run:
  npm install angularfire2@4.0.0-rc.0 firebase --save

* Project root directory on local computer- in the file 'tsconfig.json', type '"types": [ "firebase" ]' like so:
  "lib": [
      "es2016",
      "dom"
    ],
    "types": [ "firebase" ]

* On the 'Project Overview' webpage, click on 'Add Firebase to your web app'

* Create 'api-keys.ts' file in app folder of project, and replace all 'xxx' letters with values from the 'Add Firebase to your web app' display

* Type '/src/app/api-keys.ts' in .gitignore

* In the Firebase Project Overview webpage, visit the Database by selecting the Database option from the navbar on the left-hand side

* While in the Database section, click on 'Rules' and replace the text with the below to allow the application to read and write to the Firebase database:
    {
      "rules": {
        ".read": "true",
        ".write": "true"
      }
    }

* If error "Module not found: Error: Can't resolve 'promise-polyfill' in `.../firebase/app'`", install the promise-polyfill package in the terminal:
  npm install promise-polyfill --save-exact

* If error persists, try installing Firebase version 3.6.6 for Angular2@4.0.0:
  npm install --save firebase@3.6.6
