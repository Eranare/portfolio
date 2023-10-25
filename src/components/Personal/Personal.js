import { Box, Typography, useTheme } from '@mui/material';

function Personal() {
    const theme = useTheme();
    return (
        <Box 
            sx={{ 
                backgroundColor: theme.palette.primary.main,
                padding: '2rem',
                color: 'white',
            }}
        >
            <Box 
                sx={{
                    textAlign: 'center',
                    backdropFilter: 'blur(6px)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '2rem',
                    borderRadius: '1rem',
                    maxWidth: '33%',
                    margin: '0 auto',
                }}
            >
                <Typography variant="h5" paragraph>
                    Je zoekt een stemacteur, een voice-over. Je zoekt die ene stem die precies de juiste stemming geeft aan jouw bedrijfsfilm, documentaire, uitleg & e-learning, website, telefoonmenu, commercial of karakter.
                </Typography>
                <Typography variant="h5" paragraph>
                    Graag ben ik die stem, die voice-over.
                </Typography>
            
            
            <Typography variant="h6" gutterBottom>
                Thuisstudio
            </Typography>
            <Typography variant="body1" paragraph>
                Dankzij mijn eigen mobiele studio aan huis kan ik direct voor je aan de slag en snel de opname aanleveren. Liever op locatie? Ik kom met plezier naar je toe.
            </Typography>

            <Typography variant="h6" gutterBottom>
                Op maat:
            </Typography>
            <Typography variant="body1" paragraph>
                Wilt u een offerte op maat of een proefopname van je eigen tekst? Bel of stuur een e-mail. Binnen 24 uur neem ik contact met u op voor een prijs op maat.
            </Typography>
            </Box>
        </Box>
    )
}

export default Personal;
