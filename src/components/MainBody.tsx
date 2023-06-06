import Box from "@mui/material/Box";
import {latestSessionsStyle, MainBodyBoxStyle} from "../utils/customStyles";
import SessionQuickAccessList from "./SessionQuickAccessList";
import SessionQuickAccessAdd from "./SessionQuickAccessAdd";

function MainBody() {
    return (
        <>
            <Box sx={MainBodyBoxStyle}>
                <h1>DUNGEON MASTER SCREEN</h1>
            </Box>
            <Box sx={latestSessionsStyle}>
                <SessionQuickAccessAdd />
                <SessionQuickAccessList />
            </Box>
        </>
    );
}

export default MainBody;