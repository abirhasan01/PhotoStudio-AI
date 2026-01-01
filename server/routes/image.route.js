const generateImage = require("../controllers/image.controller");
const authUser = require("../middleware/auth");
const imageRouter = require("express").Router();

imageRouter.post("/generate-image", authUser, generateImage);

module.exports = imageRouter;
