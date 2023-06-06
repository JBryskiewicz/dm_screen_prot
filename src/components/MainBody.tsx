import Box from "@mui/material/Box";
import {
    activeText,
    customSecondaryColor,
    inactiveText,
    latestSessionsStyle,
    MainBodyBoxStyle
} from "../utils/customStyles";
import {Button, Card, CardActions, CardContent, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const CssTextField = styled(TextField)({
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

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

function MainBody() {
    return (
        <>
            <Box sx={MainBodyBoxStyle}>
                <h1>DUNGEON MASTER SCREEN</h1>
            </Box>
            <Box sx={latestSessionsStyle}>
                <Box sx={{display: 'flex', columnGap: '8px', backgroundColor: customSecondaryColor}}>
                    <CssTextField
                        required
                        label="Session name"
                        id="custom-css-outlined-input"
                    />
                    <Button sx={{
                        fontSize: '1rem',
                        color: inactiveText,
                        border: `1px solid ${inactiveText}`,
                        '&:hover': {
                            color: activeText,
                            borderColor: activeText
                        }
                    }}>
                        add
                    </Button>
                </Box>
                <Box sx={{paddingTop: '20px'}}>
                    <Card sx={{ maxWidth: 290, width: '18vw' }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="div">
                                be{bull}nev{bull}o{bull}lent
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Box>
        </>
    );
}

export default MainBody;