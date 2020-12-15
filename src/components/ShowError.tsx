// imports from libraries
import React from 'react';
import Grid from '@material-ui/core/Grid';

interface Props {
  errorMsg: string;
}

// This Component just render an errorMessage what got it through props
const ShowError: React.FC<Props> = ({ errorMsg }) => {
  return (
    <Grid container alignItems="center" justify="center" style={{ height: '100vh' }}>
      <h2>{errorMsg}</h2>
    </Grid>
  );
}

export default ShowError;
