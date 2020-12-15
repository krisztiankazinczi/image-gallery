// imports from libraries
import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

// This Component just render a circular progress bar from Material UI
const LoadingUI: React.FC = () => {
  return (
    <Grid container alignItems="center" justify="center" style={{ height: '100vh' }}>
      <CircularProgress color="secondary" />
    </Grid>
  );
}

export default LoadingUI;
