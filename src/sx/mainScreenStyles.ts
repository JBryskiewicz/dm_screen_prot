import {
    activeText, customFeatureColor,
    customPrimaryColor,
    customTetraryColor,
    inactiveText,
    secondaryActiveText
} from "./customColors";

export const mainBodyBoxStyle = {
    maxHeight: 'calc(100vh - 84px)',
    width: '72vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: activeText,
    backgroundColor: customPrimaryColor,
    margin: '10px'
}

export const mainBodyFeaturesCard = {
    height: 'calc(100% - 40px)',
    width: 'calc(100% - 40px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: customPrimaryColor,
    overflow: 'hidden',
    paddingTop: '5%'
}

export const mainBodyFeaturesContainer = {
    borderRadius: '4px',
    borderBottom: '1px solid #151515',
    boxShadow: '16x 0 #888888',
    backgroundColor: customTetraryColor,
    marginTop: '50px',
    padding: '60px 0'
}

export const mainBodyFeatureSmallCard = {
    '&:hover': {
        backgroundColor: customFeatureColor,
        transition: '.75s'
    }
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

export const latestSessionsBox = {
    marginTop: '10px'
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

export const latestSessionName = {
    fontSize: 16,
    color: activeText
}

export const latestSessionDate = {
    fontSize: 14,
    color: secondaryActiveText
}

export const latestSessionDemoNotes = {
    maxHeight: '90px',
    color: inactiveText,
    overflow: 'hidden'
}

export const latestSessionActions = {
    display: 'flex',
    justifyContent: 'space-around'
}