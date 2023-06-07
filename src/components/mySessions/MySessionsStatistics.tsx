import {activeText, customTetraryColor, latestSessionsStyle} from "../../utils/customStyles";
import Box from "@mui/material/Box";
import {Card, CardContent, Chip} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Session} from "../../types/types";

type Props = {
    sessions: Session[];
}

function MySessionsStatistics({sessions}: Props) {

    const lastCreated = sessions.sort((a, b) =>
        new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime()
    ).at(0)
        ?.creationDate
        .toString()
        .split('T')
        .at(0);

    return (
        <Box sx={latestSessionsStyle}>
            <Chip label="My statistics:"
                  sx={{
                      color: activeText,
                      fontSize: '2rem',
                      padding: '20px 10px',
                      marginTop: '8px',
                      backgroundColor: customTetraryColor,
                      border: `1px solid ${activeText}`
                  }}/>
            <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                maxWidth: 290,
                width: '18vw',
                maxHeight: '245px',
                backgroundColor: customTetraryColor,
                marginTop: '20px',
                paddingTop: '8px'
            }}>
                <CardContent>
                    <Typography sx={{fontSize: 16, color: activeText}} color="text.secondary" gutterBottom>
                        Account: <span style={{color: '#b1b1b1'}}>{'John Doe'}</span>
                    </Typography>
                    <Typography sx={{fontSize: 16, color: activeText}} color="text.secondary" gutterBottom>
                        Sessions: <span style={{color: '#b1b1b1'}}>{sessions.length}</span>
                    </Typography>
                    <Typography sx={{fontSize: 16, color: activeText}} color="text.secondary" gutterBottom>
                        Last created: <span style={{color: '#b1b1b1'}}>{lastCreated}</span>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default MySessionsStatistics;