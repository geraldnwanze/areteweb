import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Layout from './pages/Layout';
import Messages from './pages/messages/Messages';

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
