This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Documentation to Read

To learn more about Next.js and helper modules, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
-   [Nextjs-redirect](https://www.npmjs.com/package/nextjs-redirect) - A module that allows for easy page based redirects
-   [react-hooks-helper](https://github.com/revelcw/react-hooks-helper) - Custom react hooks
-   [react-icons](https://react-icons.github.io/react-icons) - React icons library

## Recommended VS Code Extensions

-   ESLint

### Optional

-   Prettier
    -   Set Auto Format on
-   vscode-icons
-   Add jsdoc comments
-   Rainbow Brackets
-   TODO Extension Tracker
-   SVG Viewer

## Startup Guide

-   Install any VS Code Extensions mentioned above.
-   Create the enviromental variable file using the example `.env`. Name it `.env.local`

## Things to know

-   jsconfig.json file allows you have module aliases. Ex. When importing a component, instead of typing `import Button from '../../component/button'` you can use `'@component/button'` instead.
    -   Current Aliases available:
        -   @component
        -   @contexts
        -   @api
        -   Feel free to add your own.
