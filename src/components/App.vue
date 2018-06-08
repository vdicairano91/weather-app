<template>
  <div id="app" v-bind:style="pallet.white.bkgd">
    <div class="temp-info">
      <vue-google-autocomplete ref="address" id="map" classname="form-control" placeholder="74th Street, Jackson Heights, NY, USA" v-on:placechanged="getAddressData"></vue-google-autocomplete>
      <div class="temp-data" v-bind:style="pallet.lightGrey.bkgd">
        <div class="currently-icon" v-bind:class="weather.body.currently.icon">
          <!--Clear Day -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.5 122.38" class="clear-day-icon">
            <line x1="59.5" y1="1" x2="59.5" y2="17" />
            <line x1="104.49" y1="18.68" x2="93.18" y2="29.99" />
            <line x1="30.49" y1="92.18" x2="19.18" y2="103.49" />
            <line x1="59.5" y1="105.38" x2="59.5" y2="121.38" />
            <line x1="121.5" y1="63.04" x2="105.5" y2="63.04" />
            <line x1="17" y1="63.04" x2="1" y2="63.04" />
            <line x1="30.49" y1="29.99" x2="19.18" y2="18.68" />
            <line x1="104.49" y1="104.01" x2="93.18" y2="92.7" />
            <circle cx="60.85" cy="61.35" r="30.36" />
          </svg>
          <!--Clear Night -->
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 58.4 62.7" class="clear-night-icon">
            <path class="st0" d="M25.3,29.8C21,20,24.1,8.6,31.1,1C14.4,1.1,0.9,14.8,1,31.6c0.1,16.8,13.8,30.3,30.6,30.1c10.6-0.1,20.3-5.6,25.8-14.7C44,50.1,30.8,42.5,25.3,29.8z"/>
          </svg>
          <!--Partly Cloudy Day -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109.51 92.36" class="partly-day-icon">
            <g>
              <line class="cls-1" x1="86.48" y1="1.07" x2="82.3" y2="10.55" />
              <line class="cls-1" x1="108.51" y1="23.3" x2="98.85" y2="27.04" />
              <line class="cls-1" x1="45.47" y1="47.49" x2="35.81" y2="51.24" />
              <line class="cls-1" x1="59.21" y1="62.89" x2="55.02" y2="72.37" />
              <line class="cls-1" x1="106.99" y1="54.02" x2="97.52" y2="49.84" />
              <line class="cls-1" x1="45.1" y1="26.71" x2="35.62" y2="22.53" />
              <line class="cls-1" x1="61.72" y1="10.66" x2="57.98" y2="1" />
              <line class="cls-1" x1="86.21" y1="73.84" x2="82.47" y2="64.18" />
              <circle class="cls-2" cx="433.12" cy="86.49" r="19.65" transform="translate(-182.46 398.52) rotate(-66.19)" />
            </g>
            <path class="cls-3" d="M391.11,101s3.33-18.67,18.5-18.67,20.67,13.58,20.83,17.42l2.05-.43a11.55,11.55,0,0,1,8.68,1.57,21.54,21.54,0,0,1,10.1,18.94,20.86,20.86,0,0,1-9.8,17.86,18.23,18.23,0,0,1-10,3h-48.7a17.25,17.25,0,0,1-7.41-1.65c-5.09-2.42-12.72-7.9-12.72-19,0-11.7,7.89-17.08,12.58-19.24a14.37,14.37,0,0,1,5.7-1.31l2,0a18.45,18.45,0,0,1,6.24.94Z" transform="translate(-361.61 -49.32)" />
          </svg>
          <!--Partly Cloudy Night -->
          <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 102.2 80.6" class="partly-night-icon">
            <path d="M1,29.4c2.6,6.9,8.6,12,15.9,13.4c11.6,2.2,22.7-5.3,24.9-16.9S36.5,3.2,25,1c3.9,6.1,4.5,14.4,0.4,20.6 C19.9,29.6,9.8,33.2,1,29.4z"/>
            <path class="cloud-svg" d="M36.6,37c0,0,3.6-20.1,19.9-20.1s22.2,14.6,22.4,18.7l2.2-0.5c3.2-0.7,6.6-0.1,9.3,1.7 c7,4.4,11.1,12.1,10.8,20.4c0.1,7.8-3.9,15-10.5,19.2c-3.2,2.1-7,3.2-10.8,3.2H27.6c-2.8,0-5.5-0.6-8-1.8 c-5.5-2.6-13.7-8.5-13.7-20.4c0-12.6,8.5-18.3,13.5-20.7c1.9-0.9,4-1.4,6.1-1.4h2.2c2.3-0.1,4.5,0.3,6.7,1L36.6,37z"/>
          </svg>
          <!--Cloudy -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104.73 72.92" class="cloudy-icon">
            <path class="cls-1" d="M533.91,203.88s2.58-14.46,14.33-14.46,16,10.52,16.13,13.49l1.59-.33a8.94,8.94,0,0,1,6.72,1.22,16.68,16.68,0,0,1,7.82,14.67,16.16,16.16,0,0,1-7.59,13.83,14.11,14.11,0,0,1-7.77,2.31H527.43a13.36,13.36,0,0,1-5.74-1.28c-3.94-1.87-9.85-6.12-9.85-14.72,0-9.06,6.11-13.22,9.75-14.9a11.13,11.13,0,0,1,4.41-1l1.56,0a14.29,14.29,0,0,1,4.84.73Z" transform="translate(-476.77 -188.42)"/>
            <path class="cls-2" d="M507.37,219.15s3.46-19.38,19.21-19.38,21.46,14.11,21.63,18.09l2.13-.44a12,12,0,0,1,9,1.63,22.37,22.37,0,0,1,10.49,19.67,21.66,21.66,0,0,1-10.17,18.54,18.93,18.93,0,0,1-10.42,3.09H498.68a17.91,17.91,0,0,1-7.7-1.72c-5.28-2.51-13.21-8.2-13.21-19.75,0-12.15,8.19-17.73,13.07-20a14.92,14.92,0,0,1,5.92-1.36l2.09,0a19.16,19.16,0,0,1,6.48,1Z" transform="translate(-476.77 -188.42)"/></svg>
          <!--Rainy -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.65 101.52" class="rainy-icon">
            <line class="cls-1" x1="16.15" y1="1" x2="4.89" y2="12.27"/>
            <line class="cls-1" x1="34.1" y1="1" x2="22.83" y2="12.27"/>
            <line class="cls-1" x1="51.71" y1="1" x2="40.44" y2="12.27"/>
            <line class="cls-1" x1="69.65" y1="1" x2="58.38" y2="12.27"/>
            <path class="cls-1" d="M605.22,111.71v-0.52A34,34,0,0,0,599,91.33a31.66,31.66,0,0,0-3.32-3.92c-7.53-7.53-19.87-9.18-24-9.18h-0.9c-4.17,0-16.85,1.65-24.37,9.18a31.08,31.08,0,0,0-2.57,2.92,34.07,34.07,0,0,0-6.95,20.93v0.46" transform="translate(-535.87 -54.13)"/>
            <path class="cls-1" d="M569,117.38v25.38a10.2,10.2,0,0,0,1.29,5c1.6,2.87,4.76,6.92,9.88,6.92a26.13,26.13,0,0,0,5.1-.49,12.71,12.71,0,0,0,9.76-8.88,8.76,8.76,0,0,0,.44-3.23" transform="translate(-535.87 -54.13)"/></svg>
        </div>
        <div class="currently-temp"><p  v-bind:style="pallet.main.color"><span v-html="Math.round(weather.body.currently.apparentTemperature)"></span>&deg;</p></div>
      </div>

      <div class="temp-data" v-bind:style="pallet.lightGrey.bkgd">
        <div class="currently-summary">
          <p v-bind:style="pallet.black.color">{{weather.body.currently.summary}}; {{weather.body.hourly.summary}}</p>
        </div>
      </div>
      <div class="temp-data" v-bind:style="pallet.lightGrey.bkgd">
        <div class="currently-low">low: <span v-html="Math.round(weather.body.daily.data[0].temperatureMin)"></span></div>
        <div class="currently-high">high: <span v-html="Math.round(weather.body.daily.data[0].temperatureMax)"></span></div>
        <div class="currently-wind">
          <p v-bind:style="pallet.black.color">{{misc.wind.direction}}</p>
          <p v-bind:style="pallet.black.color">{{weather.body.currently.windSpeed}} MPH</p>
          <div class="wind-arrow" v-bind:style="{transform: 'rotate(' + weather.body.currently.windBearing + 'deg)'}">

            ->
            <!--
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 78.6 95.4" style="enable-background:new 0 0 78.6 95.4;" xml:space="preserve">
<polygon points="2.3,2.5 39.3,94.5 76.3,2.5 39.3,21.5 " style="stroke:#c4c4c4;fill:#c4c4c4;stroke-width:4;stroke-linejoin:round;"/>
-->
            <!--            </svg>-->
          </div>
        </div>
      </div>
      <div class="currently-info">
        <p v-bind:style="pallet.black.color">Dew Point: <span>{{weather.body.currently.dewPoint}}</span></p>
        <p v-bind:style="pallet.black.color">UV Index: <span>{{weather.body.currently.uvIndex}}</span></p>
        <p v-bind:style="pallet.black.color">Cloud Coverage: <span>{{weather.body.currently.cloudCover}}</span></p>
        <p v-bind:style="pallet.black.color">Visibility: <span>{{weather.body.currently.visibility}} mi</span></p>
        <p v-bind:style="pallet.black.color">Humidity: <span>{{weather.body.currently.humidity}}%</span></p>
      </div>
      <br /><br /><br /><br />

      <p>Icon: {{weather.body.currently.icon}}</p>
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
        } else if(temp > 60 && temp <= 70){
          this.pallet.main.bkgd = 'backgroundColor: #DBA832'
          this.pallet.main.color = 'color: #DBA832'
          this.pallet.subMain.bkgd = 'backgroundColor: #7C725B'
          this.pallet.subMain.color = 'color: #7C7B5B'
        } else if(temp > 70 && temp <= 95){
          this.pallet.main.bkgd = 'backgroundColor: #DB7E32'
          this.pallet.main.color = 'color: #DB7E32'
          this.pallet.subMain.bkgd = 'backgroundColor: #7C725B'
          this.pallet.subMain.color = 'color: #7C7B5B'
        } else if(temp > 95){
          this.pallet.main.bkgd = 'backgroundColor: #DB323A'
          this.pallet.main.color = 'color: #DB323A'
          this.pallet.subMain.bkgd = 'backgroundColor: #7C615B'
          this.pallet.subMain.color = 'color: #7C615B'
        } 
      },
      degToCompass: function(num) {
        const val = Math.floor((num / 22.5) + 0.5);
        const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
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



