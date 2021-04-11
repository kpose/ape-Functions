const functions = require("firebase-functions");
const app = require("express")();

const firebase = require("firebase");
const FBAuth = require("./util/FBAuth");

const { getAllPosts, makeOnePost } = require("./handlers/posts");
const { signup, login } = require("./handlers/users");

/* post routes */
app.get("/posts", getAllPosts);
app.post("/post", FBAuth, makeOnePost);

/* users route */
app.post("/signup", signup);
app.post("/login", login);

exports.api = functions.https.onRequest(app);
