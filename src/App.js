import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Layout from './pages/Layout';
import Messages from './pages/messages/Messages';
import Applicants from './pages/applicants/Applicants';
import ApplicantsLayout from './pages/applicants/ApplicantsLayout';
import Archived from './pages/applicants/Archived';
import Hired from './pages/applicants/Hired';
import Referrals from './pages/referrals/Referrals';
import BusinessProfile from './pages/business/BusinessProfile';

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
        element: <ApplicantsLayout />,
        children: [
          {
            path: '/applicants',
            element: <Applicants />,
            errorElement: <h1>page not found</h1>
          },
          {
            path: '/applicants/hired',
            element: <Hired />
          },
          {
            path: '/applicants/archived',
            element: <Archived  />
          }
        ]
      },
      {
        path: '/referrals',
        element: <Referrals />
      },
      {
        path: '/business-profile',
        element: <BusinessProfile />
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
