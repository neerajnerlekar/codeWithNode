const express = require("express");
const router = express.Router({ mergeParams: true });

/* GET reviews index /posts/:id/reviews */
router.get("/", (req, res, next) => {
  res.send("index /posts/:id/reviews");
});

/* POST reviews create /posts/:id/reviews */
router.post("/", (req, res, next) => {
  res.send(" CREATE /posts/:id/reviews");
});

/* GET reviews edit /posts/:id/reviews/:reviews_id/edit */
router.get("/:reviews_id/edit", (req, res, next) => {
  res.send("EDIT /posts/:id/reviews/:reviews_id/edit");
});

/* PUT reviews update /posts/:id/reviews/:reviews_id */
router.put("/:reviews_id", (req, res, next) => {
  res.send("UPDATE /posts/:id/reviews/:reviews_id");
});

/* DELETE reviews destroy /posts/:id/reviews/:reviews_id */
router.delete("/:reviews_id", (req, res, next) => {
  res.send("DELETE /posts/:id/reviews/:reviews_id");
});

module.exports = router;
