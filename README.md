# e-Core exercise

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Comments from the author
Hello, e-Core team!

Thank you for this opportunity. Below, you can find the instructions to run the project.

Regarding my approach on how to solve the problem:

I started from the assumption that the "current user" mentioned in the instructions is already logged.

It was required that the website had 2 pages/routes: teams (a list of all available teams) and team details (information about the current team, with members from that team).

It also required a filter by two different parameters: filtered by team name, and filtered by team member names.

My solution was to split Teams into 3 components.
- Main page
- List of all teams
- Details of each team

And also to split Members (users) into 2 components:
- List of all members
- Details of each member

This way, I see that I can easily import each component wherever I want, in case the website grows bigger or change.

The most major pieces of code are:
- `hooks/useFetch.js` - a custom hook I did to all fetch calls.
- `components/Teams/TeamDetails.js` - it gets the team from the URL (or props),  and loads the details of each team. It also calls the `<MemberList />` component. The search also happens here.
- `components/Member/MemberDetails.js` - An individual component for each member (user) of a team. The search also happens here.

I look forward to your feedback!

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Tests

### To run all tests: `npm run test`

### To see test coverage: `npm run test:coverage`

## Final test coverage:

------------------------|---------|----------|---------|---------|-------------------
File                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------------------|---------|----------|---------|---------|-------------------
All files               |   95.34 |    77.35 |    93.1 |   95.29 |                   
 src                    |     100 |      100 |     100 |     100 |                   
  App.js                |     100 |      100 |     100 |     100 |                   
 src/components         |     100 |       75 |     100 |     100 | 
  MainHeader.js         |     100 |       75 |     100 |     100 | 11
  Search.js             |     100 |      100 |     100 |     100 | 
  Welcome.js            |     100 |      100 |     100 |     100 | 
 src/components/Members |   94.11 |    70.58 |     100 |   94.11 | 
  MemberDetails.js      |    90.9 |    66.66 |     100 |    90.9 | 13
  MembersList.js        |     100 |      100 |     100 |     100 | 
 src/components/Teams   |   92.85 |       80 |   85.71 |   92.68 | 
  TeamDetails.js        |   94.11 |    82.35 |      80 |   94.11 | 16
  Teams.js              |   94.44 |    77.77 |   85.71 |   94.11 | 14
  TeamsList.js          |   85.71 |       75 |     100 |   85.71 | 17
 src/hooks              |     100 |      100 |     100 |     100 | 
  useFetch.js           |     100 |      100 |     100 |     100 | 
------------------------|---------|----------|---------|---------|-------------------