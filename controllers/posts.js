const Post = require("../models/post");
const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "nerlekarneeraj",
  api_key: "811615764618838",
  api_secret: process.env.CLOUDINARY_SECRET,
});

module.exports = {
  // Posts Index
  async postIndex(req, res, next) {
    let posts = await Post.find({});
    res.render("posts/index", { posts });
  },
  //Posts new
  postNew(req, res, next) {
    res.render("posts/new");
  },
  // Posts create
  async postCreate(req, res, next) {
    req.body.post.images = [];
    for (const file of req.files) {
      let image = await cloudinary.v2.uploader.upload(file.path);
      req.body.post.images.push({
        url: image.secure_url,
        public_id: image.public_id,
      });
    }
    let post = await Post.create(req.body.post);
    res.redirect(`/posts/${post.id}`);
  },
  // Posts show
  async postShow(req, res, next) {
    let post = await Post.findById(req.params.id);
    res.render("posts/show", { post });
  },
  // Posts Edit
  async postEdit(req, res, next) {
    let post = await Post.findById(req.params.id);
    res.render("posts/edit", { post });
  },
  //Post Update
  async postUpdate(req, res, next) {
    let post = await Post.findByIdAndUpdate(req.params.id, req.body.post, {
      new: true,
    });
    res.redirect(`/posts/${post.id}`);
  },
  //Post Destroy
  async postDestroy(req, res, next) {
    let post = await Post.findByIdAndRemove(req.params.id);
    res.redirect("/posts");
  },
};
