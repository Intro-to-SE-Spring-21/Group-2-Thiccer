const knex = require("./knex");

function createUser(post) {
    return knex("User").insert(post)
};

//For Testing DONT USE IN CODE
function getAllUsers() {
    return knex("User").select("*")
};


//Add all functions here
module.exports = {
    createUser,
    getAllUsers
}