const knex = require("./knex");

function createUser(user) {
    return knex("User").insert(user)
};

function getSpecificUser(body) {
    return knex("User").select("*").where({Name: body.Name})
}
function getSpecificUserByID(body) {
    return knex("User").select("*").where({UID: body.uid})
}

//For Testing DONT USE IN CODE
function getAllUsers() {
    return knex("User").select("*")
};


//Add all functions here
module.exports = {
    createUser,
    getSpecificUser,
    getSpecificUserByID,
    getAllUsers
}