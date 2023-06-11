import {
    activeText,
    customPrimaryColor,
    customTetraryColor,
    inactiveText,
    secondaryActiveText
} from "../utils/customColors";

export const newSessionBodyBox = {
    maxHeight: 'calc(100vh - 84px)',
    width: '87.5vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: activeText,
    backgroundColor: customPrimaryColor,
    margin: '10px',
    padding: '50px 20px'
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
    height: '540px',
    color: secondaryActiveText,
    marginTop: '20px'
}

export const newSessionDatePickerBox = {
    width: '80vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: '60px'
}

export const newSessionDatePickerBody = {
    width: '20%',
    minWidth: '300px',
    backgroundColor: customTetraryColor,
    border: `1px solid ${secondaryActiveText}`,
    borderRadius: '4px',
    marginTop: '10px',
    '& label': {
        color: inactiveText
    },
    '& .MuiInputBase-input': {
        color: inactiveText
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
    '& .MuiSvgIcon-root': {
        color: secondaryActiveText,
    }
}