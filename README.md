# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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


# Deploying a React Website Using GitHub Actions and Self-Hosted Runners

This repository contains instructions and code snippets detailing the process of deploying a React website using GitHub Actions and a self-hosted runner on a Linux server. The deployment process involves configuring the self-hosted runner, setting up SSH access, resolving common issues, and deploying the React app using GitHub Actions workflows.

## Table of Contents
1. [Introduction](#introduction)
2. [Setup GitHub Actions and Self-Hosted Runner](#setup-github-actions-and-self-hosted-runner)
   - [Setting Up Self-Hosted Runner](#setting-up-self-hosted-runner)
   - [Preparing Your Local Hosting Machine](#preparing-your-local-hosting-machine)
   - [Configuring SSH Access](#configuring-ssh-access)
3. [Deploying the React App](#deploying-the-react-app)
   - [Preparing the React App](#preparing-the-react-app)
   - [Creating GitHub Secrets](#creating-github-secrets)
   - [Writing the GitHub Actions Workflow](#writing-the-github-actions-workflow)
4. [Troubleshooting](#troubleshooting)
5. [Conclusion](#conclusion)
6. [Acknowledgments](#acknowledgments)

## Introduction
This repository contains detailed instructions and code snippets for deploying a React website using GitHub Actions and self-hosted runners on a Linux server.

## Setup GitHub Actions and Self-Hosted Runner
### Setting Up Self-Hosted Runner
Follow the steps provided in the documentation to set up a self-hosted runner on your Linux server.

### Preparing Your Local Hosting Machine
Ensure that your local hosting machine has Node.js and npm installed. Refer to the provided instructions for installing and configuring Node.js and npm.

### Configuring SSH Access
Set up SSH access to your server by following the provided instructions. Generate SSH keys and configure SSH access for secure deployment.

## Deploying the React App
### Preparing the React App
Prepare your React app for deployment by installing dependencies and building the app. Follow the provided instructions for resolving common issues encountered during the deployment process.

### Creating GitHub Secrets
Create GitHub secrets to store sensitive information securely. Refer to the instructions for creating and managing GitHub secrets.

### Writing the GitHub Actions Workflow
Write a GitHub Actions workflow to automate the deployment process. Use the provided code snippets and instructions to configure the workflow for deploying your React app.

## Troubleshooting
Refer to the troubleshooting section for solutions to common issues encountered during the deployment process. Follow the provided instructions to resolve any errors or problems.

## Conclusion
By following the instructions provided in this repository, you can successfully deploy your React website using GitHub Actions and self-hosted runners on a Linux server. Ensure that you follow each step carefully and refer to the troubleshooting section for assistance with any issues.

## Acknowledgments
This README file was prepared by Yahya Elmokhtari and Souhail El Mahdani.

