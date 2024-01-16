import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Store from './pages/Store'
import Maps from './pages/Maps'
import StoreOwner from './pages/StoreOwner'
import OrderDetails from './pages/OrderDetails'
import Contacts from './pages/Contacts'
import Login from './pages/Login'

function App() {

/* ============== outlet ============== */
  const Layout = () => {
    return (
      <main style={{ display: 'flex' }} >
        <Sidebar />
        <div style={{ padding: "20px", width: "100%" }}>
          <Navbar />
          <Outlet />
        </div>
      </main>
    )
  }

/* ============== protect route ============== */
  const localStorageValue = JSON.parse(localStorage.getItem("auth"));
  const ProtectedRoute = ({ children }) => {
    if (!localStorageValue) {
      return <Navigate to='/login' />
    }
    return children;
  }

/* ============== create Route ============== */
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoute>
        <Layout />
      </ProtectedRoute>,
      children: [
        {
          path: '/',
          element: <Dashboard />
        },
        {
          path: '/store',
          element: <Store />
        },
        {
          path: '/maps',
          element: <Maps />
        },
        {
          path: '/storeOwner',
          element: <StoreOwner />
        },
        {
          path: '/orderDetails',
          element: <OrderDetails />
        },
        {
          path: '/contacts',
          element: <Contacts />
        },
      ]

    },
    {
      path: '/login',
      element: <Login />
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
