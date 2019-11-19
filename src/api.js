import axios from "axios";

export const getArticles = async author => {
  const { data } = await axios.get(
    "https://northcoder-news-backend.herokuapp.com/api/articles",
    {
      params: { author: "weegembump" }
    }
  );
  return data.articles;
};

export const getArticle = async id => {
  const { data } = await axios.get(
    `https://northcoder-news-backend.herokuapp.com/api/articles/${id}`
  );
  // console.log(data.article);
  return data.article;
};

export const getArticleComments = async (id, sort_by, order) => {
  console.log(id, sort_by, order);
  const { data } = await axios.get(
    `https://northcoder-news-backend.herokuapp.com/api/articles/${id}/comments`,
    {
      params: {
        sort_by,
        order
      }
    }
  );
  console.log(data);
  return data.comments;
};
