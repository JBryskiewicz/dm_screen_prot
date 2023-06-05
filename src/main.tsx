import React from 'react'
import ReactDOM from 'react-dom/client'
import {router} from "./utils/router";
import {RouterProvider} from "react-router-dom";
import {CssBaseline} from "@mui/material";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <CssBaseline/>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
