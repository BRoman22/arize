import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main';
import { Header } from '../components';
import { LangContext } from '../contexts';
import { enLangConfig } from '../constants';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <div>404</div>,
  },
  {
    path: 'invest',
    element: (
      <div style={{ height: '100vh', backgroundColor: 'red' }}>
        Invest111111
      </div>
    ),
  },
]);

const App = () => {
  return (
    <LangContext.Provider value={enLangConfig}>
      <Header />
      <RouterProvider router={router} />
    </LangContext.Provider>
  );
};

export default App;
