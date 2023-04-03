
import db from "../models/index"
import CRUDService from "../services/CRUDService"

let getHomePage = async (req,res) => {
    try {
        let data = await db.User.findAll();
        return res.render("homepage.ejs" , {
            data: JSON.stringify(data)
        });        
    } catch (e) {
        console.log(e)
    }
}

let getInformation = (req,res) => {
    return res.render("information.ejs");
}

let getCRUD = (req,res) => {
    return res.render("crud.ejs");
}

let postUser = async (req,res) => {
    let message = await CRUDService.createNewUser(req.body);
    return res.send("post user from server");
}

let getUser = async (req,res) => {
    let data = await CRUDService.getAllUser();
    return res.render("get-users" , {
        usersTable: data,
    });
}

let getUserEdit = async (req,res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        return res.render("edit-user.ejs" , {
            user : userData,
        })
    } else {
        return res.send("User not found");
    }
}

let putUser = async (req,res) => {
    let data = req.body;
    let allUsers = await CRUDService.updateUserData(data);
    return res.render("get-users.ejs" , {
        dataTable: allUsers
    })
}

module.exports = {
    getHomePage:getHomePage,
    getInformation:getInformation,
    getCRUD : getCRUD,
    postUser : postUser,
    getUser : getUser,
    getUserEdit : getUserEdit,
    putUser : putUser,
}