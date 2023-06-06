import {activeText, customTetraryColor, inactiveText} from "../utils/customStyles";
import {Button, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";

const CssTextField = styled(TextField)({
    backgroundColor: customTetraryColor,
    '& label': {
        color: inactiveText
    },
    '& .MuiInputBase-input': {
        color: activeText,
    },
    '& label.Mui-focused': {
        color: activeText,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: inactiveText,
        },
        '&:hover fieldset': {
            borderColor: activeText,
        },
        '&.Mui-focused fieldset': {
            borderColor: activeText,
        },
    },
});

function SessionQuickAccessAdd() {
    return (
        <Box sx={{display: 'flex', columnGap: '8px'}}>
            <CssTextField
                required
                label="Session name"
                id="custom-css-outlined-input"
            />
            <Button sx={{
                fontSize: '1rem',
                color: inactiveText,
                border: `1px solid ${inactiveText}`,
                backgroundColor: customTetraryColor,
                '&:hover': {
                    color: activeText,
                    borderColor: activeText
                }
            }}>
                add
            </Button>
        </Box>
    );
}

export default SessionQuickAccessAdd;