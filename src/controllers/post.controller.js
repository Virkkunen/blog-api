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

const getPosts = async (req, res) => {
  try {
    const userId = req.user.id;
    const posts = await postService.getPosts(userId);
    if (!posts) return res.status(404).json({ message: 'Post not found' });
    return res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: err.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const post = await postService.getPostById(id, userId);
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    return res.status(200).json(post);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: err.message });
  }
};

module.exports = { addPost, getPosts, getPostById };