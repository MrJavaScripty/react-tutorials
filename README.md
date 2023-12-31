# Advanced Client Side - React

Welcome to the tutorial course for your Advanced Client side module. In this course you will learn how to build a React application from scratch. You will learn how to use React components, how to manage state and how to use React Router to create a Single Page Application.

## Before you start

This course assumes that you have a basic understanding of HTML, CSS and JavaScript.

React is based on simple but also advanced JavaScript concepts. It's recommended that you have a basic understanding of the following concepts:

### Fundementals

- [ES6 Imports and Exports, named exports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [Object Destricutring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Async/Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

### Nice to knows
- [Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#callback_queue)

## Prerequisites

### Tools

1. [Visual Studio Code](https://code.visualstudio.com/Download) - This is the IDE we will be using for this course. You can use any IDE you want, but this is the one we will be using in the course.
   
2. [NodeJS 20.9.0 LTS](https://nodejs.org/en/download/) or higher - This is the runtime environment for JavaScript. We will be using this to run our React application.

3. Latest browser (Browser of your choice, ideally Chromium based or Firefox)

### Visual Studio Code Setup (Optional)

- Download this profile [Visual Studio Code Profile](https://gist.github.com/AiSirachcha21/3158d287761cf6925bfc8ff1e18810ca)
- Open Visual Studio Code and press `Ctrl/CMD + Shift + P` to open the command palette.
- Type `import profile` in the command palette and select `Preferences: Import Settings from File...`
- Click Select File
- Select the downloaded profile file and click ok.

At this point you should have all the extensions installed and the settings configured. For the start.

One last thing is to configure your formatter. This will help auto-format your code so you don't have to worry about it.

- Press `Ctrl/CMD + Shift + P` to open the command palette.
- Type `format` in the command palette and select `Preferences: Open Settings (JSON)`  (make sure you don't select the workspace settings by mistake)
- Add the following line to the settings file: `"editor.defaultFormatter": "esbenp.prettier-vscode",`
- Add the following line to the settings file so that VSCode automatically formats your code on save: `"editor.formatOnSave": true,`


## How to navigate the course

The code for each section of what I will be going through will be stored in it's own folder. I will cover these during lectures as well but you can also use this as a reference.

### Important

Be sure to read the README in each of these __folders AND subfolders__ in case there are any additional instructions or explanations on the concepts covered in that section.

## If you want to get a head start
If you're looking to learn React on your own and don't know where to start. Here are a few resources you can use to get started.

#### Video Tutorials:

1. [Codevolution](https://www.youtube.com/@Codevolution)
   - [React Hooks](https://www.youtube.com/playlist?list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A) (highly recommended for starting)

2. [Jack Herrington](https://www.youtube.com/@jherr/playlists)
   - [3 React Mistakes, 1 App Killer](https://youtu.be/QuLfCUh-iwI?si=y0oGTuGWC6aS_02j)
   - [Mastering React Context](https://youtu.be/MpdFj8MEuJA?si=GUOAhinEL2MEsbf2)
   - [Mastering usEffect](https://youtu.be/dH6i3GurZW8?si=hipB5iIR9vnEs6ZS)

3. [WebDevSimplified](https://www.youtube.com/@WebDevSimplified)
   - [React Hooks Tutorial](https://youtube.com/playlist?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&si=N3ufPftpxXd7gVhH)
   - [Random Shorts about Web Development](https://youtube.com/playlist?list=PLZlA0Gpn_vH8nhrx0Hyi1-S7ycCovcYB0&si=Rpb_V-j2Yq-Woivu)


#### Advanced Tutorials:
1. [Matt Pocock](https://www.youtube.com/@mattpocockuk) - He will teach you everyting you need to know about TypeScript. Because JS isn't a strictly typed language we need something to help us make sure we don't write buggy code. TypeScript comes to fill that gap and this man is an absolute wizard.
2. [Codevolution](https://youtube.com/playlist?list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&si=E5Uq7o1ItCWocNHT) This playlist is by the same guy I recommended first. The difference is that this playlist focuses on using React with TypeScript and talks about a few different techniques you can use to make your code more readable and maintainable.


