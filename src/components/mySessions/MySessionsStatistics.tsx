import Box from "@mui/material/Box";
import {Card, CardContent, Chip} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Session} from "../../types/types";
import {latestSessionsStyle} from "../mainScreen/mainScreenStyles";
import {mySessionsStatisticsCard, mySessionsStatisticsLabel, mySessionsStatisticsTypography} from "./mySessionsStyles";

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
            <Chip label="My statistics:" sx={mySessionsStatisticsLabel}/>
            <Card sx={mySessionsStatisticsCard}>
                <CardContent>
                    <Typography sx={mySessionsStatisticsTypography} color="text.secondary" gutterBottom>
                        Account: <span style={{color: '#b1b1b1'}}>{'John Doe'}</span>
                    </Typography>
                    <Typography sx={mySessionsStatisticsTypography} color="text.secondary" gutterBottom>
                        Sessions: <span style={{color: '#b1b1b1'}}>{sessions.length}</span>
                    </Typography>
                    <Typography sx={mySessionsStatisticsTypography} color="text.secondary" gutterBottom>
                        Last created: <span style={{color: '#b1b1b1'}}>{lastCreated}</span>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default MySessionsStatistics;