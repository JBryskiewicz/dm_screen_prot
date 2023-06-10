import {CircularProgress} from "@mui/material";
import Box from "@mui/material/Box";

function BasicLoader() {
    return (
        <Box sx={{ height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <CircularProgress />
        </Box>
    );
}

export default BasicLoader;