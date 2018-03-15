<template>
  <div id="app" v-bind:style="pallet.white.bkgd">
    <div class="temp-info">
      <vue-google-autocomplete ref="address" id="map" classname="form-control" placeholder="74th Street, Jackson Heights, NY, USA" v-on:placechanged="getAddressData"></vue-google-autocomplete>
      <div class="temp-data" v-bind:style="pallet.lightGrey.bkgd">
        <div class="currently-icon" v-bind:class="weather.body.currently.icon"></div>
        <div class="currently-temp"><p  v-bind:style="pallet.main.color"><span v-html="Math.round(weather.body.currently.apparentTemperature)"></span>&deg;</p></div>
        <div class="currently-wind">
          <p v-bind:style="pallet.black.color">{{misc.wind.direction}}</p>
          <p v-bind:style="pallet.black.color">{{weather.body.currently.windSpeed}} MPH</p>
          <div class="wind-arrow" v-bind:style="{transform: 'rotate(' + weather.body.currently.windBearing + 'deg)'}"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 78.6 95.4" style="enable-background:new 0 0 78.6 95.4;" xml:space="preserve">
            <polygon points="2.3,2.5 39.3,94.5 76.3,2.5 39.3,21.5 " style="stroke:#c4c4c4;fill:#c4c4c4;stroke-width:4;stroke-linejoin:round;"/>
            </svg>
          </div>
        </div>
      </div>
      
      
      
      <p v-bind:style="pallet.black.color">Dew Point: {{weather.body.currently.dewPoint}}</p>
      <p v-bind:style="pallet.black.color">Wind Speed: {{weather.body.currently.windSpeed}}</p>
      <p v-bind:style="pallet.black.color">UV Index: {{weather.body.currently.uvIndex}}</p>
      <p>Icon: {{weather.body.currently.icon}}</p>
      <p v-bind:style="pallet.black.color">Cloud Coverage: {{weather.body.currently.cloudCover}}</p>
      <p v-bind:style="pallet.black.color">Visibility: {{weather.body.currently.visibility}}</p>
      <p v-bind:style="pallet.black.color">Wind Direction: {{weather.body.currently.windBearing}}</p>
      <!--      <p v-bind:style="pallet.black.color">{{weather.body.minutely.summary}}</p>-->
    </div>
      
    
    <div class="bottom">
      <a href="https://darksky.net/poweredby/" target="_blank">Powered by Dark Sky</a>
    </div>
    <div class="light-grey" v-bind:style="pallet.white.bkgd"><p v-bind:style="pallet.main.color">TESTING</p><p v-bind:style="pallet.subMain.color">TESTING</p></div>
    <div class="grey" v-bind:style="pallet.grey.bkgd"></div>
    <div class="black" v-bind:style="pallet.black.bkgd"></div>
    <div class="subMainBkgd" v-bind:style="pallet.subMain.bkgd"></div>
    <div class="mainBkgd" v-bind:style="pallet.main.bkgd"></div>
  
  
<!--
  <img
       src="https://vuejs.org/images/logo.png"
       width="100"
       alt="vue"
       class="logo"
       />
-->
  </div>
</template>
<script>
  import VueGoogleAutocomplete from 'vue-google-autocomplete'
  export default {
    
    components: { VueGoogleAutocomplete },
    data: function () {
      return {
        weather: [],
        pallet: {
          main: {
            bkgd: {backgroundColor: '#1963A0'},
            color: {color: '#1963A0'},
          },
          subMain: {
            bkgd: {backgroundColor: '#4C5568'},
            color: {color: '#4C5568'},
          },
          black: {
            bkgd: {backgroundColor: '#333333'},
            color: {color: '#333333'},
            stroke: {stroke: '#333333'},
          },
          grey: {
            bkgd: {backgroundColor: '#c4c4c4'},
            color: {color: '#c4c4c4'},
            stroke: {stroke: '#c4c4c4'},
          },
          lightGrey: {
            bkgd: {backgroundColor: '#ececec'},
            color: {color: '#ececec'},
            stroke: {stroke: '#ececec'},
          },
          white: {
            bkgd: {backgroundColor: '#f7f7f7'},
            color: {color: '#f7f7f7'},
            stroke: {stroke: '#f7f7f7'},
          }
        },
        misc:{
          wind:{
            direction: "N"
          }
        }
      }
    },
    created: function () { this.$http.get('https://api.darksky.net/forecast/5f6017631b7105c5ca8dc4d7c06b3c88/42.3072893,-73.99443029999998')
        .then(response => {
        this.weather = response;
      });
    },       
    mounted() {
      
    },
    methods: {
      colorChange: function(temp) {
        if(temp <= 20){
          this.pallet.main.bkgd = 'backgroundColor: #1963A0'
          this.pallet.main.color = 'color: #1963A0'
          this.pallet.subMain.bkgd = 'backgroundColor: #4C5568'
          this.pallet.subMain.color = 'color: #4C5568'
        } else if(temp > 20 && temp <= 40){
          this.pallet.main.bkgd = 'backgroundColor: #1985A1'
          this.pallet.main.color = 'color: #1985A1'
          this.pallet.subMain.bkgd = 'backgroundColor: #4C5568'
          this.pallet.subMain.color = 'color: #4C5568'
        } else if(temp > 40 && temp <= 60){
          this.pallet.main.bkgd = 'backgroundColor: #19A099'
          this.pallet.main.color = 'color: #19A099'
          this.pallet.subMain.bkgd = 'backgroundColor: #4C6368'
          this.pallet.subMain.color = 'color: #4C6368'
        } else if(temp > 60 && temp <= 80){
          this.pallet.main.bkgd = 'backgroundColor: #DBA832'
          this.pallet.main.color = 'color: #DBA832'
          this.pallet.subMain.bkgd = 'backgroundColor: #7C725B'
          this.pallet.subMain.color = 'color: #7C7B5B'
        } else if(temp > 60 && temp <= 85){
          this.pallet.main.bkgd = 'backgroundColor: #DB7E32'
          this.pallet.main.color = 'color: #DB7E32'
          this.pallet.subMain.bkgd = 'backgroundColor: #7C725B'
          this.pallet.subMain.color = 'color: #7C7B5B'
        } else if(temp > 85){
          this.pallet.main.bkgd = 'backgroundColor: #DB323A'
          this.pallet.main.color = 'color: #DB323A'
          this.pallet.subMain.bkgd = 'backgroundColor: #7C615B'
          this.pallet.subMain.color = 'color: #7C615B'
        } 
      },
      degToCompass: function(num) {
        const val = Math.floor((num / 22.5) + 0.5);
        const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        //      
        this.misc.wind.direction = arr[(val % 16)]
      },
      getAddressData: function (addressData, placeResultData, id) {
        this.address = addressData;
        this.$http.get('https://api.darksky.net/forecast/5f6017631b7105c5ca8dc4d7c06b3c88/' + addressData.latitude + ',' + addressData.longitude)
          .then(response => {
          console.log("fired");
          console.log(response);
          this.weather = response;
          const atemp = response.body.currently.apparentTemperature;
          this.colorChange(atemp);
          const direction = response.body.currently.windBearing;
          this.degToCompass(direction);
        });
      }
    }
  }

</script>
<!-- CSS libraries -->
<!--<style src="normalize.css/normalize.css"></style>-->

<style lang="scss" scoped>
  @import "app.scss";
  
/*  #C2C5C6;*/
  
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

warm
61-80
yellow
$light-grey: #DDDDDD;
$grey: #C2C6C3;
$black: #4C4746;

hot
81-95
orange
$light-grey: #DDDDDD;
$grey: #C2C6C2;
$black: #4C4746;
$sub-main: #7C725B;
$main: #DB7E32;



boiling
96+
red
$light-grey: #DDDDDD;
$grey: #C4C6C2;
$black: #4C4846;
$sub-main: #7C615B;
$main: #DB323A;-->
