import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import Post from 'src/components/Post';

import './styles.scss';

const Posts = ({ posts, isZen }) => (
  <main className="posts">
    <h1
      className={classNames('posts-title', { 'posts-title--zen': isZen })}
    >
      Dev Of Thrones
    </h1>
    <div
      className={classNames('posts-list', { 'posts-list--zen': isZen })}
    >
      {posts.map((post) => (
        <Post
          key={post.id}
          {...post}
        />
      ))}
    </div>
  </main>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isZen: PropTypes.bool.isRequired,
};

export default Posts;
