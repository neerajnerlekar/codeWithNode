const express = require("express");
const router = express.Router();
const {
  postRegister,
  postLogin,
  getLogin,
  getLogout,
  landingPage,
  getRegister,
  getProfile,
  updateProfile
} = require("../controllers");
const { asyncErrorHandler, isLoggedIn, isValidPassword, changePassword } = require("../middleware");

/* GET home/landing page. */
router.get("/", asyncErrorHandler(landingPage));

/* GET /register page. */
router.get("/register", getRegister);

/* POST /register page. */
router.post("/register", asyncErrorHandler(postRegister));

/* GET /login page. */
router.get("/login", getLogin);

/* POST /login page. */
router.post("/login", asyncErrorHandler(postLogin));

/* GET /logout page.*/
router.get("/logout", getLogout);

/* GET /profile page. */
router.get("/profile", isLoggedIn, asyncErrorHandler(getProfile));

/* PUT /profile page. */
router.put("/profile", isLoggedIn, asyncErrorHandler(isValidPassword), asyncErrorHandler(changePassword), asyncErrorHandler(updateProfile));

/* GET /forgot page. */
router.get("/forgot", (req, res, next) => {
  res.send("GET /forgot");
});

/* PUT /forgot page. */
router.put("/forgot", (req, res, next) => {
  res.send("PUT /forgot");
});

/* GET /reset/:token page. */
router.get("/reset/:token", (req, res, next) => {
  res.send("GET /reset/:token");
});

/* PUT /reset/:token page. */
router.put("/reset/:token", (req, res, next) => {
  res.send("PUT /reset/:token");
});

module.exports = router;
