const knex = require("./knex");

function createPost(post) {
    return knex("posts").insert(post)
};

//For Testing DONT USE IN CODE
function getAllPosts() {
    return knex("posts").select("*")
};


//Add all functions here
module.exports = {
    createPost,
    getAllPosts
}