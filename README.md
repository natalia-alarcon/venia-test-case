# Venia E2E 🚀

Welcome to the Venia E2E test project for the e-commerce Venia! This project uses Cypress for end-to-end testing. The tests were created based on Cypress version `12.0.2`.

## Pre-requirements 📋

Before running this project, please make sure you have Node.js and npm installed on your machine.

> I used versions `v19.8.1` and `9.5.1` of Node.js and npm, respectively. I suggest you use the same versions or later.

## Installation ⚙️

To install the project dependencies, simply run the following command:

```shell
npm install
```

## Environment Variables 🌐

To run the tests, you need to set up some environment variables. Create a file named \`cypress.env.json\` in the project's root directory and add the following content:

```json
{
    "user_email": "YOUR_EMAIL",
    "user_password": "YOUR_PASSWORD"
}
```

Replace \`YOUR_EMAIL\` with your actual email and \`YOUR_PASSWORD\` with your actual password for Venia.

## Running the Tests ▶️

To run the tests in headless mode, use the following command:

```shell
npm test
```

If you prefer an interactive mode where you can see the tests running, use the following command:

```shell
npm run cy:open
```

This will open Cypress in an interactive window, allowing you to select and run individual tests.

Feel free to explore and modify the tests to fit your needs! Happy testing! 🎉
___
Created by [Natália](https://github.com/natalia-alarcon) 🐝
