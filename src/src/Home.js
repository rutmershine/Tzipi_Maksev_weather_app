import React, { createContext, useEffect, useState, useContext, useRef, useStyles } from 'react';
import { get_from_axios, fetchDailyForecast, fetchSearchResult } from './actions'
import { connect } from 'react-redux';
import WeatherForFive from './SpacingGrid'
import WeatherToday from './WeatherToday'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Button } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import Menu from './Menu';


function Home({ currentWeather, get_from_axios, dailyForecasts, fetchDailyForecast, autocompleteResults, fetchSearchResult }) {

    let location
    let text
    if (localStorage['city']) {
        debugger
        let city = JSON.parse(localStorage['city'])
        location = city.key
        text = city.name
    }
    else {
        location = '215854'
        text = "Tel Aviv"
    }
    let exists = false

    const [cityName, setCityName] = useState(text)
    const [cityKey, setCityKey] = useState('215854')
    const [success, setSuccess] = useState(false);
    const [existsInFavorites, setExistsInFavorites] = useState(false);


    const iSExistsInFavorites = (name) => {
        debugger;
        let fav = []
        let exists = false;
        if (localStorage.favorites) {
            fav = JSON.parse(localStorage.getItem('favorites'));
        }
        fav.map(f => {
            if (f.cityName == name) {
                exists = true
                setExistsInFavorites(true)

            }
        })
        if (exists == false) {
            setExistsInFavorites(false)
        }
    }
    const getAxios = (e) => {
        text = e
        debugger;
        fetchSearchResult(text)
    }

    const addToFavorites = () => {

        setExistsInFavorites(true)
        let fav = []
        let city = { cityName, cityKey }
        if (localStorage.favorites) {
            fav = JSON.parse(localStorage.getItem('favorites'));
        }
        fav.push(city);
        localStorage.setItem('favorites', JSON.stringify(fav));
        console.log(city);
        setSuccess(true);
    }

    const getDataCity = (selectedCity) => {
        setCityName(selectedCity)
        autocompleteResults?.map(city => {
            if (city.LocalizedName == selectedCity) {
                location = city.Key
                setCityKey(city.Key)
                exists = true
                debugger;
            }
        })
        if (exists == true) {
            iSExistsInFavorites(selectedCity)
            get_from_axios(location);
            fetchDailyForecast(location);
        }
    }

    useEffect(() => {
        get_from_axios(location);
        fetchDailyForecast(location);
        localStorage.removeItem('city');
        iSExistsInFavorites(text)

    }, [])

    return (
        <div>
            <Menu className="nav"></Menu>
            <input className="search" placeholder="Search..." type="text" list="browsers" name="inputCities" onfocusout={(e) => { console.log(e) }}
                onChange={(e) => { getAxios(e.target.value) }}
                onBlur={(e) => { getDataCity(e.target.value) }} />
            <datalist id="browsers">
                {autocompleteResults ? autocompleteResults.map(city =>
                (
                    <option>{city.LocalizedName}</option>
                )) : <div>no data!</div>}
            </datalist>
            <div className="AllView">
                <div className="buttonAdd">
                    <Button
                        variant="contained"
                        color="brown"
                        className="addToFavorites"
                        disabled={existsInFavorites}
                        onClick={addToFavorites}
                    >
                        Add To Favorites
                    </Button>
                    <Fab
                        aria-label="save"
                        color="brown"
                        className={addToFavorites}
                        disabled={existsInFavorites}
                        onClick={addToFavorites}
                    >
                        {success ? <CheckIcon /> : <FavoriteIcon />}
                    </Fab>
                </div>
                {console.log(currentWeather)}
                <WeatherToday weatherToday={currentWeather} cityName={cityName}/>
                <WeatherForFive weatherToday={currentWeather} weatherForFive={dailyForecasts} /></div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentWeather: state.currentWeather,
        dailyForecasts: state.dailyForecasts,
        autocompleteResults: state.autocompleteResults
    }
}

const mapDispatchToProps = dispatch => {
    return {
        get_from_axios: (location) => dispatch(get_from_axios(location)),
        fetchDailyForecast: (location) => dispatch(fetchDailyForecast(location)),
        fetchSearchResult: (text) => dispatch(fetchSearchResult(text))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);