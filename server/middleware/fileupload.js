const multer = require("multer");
const path = require("path");

const location = "./Uploads/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, location);
  },
  filename: (req, file, cb) => {
    let fileExename = path.extname(file.originalname);
    let FileName = file.originalname
      .repeat(fileExename, "")
      .split("")
      .join("-");
    cb(null, FileName + fileExename);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 200000 },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only jpg png or jpge image allowd"));
    }
  },
});

module.exports = upload;
