# Books Dashboard

A project created with love using React, Redux, SCSS, Bootstrap 4, Eslint, Prettier, Webpack, Html5. This page documents all steps that are necessary to get this project up and running.

## Guidlines for Developers
### Working On the Project

#### Prerequisists:
* Nodejs: v8.11.3 (LTS) (Install Nodejs)
* Prefered Dev Machine: MAC (OSX) but can be done in any operating system

#### Installing the project:
##### Clone the Repo
`git clone https://github.com/bmnepali/books-dashboard.git`

##### Install the node packages
* Go to the project directory:
`cd books-dashboard`

* Then run command to install project dependencies
`npm install` or simply `npm i`

##### Run the project (development):
* Run the following command to run the project
`npm run start:dev`

##### Creating the production build of the project (production):
* Run the following command to run the project
`npm run start:prod`

Note: This will create a `dist` directory in the project root; the files in the directory are ready for deployment.

##### Run tests for one time only
`npm run test` 

##### Run tests and watch for changes
`npm run test:watch` 

##### Run tests and gerate test coverage report
`npm run test:coverage` 

##### Updating Test Snapshots
`npm run test -- -u`
(To update the previous component's snapshots)

##### Run eslint for linting and hinting the code
`npm run lint` 

##### Fixing linting issues
`npm run lint:fix`

##### Making code preetier :) by formatting
`npm run pretify`

### Branch Structure (Git Workflow)
#### master : 
Where all our production ready project source code is stored. Mostly we dont touch this branch. Except for deployment.

#### staging: 
Where all our testing is done. Which means QA will use this branch for testing the solutions. After all things are ok, we merge staging in to master and deploy application. QA will only use this branch.

#### develop: 
Where our latest development code is kept. It holds the currently developed features after the Pull Request are approved by devs working on their separate feature branches.

#### feature-branch: 
It contains the task wise features developed by one or more developer. Which once approved will be merged into develop branch.
E.g: BDA-1001-some-awesome-feature (If you can reflect the task name as branch name, will be better!) But also remember your branch name mnust be concise and as sort as possible.

### Maintainer:
* Buddha Man Nepali
<info@bmnepali.com.np>

## Cheers 🍻😎
