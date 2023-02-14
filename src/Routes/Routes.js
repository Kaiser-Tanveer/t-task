import { createBrowserRouter } from "react-router-dom";
import Main from "../Shared/Layouts/Main";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import ProductDetails from "../Pages/Products/ProductDetails";
import Register from "../Login/Register";
import Login from "../Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Cart from "../Pages/Cart/Cart";
import Shop from "../Shop/Shop";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://t-task-server.vercel.app/categories')
            },
            {
                path: '/products',
                element: <Shop />,
                loader: () => fetch('https://t-task-server.vercel.app/products')
            },
            {
                path: '/cart',
                element: <PrivateRoute><Cart /></PrivateRoute>,
            },
            {
                path: '/allProducts/:name',
                element: <Products />,
                loader: ({ params }) => fetch(`https://t-task-server.vercel.app/allProducts/${params.name}`)
            },
            {
                path: '/product/:id',
                element: <PrivateRoute><ProductDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://t-task-server.vercel.app/product/${params.id}`)
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/login',
                element: <Login />,
            },
        ]
    }
])

export default router;