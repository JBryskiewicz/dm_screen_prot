import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import MainBody from "../components/mainScreen/MainBody";
import MySessionsBody from "../components/mySessions/MySessionsBody";
import NewSessionBody from "../components/newSession/NewSessionBody";

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
                element: <MySessionsBody />,
            },
            {
                path: "new-session",
                element: <NewSessionBody />
            }
        ]
    },
]);