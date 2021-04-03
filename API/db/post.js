const knex = require("./knex");

function createPost(post) {
    return knex("posts").insert(post)
};

//For Testing DONT USE IN CODE
function getAllPosts() {
    return knex("posts").select("*")
};

//very inefficient
function likeRequest(body){
    var post = knex("posts").select("*").where({PID: body.PID})
    return post;
}
function likePost(body,likes){
    var post = knex("posts").where({PID: body.PID}).update({Likes: likes})
    return post;
}

//Add all functions here
module.exports = {
    createPost,
    getAllPosts,
    likeRequest,
    likePost
}