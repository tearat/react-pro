import { useRoutes } from 'hookrouter';
import React from 'react';

import routes from './router';
import NotFoundPage from './pages/NotFound/index';
import Header from './components/Header/index';
import Footer from './components/Footer/index';

const App = () => {
  const match = useRoutes(routes);

  return match ? (
    <>
      <Header />
      {match}
      <Footer />
    </>
  ) : (
    <NotFoundPage />
  );
};

export default App;
