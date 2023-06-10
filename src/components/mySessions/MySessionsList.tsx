import {Container, Grid} from "@mui/material";
import {Session} from "../../types/types";
import MySessionsSessionCard from "./MySessionsSessionCard";
import {Dispatch, SetStateAction} from "react";
import {mySessionsListContainer} from "./mySessionsStyles";
import BasicLoader from "../BasicLoader";

type Props = {
    sessions: Session[]
    setCheck: Dispatch<SetStateAction<number>>
}

function MySessionsList({sessions, setCheck}: Props) {
    if(!sessions.length) {
        return <BasicLoader />
    }
    return (
        <Container sx={mySessionsListContainer}>
            <Grid container spacing={4} rowSpacing={1}>
                    {sessions
                        .map((session) => (
                            <MySessionsSessionCard
                            key={session.id}
                            session={session}
                            setCheck={setCheck}
                            />
                        ))}
            </Grid>
        </Container>
    );
}

export default MySessionsList;