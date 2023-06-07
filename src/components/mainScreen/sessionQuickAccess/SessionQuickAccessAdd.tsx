import {Button, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import {Formik, FormikHelpers} from "formik";
import axios from "axios";
import {API_URL} from "../../../utils/constants";
import {NewSession} from "../../../types/types";
import {Dispatch, SetStateAction} from "react";
import {latestSessionsFormStyles, latestSessionsNewButton, latestSessionsTextField} from "../mainScreenStyles";

const CssTextField = styled(TextField)(latestSessionsTextField);

type Props = {
    setCheck: Dispatch<SetStateAction<number>>
}

type FormValues = {
    sessionName: string;
}

function SessionQuickAccessAdd({setCheck}: Props) {

    async function postSession(data: NewSession) {
        await axios.post(API_URL, data);
    }

    async function handleSubmit(value: FormValues, {setSubmitting}: FormikHelpers<FormValues>) {
        const newSession: NewSession = {
            name: value.sessionName,
            notes: "",
            creationDate: new Date(),
            plannedDate: new Date()
        }

        await postSession(newSession);
        await setSubmitting(false);
        await setCheck(prevState => prevState === 0 ? 1 : 0);
        value.sessionName = '';
    }

    return (
        <Box sx={{marginTop: '10px'}}>
            <Formik
                initialValues={{
                    sessionName: ''
                }}
                onSubmit={handleSubmit}
            >
                {
                    ({ values, handleSubmit, handleChange, isSubmitting }) => (
                        <form
                            onSubmit={handleSubmit}
                            style={latestSessionsFormStyles}
                        >
                            <CssTextField
                                required
                                label="Session name"
                                id="sessionName"
                                name="sessionName"
                                value={values.sessionName}
                                onChange={handleChange}
                            />
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                sx={latestSessionsNewButton}>
                                add
                            </Button>
                        </form>
                    )}
            </Formik>
        </Box>
    );
}

export default SessionQuickAccessAdd;