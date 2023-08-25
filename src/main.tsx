import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {router} from "./routing/router.tsx";
import {ProductProvider} from "./context/ProductContext.tsx";
import {createGlobalStyle} from "styled-components";

export const Global = createGlobalStyle`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #E7F6FF;
    font-family: 'Inter', sans-serif;
  }

  li {
    list-style-type: none;
  }
`

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Global/>
        <ProductProvider>
            <RouterProvider router={router}/>
        </ProductProvider>
    </React.StrictMode>,
)
