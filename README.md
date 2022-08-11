# Employee Polls Project: Udacity

## Overview

**Would You Rather** is the final project for Udacity's React Nanodegree program. It was designed to test our knowledge of React, Redux, and unit testing with React and Jest. The user is given questions with two possible choices. They can answer questions, see questions they haven't answered, see how other people voted, and see user ranking on the leaderboard page. Starter code is provided including a Data.js file, which represents a database and has methods to access the data. I bootstrapped this project using [Creact React App](https://github.com/facebook/create-react-app).

## Screen Shots of App

#### Login Page

## ![Login Page](src/assets/screenshots/LoginPageGroup.png)

#### Home Page

## ![Home Page](src/assets/screenshots/HomepageGroup.png)

#### Answered Questions

## ![Answered Questions](src/assets/screenshots/AnsweredQuestionGroup.png)

#### New Question

## ![Poll Page & New Question Page](src/assets/screenshots/PollDetailsNewQuGroup.png)

## App Functionality

- Login: The user has a dropdown menu with a list of login in names. The user chooses one name to enter the app.
- Homepage: When the user logs in, they will see the homepage with tabs showing their unanswered and answered polls. The polls are ordered from newest (top) to oldest (bottom).
- Poll details: Each question has two answer options. After the user answers the question, they are taken to the next page that shows the percentage of people who voted for the same option. There will be a mark by the logged in user's name.
- 404 page: Users will see this page when a poll doesn't exist.
- Voting: User is only allowed to vote once for each poll.
- Post Question: Users can add a new question using the form on the New Question page. Once the user has added their choices, then they click the submit button to add their question.
- Leaderboard: This page includes the states for each user. The users are organized in descending order based on the number of questions they have asked and the number they have answered. Users who ask and answer more questions have a hire rating.

## Installation and Launch Instructions

- First you need to Clone or download this repository.
- Next you need to open a terminal in the project directory.
- Install Node.js. You can find the package using the following link:
  https://www.npmjs.com/get-npm
- Install npm and all project dependencies with **npm install** 

## References and Resources

### References

Avatar images:

- [Pixabay](https://pixabay.com/)

* [SketchandBuild](https://www.flaticon.com/free-icons/afro)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
