const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const dbPost = require("./db/post");
const dbUser = require("./db/user");

//Test on /test
app.get("/test", (req, res) => {
    res.status(200).json({
        success: true
    });
});

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.listen(1337, () => console.log("server is running on port 1337"));

app.get("/health", async (req, res) => {
    res.status(200).json({
        status: "ok"
    });
});

app.post("/post", async (req, res) => {
    const results = await dbPost.createPost(req.body);
    res.status(201).json({
        PID: results[0]
    });
});

app.get("/post", async (req, res) => {
    const posts = await dbPost.getAllPosts();
    res.status(201).json({
        posts
    });
});

app.post("/user", async (req, res) => {
    const results = await dbUser.createUser(req.body);
    res.status(201).json({
        UID: results[0]
    });
});

app.get("/user", async (req, res) => {
    const users = await dbUser.getAllUsers();
    res.status(201).json({
        users
    });
});