import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid(props) {
  const [spacing, setSpacing] = React.useState(7);

  const classes = useStyles();
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      {console.log(props)}
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {[0, 1, 2, 3, 4].map((value) => (
            <Grid key={value} item>
              <Paper className={`${classes.paper} weatherToNextDay`}>
                <span className="day">{days[(new Date(props.weatherForFive.DailyForecasts[value].Date.substring(0, 10))).getDay()]}     </span>
                <span className="min">Min: {props.weatherForFive.DailyForecasts[value].Temperature?.Minimum.Value}</span>
                <span className="max">Max: {props.weatherForFive.DailyForecasts[value].Temperature?.Maximum.Value}</span>
              </Paper>

            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>

  );
}
