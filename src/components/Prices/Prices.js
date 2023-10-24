import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Prices() {
    const theme = useTheme();
    
    return (
        <Box sx={{ backgroundColor: theme.palette.primary.main, padding: '2rem', color: theme.palette.secondary.main }}>
            <Typography variant="h4" gutterBottom>
                Tarieven
            </Typography>

            {/* TV commercials */}
            <Accordion sx={{ backgroundColor: theme.palette.secondary.main }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>TV commercials - €75 vanaf</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lokale televisie: 75 euro</Typography>
                    <Typography>Regionale televisie: 200 euro</Typography>
                    <Typography>Landelijke televisie: 500 euro</Typography>
                </AccordionDetails>
            </Accordion>

            {/* Radiocommercials */}
            <Accordion sx={{ backgroundColor: theme.palette.secondary.main }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Radiocommercials - €75 vanaf</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lokale radio: 50 euro</Typography>
                    <Typography>Regionale radio: 150 euro</Typography>
                    <Typography>Landelijke radio: 500 euro</Typography>
                </AccordionDetails>
            </Accordion>

            {/* Animatie, e-learning, bedrijfsfilms */}
            <Accordion sx={{ backgroundColor: theme.palette.secondary.main }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Animatie, e-learning, bedrijfsfilms - €175 vanaf</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>0–250 woorden : 175 euro</Typography>
                    <Typography>250–750 woorden: 250 euro</Typography>
                    <Typography>750–1500 woorden: 300 euro</Typography>
                    <Typography>1500–2250 woorden: 400 euro</Typography>
                </AccordionDetails>
            </Accordion>

            {/* ... Interactive cost estimator can be added here in the future ... */}
        </Box>
    );
}

export default Prices;
