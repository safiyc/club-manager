# Club Manager

#### Technologies used: HTML, CSS, Javascript, Node.js, Angular2, Firebase

##### By Safiy Cham

## Description

This program lets an admin account add/edit/delete members of a club. Non-admin users can see a list of members with their names and a brief description.

## Setup

* Install <code>Node.js</code> and <code>Angular CLI</code>

* Terminal- <code>git clone github-project-url</code>

* Terminal- <code>npm install</code>

* Terminal- <code>bower install</code>

* Below is the <code>Firebase setup</code>, a cloud services provider

  * Create an account on ww.firebase.google.com

  * Click on 'Create a New Project' on the user dashboard area of the website and name your project

  * On the 'Project Overview' webpage, click on 'Add Firebase to your web app'

  * In the Firebase Project Overview webpage, visit the Database by selecting the Database option from the navbar on the left-hand side

  * While in the Database section, click on 'Rules' and replace the text with the below to allow the application to read and write to the Firebase database
    <pre>
      {
        "rules": {
          ".read": "true",
          ".write": "true"
        }
      }
    </pre>

  * Terminal- while in your project directory, run
      <code>npm install angularfire2@4.0.0-rc.0 firebase --save</code>

  * Create <code>api-keys.ts</code> file in app folder of project and paste below text, and replace all x's letters with values from the 'Add Firebase to your web app' display
    <pre>
      export var masterFirebaseConfig = {
        apiKey: "xxxx",
        authDomain: "xxxx.firebaseapp.com",
        databaseURL: "https://xxxx.firebaseio.com",
        storageBucket: "xxxx.appspot.com",
        messagingSenderId: "xxxx"
      };
    </pre>

  * If error "Module not found: Error: Can't resolve 'promise-polyfill' in '.../firebase/app'", install in terminal <code>npm install promise-polyfill --save-exact</code>

  * If error persists, try installing Firebase version 3.6.6 for Angular2@4.0.0 <code>npm install --save firebase@3.6.6</code>

* Terminal- <code>ng serve</code>

* Open Chrome browser and input in address field <code>localhost:4200</code>

## Bugs

No known bugs.

## Link

Click here https://github.com/safiyc/club-manager.git to access the Github page for this project.

## Pending Features

* Styling and improved layout to make it user friendly

* Include an area called "announcements" and "events"

* Implement AngularFire/Firebase user authentication

* Deploy the application and include a link to the live site in the project's README


## License

This software is licensed under the MIT licensed
