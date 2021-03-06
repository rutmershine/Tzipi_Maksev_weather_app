
const initialState = {

  autocompleteResults: '',
  favorites: [],
  currentWeather: {},
  dailyForecasts: {
    "Headline": {
      "EffectiveDate": "2021-08-22T08:00:00+03:00",
      "EffectiveEpochDate": 1629608400,
      "Severity": 4,
      "Text": "Pleasant Sunday",
      "Category": "mild",
      "EndDate": null,
      "EndEpochDate": null,
      "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us"
    },
    "DailyForecasts": [
      {
        "Date": "2021-08-20T07:00:00+03:00",
        "EpochDate": 1629432000,
        "Temperature": {
          "Minimum": {
            "Value": 80,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 87,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
      },
      {
        "Date": "2021-08-21T07:00:00+03:00",
        "EpochDate": 1629518400,
        "Temperature": {
          "Minimum": {
            "Value": 83,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 90,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us"
      },
      {
        "Date": "2021-08-22T07:00:00+03:00",
        "EpochDate": 1629604800,
        "Temperature": {
          "Minimum": {
            "Value": 83,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 89,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us"
      },
      {
        "Date": "2021-08-23T07:00:00+03:00",
        "EpochDate": 1629691200,
        "Temperature": {
          "Minimum": {
            "Value": 80,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 87,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us"
      },
      {
        "Date": "2021-08-24T07:00:00+03:00",
        "EpochDate": 1629777600,
        "Temperature": {
          "Minimum": {
            "Value": 80,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 88,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 33,
          "IconPhrase": "Clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us"
      }
    ]
  }
}

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CURRENT_WEATHER':

      return {
        ...state,
        currentWeather: action.payload

      }
    case 'FIVE_DAILY_FORECASTS':

      return {
        ...state,
        dailyForecasts: action.payload

      }
    case 'AUTOCOMPLETE_SEARCH':

      return {
        ...state,
        autocompleteResults: action.payload

      }
    case 'PUSH_TO_FAVORITES':
      let arr = state.favorites
      arr.push(action.payload)
      return {
        ...state,
        favorites: [...arr]

      }
    case 'DELETE_FAVORITES':
      return {
        ...state,
        favorites: []
      }

  }
  return state;
}
export default weatherReducer;

