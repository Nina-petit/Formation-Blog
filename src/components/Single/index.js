import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import Post from 'src/components/Post';
import NotFound from 'src/components/NotFound';

const Single = ({ posts }) => {
  // useParams renvoie un objet qui contient tous nos paramètres d'url
  const { postId } = useParams();

  // eslint-disable-next-line eqeqeq
  const postToDisplay = posts.find((post) => post.id == postId);

  return (
    <div>
      {
        postToDisplay
          ? <Post {...postToDisplay} />
          : <NotFound />
      }
    </div>
  );
};

Single.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Single;
