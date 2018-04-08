# Hachy-web
This is the web-client that allows user of Hachy to view the cataloge of eggs being scanned by the Egg. By Azure Sync Service, the webservice gets newly scanned egg as it is being created: 


## Screen shot
![screenshot](https://user-images.githubusercontent.com/7799433/38462289-84e70c60-3ab2-11e8-9587-d5706807c0a2.png)
 
## Demo
Demo： [https://hachy.azurewebsites.net](https://hachy.azurewebsites.net).

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

after ng build, to host the web app on azure, refer to (web-dist)[https://github.com/hachyEgg/hachy-web-dist.git]

## Author and License 
Copyright(c)2016 Eugene Wang [The MIT License (MIT)](LICENSE)



