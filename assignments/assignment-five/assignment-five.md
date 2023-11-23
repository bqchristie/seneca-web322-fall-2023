# WEB322 - Assignment Five

## DRAFT

**I am still working on this but wanted to put it out there in case you want to get started early**

## Objective

The purpose of this final assignment is to tie everything you've done together and make it live!

### Part One - Deoplying your code

1.  All code should be in the root node of your
    github driectory on your main branch. (I will provide start code for anyone who needs a fresh start)
2.  Create and account on [Cyclic](https://webprogrammingtoolsandframeworks.sdds.ca/Resources/cyclic-guide) using your github account.
3.  Create a project and connect it to the main branch of your repository.
4.  Deploy the app.
5.  When you have the url generated for your app please add the url as a link in your readme file. To create a link in a mrakdown file use this format. Please make this the very lasy line in your readme.md

`[My Application](https://[your-url])` 6. Verify that the application is up and running.

## Part Two

1. Make sure that bothe your api AND page routes are connected to the database you chose.
2. Create list and detail pages for both users and products (formatting is not important but they do need to work). I should be able to navigate in to the deatil pages by clicking an individual item.
3. Implement authentication middleware for the **PAGE ROUTES ONLY**. In othe words I should be able to see the api routes without logging in but the users list and products list should be proteceted. The authentication should be work with (can be hardcoded or programmed):  
   **username = admin, password= password.**

4. Adjust the login page so that it has an h1 tag with your full name e.g. `<h1>Your Name</h1>`
5. Make sure your application as a naviagtion menu that lets me get to the proucts page and the users page.

## Grading

I will approach this like an end user. It either works or it doesn't. The only reason I will touch your repo is to get the link and add your grade.

1. I will go to your repostory and find in the link to your app in the README in the main branch of your repository.
2. I will click the link that should bring me to your login page.
3. I will login with credentials admin/password. which should take me to the users page.
4. At the top of the page I should see links to both teh products page and the users page.
5. From there i will click on a single user
6. I will post a user to your api and go back to the list to see if is there.
7. I will navigate to products page to see the ist of products.
8. I will click an item to do to the detail page.
9. I will use the product delete api to delete an item.
10. I will go back to the list to validate that it is no longer there.

That is all. Each test will be worth 10% of the grade. You have virtually everything you need already and there is stil plenty of time for questions. This is a golden opportunity to get 100%.

Get started as soon as you can!
