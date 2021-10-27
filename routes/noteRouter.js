const router = require("express").Router();

router
  .route("/")
  .get((req, res) => res.json({ msg: "Test Note" }))
  .post();

router.route("/:id").get().post().delete();

module.exports = router;
