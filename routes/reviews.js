const express = require("express");
const router = express.Router({ mergeParams: true });
const { asyncErrorHandler } = require("../middleware");
const {
  reviewCreate,
  reviewUpdate,
  reviewDestroy,
} = require("../controllers/reviews");

/* POST reviews create /posts/:id/reviews */
router.post("/", asyncErrorHandler(reviewCreate));

/* PUT reviews update /posts/:id/reviews/:reviews_id */
router.put("/:reviews_id", (req, res, next) => {
  res.send("UPDATE /posts/:id/reviews/:reviews_id");
});

/* DELETE reviews destroy /posts/:id/reviews/:reviews_id */
router.delete("/:reviews_id", (req, res, next) => {
  res.send("DELETE /posts/:id/reviews/:reviews_id");
});

module.exports = router;
