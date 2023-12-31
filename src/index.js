// == Import : npm
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';

// == Import : local
// Composants
import Blog from 'src/components/Blog';

// == Render
// 1. Le composant racine (celui qui contient l'ensemble de l'app)
const rootComponent = (
  <BrowserRouter>
    <Blog />
  </BrowserRouter>
);

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// Le rendu de React => DOM
render(rootComponent, target);
