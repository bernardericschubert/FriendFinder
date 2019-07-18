# Friend Finder


## What Is This Thing

Friend Finder is a full stack application that prompts users with a set of questions, compares their answers against a set of default users, and suggests the best friend match.


## Application Details

The application uses HTML/Bootstrap with jQuery for it's front-end, Node.js and Express for the back-end, and is hosted on Heroku.  The application uses two routes - one for the main HTML page, one for the survey page.  The survey page presents users with 10 questions they answer with a value from 1-5.  The application stores those answers and compares them to other users in the system.  This is done via request/response Express functionality.  The user is presented with a new friend option determined by the closeness of their answers.  The user is then added to the array of users used for comparision.  The current version of this application does not persist that addition, although that could be easily implemented via some flavor of SQL.

Visit the hosted application here: https://cryptic-headland-75466.herokuapp.com/


## Technologies

- Node.js
- Express
- jQuery
- HTML/Bootstrap
- JSON
- Heroku




