import {customTetraryColor, secondaryActiveText} from "../../utils/customColors";

export const sessionDetailsNameLabel = {
    fontSize: '1.875rem',
    color: secondaryActiveText,
    backgroundColor: customTetraryColor,
    border: `1px solid ${secondaryActiveText}`,
    borderRadius: '4px',
    padding: '2rem'
}

export const sessionDetailsCreationDateLabel = {
    fontSize: '1.125rem',
    color: secondaryActiveText,
    backgroundColor: customTetraryColor,
    border: `1px solid ${secondaryActiveText}`,
    borderRadius: '4px',
    padding: '2rem'
}

export const sessionDetailsNotesBox = {
    color: secondaryActiveText,
    height: '582px',
    width: '80vw',
    border: `1px solid ${secondaryActiveText}`,
    marginTop: '60px',
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