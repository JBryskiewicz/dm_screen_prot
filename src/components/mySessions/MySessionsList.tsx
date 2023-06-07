import {Container, Grid} from "@mui/material";
import {Session} from "../../types/types";
import MySessionsSessionCard from "./MySessionsSessionCard";
import {Dispatch, SetStateAction} from "react";

type Props = {
    sessions: Session[]
    setCheck: Dispatch<SetStateAction<number>>
}

function MySessionsList({sessions, setCheck}: Props) {
    return (
        <Container sx={{
            overflow: 'auto',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }}>
            <Grid container spacing={4} rowSpacing={1}>
                    {sessions
                        .map((session) => <MySessionsSessionCard key={session.id} session={session} setCheck={setCheck}/>)}
            </Grid>
        </Container>
    );
}

export default MySessionsList;