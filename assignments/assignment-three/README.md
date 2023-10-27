# Assignment Three

## Assignment Title: Adding REST Endpoints to your Application - Calling endpoint from Client

**Objectives:**

1.  Cleaning up existing project code so that we are prepared to cleanly swap in databases for upcoming assignmnets.
2.  Demonstrate your ability to add REST endpoints with CRUD operations (create, read, update, delete)
3.  Demonstrate your ability to use a rest endpoint from the client side.

**Requirements:**

1. **Setup and Configuration:**

   - You can either start from one of the two solutions from the last project or just keep working on your current project.

2. **Refactoring & organizing code**

   - Some of you have already started doing this but the expectation is that all
     code route handling will be in one or more modules in a routes folder.
   - CRUD operations will be moved

3. Create a new Router and add it to your express app with a mapping to "/api".

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

6. Add a new login endpoiny

   - POST /api/login => Accepts email and password in body. - if the email exists in the array of users and the user isAdmin (look at the first user in fakeUsers.json) send back {message: "Logged In"} - if the user does not exsist send back status 401 with {message: "Authorization failed"}

7. From the login page create a javascript method that calls /api/login using fetch()

#### Hint:

`fetch("http://localhost:3000/api/login",{method:POST, body:{email:'admin@gmail.com',password:''whatver'}})`

5.  Handle the login response in the **client/broswer**

    - if the user is authorized redirect them to the list page
    - if the user is not authorized show an error message on the screen

6.  **Code Quality:**

    - Write clean, well-organized, and commented code.
    - Follow best practices for routing and middleware in Express.

7.  **Documentation:**

    - Provide a brief README document that explains how to run the application locally.

8.  **Submission:**
    - Students are required to submit their assignments through a version control system like Git.
    - Provide a link to the Git repository containing your code.

**Evaluation Criteria:**

The assignment will be evaluated based on the original functionality as well as code quality, documentation, and adherence to the submission method using Git.
