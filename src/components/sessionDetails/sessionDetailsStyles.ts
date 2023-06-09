import {customTetraryColor, secondaryActiveText} from "../../utils/customColors";

export const sessionDetailsNameLabel = {
    width: '400px',
    fontSize: '1.375rem',
    color: secondaryActiveText,
    backgroundColor: customTetraryColor,
    border: `1px solid ${secondaryActiveText}`,
    borderRadius: '4px',
    padding: '1.7rem'
}

export const sessionDetailsCreationDateLabel = {
    fontSize: '1.125rem',
    color: secondaryActiveText,
    backgroundColor: customTetraryColor,
    border: `1px solid ${secondaryActiveText}`,
    borderRadius: '4px',
    padding: '1.7rem'
}

export const sessionDetailsNotesBox = {
    color: secondaryActiveText,
    height: '582px',
    width: '80vw',
    border: `1px solid ${secondaryActiveText}`,
    marginTop: '20px',
    padding: '12px 32px',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
        display: 'none'
    }
}

export const sessionDetailsPlannedDateLabel = {
    width: '25%',
    fontSize: '1.125rem',
    color: secondaryActiveText,
    backgroundColor: customTetraryColor,
    border: `1px solid ${secondaryActiveText}`,
    borderRadius: '4px',
    padding: '2rem',
    marginTop: '20px'
}

export const sessionDetailsQuill = {
    width: '80vw',
    height: '539px',
    color: secondaryActiveText,
    marginTop: '20px',
    marginBottom: '43px'
}

export const sessionDetailsDatePickerBox = {
    width: '80vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: '20px'
}