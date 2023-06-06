import * as React from 'react';
import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, {AccordionProps} from '@mui/material/Accordion';
import MuiAccordionSummary, {AccordionSummaryProps} from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import {
    activeText,
    customPrimaryColor,
    customSecondaryColor,
    inactiveText, navigationLinkStyle,
    navigationWidth
} from "../../utils/customStyles";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import {Link} from "@mui/material";


const BUILD_VERSION = 'version 0.0.1'

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem', color: inactiveText}}/>}
        {...props}
    />
))(({theme}) => ({
    color: inactiveText,
    backgroundColor: customPrimaryColor,
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
    '&:hover': {
        color: activeText,
        backgroundColor: customSecondaryColor,
        transition: '.75s'
    }
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
    backgroundColor: customPrimaryColor,
    color: inactiveText,
    display: 'flex',
    flexDirection: 'column',
    rowGap: '0.125rem',
    paddingBottom: '8px',
    paddingLeft: '3rem',
}));


export default function LeftNavigation() {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            console.log(event)
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <Box sx={{
            height: 'calc(100vh - 64px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: customPrimaryColor,
        }}>
            <Box sx={{
                color: inactiveText,
                width: navigationWidth,
                boxSizing: 'border-box',
                overflow: 'hidden',
                paddingTop: '1.25rem'
            }}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>Your Creations</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Link href={'#'} sx={navigationLinkStyle}>{'Main Screen'}</Link>
                        <Link href={'#'} sx={navigationLinkStyle}>{'My sessions'}</Link>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography>Game Rules</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Link href={'#'} sx={navigationLinkStyle}>{'Classes'}</Link>
                        <Link href={'#'} sx={navigationLinkStyle}>{'Source Books'}</Link>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>Features</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Link href={'#'} sx={navigationLinkStyle}>{'subscribe'}</Link>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Typography sx={{
                    color: inactiveText,
                    marginBottom: '0.375rem'
                }}>
                    {BUILD_VERSION}
                </Typography>
            </Box>
        </Box>
    );
}