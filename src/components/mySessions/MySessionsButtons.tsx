import {Button} from "@mui/material";
import Box from "@mui/material/Box";
import {mySessionsButtonBox, mySessionsNewButton} from "../../sx/mySessionsStyles";
import {Link} from "react-router-dom";

function MySessionsButtons() {
    return (
        <Box sx={mySessionsButtonBox}>
            <Link to={'/new-session'}>
                <Button
                    sx={mySessionsNewButton}>
                    New Session
                </Button>
            </Link>
        </Box>
    );
}

export default MySessionsButtons;