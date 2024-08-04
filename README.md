# About
This repository showcases how Cypress can be used to automate testing a web application. In this case we will be executing several UI automation test scripts on www.saucedemo.com/v1

# Pre-Requisites
- Ensure you have [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed. This will help with installing Cypress
- Ensure you have the latest version of [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) installed

# Folder Structure
Ideally Cypress should be installed in the root folder of the project but since I do not have access to the source code of the website I simply installed Cypress in an empty git repository

- `/cypress` - The main folder for Cypress which hosts all the related files/folders and should be located in the root of the project
- `/cypress/downloads` - Contains any downloaded files from running the script. This folder is ignored by git since it's not necessary to be included in the repository
- `/cypress/e2e` - Contains all the Cypress scripts for End to End testing
- `/cypress/fixtures` - Contains a set of data that can be used by the script
- `/cypress/screenshots` - Contains the screenshot for when a test case fails. This folder is ignored by git since it's not necessary to be included in the repository
- `/cypress/support` - Contains custom command files for the end to end scripts. Reusable functions are put in here for more readable & manageable code

# How to Run
- Clone the repository
- Open CMD or Terminal and navigate to the project folder
- Enter in the command `npx cypress run --headed`
