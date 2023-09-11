# Week One Notes



## globals
We talked about several global methods and properties 
1. console
2. setTimeout
3. setInterval
4. __dirname
5. __filename
6. process

And one class that we had to import via require:

EventEmmiter()


## setTimeout

***setTimeout*** is like an alarm clock for your code. You use it to tell your code to wait for a specific amount of time and then do something. It's handy when you want to delay an action or schedule a task to run later.

Picture setting an alarm on your phone. You specify a time (e.g., 7:30 AM), and when that time comes, your phone does something (e.g., plays a sound). In code, setTimeout does a similar thing: it waits for a certain time (in milliseconds) and then executes a function you specify.


## setInterval

***setInterval*** is like a repeating timer. You can use it to schedule a task to repeat at regular intervals. It's helpful when you want something to happen repeatedly, like updating a clock or checking for new messages.

Think of an old-fashioned metronome used in music practice. It swings back and forth at a fixed rhythm, like 60 beats per minute. setInterval is similar; it repeatedly triggers a function you provide at a set time interval, creating a rhythm in your code.


## process
We did not get into this much but we did make use of process.exit() to kill our application.   Take a look at the node docs and see what else we can do with process.

## EventEmitter

Think of EventEmitter as a messenger or broadcaster in your code. It allows different parts of your program to communicate or signal each other when something specific happens. You can use it to send messages (events) from one part of your code to another, and any part of your code that's interested can listen for and react to those messages.

For example, imagine a doorbell in a house. The doorbell is like an EventEmitter that emits a "ring" event whenever someone presses it. The people inside the house (listeners) can respond differently when they hear the doorbell ring, like opening the door or ignoring it.

#### NOTE:  Remember that EventEmitter is not a global.  You need to add a require statment to access it.


## Running a node application

To run a node application from the command line:

```node [filename]```

i.e.

```node index.js```


A couple of people were having an issue trying to run a file taht was in a nested folder.  If for example you were in the root directory of the project but index.js was in a a folder week-one.  In that case you could eiether run from the week-one folder or set the path in the ndoe command:

```node ./week-one/index.js```



