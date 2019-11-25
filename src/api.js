import axios from "axios";

export const getArticles = async (author, topic, sort_by, order) => {
  const { data } = await axios.get(
    "https://northcoder-news-backend.herokuapp.com/api/articles",
    {
      params: { author, topic, sort_by, order }
    }
  );

  return data.articles;
};

export const getArticle = async id => {
  const { data } = await axios.get(
    `https://northcoder-news-backend.herokuapp.com/api/articles/${id}`
  );

  return data.article;
};

export const getArticleComments = async (id, sort_by, order) => {
  const { data } = await axios.get(
    `https://northcoder-news-backend.herokuapp.com/api/articles/${id}/comments`,
    {
      params: {
        sort_by,
        order
      }
    }
  );

  return data.comments;
};

export const postComment = async (id, username, body) => {
  const {
    data
  } = await axios.post(
    `https://northcoder-news-backend.herokuapp.com/api/articles/${id}/comments`,
    { username, body }
  );

  return data.comment;
};

export const getUser = async user => {
  const { data } = await axios.get(
    `https://northcoder-news-backend.herokuapp.com/api/users/${user}`
  );

  return data.user;
};

export const deleteComment = async id => {
  const response = await axios.delete(
    `https://northcoder-news-backend.herokuapp.com/api/comments/${id}`
  );

  return response.status;
};

export const patchCommentVotes = async (id, incrementBy) => {
  const {
    data
  } = await axios.patch(
    `https://northcoder-news-backend.herokuapp.com/api/comments/${id}`,
    { inc_votes: incrementBy }
  );
  return data;
};

export const patchArticleVotes = async (id, incrementBy) => {
  const {
    data
  } = await axios.patch(
    `https://northcoder-news-backend.herokuapp.com/api/articles/${id}`,
    { inc_votes: incrementBy }
  );
  return data;
};
