import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {router} from "./routing/router.tsx";
import {ProductProvider} from "./context/ProductContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ProductProvider>
            <RouterProvider router={router}/>
        </ProductProvider>
    </React.StrictMode>,
)
