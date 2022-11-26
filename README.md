# Template for CAS FEE ADV Design System

This is a template repository for the CAS FEE ADV design system part.
It is configured to automatically provide GitHub Actions to build and deploy
your design system as a static page and your component library to the
GitHub package registry.

## Getting started

install it my `npm install` or `npm ci`.

this should install
- storybook 
- tailwind-css
- React and ReactDom Library (for fun and for storybook)
- TypeScript (because its the future)

<b>-> all source-files have been moved to /src</b>

## Run to get started

to run a local server on Port 6006 and compile your components with a 'story' to the storybook collection 

`npm run storybook`

to build all components for browsers type

`npm run build`

-> this should create / overwrite the sets to the dist-directory. 


## Deployment

This repository is configured to automatically deploy your design system
to GitHub Pages and the component library to the GitHub package registry.

Please ensure the following prerequisites are met:

- Storybook
  - Your `package.json` contains a `build-storybook` script
  - The resulting build is located in the `storybook-static` directory
- Component Library
  - Your `package.json` contains a `build` script
  - When trying with `npm pack`, all your required files are included in the resulting tarball
  - Your `package.json` file contains the correct _scope_ for your package (`@smartive-education`)
  - The `package.json` file contains the correct registry
