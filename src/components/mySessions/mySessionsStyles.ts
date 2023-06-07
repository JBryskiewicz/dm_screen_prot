import {
    activeText,
    customPrimaryColor,
    customTetraryColor,
    inactiveText,
    secondaryActiveText
} from "../../utils/customStyles";

export const SessionsBodyBoxStyle = {
    maxHeight: 'calc(100vh - 84px)',
    width: '72vw',
    display: 'flex',
    flexDirection: 'column',
    color: activeText,
    backgroundColor: customPrimaryColor,
    margin: '10px'
}

export const mySessionsButtonBox = {
    margin: '20px',
    marginRight: '85px',
    display: 'flex',
    justifyContent: 'flex-end'
}

export const mySessionsNewButton = {
    fontSize: '1rem',
    color: inactiveText,
    border: `1px solid ${inactiveText}`,
    backgroundColor: customTetraryColor,
    '&:hover': {
        color: activeText,
        borderColor: activeText
    }
}

export const mySessionsListContainer = {
    overflow: 'auto',
    '&::-webkit-scrollbar': {
        display: 'none'
    }
}

export const MySessionsCardItem = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: 400,
    height: '240px',
    backgroundColor: customTetraryColor,
    marginBottom: '20px'
}
export const MySessionsNameStyles = {
    fontSize: 18,
    color: activeText
}

export const MySessionsDateStyles = {
    fontSize: 14,
    color: secondaryActiveText
}

export const MySessionsNotesDemo = {
    maxHeight: '80px',
    color: inactiveText,
    marginTop: '12px'
}

export const mySessionsStatisticsLabel = {
    color: activeText,
    fontSize: '2rem',
    padding: '20px 10px',
    marginTop: '8px',
    backgroundColor: customTetraryColor,
    border: `1px solid ${activeText}`
}

export const mySessionsStatisticsCard = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: 290,
    width: '18vw',
    maxHeight: '245px',
    backgroundColor: customTetraryColor,
    marginTop: '20px',
    paddingTop: '8px'
}

export const mySessionsStatisticsTypography = {
    fontSize: 16,
    color: activeText
}