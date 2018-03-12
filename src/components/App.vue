<template>
  <div id="app" v-bind:style="white.bkgd">
    <div class="temp-info">
      <vue-google-autocomplete ref="address" id="map" classname="form-control" placeholder="74th Street, Jackson Heights, NY, USA" v-on:placechanged="getAddressData"></vue-google-autocomplete>
      
      
      <p class="currently-temp" v-bind:style="main.color"><span v-html="Math.round(weather.body.currently.apparentTemperature)"></span>&deg;</p>
      
      <p v-bind:style="black.color">Dew Point: {{weather.body.currently.dewPoint}}</p>
      <p v-bind:style="black.color">Wind Speed: {{weather.body.currently.windSpeed}}</p>
      <p v-bind:style="black.color">UV Index: {{weather.body.currently.uvIndex}}</p>
      <p>Icon: {{weather.body.currently.icon}}</p>
      <p v-bind:style="black.color">Cloud Coverage: {{weather.body.currently.cloudCover}}</p>
      <p v-bind:style="black.color">Visibility: {{weather.body.currently.visibility}}</p>
      <p v-bind:style="black.color">Wind Direction: {{weather.body.currently.windBearing}}</p>
<!--      <p v-bind:style="black.color">{{weather.body.minutely.summary}}</p>-->
      <div class="wind-arrow" v-bind:style="{transform: 'rotate(' + weather.body.currently.windBearing + 'deg)'}"></div>
    </div>
    <div class="currently-icon" v-bind:class="weather.body.currently.icon">
      
    </div>
    <div class="bottom">
      <a href="https://darksky.net/poweredby/" target="_blank">Powered by Dark Sky</a>
    </div>
    <div class="light-grey" v-bind:style="white.bkgd"><p v-bind:style="main.color">TESTING</p><p v-bind:style="subMain.color">TESTING</p></div>
    <div class="grey" v-bind:style="grey.bkgd"></div>
    <div class="black" v-bind:style="black.bkgd"></div>
    <div class="subMainBkgd" v-bind:style="subMain.bkgd"></div>
    <div class="mainBkgd" v-bind:style="main.bkgd"></div>
  
  

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
        main: {
          bkgd: {backgroundColor: '#1963A0'},
          color: {color: '#1963A0'},
        },
        subMain: {
          bkgd: {backgroundColor: '#4C5568'},
          color: {color: '#4C5568'},
        },
        blackw: {
          bkgd: {backgroundColor: '#333333'},
          color: {color: '#333333'},
        },
        grey: {
          bkgd: {backgroundColor: '#c4c4c4'},
          color: {color: '#c4c4c4'},
        },
        white: {
          bkgd: {backgroundColor: '#f7f7f7'},
          color: {color: '#f7f7f7'},
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
          this.main.bkgd = 'backgroundColor: #1963A0'
          this.main.color = 'color: #1963A0'
          this.subMain.bkgd = 'backgroundColor: #4C5568'
          this.subMain.color = 'color: #4C5568'
        } else if(temp > 20 && temp <= 40){
          this.main.bkgd = 'backgroundColor: #1985A1'
          this.main.color = 'color: #1985A1'
          this.subMain.bkgd = 'backgroundColor: #4C5568'
          this.subMain.color = 'color: #4C5568'
        } else if(temp > 40 && temp <= 60){
          this.main.bkgd = 'backgroundColor: #19A099'
          this.main.color = 'color: #19A099'
          this.subMain.bkgd = 'backgroundColor: #4C6368'
          this.subMain.color = 'color: #4C6368'
        } else if(temp > 60 && temp <= 80){
          this.main.bkgd = 'backgroundColor: #DBA832'
          this.main.color = 'color: #DBA832'
          this.subMain.bkgd = 'backgroundColor: #7C725B'
          this.subMain.color = 'color: #7C7B5B'
        } else if(temp > 60 && temp <= 85){
          this.main.bkgd = 'backgroundColor: #DB7E32'
          this.main.color = 'color: #DB7E32'
          this.subMain.bkgd = 'backgroundColor: #7C725B'
          this.subMain.color = 'color: #7C7B5B'
        } else if(temp > 85){
          this.main.bkgd = 'backgroundColor: #DB323A'
          this.main.color = 'color: #DB323A'
          this.subMain.bkgd = 'backgroundColor: #7C615B'
          this.subMain.color = 'color: #7C615B'
        } 
      },
      getAddressData: function (addressData, placeResultData, id) {
        this.address = addressData;
        this.$http.get('https://api.darksky.net/forecast/5f6017631b7105c5ca8dc4d7c06b3c88/' + addressData.latitude + ',' + addressData.longitude)
          .then(response => {
          console.log("fired");
          this.weather = response;
          const atemp = response.body.currently.apparentTemperature;
          this.colorChange(atemp);
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
    width: 70%;
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
    width: 50%;
    margin: 50px 0;
    font-size: 16px;
    padding: 10px 15px;
    border: 1px solid #eaeaea;
  }
  .currently-temp{
    font-size: 50px;
    span{
      font-size: 100px;
      font-weight: bold;
    }
  }
  .currently-icon{
    &:after{
      position: absolute;
      right: 100px;
      top: 200px;
      display: block;
      font-size: 100px;
    }
    &.clear-day, &.clear-night{
      &:after{
        content: "☀️";
      }
    }
    &.partly-cloudy-day, &.partly-cloudy-night{
      &:after{
        content: "🌤";
      }
    }
    &.cloudy:after{
      content: "☁️";
    }
    &.rain:after{
      content: "🌧";
    }
    &.snow:after{
      content: "🌨";
    }
    &.sleet:after{
      content: "🌨";
    }
    &.wind:after{
      content: "🌬";
    }
    &.fog:after{
      content: "🌫";
    }
    &.hail:after{
      content: "🌨";
    }
    &.thunderstrom:after{
      content: "🌩";
    }
    &.tornado:after{
      content: "🌪";
    }
  }
  .light-grey, .grey, .black, .subMainBkgd, .mainBkgd{
    width: 100px;
    height:100px;
    display: block;
  }
  
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
