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
  console.log(data.article);
  return data.article;
};
