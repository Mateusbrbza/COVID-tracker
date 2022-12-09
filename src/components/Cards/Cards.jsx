import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import styles from './Cards.module.css';

const Cards = (props) => {
  console.log(props);

  return (
    <div className={styles.container} >
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infectados
            </Typography>
            <Typography variant="h5" >
              Dados
            </Typography>
            <Typography color="textSecondary">
              Data
            </Typography>
            <Typography variant="body2">
              Numero de casos ativos de covid
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Mortes
            </Typography>
            <Typography variant="h5" >
              Dados
            </Typography>
            <Typography color="textSecondary">
              Data
            </Typography>
            <Typography variant="body2">
              Numeros de mortes pelo COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards;