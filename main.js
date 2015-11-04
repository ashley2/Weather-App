'use strict';

var apiUrl = 'http://api.wunderground.com/api/e6d3f29c973c077d/'

//forecast/q/CA/San_Francisco.json'

$(document).ready(init);

function init() {
	var url = apiUrl + 'forecast/q/autoip.json';
	var zip = $('#zip').val();


										   $.get(url) //this is going to return a promise  
										   .done(function(data){
										   	console.log(data)
										   	conditionsData = data
										   	updateConditions();
										   })
										   .fail(function(error){
										   	console.log(error);
										   }

										   );
										   $('#getWeather').on('click', getWeatherConditions);
										 }

										 var conditionsData;
function getWeatherConditions(){			//can put zipcode in also or conditions instead of forecast
	var zip = $('#zip').val();
	var url = apiUrl + 'forecast/q/' + zip + '.json';

	   $.get(url) //this is going to return a promise  
	   .done(function(data){
	   	console.log(data)
	   	conditionsData = data
	   	updateConditions();
	   })
	   .fail(function(error){
	   	console.log(error);
	   }
	   );
	 }


	 function updateConditions(){
	 	for ( var i = 0; i < 8 ; i++) {
	 		var observation = conditionsData.forecast.txt_forecast.forecastday[i]
	 		var tForecast = observation.fcttext
	 		var day = $('<h2>').text(observation.title)
	 		var icon = observation.icon_url
	 		console.log(icon)
	 		var newIcon = $('<img/>', {
	 			src: icon
	 		})

	 		if (i === 0 ){
	 			$('#icon').empty();
	 			$('#temp').text(tForecast)
	 			$('#icon').append(newIcon)
	 		}
	 		if (i !== 0){
	 			var str = '#p'+i
	 			var x = $('.week')
				
	 			x.children(str).html('<img src='+icon+'>'+tForecast)
	 			x.children(str).prepend(day)


	 		}
	 	}
	 };






