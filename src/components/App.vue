<template>
  <div id="app">
    <div class="temp-info">
      <vue-google-autocomplete ref="address" id="map" classname="form-control" placeholder="Please type your address" v-on:placechanged="getAddressData"></vue-google-autocomplete>
      <p>Current Temperature: {{weather.body.currently.apparentTemperature}}</p>
      <p>Dew Point: {{weather.body.currently.dewPoint}}</p>
      <p>Wind Speed: {{weather.body.currently.windSpeed}}</p>
      <p>UV Index: {{weather.body.currently.uvIndex}}</p>
      <p>Cloud Coverage: {{weather.body.currently.cloudCover}}</p>
      <p>Visibility: {{weather.body.currently.visibility}}</p>
      <p>Wind Direction: {{weather.body.currently.windBearing}}</p>
      <div class="wind-arrow" v-bind:style="{transform: 'rotate(' + weather.body.currently.windBearing + 'deg)'}"></div>
    </div>
    <div class="bottom">
      <a href="https://darksky.net/poweredby/" target="_blank">Powered by Dark Sky</a>
    </div>
  </div>
  

<!--
  <img
       src="https://vuejs.org/images/logo.png"
       width="100"
       alt="vue"
       class="logo"
       />
-->
</template>
<!--https://api.darksky.net/forecast/5f6017631b7105c5ca8dc4d7c06b3c88/37.8267,-122.4233-->
<!--http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=b5a22084378a2c6787847c6423574a62-->
<script>
  import VueGoogleAutocomplete from 'vue-google-autocomplete'
  export default {
    
    components: { VueGoogleAutocomplete },
    data: function () {
      return {
        weather: []
      }
    },
    created: function () {
      this.$http.get('https://api.darksky.net/forecast/5f6017631b7105c5ca8dc4d7c06b3c88/37.8267,-122.4233')
        .then(response => {
        this.weather = response;
      });
    },       
    mounted() {
      
    },
    methods: {
      getAddressData: function (addressData, placeResultData, id) {
        this.address = addressData;
        this.$http.get('https://api.darksky.net/forecast/5f6017631b7105c5ca8dc4d7c06b3c88/' + addressData.latitude + ',' + addressData.longitude)
          .then(response => {
          console.log(response);
          this.weather = response;
        });
      }
    }
  }
  
</script>

<!-- CSS libraries -->
<!--<style src="normalize.css/normalize.css"></style>-->

<style lang="scss" scoped>
  @import "app.scss";
  .temp-info{
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
    .wind-arrow{
      background: url(assets/windArrow.svg);
      width: 70px;
      height: 100px;
      position: absolute;
      top: 100px;
      left: 200px;
      transition: 2s;
  }
  #map{
    width: 300px;
    margin: 50px 0;
  }
</style>



<!--
var weatherUrl =
"https://api.darksky.net/forecast/" +
apiKey +
lat +
"," +
lon +
"?exclude=hourly,daily,alerts,flags";-->


<!--

$( ".temperature" ).text( data.currently.temperature);
$( ".dewPoint" ).text( data.currently.dewPoint);
$( ".windSpeed" ).text( data.currently.windSpeed);
$( ".uvIndex" ).text( data.currently.uvIndex);
$( ".cloudCover" ).text( data.currently.cloudCover);
$( ".visibility" ).text( data.currently.visibility);-->
