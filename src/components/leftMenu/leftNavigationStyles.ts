import {activeText, customPrimaryColor, inactiveText} from "../../utils/customColors";

export const navigationLinkStyle = {
    color: inactiveText,
    textDecoration: 'none',
    '&:hover': {
        color: activeText,
        transition: '.75s'
    }
}

export const navigationBody = {
    height: 'calc(100vh - 64px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: customPrimaryColor
}

export const navigationAccordion = {
    color: inactiveText,
    width: '240px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    paddingTop: '1.25rem'
}