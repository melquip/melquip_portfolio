import React from 'react';
import { 
  Grid, 
  TextField, 
  FormControlLabel, 
  Checkbox, 
  Button 
} from '@material-ui/core';
// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
// <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
// npm install @material-ui/icons
const Login = (props) => {
  return (
    <section className="admin">
      <div className="inner">
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
            style={{marginTop: '1rem'}}
          >
            Login
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Login