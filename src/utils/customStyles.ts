/** Custom colors for styling separate from those declared in MUI - section */
export const customPrimaryColor = "#1F1B24";
export const customSecondaryColor = "#232029";
export const inactiveText = 'grey';
export const activeText = 'white';


/** Appbar | Header */
export const headerIconStyling = {
    height: '35px',
    width: '35px'
}

/** Left Navigation */
export const navigationWidth = 240;

export const navigationLinkStyle = {
    color: inactiveText,
    textDecoration: 'none',
    '&:hover': {
        color:  activeText,
        transition: '.75s'
    }
}

/** Main Container (welcome screen) */

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

/** Latest sessions section (quick access) */

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