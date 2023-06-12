import {
    activeText,
    secondaryActiveText
} from "../../utils/customColors";
import {Card, CardContent, Container, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {
    mainBodyBoxStyle,
    mainBodyFeaturesCard, mainBodyFeaturesContainer,
    mainBodyFeatureSmallCard
} from "../../sx/mainScreenStyles";
import Box from "@mui/material/Box";

const FEATURE_TITLE = 'Feature'
const FEATURE_DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' +
    ' incididunt ut labore et dolore magna aliqua.'

function Introduction() {
    return (
        <Box sx={mainBodyBoxStyle}>
            <Box sx={mainBodyFeaturesCard}>
                <Typography variant={'h4'} color={activeText} sx={{fontWeight: 500}}>
                    Welcome to "Dungeon Master Screen"
                </Typography>
                <Typography variant={'h6'} color={secondaryActiveText} sx={{marginTop: '20px'}}>
                    checkout this app's features!
                </Typography>
                <Container sx={mainBodyFeaturesContainer}>
                    <Grid
                        container spacing={{xs: 4, md: 6}}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                        justifyContent={'center'}
                    >
                        {Array.from(Array(6)).map((_, index) => (
                            <Grid item xs={4} md={4} key={index}>
                                <Card sx={mainBodyFeatureSmallCard}>
                                    <CardContent>
                                        <h4>{FEATURE_TITLE} {index + 1}</h4>
                                        <p>{FEATURE_DESCRIPTION}</p>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

export default Introduction;