import express from "express";
import homeController from "../controllers/homeController"
import userController from "../controllers/userController"

let router = express.Router();

let initWebRoutes = (app) => {
    router.get ("/" , homeController.getHomePage);

    router.get("/information" , homeController.getInformation);

    router.get("/crud" , homeController.getCRUD);

    router.post("/post-user" , homeController.postUser);

    router.get("/get-user" , homeController.getUser);

    router.get("/user-edit" , homeController.getUserEdit);

    router.post("/put-user" , homeController.putUser);

    router.post("/api/login" , userController.handleLogin)

    return app.use("/" , router);
}

module.exports = initWebRoutes