# Week 8 Notes

This weeks subject is EJS but we have already covered it so mostly want to take the
time to review what we'd done in earlier assignments. The goal is to refactor (or organize/clean up our code) so that moveing forward it is more maintainable. This
all ties in well with the third assignment.

## Cleaning up your GIT repositories

For the most part you guys done a great job of using get given that it's new to you. That said there is one common problem that many of you have had.

### DO NOT COMMIT THE node_modules folder

This is probably my fault for not explaining earlier but one thing we don't want to do is including those modules in our repositories.

As our list of dependencies grows the number of files it go in there grows exponentially we can end up with a significant amount of files. The whole point of package.json is to create a file that manages all the dependencies and allow someone to build in their own environment.

So how do we clean this up.

1.  Delete node_modules and commit that change to your repository.
2.  Add a file named .gitignore to your application in the root folder
3.  in that file add the line: `node_modules`

Now when you go to commit that folder will not show up in your changes.

### Main is now the production branch.

For the next three assignments all work will be on the main branch. This means:

1.  When i get your repository I will not switch branches to look at your code.
2.  Code that is in a branch that you want in the main branch must be merged in.

You can work directly in the main but a better practice is to have a development branch then merge that into main when you are ready.
