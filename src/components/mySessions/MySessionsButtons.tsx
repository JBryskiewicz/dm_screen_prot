import {Button, Link} from "@mui/material";
import Box from "@mui/material/Box";
import {mySessionsButtonBox, mySessionsNewButton} from "../../sx/mySessionsStyles";

function MySessionsButtons() {
    return (
        <Box sx={mySessionsButtonBox}>
            <Link href={'/new-session'}>
                <Button
                    sx={mySessionsNewButton}>
                    New Session
                </Button>
            </Link>
        </Box>
    );
}

export default MySessionsButtons;