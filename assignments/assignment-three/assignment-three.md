# Assignment Three

## Assignment Title: Cleanup, Refactoring & Adding REST Endpoints to your Application

This assignment leans heavily on the lectures recorded for week eight. You can find them from [here](https://github.com/bqchristie/seneca-web322-fall-2023/tree/main)

**Objectives:**

1.  Cleaning up existing project code so that we are prepared to cleanly swap in databases for upcoming assignmnets.
2.  Demonstrate your ability to add REST endpoints with CRUD operations (create, read, update, delete)
3.  Demonstrate your ability to use a rest endpoint from the client side.

**Requirements:**

1. **Setup and Configuration:**

   - You can either start from one of the two solutions from the last project or just keep working on your current project. if you want a clean starting point use [this code](https://github.com/bqchristie/seneca-web322-fall-2023/tree/main/notes/week-eight/before)

2. **Refactoring & organizing code**

   - Some of you have already started doing this but the expectation is that all
     code route handling will be in one or more modules in a routes folder.
   - CRUD operations will be moved to modules under a folder called models. There will
     be two models: Users & Products (products can be something else of your choosing if you wish)

3. **Create a new Router** and add it to your express app with a mapping to "/api".

#### Hint:

```const apiRouter = express.Router()
    app.use("/api", apiRouter)
```

4. Configure the router to handle these four endpoints for CRUD

   - GET /api/users => returns all users from users array as a JSON array
   - GET /api/users/:id => returns a single user as JSON
   - DELETE /api/users/:id => deletes a single user and returns JSON onbject with a success method
   - POST /api/users => Adds a user to the users array and returns new user as JSON

5. Configure the router to handle these four CRUD endpoints

   - GET /api/products => returns all users from users array as a JSON array
   - GET /api/products/:id => returns a single user as JSON
   - DELETE /api/products/:id => deletes a single user and returns JSON onbject with a success method
   - POST /api/products => Adds a user to the users array and returns new user as JSON

6. Add a new login endpoint to the API

   - POST /api/login => Accepts email and password in body. - if the email exists in the array of users and the user isAdmin (look at the first user in fakeUsers.json) send back {isAuthenticated: true} - if the user does not exsist send back status 401 with {isAuthenticated: false}

7. **Create 3 service classes** for authentication, products and users.

8. **Code Quality:**

   - Write clean, well-organized, and commented code.
   - Follow best practices for routing and middleware in Express.

9. **Documentation:**

   - Provide a brief README document that explains how to run the application locally.

10. **Submission:**
    - Students are required to submit their assignments through github on the **main** branch.
    - Provide a link to the Git repository containing your code.

**Evaluation Criteria:**

The assignment will be evaluated based on the original functionality as well as code quality, documentation, and adherence to the submission method using Git.
