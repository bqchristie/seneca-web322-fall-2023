const EventEmiiter = require("events");
const fs = require("fs");

const myEventEmitter = new EventEmiiter();
let intervalCount = 0;

//EventEmitter
myEventEmitter.on("my-timeout-executed", () => {
  console.log("Timeout worked");
});

myEventEmitter.on("my-interval-executed", () => {
  console.log("Interval worked");
});

// setTimeout
setTimeout(() => {
  console.log("I waited three seconds");
  myEventEmitter.emit("my-timeout-executed");
}, 3000);

// setInterval
setInterval(() => {
  console.log("I will run every 5 seconds until the process dies.");
  myEventEmitter.emit("my-interval-executed");
  if (intervalCount++ === 5) {
    process.exit(0);
  }
}, 5000);
