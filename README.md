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

So how do you get the debugging conveniences then? Well, if you're using Parcel.js, it will compile your development server with an environment variable of NODE_ENV=development and then when you run parcel build <entry point> it will automatically change that to NODE_ENV=production(becomes 4times smaller) which is how all the extra weight gets stripped out.
