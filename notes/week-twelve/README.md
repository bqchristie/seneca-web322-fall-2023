# Security and client sessions

## Client session middleware

1. Install the client-sessions library

`npm install client-sessions`

2.  Add middleware to create client session

```
app.use(
    clientSessions({
        cookieName: "session",
        secret: "SECRETCODE",
        duration: 2 * 60 * 100000,
        activeDuration: 1000 * 60,
    })
);
```

3.  Add middle ware to conditionall check routes to see they are authenitcated

````app.use((req, res, next) => {
  const path = req.path;
  if (path === "/" || path.includes("/api")) {
    next();
  } else {
    if (req?.session?.auth?.isAuthenticated) {
      next();
    } else {
      res.redirect("/");
    }
  }
});```

4.  Add an authetication object to session in the page login route.

```
pageRoutes.post("/", (req, res) => {
  const { username, password } = req.body;
  const authentication = AuthenticationService.authenticate(username, password);
  if (authentication.isAuthenticated) {
    req.session.auth = authentication;
    res.redirect(`/users`);
  } else {
    res.redirect("/");
  }
});```
````
