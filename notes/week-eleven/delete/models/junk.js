//session middleware
app.use(
    clientSessions({
        cookieName: "session",
        secret: "SECRETCODE",
        duration: 2 * 60 * 100000,
        activeDuration: 1000 * 60,
    })
);

app.use((req, res, next) => {
    if (req.path != "/" && !req.path.includes("/api") && !req?.session?.auth) {
        res.redirect("/");
    } else {
        next();
    }
});

req.session.auth = authentication;
