import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Layout from './pages/Layout';
import Messages from './pages/messages/Messages';
import Applicants from './pages/applicants/Applicants';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
        errorElement: <h1>page not found</h1>
      },
      {
        path: '/messages',
        element: <Messages />
      },
      {
        path: '/applicants',
        element: <Applicants />,
        children: [
          {
            path: 'hired',
            element: <h1>hired</h1>
          },
          {
            path: 'archived',
            element: <h1>archived</h1>
          }
        ]
      }
    ]
  }
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
