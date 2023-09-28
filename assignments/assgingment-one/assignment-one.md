# WEB322-Assignment One
## Traffic Light 

### Due Date: September 15, 2023


### The Objective


 In our first lab together we made a simple Node application that used:
  * setTimeOut 
  * setInterval
  * EventEmmitter
   
These are all ways to manage asynchronous code.   If you need a review I have added some notes and sample code[here](../notes/week-one/README.md).

For the first assignment we will put these concepts together in a simple application.

#### NOTE
We will also put Git/Github to use here.  This is not part of this weeks course material but is a fundamental skill for web development.   

I will provide all the instructon you need.  In class on Tuesday I will go over it in detail.

With the repository in place you won't need to submit anything.  I will simply clone your repository and run from my machine.


### Challenge Description:

Create a simple Node.js program that simulates a basic traffic light using the concepts mentioned. The traffic light should have three colors: Red, Yellow, and Green. The traffic light should cycle through these colors with the following behavior:

1. Display "Red" using console.log for 5 seconds.
2. Display "Yellow" for 2 seconds.
3. Display "Green" for 5 seconds.
4. The cycle should repeat indefinitely. 
5. Implement an event emitter to emit an event ```console.log('The light just changed')```` whenever the color changes. 
6. Bonus: The event should include the current color as a parameter.



### Pre-requisites

1. Create a Github respoitory name WEB322-[firstName]-[lastName].   For example mine will be WEB322-Bruce-Christie.   (If your name is very long please feel free to abbreviate as long as it is obvious who you are).

2. Create a branch of the repositpory called "assgn-one"

3. Create a file called ```index.js``` where you will write all your code.

Getting this setup will account for 40% of the mark.   


#### Tips on how to approach.

1.  Break the problem down into small increments.  
2.  Once you have got a small piece working ***commit***! You can always get back to where you were.
3.  I like to add the spec to the code as comments.   This keeps me on track and reminds me of what I am working on.



#### ....let me help start you off
1.  Create a file called index.js - commit
2.  Add a console message to say "hello world" run 
        ```node index.js```.  If it works - commit
3.  add the interval timer

...etc

If you get to step 2 you are already at a oassing grade.




## Mark Breakdown
|  % | Task  |
|---|---|
| 40  |   Getting github reposistory and branch setup.|
|  20 |  when i run ```node index.js it should execute`` |
|  20 |  The light changes work |
|  20 |  The event emitter works |


It is very imprtant to get to the point where I can run the application even if it just says "HelloWorld".   That will get you to a pass.  The rest is where you challenge yourself a bit.





