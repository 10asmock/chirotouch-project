# ToDo Application

## About

A single-page, todo application written primarily in Polymer 3 and ES6 which lists grocery tasks to be accomplished for the day. Users are able to add, delete, and check off completed tasks.

## How to Use

Download this repository into any computer directory or run the following command: ```https://github.com/10asmock/chirotouch-project.git```

Open the project folder: ```cd chirotouch-project/polymer3```

Run the following commands so all elements are downloaded:

- ```npm install -g polymer-cli```

- ```npm install```

Once all elements are downloaded, enter ```polymer serve``` to run the application locally.

## Building Your Application

This will create builds of your application in the `build/` directory, optimized to be served in production. You can then serve the built versions by giving `polymer serve` in ```chirotouch-project/polymer3```.

## Running Tests

The application is set up to be tested via Cypress.

To install Cypress move inside ```chirotouch-project/polymer3``` and run:

```npm i cypress --save-dev```

Give it some seconds and you’re ready to go.

Before moving on scaffold Cypress’s directories with

```node_modules/.bin/cypress open```

Cypress will create its own directories under ```./cypress```

In Cypress, click ```todo_spec```, which creates a unit test that ensures your Header appears on the page after it is loaded and has the correct text.
