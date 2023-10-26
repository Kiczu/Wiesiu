import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instaApi from "../../services/instagramService";
import "./InstagramFeed.scss";

const POSTS_PER_PAGE = 16; 

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    const getData = () => {
      instaApi.getPosts(POSTS_PER_PAGE).then(({ data, paging }) => {
        setPosts(data);
        setNextPage(paging.next);
      });
    };
    getData();
  }, []);

  const loadMorePosts = () => {
    instaApi.getNextPage(nextPage).then(({ data, paging }) => {
      setPosts((prev) => [...prev, ...data]);
      setNextPage(paging.next);
    });
  };

  return (
    <div className="container-grid">
      <div className="instagram-grid">
        {posts.map((post) => (
          <div className="instagram-grid-item-container" key={post.id}>
            <Link to={post.permalink}>
              <div className="instagram-grid-item">
                <img
                  className="instagram-image"
                  src={post.media_url}
                  alt={post.id}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
      <button className="instaButton" onClick={loadMorePosts}>
        Zobacz więcej
      </button>
    </div>
  );
};

export default InstagramFeed;
