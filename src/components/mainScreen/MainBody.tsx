import Box from "@mui/material/Box";
import SessionQuickAccessList from "./sessionQuickAccess/SessionQuickAccessList";
import {latestSessionsStyle, MainBodyBoxStyle} from "./mainScreenStyles";

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