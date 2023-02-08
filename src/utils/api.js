import axios from "axios";

const request = axios.create({
  baseURL: "https://ys-back-end-news-project.onrender.com/api",
});

export const getAllArticles = () => {
  return request.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
};

export const getArticleById = (article_id) => {
  return request
    .get(`/articles/${article_id}`)
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const getCommentsByArticleId = (article_id) => {
  return request
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const patchArticle = (article_id, inc_votes) => {
  const patchBody = {
    inc_votes: inc_votes,
  };

  return request.patch(`/articles/${article_id}`, patchBody);
};
