

import axios from 'axios';


export const get_from_axios = (key, fav = -1) => {
    return (dispatch) => {

            axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=q8L6rYi1mkluWSbfNGOKVNAuEi7YKdeJ`)
            .then((response) => {
                dispatch(getCurrentWeather(response.data[0]))
                console.log(response.data[0])
                if (fav != -1) {
                    dispatch(pushToFavorites(response.data[0]));
                }
            })
            .catch(err => {
                console.log(err + " have in get_from_axios problem :(!!!")
            })
    };
}

export const fetchDailyForecast = (key) => {
    return (dispatch) => {
        debugger

        axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=q8L6rYi1mkluWSbfNGOKVNAuEi7YKdeJ&metric=true`)//key 2 
            .then((data) => {
                debugger
                dispatch(fiveDailyForecastsAction(data.data))
                console.log(data.data)
            })
            .catch(err => {
                console.log("have in fetchDailyForecast problem :(!!!")
            })
    };
}

export const fetchSearchResult = (text) => {
    return (dispatch) => {
        debugger
        axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=q8L6rYi1mkluWSbfNGOKVNAuEi7YKdeJ&q=${text}&language=en-us`)//good from server!
            .then((response) => {
                debugger
                dispatch(autocompleteSearchAction(response.data))
                console.log(response.data)
            })
            .catch(err => {
                console.log("have in fetchSearchResult problem :(!!!")
            })
    };
}

export const pushToFavorites = (data) => {
    return {
        type: 'PUSH_TO_FAVORITES',
        payload: data
    }

}
export const getCurrentWeather = (data) => {
    return {
        type: 'CURRENT_WEATHER',
        payload: data
    }
}

export const fiveDailyForecastsAction = (data) => {
    return {
        type: 'FIVE_DAILY_FORECASTS',
        payload: data
    }
}

export const autocompleteSearchAction = (data) => {
    return {
        type: 'AUTOCOMPLETE_SEARCH',
        payload: data
    }
}
export const deleteFavorites = () => {
    return {
        type: 'DELETE_FAVORITES',        
    }
}