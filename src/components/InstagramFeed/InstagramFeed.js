import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instaApi from "../../services/instagramService";
import { GrInstagram } from "react-icons/gr";
import "./InstagramFeed.scss";

const POSTS_PER_PAGE = 16;

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [username, setUsername] = useState(null);

  const profileUrl = `https://www.instagram.com/${username}/`;

  useEffect(() => {
    const getData = () => {
      instaApi.getPosts(POSTS_PER_PAGE).then(({ data, paging }) => {
        setPosts(data);
        setNextPage(paging.next);
      });
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = () => {
      instaApi.getUsername().then((data) => {
        setUsername(data.username);
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
      <Link to={profileUrl} className="instagram-profile-name">
        <GrInstagram />
        <span>{username}</span>
      </Link>
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
      <button className="instagram-button" onClick={loadMorePosts}>
        Zobacz więcej
      </button>
    </div>
  );
};

export default InstagramFeed;
