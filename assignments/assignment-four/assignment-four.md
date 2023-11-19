# Assignment Four

## Assignment Title: Replace Fake data files with calls to either a relational databse or MongoDB

**Objectives:**

1.  In the last assignment you created service classes that read data
    from static files. We want to change that so they read from a database.
2.  You will create CRUD operations for Users, Products and a new class Orders.

**Requirements:**

1. **Setup your postgres OR mongop data:**

   - refer to the instuctions in the course text

   [Postgres Realtional DB](https://webprogrammingtoolsandframeworks.sdds.ca/Relational-Database-Postgres/introduction-to-postgres)

OR

[Mongo DB](https://webprogrammingtoolsandframeworks.sdds.ca/NoSQL-Database-MongoDB/introduction-to-mongodb)

2. **Create CRUD endpoints for our new class Order**

- GET /api/orders => returns all orders from orders array as a JSON array
- GET /api/orders/:id => returns a single user as JSON
- DELETE /api/orders/:id => deletes a single user and returns JSON onbject with a success method
- POST /api/orders => Adds a user to the orders array and returns new user as JSON

3. Install Sequelize or Mongo Dependencies

4. Establish a connection to your database fron your server.js file

5. **If doing sequelize** - Create sequelize Objects to model Users, Products and Orders.

6. **If doing mongo** - Create sequelize Objects to model Users, Products and Orders.

7. In your service classes connnect your endpoints to the database objects.

BONUS create the realtionships between order, users and products so that when
I look at a order it show the user and the product (not just id's).

BONUS2 change the Users class so that it contains a list of the users orders. I should be able to this in the users/:id endpoint.

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

## NOTE: If you want a fresh starting point for this assignment copy the code in the before folder from week-10 notes.

[HERE](https://github.com/bqchristie/seneca-web322-fall-2023/tree/main/notes/week-ten/before)
