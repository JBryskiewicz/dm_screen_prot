import {activeText, customTetraryColor, inactiveText} from "../../../utils/customStyles";
import {Button, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import {Formik, FormikHelpers} from "formik";
import axios from "axios";
import {API_URL} from "../../../utils/constants";
import {NewSession} from "../../../types/types";
import {Dispatch, SetStateAction} from "react";

const CssTextField = styled(TextField)({
    backgroundColor: customTetraryColor,
    '& label': {
        color: inactiveText
    },
    '& .MuiInputBase-input': {
        color: activeText,
    },
    '& label.Mui-focused': {
        color: activeText,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: inactiveText,
        },
        '&:hover fieldset': {
            borderColor: activeText,
        },
        '&.Mui-focused fieldset': {
            borderColor: activeText,
        },
    },
});

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
                            style={{display: 'flex', columnGap: '8px', alignItems: 'center', justifyContent: 'center'}}
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
                                sx={{
                                    fontSize: '1rem',
                                    color: inactiveText,
                                    border: `1px solid ${inactiveText}`,
                                    backgroundColor: customTetraryColor,
                                    '&:hover': {
                                        color: activeText,
                                        borderColor: activeText
                                    }
                                }}>
                                add
                            </Button>
                        </form>
                    )}
            </Formik>
        </Box>
    );
}

export default SessionQuickAccessAdd;