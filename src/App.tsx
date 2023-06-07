import PrimarySearchAppBar from "./components/header/PrimarySearchAppBar";
import LeftNavigation from "./components/leftMenu/LeftNavigation";
import Box from "@mui/material/Box";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <>
            <PrimarySearchAppBar/>
            <Box style={{display: 'flex', backgroundColor: '#121212'}}>
                <LeftNavigation/>
                <Outlet />
            </Box>
        </>
    );
}

export default App;