# Assignment Two

**Assignment Title: Building a Node.js and Express Web Application with Authentication and Pagination**

**Objective:** The objective of this assignment is to create a web application using Node.js and Express that includes user authentication, a paginated list view of objects, and detailed object pages. The application should use static JSON data and hard-coded authentication. The user interfaces should be styled using either Bootstrap or Tailwind CSS. Students are required to submit their assignments through Git.

**Requirements:**

1. **Setup and Configuration:**

   - Create a new Node.js project with Express as the web framework.

2. **Authentication:**

   - Implement a fake authentication system with hard-coded credentials (e.g., username and password).
   - Create an authentication page where users can log in.
   - After successful login, users should be redirected to the paginated list view page.

   ` res.redirect('/list')`

3. ** List View or Table View:**

   - Create a basic list or table view of users.
   - Style the paginated list view using either Bootstrap or Tailwind CSS to make it visually appealing.
   - Change the /list end point so it on returns the first 25 rows of data

   NOTE:
   I have added some fake user data [here]('./fakeUsers.json') that you can use.

4. **Detail Page:**

   - Implement a detail page for each object from the list.
   - The detail page should display additional information about the selected object.
   - Include a navigation element to return to the paginated list view.

5. **Data Handling:**

   - Load data from a static JSON file to populate the list and detail pages.
   - Ensure that the data is properly formatted and displayed on the web pages.

6. **Styling:**

   - Use either Bootstrap or Tailwind CSS to style your web pages.
   - Make sure the application is visually appealing and responsive.

7. **Code Quality:**

   - Write clean, well-organized, and commented code.
   - Follow best practices for routing and middleware in Express.
   - Ensure proper error handling throughout the application.

8. **Documentation:**

   - Provide a brief README document that explains how to run the application locally.

9. **Submission:**
   - Students are required to submit their assignments through a version control system like Git.
   - Provide a link to the Git repository containing your code.

**Evaluation Criteria:**

The assignment will be evaluated based on the original functionality as well as code quality, documentation, and adherence to the submission method using Git (branch assgn-two).
