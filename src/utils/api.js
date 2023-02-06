import axios from "axios";

const request = axios.create({
  baseURL: "https://ys-back-end-news-project.onrender.com/api",
});

export const getAllArticles = () => {
  return request.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
};
