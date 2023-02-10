import { createBrowserRouter } from "react-router-dom";
import Main from "../Shared/Layouts/Main";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import ProductDetails from "../Pages/Products/ProductDetails";

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
        ]
    }
])

export default router;