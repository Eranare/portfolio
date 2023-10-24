import { Box, Typography, useTheme} from '@mui/material';

function Personal() {
    const theme = useTheme();
    return (
            <Box 
                sx={{ 
                    backgroundColor: theme.palette.primary.main, // Access the secondary color from the theme
                    padding: '2rem', 
                    color: 'white' // or any color that contrasts well with your background
                }}
        >
            <Typography variant="body1" paragraph>
                Je zoekt een stemacteur, een voice-over. Je zoekt die ene stem die precies de juiste stemming geeft aan jouw bedrijfsfilm, documentaire, uitleg & e-learning, website, telefoonmenu, commercial of karakter.
            </Typography>
            <Typography variant="body1" paragraph>
                Graag ben ik die stem, die voice-over.
            </Typography>
            {/* ... Add other paragraphs similarly ... */}
            
            <Typography variant="h5" gutterBottom>
                Thuisstudio
            </Typography>
            <Typography variant="body1" paragraph>
                Dankzij mijn eigen mobiele studio aan huis kan ik direct voor je aan de slag en snel de opname aanleveren. Liever op locatie? Ik kom met plezier naar je toe.
            </Typography>

            <Typography variant="h5" gutterBottom>
                Op maat:
            </Typography>
            <Typography variant="body1" paragraph>
                Wilt u een offerte op maat of een proefopname van je eigen tekst? Bel of stuur een e-mail. Binnen 24 uur neem ik contact met u op voor een prijs op maat.
            </Typography>
        </Box>
    )
}

export default Personal;
