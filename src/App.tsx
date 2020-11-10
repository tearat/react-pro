import { useRoutes } from 'hookrouter';
import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';

// import HomePage from './pages/Home';
// import Pokedex from './pages/Pokedex';

import routes from './router';
import NotFoundPage from './pages/NotFound/index';

const App = () => {
  const match = useRoutes(routes);

  return match || <NotFoundPage />;
  // return (
  //   <BrowserRouter>
  //     <Route path="/" exact component={HomePage} />
  //     <Route path="/pokedex" component={Pokedex} />
  //   </BrowserRouter>
  // );
};

export default App;
