import { createBrowserRouter } from "react-router-dom";
import Main from "../Shared/Layouts/Main";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import ProductDetails from "../Pages/Products/ProductDetails";
import Register from "../Login/Register";
import Login from "../Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/categories')
            },
            {
                path: '/allProducts/:name',
                element: <Products />,
                loader: ({ params }) => fetch(`http://localhost:5000/allProducts/${params.name}`)
            },
            {
                path: '/product/:id',
                element: <ProductDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
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