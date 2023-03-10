const util = require("util");
const multer = require("multer");
const maxSize = 10 * 1024 * 1024;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/assets/uploads/");
  },
  filename: (req, file, cb) => {
    // some logic to generate a unique name for the file name timestamp
    // split the file name and get the extension

    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

let uploadFile = multer({

  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
