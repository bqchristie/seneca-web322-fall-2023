class AuthenticationService {
  static authenticate(username, password) {
    let authentication = { isAuthenticated: false };

    if (username === "admin" && password === "password") {
      authentication.isAuthenticated = true;
    }

    return authentication;
  }
}

module.exports = AuthenticationService;
