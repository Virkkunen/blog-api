const { Op } = require('sequelize');
const { BlogPost, PostCategory, Category, User } = require('../models');

const addPost = async (title, content, userId, categoryIds) => {
  // get categories
  const findCategories = await Category.findAll({ where: { id: categoryIds } });
  if (findCategories.length !== categoryIds.length) {
    throw new Error('one or more "categoryIds" not found');
  }
  // build post
  const post = await BlogPost.create({
    title,
    content,
    userId,
    published: new Date(),
    updated: new Date(),
  });
  // build categories
  const categories = await findCategories.map((cat) => ({
    postId: post.id,
    categoryId: cat.id,
  }));
  // create post categories
  await PostCategory.bulkCreate(categories);

  return post;
};

const getPosts = async (userId) => {
  const posts = await BlogPost.findAll({
    where: { userId },
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

  return posts;
};

const getPostById = async (userId, id) => {
  const post = await BlogPost.findOne({
    where: { userId, id },
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });
  return post;
};

const getPostByIdAllUsers = async (id) => {
  const post = await BlogPost.findOne({ where: { id } });
  return post;
};

const updatePost = async (userId, id, title, content) => {
  await BlogPost.update({ title, content, updated: new Date() }, { where: { userId, id } });
  const post = await BlogPost.findOne({
    where: { userId, id },
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

  return post;
};

const deletePost = async (userId, id) => {
  try {
    const result = await BlogPost.destroy({ where: { userId, id } });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
};

const findPost = async (query) => {
  try {
    const post = await BlogPost.findAll({
      // Op.or []: [], Op.like []: ``
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${query}%` } },
          { content: { [Op.like]: `%${query}%` } },
        ],
      },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return post;
  } catch (err) {
    console.error(err);
    return err;
  }
};

module.exports = { 
  addPost, 
  getPosts,
  getPostById, 
  updatePost,
  deletePost,
  getPostByIdAllUsers,
  findPost,
};