import api, { endpoints } from "../api/api";

const getPosts = (limit) => {
  return api.get(endpoints.instagram.media, {
    fields: "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp",
    limit,
    access_token:
      "IGQWRNei12SlFIeTgyYUdJYXNyTEJrSU5zeWdGQlRCVENrNF84YkhybWhXQ2lGR3B1TjdxTTEwNExqbXBreUV3SG03VmoxR0Q0bDRiM2FNTzZAPaHFFMkh2QVR3VkRHYy1rMjRRZAEwyNVlGWkg5WVlDbHFSQl9DVjgZD",
  });
};

const getNextPage = (url) => {
  return api.get(url);
};

const postsServices = {
    getPosts,
    getNextPage
}
export default postsServices;
