import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Header from './Header';
import Game from './Game';

function App() {
  const styles = {
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  };

  return (
    <div style={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={styles.title}>
            Predicciones F1
          </Typography>
          <Button color="inherit">Iniciar sesión</Button>
        </Toolbar>
      </AppBar>
      <Typography variant="h4" align="center" gutterBottom>
        Bienvenido a Predicciones F1
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        ¿Quién ganará la próxima carrera? ¡Haz tu predicción ahora!
      </Typography>
      <Header />
      <Game />
    </div>
  );
}

export default App;