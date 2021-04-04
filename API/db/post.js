const knex = require("./knex");

function createPost(post) {
    return knex("posts").insert(post)
};

//For Testing DONT USE IN CODE minus home bc alg = hard :)
function getAllPosts() {
    return knex("posts").select("*")
};

function getAllPostsByUser() {
    return knex("posts").select("*").where({User: body.user})
}

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
    getAllPostsByUser,
    likePost
}