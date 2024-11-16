const multer = require("multer");
const path = require("path");

const location = "./uploads/";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, location);
  },
  filename: (req, file, cb) => {
    let fileExename = path.extname(file.originalname);
    let FileName = file.originalname
      .replace(fileExename, " ")
      .split(" ")
      .join("-");
    if (FileName) {
      cb(null, FileName + fileExename);
    } else {
      cb(null, file.originalname);
    }
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
