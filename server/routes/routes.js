const express = require("express");
const Controll = require("../controller/apicontroll");
const multer = require('../middleware/fileupload');

const route = express.Router();

//Movie insert data API
route.post("/api/movie/insert",multer.single('image'), Controll.InsertData);

//Get Movie data API
route.get("/api/movie/retrive",Controll.GetData);

module.exports = route;
