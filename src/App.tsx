import PrimarySearchAppBar from "./components/header/PrimarySearchAppBar";
import LeftNavigation from "./components/leftMenu/LeftNavigation";
import MainBody from "./components/MainBody";
import Box from "@mui/material/Box";

function App() {
    return (
        <>
            <PrimarySearchAppBar/>
            <Box style={{display: 'flex', backgroundColor: '#121212'}}>
                <LeftNavigation/>
                <MainBody />
            </Box>
        </>
    );
}

export default App;