# CAS FEE ADV Design System - Pizza Hawaii 🍕 

This package, developed by Felix and Jürgen, is a component library for a fictional Twitter clone named "Mumble". It is created as a part of a Frontend Engineering Advanced (CAS) course, with the goal of providing a reusable and maintainable set of UI components that can be integrated into an application. 

[Here can find the latest published Storybook](https://smartive-education.github.io/design-system-component-library-pizza-hawaii/)

**The package uses:**
- `Storybook` for building and testing UI components, which allows us to build, visualize and test individual components in isolation
- `Tailwind CSS` to create responsive, consistent and customizable components without the need of writing CSS from scratch
- `TypeScript` which provides optional types and improved development experience, making the code more robust, easier to maintain and to catch errors early in the development process
- `ESLint` for linting and identifying issues in JavaScript code and `Prettier` to format code, which help to enforce consistent coding styles, identify and fix errors and improve overall code quality. As defaut stings we used `@smartive/eslint-config` and `@smartive/prettier-config`
- `@storybook/react` for building the storybook component library page


**The package exports:**
- the build files in the `dist` folder including the `tailwind.config.js` file
- the types are located in dist/types/index.d.ts
- type definitions can be found in `dist/types/index.d.ts`


## Installation Guide for Using the Library

### 1. Github Token
This package is published to GitHub Package Registry, which requires a GitHub token with the `read:packages` permissions to be set in your environment to be able to publish and install the package. You can create a new token by going to your GitHub settings and navigating to the "Developer Settings" section, then "Personal access tokens". 

Github settings for Token: https://github.com/settings/tokens
Read more about Personal access tokens: https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token


```
@smartive-education:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<NPM_TOKEN>
```
Tip: You can then set the token as an environment variable with the name `NPM_TOKEN` or add it to your `.npmrc` file
**Please make sure to keep your token secure and not to share it with anyone.**

Also you should use the `npm ci` command instead of `npm install` when installing the package in a production environment, to ensure that the exact versions of dependencies are installed, and avoid potential security vulnerabilities caused by using non-deterministic dependency trees.

### 2. Install Package

1.  Run `npm install @smartive-education/pizza-hawaii` to install the package.
2.  Import the necessary components and styles from the package in your application (Create a Test-Application see below).
3.  Include the output.css file in your HTML file to apply the tailwind styles to your application.
4.  Make sure to have the peer dependencies installed (react and react-dom)
Please note that this package requires at least Node v16.14 to be used.

### 3. Use Components
Start building your application with the components and styles provided by the Pizza Hawaii library.
1. Import Components `import { Headline, Icon, ImageOverlay } from '@smartive-education/pizza-hawaii'`
2. Import CSS `import '@smartive-education/pizza-hawaii/dist/bundle.css'`
3. Import Font `import "@fontsource/poppins/500.css";import "@fontsource/poppins/600.css";import "@fontsource/poppins/700.css";`
> You are good to go!  🎉

#### Setup a new Test-Application with React & Next
If you would like to test it without include to your App. You can create with this simple steps a new one.
1. Install TypesScript, React and React-dom `npm install typescript react react-dom`
2. In our Test Setup we use Next-JS `npx create-next-app@latest --typescript`
3. Follow the Install Package Guide from above.
4. Add CSS Imports for testing to `_app.tsx` file

---
## Deadend-lazy- Developer? This Guide is for you:
1. Create a folder for the test project and move into it.
```
mkdir myProjectFolder && cd $_
```
2. Clone example project and install packages
```
git clone https://github.com/smartive-education/pizza-test
npm install
```
3. Create Github Token https://github.com/settings/tokens and add `.npmrc` file. 
```
npm run dev
```

> here you have a overview of some components and how to use them. Take, delete, copy/ paste what you need... 😇

## Installation Guide for Developing Components
1.  Make sure you have Node v16.14 or higher installed.
2.  Clone or download the package.
3.  Run `npm install` or `npm ci` to install dependencies.
4.  Run `npm run storybook` to start a local development server on port 6006.
5.  Use `npm run format`, `npm run lint` and their `:fix` versions to maintain code quality.
Please make sure to follow the development rules as stated in the "Developer Manifesto" section to ensure the full Hawaiian taste of the components. Happy coding!


### Scripts
- `npm run build`: Builds the package
- `npm run build-storybook`: Builds the storybook
- `npm run format`: Lints and runs prettier
- `npm run format:fix`: Lints, runs prettier and fixes errors
- `npm run lint`: Lints the code
- `npm run lint:fix`: Lints the code and fixes errors
- `npm run prettier`: Runs prettier
- `npm run prettier:fix`: Runs prettier and fixes errors
- `npm run storybook`: Runs the storybook




# Developer Manifesto

## Development rules for Hawaiian Taste

Some Rulesets we want to ensure the full Hawaiian taste:

- We like CamelCase naming convention.
- Directories and Components, Stories starts with Capital Letters.
- Whenever possible we like as many css to be written with tailwind-css. (it's fancy and we are here to learn something new...)
- We use TypeScript because it is de-facto standard these days.
- We use some mock Library to have always a fresh breeze of Sample Pictures.
- All special Component-base css classes start with a capital `M`. Why you ask ? - Mumble it baby!.


---

## Structure of the Design Library

The Pizza Hawaii Design Library it's structured from very general reusabele components to very 'Mumble-specific' use-cases. 

## Atoms
Atoms are very reusable versatile and configurable components for a single Purpose - Basics to start.
Find Icons, Headlines, Labels or Images,  here. 

## Molescules
Molescules are combination of Atoms with basic states. You can and should configure, expand these and reuse them to the specific use-case. Find here Forms, Cards, Buttons and Switches.

## Organisms
Organisms are Combination of Molescules with a simple level of complexity and provide a certain purpose or use case. Find here Combination of user Content, Input Components, Modal Window, or simple User Interfaces. 

## Examples
Here you can see the full experience of combined Organisms within for a preview how the Design of Mumble Views and Screens could possible look and feel. 
Find here: Timelines, Profile views, Sign In and Register Screens.


---

## git semantic commit message 

try to use these semantics while committing to maintain a meaningfull commit history:

`feat:` (new feature for the user, not a new feature for build script)

`fix:` (bug fix for the user, not a fix to a build script)

`docs:` (changes to the documentation)

`style:` (formatting, missing semi colons)

`refactor:` (refactoring production code, eg. renaming a variable)

`test:` (adding missing tests, refactoring tests;)

`chore:` (updating taskrunnner, libraries changes, configurations)

---
