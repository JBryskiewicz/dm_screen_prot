import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {newSessionDatePickerBody} from "../../newSession/newSessionStyles";
import React, {Dispatch, SetStateAction, useState} from "react";
import {Session} from "../../../types/types";
import {updateSessionField} from "../../../utils/apiCommunication";
import {handleOnClick} from "../../../utils/supportFunctions";
import {Button} from "@mui/material";

type Props = {
    isEditable: boolean[];
    setIsEditable: Dispatch<SetStateAction<boolean[]>>;
    session: Session;
    setCheck: Dispatch<SetStateAction<number>>;
}

function EditSessionDatePicker({ isEditable, setIsEditable, session, setCheck }: Props) {
    const [plannedDate, setPlannedDate] = useState<Date | null>(null);

    const handleDateChange = (date: Date | null) => {
        setPlannedDate(date);
    };

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        await updateSessionField('plannedDate', plannedDate, session.id);
        await setCheck(prevState => prevState === 0 ? 1 : 0);
        await handleOnClick(2, isEditable, setIsEditable);
    }

    return (
        <form onSubmit={handleSubmit} style={{display: 'flex', alignItems: 'center'}}>
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
            <Button type="submit">Save</Button>
            <Button onClick={() => handleOnClick(2, isEditable, setIsEditable)}>
                Cancel
            </Button>
        </form>
    );
}

export default EditSessionDatePicker;