import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const NavBar = props => {
  return (
    <div>
      <AppBar position='static' style={{ backgroundColor: '#101010' }}>
        <Toolbar>
          <Grid container spacing={3} style={{ textAlign: 'center' }}>
            <Grid item xs={12}>
              <Typography variant='h6' color='inherit'>
                The Office Clicky Game
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6' color='inherit'>
                Score: {props.score}
              </Typography>
              <Typography variant='h6' color='inherit'>
                Top Score: {props.topScore}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
