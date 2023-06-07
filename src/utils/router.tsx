import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import MainBody from "../components/mainScreen/MainBody";
import MySessionsBody from "../components/mySessions/MySessionsBody";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <MainBody />
            },
            {
                path: "my-sessions",
                element: <MySessionsBody />
            },
        ]
    },
]);