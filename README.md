# CAS FEE ADV Design System - Pizza Hawaii Style System Guide 

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

`npm run build`

-> this should create / overwrite the sets to the dist-directory.

## tailwind

start on a filewhatcher on the console with

`npx tailwindcss -i ./src/styles/common.css -o ./dist/output.css --watch`


# Developer Manifesto

## Development rules for Hawaiian Taste

Some Rulesets we want to ensure the full Hawaiian taste:

- We like CamelCase naming convention.
- Directories and Components, Stories starts with Capital Letters.
- Whenever possible we like as many css to be written with tailwind-css. (it's fancy and we are here to learn something new...) Where it's not posssible or impractiacal -  commen css is also allowed in a component module. 
- We use TypeScript because it is de-facto standard these days.


# Overview

The latest published Design System (main-branch) is available at this link:

https://smartive-education.github.io/design-system-component-library-pizza-hawaii/


## Structure of the Design Library

The Pizza Hawaii Design Library it's structured from very general reusabele components to very 'Mumble-specific' use-cases. 

### Atoms
Atoms are very reusable versatile and configurable components for a single Purpose - Basics to start.
Find Icons, Headlines, Labels or Images here. 

### Molescules
Molescules are combination of Atoms with basic states. You can and should configure, expand these and reuse them to the specific use-case. Find here Forms, Cards, Buttons and Switches.

### Organisms
Organisms are Combination of Molescules with a simple level of complexity and provide a certain purpose or use case. Find here Combination of user Content, Input Components, Modal Window, or simple User Interfaces. 

### Templates
Here you can see the full experience of combined Organisms within for a preview how the Design of Mumble Views and Screens could possible look and feel. 
Find here: Timelines, Profile views, Sign In and Register Screens.



## git semantic commit message 

try to use these semantics while committing to maintain a meaningfull commit history:

`feat:` (new feature for the user, not a new feature for build script)

`fix:` (bug fix for the user, not a fix to a build script)

`docs:` (changes to the documentation)

`style:` (formatting, missing semi colons)

`refactor:` (refactoring production code, eg. renaming a variable)

`test:` (adding missing tests, refactoring tests;)

`chore:` (updating taskrunnner, libraries changes, configurations)


## Some special Hawaiian flavor... 

- We use some mock Library to have always a fresh breeze of Sample Pictures.
- All special Component-base css classes start with a capital `M`. Why you ask ? - Mumble it baby!.



## Deployment - to be written when it builds

This repository is configured to automatically deploy your design system
to GitHub Pages and the component library to the GitHub package registry.

Please ensure the following prerequisites are met:

-   Storybook
    -   Your `package.json` contains a `build-storybook` script
    -   The resulting build is located in the `storybook-static` directory
-   Component Library
    -   Your `package.json` contains a `build` script
    -   When trying with `npm pack`, all your required files are included in the resulting tarball
    -   Your `package.json` file contains the correct _scope_ for your package (`@smartive-education`)
    -   The `package.json` file contains the correct registry
