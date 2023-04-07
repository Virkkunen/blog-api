const { postService } = require('../services');
const { validateNewPost } = require('../utils/validateInfo');

const addPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const userId = req.user.id;

    if (validateNewPost(req.body).error) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const post = await postService.addPost(title, content, userId, categoryIds);
    return res.status(201).json(post);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: err.message });
  }
};

module.exports = { addPost };