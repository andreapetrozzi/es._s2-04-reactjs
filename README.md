a search engine for remote job vacancies.

Here is a brief summary of how the application works:
on the main page the user can search for the desired position,
getting results.

In this list of results, by clicking on the name of a company
you are redirected to a /:company page
where all the job postings of that specific company are listed.


     Available APIs:

     https://strive-benchmark.herokuapp.com/api/jobs?search=developer&limit=10
     https://strive-benchmark.herokuapp.com/api/jobs?company=Olla
     https://strive-benchmark.herokuapp.com/api/jobs?category=writing&limit=10

     
Add Redux to your project.
TASKS:

         1. Implement the Redux pattern in your application, with a store and a reducer.

         2. Provide the user with the ability to add a company to a favorites list.
            There is no limit to the number of companies that can be added to your favourites
            This favorites list must be saved entirely in the Redux Store, and rendered
as a list on a separate page (e.g. on a /favourites route).

         3. Don't forget that the list rendered at /favourites
must have the company name clickable as on the main page.

[EXTRA]
         4. Also allow the user to remove a company from the favorites list.

// TERMINAL:
   // npm i bootstrap@4.6.1
   // npm i react-bootstrap@1.6.5
   // npm i react-router-dom
   // npm i @reduxjs/toolkit
   // npm i react-redux
   
   
   
   


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
