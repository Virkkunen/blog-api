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
  console.log(userId);
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

module.exports = { addPost, getPosts, getPostById };