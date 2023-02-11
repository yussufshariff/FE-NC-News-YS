import axios from "axios";

const request = axios.create({
  baseURL: "https://ys-back-end-news-project.onrender.com/api",
});

export const getAllArticles = (topic, sortBy, order) => {
  return request
    .get("/articles", {
      params: {
        topic: topic,
        sort_by: sortBy,
        order: order,
      },
    })
    .then(({ data: { articles } }) => {
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

export const postComment = (article_id, newComment, username) => {
  const postBody = {
    username: username,
    body: newComment,
  };
  return request
    .post(`/articles/${article_id}/comments`, postBody)
    .then(({ data }) => {
      return data;
    });
};

export const deleteComment = (comment_id) => {
  return request.delete(`/comments/${comment_id}`).then(({ data }) => {
    console.log(data);
    return data;
  });
};

export const getUsers = () => {
  return request.get("/users").then(({ data }) => {
    console.log(data);
    return data;
  });
};
