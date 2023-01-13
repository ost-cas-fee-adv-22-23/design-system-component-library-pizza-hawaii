# CAS FEE ADV Design System - Pizza Hawaii 🍕 Style System & Installation Guide 

This is a template repository for the CAS FEE ADV design system part.
It is configured to automatically provide GitHub Actions to build and deploy
your design system as a static page and your component library to the
GitHub package registry.

## Getting started

install it by `npm install` or `npm ci`.

this should install

-   storybook
-   tailwind-css
-   React and ReactDom Library (for fun and for storybook)
-   TypeScript (because its the future)

## Run to get started

make sure your node-version is `v16.14` or higher.

to run a local server on `Port 6006` and compile your components with a 'story' to the storybook collection

`npm run storybook`

to build all components for browsers type

`npm run build-storybook`

-> this should create / overwrite the sets to the dist-directory.

## tailwind

start on a filewatcher on the console with

`npx tailwindcss -i ./src/styles/common.css -o ./dist/output.css`


# Developer Manifesto

## Development rules for Hawaiian Taste

Some Rulesets we want to ensure the full Hawaiian taste:

- We like CamelCase naming convention.
- Directories and Components, Stories starts with Capital Letters.
- Whenever possible we like as many css to be written with tailwind-css. (it's fancy and we are here to learn something new...)
- We use TypeScript because it is de-facto standard these days.
- We use some mock Library to have always a fresh breeze of Sample Pictures.
- All special Component-base css classes start with a capital `M`. Why you ask ? - Mumble it baby!.


## Web-Overview

The latest published Design System (main-branch) is available at this link:

https://smartive-education.github.io/design-system-component-library-pizza-hawaii/

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

## Installation Guide for using the Library

Before you install Pizza Hawaii Library you should have a valid Github Token

### 1. have a look <a href='https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'>here</a> how to create a github authToken. 


### 2. create a `.npmrc` - file in your local repository, to be ensure you are able to 
install smartive-eduction repo. it should look like that.

<code>
@smartive-education:registry=https://npm.pkg.github.com
 //npm.pkg.github.com/:_authToken=ghp_xxxxxxx
</code>


### 3. install Pizza Hawaii 🍕

`npm install @smartive-education/pizza-hawaii@latest`


### 4. install TypesScript, and React, React-dom

`npm install typescript react react-dom`

You are good to go!  🎉

### Now for Starters we recommend Next-JS:

### 4.1 install also Next-JS
(yes of course you can also try another framework -its just a recommendation & tested...)

`npx create-next-app@latest --typescript`

### 5. import Pizza-Hawaii lib into your code

`import { Headline, Icon, ImageOverlay } from '@smartive-education/pizza-hawaii'`

### 6. CSS should be imported in '_app.tsx' file 

`import '@smartive-education/pizza-hawaii/dist/bundle.css'`

and for our favourite font flawour add this:

`import "@fontsource/poppins/400.css";`

> You are good to go!  🎉

---
## Deadend-lazy- Developper? This Guide is for you:

do step 1. and 2. and just install our testing Lib Repo with next-js already backed for you. 

`git clone https://github.com/smartive-education/pizza-test`

and

`npm i`

then

`npm run dev`

> here you have a overview of some components and how to use them. Take, delete, copy/ paste what you need... 😇


