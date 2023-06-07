import {Container, Grid} from "@mui/material";
import {Session} from "../../types/types";
import MySessionsSessionCard from "./MySessionsSessionCard";

type Props = {
    sessions: Session[]
}

function MySessionsList({sessions}: Props) {
    return (
        <Container sx={{
            overflow: 'auto',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }}>
            <Grid container spacing={4} rowSpacing={1}>
                    {sessions
                        .map((session) => <MySessionsSessionCard key={session.id} session={session}/>)}
            </Grid>
        </Container>
    );
}

export default MySessionsList;