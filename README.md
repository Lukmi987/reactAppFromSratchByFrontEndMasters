Higher Order Component: itself doesn't do anything, but it offers functionality to its children components

# reactAppFromSratchByFrontEndMasters

    // Every time that you create a new tag or you are creating
    // a new instance of the component, you have to use React.createElement

    Data flows down, one way data flow

---

NPM

---

---

Plugins VS Code
ctrl + , :settings in Vs code then
write: prettier config: Prettier: Require Config it only will run for projects where is config

- prettier on save also enable

---

Eslint
npm i -D eslint@7.18.0 eslint-config-prettier@8.1.0

---

Parcel
It is a bundler for JavaScript much easier than Webpack

=--------------------
Other Cools Plugins:
Browswrify, esbuild, Snowpack, Vite and rollup.js

---

Babel
It is transpile tool
It takes code that looks one way and it makes it look a different way
Transpilation is a set of source code and making it a different source code

configuration "runtime" : "automatic" // This allows us to do the most recent version of JSX;

## npm i -D @babel/core@7.12.16 @babel/preset-react@7.12.13

In dist folder:
\*js.map should not ship to production, In chrome web tools to see real source code not the generated one that what these files are doing for us

=======================================
browserslist.dev to see how many people are using wha kind of browser and its version

========================================
Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
========================================================================

Hooks Rules

- they need to be called in the same order,
- # never put them inside if condititions

=========================================

React Dev Tools,
if we are doing production bundling in your computer , you do need to make sure that you are setting that before you do it
NODE_ENV=development

Parcel does it automatically : run dev set it to development, Webpack we have to set manually

# So how do you get the debugging conveniences then? Well, if you're using Parcel.js, it will compile your development server with an environment variable of NODE_ENV=development and then when you run parcel build <entry point> it will automatically change that to NODE_ENV=production(becomes 4times smaller) which is how all the extra weight gets stripped out.

============================================
Strict Mode

It does not make your bundle size bigger, it gets stripped in production build

React has a new strict mode. If you wrap your app in <React.StrictMode></React.StrictMode> it will give you additional warnings about things you shouldn't be doing. I'm not teaching you anything that would trip warnings from React.StrictMode but it's good to keep your team in line and not using legacy features or things that will be soon be deprecated.

// import at top
import { StrictMode } from "react";

// replace render
render(
<StrictMode>
<App />
</StrictMode>,
document.getElementById("root")
);

========================================
React Router
npm install react-router-dom@5.2.0

-dom is the windows version, they also have a react native version
On the Details page, notice that both pages render. It has to do with how React Router does routes.

React Router will render all components that the path match.
React Router does partial matches. The URL /teachers/jem/young will match the paths /, /teachers, /teachers/jem and /teachers/jem/young. It will not match /young, /jem/young, or /teachers/young.
=================================
Link
Didn't the <a> work? It did but with a flaw: every link you clicked would end up in the browser navigating to a whole new page which means React would totally reload your entire app all over again. With <Link> it can intercept this and just handle that all client-side. Much faster and a better user experience.
========================================================
useEffect hook
cleanUp functions not so often used, but good for timers, subscription, log out ..., these clean up are goint run when the component umounts from DOM,
So when we change component

Custom Hook
of course it runs every time component rerenders, but same rule as for any component, manage state in useState and useEffect and dependancy

===========================
Error about regenerator runtime: put to package json
"browserslist": [
"last 2 Chrome versions"
]
