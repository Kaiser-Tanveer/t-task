import { createBrowserRouter } from "react-router-dom";
import Main from "../Shared/Layouts/Main";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";

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
        ]
    }
])

export default router;