//$.get( "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=b5a22084378a2c6787847c6423574a62", function( data ) {
//  $( ".hero-unit" ).html( data );
//  console.log(data);
//});


$.get( "https://api.darksky.net/forecast/5f6017631b7105c5ca8dc4d7c06b3c88/37.8267,-122.4233", function( data ) {
  $( ".hero-unit" ).text( data.latitude );
  console.log(data);
});