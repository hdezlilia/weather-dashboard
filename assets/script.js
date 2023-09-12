var searchBtnEl = document.getElementById('search-btn');
var APIKey = '4b078f0dc3b27b7f39e879c7066d230f';
var citySearch = document.getElementById('search-input');
var stateSearch = document.getElementById('state-search');
var forecastArea = document.getElementById('five-day');
var prevSearch = document.getElementById('prev-search');
var prevBtn;
let activateBtn = document.getElementsByClassName('btn')


// latitude and longtitude of the city
// link provided
function getLocation(event) {
    var request = 'http://api.openweathermap.org/geo/1.0/direct?q=' + citySearch.value + ',' + stateSearch.value + 'US&limit=5&appid=' + APIKey;
    event.preventDefault()
    fetch (requestUrl)
    .then(function(response) {
        return response.json();
    })
    localStorage();
}


// weather longtitude + latitude 