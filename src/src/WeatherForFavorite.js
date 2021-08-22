import React, { useEffect } from 'react';
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

function WeatherForFavorite(props) {
    const classes = useStyles();

    // useEffect(() => { alert("update PushToFavorites") }, [props.pushToFavorites]);

    return (

        <div className="girdToday">
            <Paper className={`${classes.paper} favoriteCity today`}>
                <span>{props.cityName}</span>
                <span className="todayInToday">Today</span>
                {/* <span>date: </span> */}
                <span>{props.currentWeather?.LocalObservationDateTime?.substring(0, 10)}</span>
                <span className="todayDegree">
                    <span className="degreesSpan"> C:</span>
                    {props.currentWeather?.Temperature?.Metric.Value}</span>
            </Paper>
        </div>

    )
}

export default WeatherForFavorite;