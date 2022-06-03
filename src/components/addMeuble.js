import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function AddMeuble() {
    const [Materiaux, setMateriaux] = React.useState('');
    const [Entreprise, setEntreprise] = React.useState('');

    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setMateriaux(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const jsonData = {
            Nom: data.get('Nom'),
            Categorie: data.get('Categorie'),
            Materiaux: data.get('Materiaux'),
            Entreprise: Entreprise,
            Quantité: data.get('Quantité'),
        }
    
        fetch('https://localhost:3000/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.status == 'ok'){
                alert('furniture added')
                window.location('/listing')
            } else {
                alert('furniture add failed')
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" style={{ height: '100vh', display: 'flex', alignItems: 'center'}} maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Ajouter un meuble
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="nom"
                  required
                  fullWidth
                  id="nom"
                  label="Nom"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                    <InputLabel>Catégorie</InputLabel>
                    <Select
                        label="Catégorie"
                        onChange={handleChange}
                        required
                    >
                        <MenuItem value="frene">Armoire</MenuItem>
                        <MenuItem value="chene">Etagere</MenuItem>
                    </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel>Materiaux</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={Materiaux}
                        label="Materiaux"
                        onChange={handleChange}
                        required
                    >
                        <MenuItem value="frene">Frene</MenuItem>
                        <MenuItem value="chene">Chene</MenuItem>
                        <MenuItem value="noyer">Noyer</MenuItem>
                        <MenuItem value="acier">Acier</MenuItem>
                        <MenuItem value="aluminium">Aluminium</MenuItem>
                        <MenuItem value="noyer">Plastique</MenuItem>
                    </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Entreprise"
                  label="Entreprise"
                  name="Entreprise"
                  autoComplete="Entreprise"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Quantité"
                  label="Quantité"
                  type="number"
                  id="Quantité"
                  autoComplete="new-Quantité"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: 'black' }}
            >
              Ajouter
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}