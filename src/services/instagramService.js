import api, { endpoints } from "../api/api";

const getPosts = (limit) => {
  return api.get(endpoints.instagram.media, {
    fields: "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp",
    limit,
    access_token: process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN,
  });
};
const getUsername = () => {
  return api.get(endpoints.instagram.me, {
    fields: "username",
    access_token: process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN,
  });
};

const getNextPage = (url) => {
  return api.get(url);
};

const postsServices = {
    getPosts,
    getNextPage,
    getUsername
}
export default postsServices;
