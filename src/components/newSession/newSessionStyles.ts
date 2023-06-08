import {
    activeText,
    customPrimaryColor, customSecondaryColor,
    customTetraryColor,
    inactiveText,
    secondaryActiveText
} from "../../utils/customColors";

export const newSessionBodyBox = {
    maxHeight: 'calc(100vh - 84px)',
    width: '87.5vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: activeText,
    backgroundColor: customPrimaryColor,
    margin: '10px',
    padding: '20px'
}

export const newSessionUpperBox = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80vw'
}

export const newSessionsNameField = {
    width: '400px',
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
        borderBottomColor: secondaryActiveText,
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
}

export const newSessionQuill = {
    width: '80vw',
    height: '440px',
    color: secondaryActiveText,
    backgroundColor: customSecondaryColor,
    marginTop: '20px'
}