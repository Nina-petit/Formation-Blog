// == Import
import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Composants
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
import NotFound from 'src/components/NotFound';
import Single from 'src/components/Single';
import Spinner from 'src/components/Spinner';

// data, styles et utilitaires
import categoriesData from 'src/data/categories';
import './styles.scss';

const axios = require('axios');

// eslint-disable-next-line arrow-body-style
const getPostsByCategory = (posts, category) => {
  // si la catégorie demandée est "accueil"
  // alors on va simplement renvoyer tous les posts
  if (category === 'Accueil') {
    return posts;
  }

  // sinon, on fera notre filtrage
  return posts.filter((post) => post.category === category);
};

// == Composant
const Blog = () => {
  const [zenMode, setZenMode] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleZenClick = () => {
    setZenMode(!zenMode);
  };

  const handleLoadClick = () => {
    console.log('chargement des articles');
    // on met l'état loading a true
    setLoading(true);

    // TODO : chargement des posts depuis l'api (challenge)
    axios.get('https://oclock-open-apis.vercel.app/api/blog/posts')
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="blog">
      <Header
        categories={categoriesData}
        onZenClick={handleZenClick}
        isOnZenMode={zenMode}
      />
      <button type="button" onClick={handleLoadClick}>
        Loading
      </button>
      {loading && <Spinner />}
      {!loading && (
      <Switch>
        {categoriesData.map((category) => (
          <Route
            key={category.route}
            exact
            path={category.route}
          >
            <Posts isZen={zenMode} posts={getPostsByCategory(posts, category.label)} />
          </Route>
        ))}
        <Route path="/post/:postId">
          <Single posts={posts} />
        </Route>
        <Redirect from="/jquery" to="/autre" />
        <Route>
          <NotFound />
        </Route>
      </Switch>
      )}
      <Footer />
    </div>
  );
};

// == Export
export default Blog;
