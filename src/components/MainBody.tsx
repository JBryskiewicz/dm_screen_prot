import Box from "@mui/material/Box";
import {latestSessionsStyle, MainBodyBoxStyle} from "../utils/customStyles";
import SessionQuickAccessList from "./SessionQuickAccessList";

function MainBody() {

    return (
        <>
            <Box sx={MainBodyBoxStyle}>
                <h1>DUNGEON MASTER SCREEN</h1>
            </Box>
            <Box sx={latestSessionsStyle}>
                <SessionQuickAccessList/>
            </Box>
        </>
    );
}

export default MainBody;