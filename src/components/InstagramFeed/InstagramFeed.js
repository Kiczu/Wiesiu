import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instaApi from "../../services/instagramService";
import "./InstagramFeed.scss";

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    const getData = () => {
      instaApi.getPosts(16).then(({ data, paging }) => {
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
      <div className="instagramGrid">
        {posts.map((post) => (
          <div className="instagramGrid-item-container" key={post.id}>
            <Link to={post.permalink}>
              <div className="instagramGrid-item">
                <img
                  className="instagram-image"
                  src={post.media_url}
                  alt={post.caption}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
      <button className="instaButton" onClick={loadMorePosts}>
        Pokaż więcej
      </button>
    </div>
  );
};

export default InstagramFeed;
