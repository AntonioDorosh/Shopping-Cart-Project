import React, {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import Favorite from "../pages/Favorite.tsx";
import Validation from "../pages/Validation.tsx";

export const router = createBrowserRouter([
    {
        path: "*",
        element: <App/>,

    },
    {
        path: 'favorites',
        element: <Favorite/>,
    },
    {
        path: 'validation',
        element: <Validation/>,
    }
]);