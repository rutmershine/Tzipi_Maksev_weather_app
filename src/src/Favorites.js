import React, { createContext, useEffect, useState, useContext, useStyles } from 'react';
import { connect } from 'react-redux';
import { get_from_axios, deleteFavorites } from './actions'
import WeatherToday from './WeatherToday'
import WeatherForFavorite from './WeatherForFavorite';
import Menu from './Menu'
import { pushToFavorites } from './actions';
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


function Favorites(props) {
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
    const classes = useStyles();
    let location = '215854'
    const onFavClick = (f, key, name) => {
        let city = { key, name }
        localStorage['city'] = JSON.stringify(city)
        handleClick();
    }
    let history = useHistory();
    const handleClick = () => {
        history.push("/");
    }

    useEffect(() => {
        props.deleteFavorites()
    }, [])
    const favoritesFromLocal = localStorage['favorites'] ? JSON.parse(localStorage['favorites']) : [];
    useEffect(() => {
        favoritesFromLocal.map((fav) => {
            location = fav.cityKey
            console.log(location)
            props.get_from_axios(location, 1)
        })
    }, [])

    return (
        <div>
            <Menu />
            <h1 className="h1Favorites">FAVORITES</h1>
            {
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid className="gridFavorites" container justifyContent="center" >
                            {
                                props.favorites.map((fav, val) => (
                                    <div className="divFavorites" onClick={() => onFavClick(fav, favoritesFromLocal[val]?.cityKey, favoritesFromLocal[val]?.cityName)}>
                                        <WeatherForFavorite currentWeather={fav} cityName={favoritesFromLocal[val]?.cityName}
                                            cityKey={favoritesFromLocal[val]?.cityKey} />
                                    </div>
                                ))}
                        </Grid>
                    </Grid>
                </Grid>
            }
        </div>
        // 
    )
}
const mapStateToProps = state => {
    return {
        favorites: state.favorites,
        currentWeather: state.currentWeather,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        pushToFavorites: (favFromLocal) => dispatch(pushToFavorites(favFromLocal)),
        get_from_axios: (location, fav) => dispatch(get_from_axios(location, fav)),
        deleteFavorites: () => dispatch(deleteFavorites())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);