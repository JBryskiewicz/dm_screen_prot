import {customTetraryColor, secondaryActiveText} from "./customColors";

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
    height: '582px',
    width: '80vw',
    color: secondaryActiveText,
    backgroundColor: customTetraryColor,
    border: `1px solid ${secondaryActiveText}`,
    marginTop: '20px',
    padding: '16px',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
        display: 'none'
    }
}

export const sessionDetailsPlannedDateLabel = {
    width: '20%',
    fontSize: '1.125rem',
    color: secondaryActiveText,
    backgroundColor: customTetraryColor,
    border: `1px solid ${secondaryActiveText}`,
    borderRadius: '4px',
    padding: '1.75rem 0',
    marginTop: '10px'
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