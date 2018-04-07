# Foodiemate-web

## Table of Contents
 * [What is this](#what-is-this)
 * [Demo](#demo)
 * [Used libraries, guides, etc.](#used-libraries-guides-etc)
   * [Libraries](#libraries)
   * [Guides](#guides)
   * [Other resources](#other-resources)
 * [Installation](#installation)
   * [Configuration](#configuration)
   * [Firebase](#firebase)
 * [Development](#development)
 * [Tests](#tests)
   * [Unit tests](#unit-tests)
   * [e2e tests](#e2e-tests)
 * [Build](#build)
 * [Author](#author)
 * [License](#license)

## What is this
Just a small demo to show how to use [Angular2](https://angular.io/) + [Firebase](https://firebase.google.com/) + 
[Google Material Design](https://www.google.com/design/spec/material-design/introduction.html) together. Currently
this application display the egg status data online 
 
## Demo
Demo of this application can be found from [TBD]().


## Used libraries, guides, etc.

### Libraries
 * [Angular 2](https://github.com/angular/angular)
 * [Material Design for Angular 2](https://github.com/angular/material2)
 * [AngularFire2](https://github.com/angular/angularfire2)
 * [angular2-moment](https://github.com/urish/angular2-moment)
 * [Angular-CLI](https://github.com/angular/angular-cli)
 
### Guides
 * [Angular 2 style guide](https://angular.io/docs/ts/latest/guide/style-guide.html)
 
### Other resources
 * [Firebase](https://firebase.google.com/)
 * [Material design](https://www.google.com/design/spec/material-design/)

## Installation
First of all you have to install ```npm``` and ```node.js``` to your box. Installation instructions can
be found [here](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager). 

Note that ```node.js 6.x``` is required.

```bash
$ git clone https://github.com/kamagawa/foodiemate-web.git
$ cd angular2-firebase-material-demo

# install the project's dependencies
$ npm install

# fast install (via Yarn, https://yarnpkg.com)
$ yarn install  # or yarn
```

### Configuration
See ```/src/app/config/config.ts_example``` file and copy it to ```/src/app/config/config.ts``` file and make
necessary changes to it. Note that you need a Firebase account to get all necessary config values.


## Development
To start developing in the project run:

```bash
$ npm start
# OR
$ ng serve
```

Then head to `http://localhost:4200` in your browser.

## Tests

### Unit tests
To run tests run:
```bash
$ npm test
# OR
$ ng test
```

### e2e tests
To run tests run:
```bash
$ npm run e2e
# OR
$ ng e2e
```

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Author
Eugene Wang

## License
[The MIT License (MIT)](LICENSE)

Copyright (c) 2016 Eugene Wang
