import {
    activeText,
    customPrimaryColor,
    customTetraryColor,
    inactiveText,
    secondaryActiveText
} from "../../utils/customStyles";

export const MainBodyBoxStyle = {
    maxHeight: 'calc(100vh - 84px)',
    width: '72vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: activeText,
    backgroundColor: customPrimaryColor,
    margin: '10px'
}

export const latestSessionsTextField = {
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

export const latestSessionsFormStyles = {
    display: 'flex',
    columnGap: '8px',
    alignItems: 'center',
    justifyContent: 'center'
}

export const latestSessionsNewButton = {
    fontSize: '1rem',
    color: inactiveText,
    border: `1px solid ${inactiveText}`,
    backgroundColor: customTetraryColor,
    '&:hover': {
        color: activeText,
        borderColor: activeText
    }
}
export const latestSessionsStyle = {
    maxHeight: 'calc(100vh - 84px)',
    width: '18vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: customPrimaryColor,
    margin: '10px 10px 10px 0',
    paddingTop: '10px'
}

export const latestSessionsListHint = {color: inactiveText,
    padding: '15px 10px',
    fontSize: '14px'
}

export const latestSessionCardStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: 290,
    width: '18vw',
    height: '220px',
    backgroundColor: customTetraryColor,
    marginBottom: '20px'
}