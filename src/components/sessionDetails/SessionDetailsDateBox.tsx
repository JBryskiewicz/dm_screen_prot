import {Session} from "../../types/types";
import {Dispatch, SetStateAction, useState} from "react";
import {sessionDetailsDatePickerBox} from "./sessionDetailsStyles";
import Typography from "@mui/material/Typography";
import {secondaryActiveText} from "../../utils/customColors";
import {SessionDetailsPlannedDate} from "./SessionDetailsDisplayComponents";
import EditSessionDatePicker from "./editSessionDetails/EditSessionDatePicker";
import Box from "@mui/material/Box";

type Props = {
    session: Session;
    setCheck: Dispatch<SetStateAction<number>>;
}

function SessionDetailsDateBox({ session, setCheck }: Props) {
    const [isEditable, setIsEditable] = useState<boolean>(false);

    return (
        <Box sx={sessionDetailsDatePickerBox}>
            <Typography sx={{color: secondaryActiveText}}>
                Your session is planned for:
            </Typography>
            {isEditable === false
                ? <SessionDetailsPlannedDate
                    isEditable={isEditable}
                    setIsEditable={setIsEditable}
                    session={session}/>
                : <EditSessionDatePicker
                    isEditable={isEditable}
                    setIsEditable={setIsEditable}
                    session={session}
                    setCheck={setCheck}/>
            }
        </Box>
    );
}

export default SessionDetailsDateBox;