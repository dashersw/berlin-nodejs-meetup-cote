# Implementing microservices with cote

This repository holds some simple examples to demonstrate how to implement microservices in Node.js with [cote](https://github.com/dashersw/cote), A Node.js library for building fault-tolerant, scalable microservices with auto-discovery.

## Slides

The slides that talk about cote is [here](http://slides.com/armaganamcalar/cote-microservices).

## Installation

Clone the repository via

```
git@github.com:dashersw/berlin-nodejs-meetup-cote.git
```

Install NPM dependencies

```
cd berlin-nodejs-meetup-cote
npm install
```

## Running the example services

Start the example services by running the following commands in **separate** terminals

```
node time-service.js
```
```
node client.js
```
```
node publisher.js
```
```
node subscriber.js
```

## Front-end communication

There is also a front-end component to demonstrate communication with the browser. Running;

```
node frontend/server.js
```

will start an HTTP server listening to port 5555. Navigate to [http://localhost:5555](http://localhost:5555) in your browser and you can see the messages being logged in the console.
