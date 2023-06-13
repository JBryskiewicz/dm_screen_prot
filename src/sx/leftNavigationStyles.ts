import {customPrimaryColor, inactiveText} from "./customColors";

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