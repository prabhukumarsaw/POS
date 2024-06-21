
import ReactDOM from 'react-dom/client'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { ToastContainer } from 'react-toastify';



ReactDOM.createRoot(document.getElementById('root')).render(
 
  <CartProvider>
    <RouterProvider router={router} />
    <ToastContainer />
  </CartProvider>  
 
  
)
