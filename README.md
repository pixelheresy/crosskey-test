# Crosskey Todo Test App

Hey guys! Hope you have a decent time looking though this. As stated in the
instructions, I set this up with the stack of my choice, and since it was
comfortable for me to set and get to building quickly, I used
a React/Redux/TypeScript stack with a little nudge from `create-react-app` to
set up the initial `package.json` and some basic utility scripts. I figure this
is the best way to see how I tackle a project more than what I do what
a particular tool.

I did incorporate all the specs including the optional pieces, albeit, I do
feel I would have tuned some debounce into the drag and drop if I wanted to
spend more time. Likewise, the styles are somewhat basic and I would have used
more modular style construction as well as preprocessing, so I can template out
constants, etc.

I got though setting up basic tests for the business logic (and since I used
TypeScript, it becomes really simple, since I don't have to check structures,
just output), however, due to the circumstances, I timeboxed myself, so I can
get this to you sooner. Testing render in React is trivial and since using
Redux for the majority of the data flow and everything is strict TypeScript,
I at least covered the most important pieces.

Anyway, hope you enjoy!




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
