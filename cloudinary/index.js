const crypto = require("crypto");
const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "nerlekarneeraj",
  api_key: "811615764618838",
  api_secret: process.env.CLOUDINARY_SECRET,
});
const cloudinaryStorage = require("multer-storage-cloudinary");
const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "surf-shop",
  allowedFormats: ["jpeg", "jpg", "png"],
  filename: function (req, file, cb) {
    let buf = crypto.randomBytes(16);
    buf = buf.toString("hex");
    let uniqFileName = file.originalname.replace(/\.jpeg|\.jpg|\.png/gi, "");
    uniqFileName += buf;
    cb(undefined, uniqFileName);
  },
});

module.exports = {
  cloudinary,
  storage,
};
