const express = require("express");
const router = express.Router();
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });
const {
  postRegister,
  postLogin,
  getLogin,
  getLogout,
  landingPage,
  getRegister,
  getProfile,
  updateProfile,
  getForgotPw,
  putForgotPw,
  getReset,
  putReset
} = require("../controllers");
const { asyncErrorHandler, isLoggedIn, isValidPassword, changePassword } = require("../middleware");

/* GET home/landing page. */
router.get("/", asyncErrorHandler(landingPage));

/* GET /register page. */
router.get("/register", getRegister);

/* POST /register page. */
router.post("/register", upload.single('image'), asyncErrorHandler(postRegister));

/* GET /login page. */
router.get("/login", getLogin);

/* POST /login page. */
router.post("/login", asyncErrorHandler(postLogin));

/* GET /logout page.*/
router.get("/logout", getLogout);

/* GET /profile page. */
router.get("/profile", isLoggedIn, asyncErrorHandler(getProfile));

/* PUT /profile page. */
router.put("/profile", isLoggedIn, upload.single('image'), asyncErrorHandler(isValidPassword), asyncErrorHandler(changePassword), asyncErrorHandler(updateProfile));

/* GET /forgot page. */
router.get('/forgot-password', getForgotPw);

/* PUT /forgot page. */
router.put('/forgot-password', asyncErrorHandler(putForgotPw));

/* GET /reset/:token page. */
router.get('/reset/:token', asyncErrorHandler(getReset));

/* PUT /reset/:token page. */
router.put('/reset/:token', asyncErrorHandler(putReset));

module.exports = router;
