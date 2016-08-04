# Angular 2.rc4 Workshop: Todo App

## Introduction

This Repo contains the minimal setup for an Angular2 app, with Cloud9 support (except for e2e).
There is also a todo app branch which provides a better support for an ng2 Todo App 


## Run on Cloud9 (web env)

1. Open account at Cloud9 (www.c9.io)
2. Create new workspace in the new account (use HTML5 template)
3. Click on the new workspace you've created
4. Within Cloud9 editor terminal (bottom of the screen), execture the following commands:
5. wget https://github.com/carmelc/ng2-rc4/archive/master.zip
6. unzip master.zip
7. cd ng2-rc4-master
8. npm install
9. npm start
 
On the Cloud9 editor toolbar (top of the screen) click "Preview" (change the port to 8081)
You can also access it from an external browser (including another machine) via:
https://<workspacename>-<username>.c9users.io:8081

## Work on your machine

Clone this repo and install the npm packages described in the `package.json` and verify that it works:

**Attention Windows Developers:  You must run all of these commands in administrator mode**

```bash
npm install
npm start
```

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with Ctrl-C.

You're ready to write your application.

### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run lite` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.
* `npm run typings` - runs the typings tool.
* `npm run postinstall` - called by *npm* automatically *after* it successfully completes package installation. This script installs the TypeScript definition files this app requires.

Here are the test related scripts:
* `npm test` - compiles, runs and watches the karma unit tests
* `npm run webdriver:update` - ONE TIME update for protractor end-to-end (e2e) tests
* `npm run e2e` - run protractor e2e tests, written in JavaScript (*e2e-spec.js)

## Testing

The QuickStart documentation doesn't discuss testing. 
This repo adds both karma/jasmine unit test and protractor end-to-end testing support.

These tools are configured for specific conventions described below.

*It is unwise and rarely possible to run the application, the unit tests, and the e2e tests at the same time.
We recommend that you shut down one before starting another.*

### Unit Tests
TypeScript unit-tests are usually in the `app` folder. Their filenames must end in `.spec`.

Look for the example `app/test/component.spec.ts`.
Add more `.spec.ts` files as you wish; we configured karma to find them.

Run it with `npm test`

That command first compiles the application, then simultaneously re-compiles and runs the karma test-runner.
Both the compiler and the karma watch for (different) file changes.

Shut it down manually with Ctrl-C.

Test-runner output appears in the terminal window.
We can update our app and our tests in real-time, keeping a weather eye on the console for broken tests.
Karma is occasionally confused and it is often necessary to shut down its browser or even shut the command down (Ctrl-C) and
restart it. No worries; it's pretty quick.

The `HTML-Reporter` is also wired in. That produces a prettier output; look for it in `~_test-output/tests.html`.
**Note** since Cloud9 does not support opening Chrome instance, you can only see the result of the unit tests in debug mode by opening (on your browser) the debug link:   
`https://<workspacename>-<username>.c9users.io/debug.html`
(it will not refresh automatically)

### End-to-end (E2E) Tests

**BEFORE RUNNING THE FIRST TEST** you must update the Selenium webdriver. Run `npm run webdriver:update`.

E2E tests are usually at the project root, above the `app/test/e2e` folder. 
Their filenames must end in `e2e-spec.js`.

E2E tests must be written in JavaScript (the author has not figured out how to write them in TS yet).

Look for the example `test/e2e/app.e2e-spec.ts` in the root folder.
Add more `e2e-spec.ts` files as you wish (although one usually suffices for small projects); 
we configured protractor to find them.

Thereafter, run them with `npm run e2e`.

That command first compiles, then simultaneously starts the Http-Server at `localhost:8081`
and launches protractor.  

The pass/fail test results appear at the bottom of the terminal window.
A custom reporter (see `protractor.config.js`) generates a  `./protractor-results.txt` file 
which is easier to read; this file is excluded from source control.

Shut it down manually with Ctrl-C.
