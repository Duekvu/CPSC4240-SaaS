"use strict";
exports.__esModule = true;
var googleOauth2_1 = require("./googleOauth2");
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// Creates a Passport configuration for Google
var GooglePassport = /** @class */ (function () {
    function GooglePassport() {
        this.clientId = googleOauth2_1["default"].id;
        this.secretId = googleOauth2_1["default"].secret;
        // Configure user GoogleStrategy
        passport.use(new GoogleStrategy({
            clientID: this.clientId,
            clientSecret: this.secretId,
            // callbackURL: "http://localhost:3000/auth/google/callback",
            callbackURL: "https://tutornowsu.azurewebsites.net/auth/google/callback",
            profileFields: ['id', 'displayName', 'emails']
        }, function (accessToken, refreshToken, profile, done) {
            // Federated function
            process.nextTick(function () {
                console.log("access token: ", accessToken);
                console.log("refreshToken: ", refreshToken);
                console.log('validating google profile:' + JSON.stringify(profile));
                // this.userId = profile.id;
                // this.displayName = profile.displayName;
                // this.email = profile.emails[0].value;
                console.log("id: ", profile.id);
                return done(null, profile);
            });
        }));
        passport.serializeUser(function (user, done) {
            done(null, user);
        });
        passport.deserializeUser(function (user, done) {
            done(null, user);
        });
    }
    return GooglePassport;
}());
exports["default"] = GooglePassport;
