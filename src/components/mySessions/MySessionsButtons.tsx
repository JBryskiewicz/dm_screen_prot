import {Button, Link} from "@mui/material";
import {activeText, customTetraryColor, inactiveText} from "../../utils/customStyles";
import Box from "@mui/material/Box";

function MySessionsButtons() {
    return (
        <Box sx={{ margin: '20px', marginRight: '85px',display: 'flex', justifyContent: 'flex-end'}}>
            <Link href={'#'}>
                <Button
                    sx={{
                        fontSize: '1rem',
                        color: inactiveText,
                        border: `1px solid ${inactiveText}`,
                        backgroundColor: customTetraryColor,
                        '&:hover': {
                            color: activeText,
                            borderColor: activeText
                        }
                    }}>
                    New Session
                </Button>
            </Link>
        </Box>
    );
}

export default MySessionsButtons;