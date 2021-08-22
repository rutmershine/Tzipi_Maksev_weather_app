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

export default function WeatherToday(props) {
    const classes = useStyles();
    console.log(props)
    return (
        <Grid container justifyContent="center" >
            <div className="girdToday">
                <Paper className={`${classes.paper} today`}>
                    <span className="todayInToday">Today</span>
                    {/* <span>date: </span> */}
                    <span>{props.weatherToday?.LocalObservationDateTime?.substring(0, 10)}</span>
                    <span className="todayDegree">
                        <span className="degreesSpan"> C:</span>
                        {props.weatherToday.Temperature?.Metric.Value}</span>

                </Paper>
                {props.cityKey ?
                    <span>{props.cityKey}</span> : ''}
                <span className="cityName">{props.cityName}</span>
            </div>
        </Grid>)
}