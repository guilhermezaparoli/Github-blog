import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/home';
import { Header } from '../components/Header';
import { ErrorPage } from '../pages/error-page';
import { PostPage } from '../pages/postPage';

export const router = createBrowserRouter([
  {
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/posts/:postId',
        element: <PostPage/>
      },
    ],
  },
]);
