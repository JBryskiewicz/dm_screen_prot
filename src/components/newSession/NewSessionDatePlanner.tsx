import Typography from "@mui/material/Typography";
import {secondaryActiveText} from "../../utils/customColors";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import Box from "@mui/material/Box";
import {Dispatch, SetStateAction} from "react";
import {newSessionDatePickerBody, newSessionDatePickerBox} from "./newSessionStyles";

type Props = {
    plannedDate: Date | null
    setPlannedDate: Dispatch<SetStateAction<Date | null>>
}

function NewSessionDatePlanner({plannedDate, setPlannedDate}: Props) {

    const handleDateChange = (date: Date | null) => {
        setPlannedDate(date);
    };

    return (
        <Box sx={newSessionDatePickerBox}>
            <Typography sx={{color: secondaryActiveText}}>
                Select planned date for your new session:
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    sx={newSessionDatePickerBody}
                    label="Planned date"
                    value={plannedDate}
                    onChange={handleDateChange}
                    slotProps={{textField: {variant: 'outlined'}}}
                    format="yyyy-MM-dd"
                />
            </LocalizationProvider>
        </Box>
    );
}

export default NewSessionDatePlanner;