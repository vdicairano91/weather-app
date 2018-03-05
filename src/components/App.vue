<template>
  <div id="app">
    <div class="temp-info">
      <vue-google-autocomplete ref="address" id="map" classname="form-control" placeholder="74th Street, Jackson Heights, NY, USA" v-on:placechanged="getAddressData"></vue-google-autocomplete>
      
      
      <p class="currently-temp"><span v-html="Math.round(weather.body.currently.apparentTemperature)"></span>&deg;</p>
      
      <p>Dew Point: {{weather.body.currently.dewPoint}}</p>
      <p>Wind Speed: {{weather.body.currently.windSpeed}}</p>
      <p>UV Index: {{weather.body.currently.uvIndex}}</p>
      <p>Icon: {{weather.body.currently.icon}}</p>
      <p>Cloud Coverage: {{weather.body.currently.cloudCover}}</p>
      <p>Visibility: {{weather.body.currently.visibility}}</p>
      <p>Wind Direction: {{weather.body.currently.windBearing}}</p>
      <p>{{weather.body.minutely.summary}}</p>
      <div class="wind-arrow" v-bind:style="{transform: 'rotate(' + weather.body.currently.windBearing + 'deg)'}"></div>
    </div>
    <div class="currently-icon" v-bind:class="weather.body.currently.icon">
      
    </div>
    <div class="bottom">
      <a href="https://darksky.net/poweredby/" target="_blank">Powered by Dark Sky</a>
    </div>
    <div class="light-grey"></div>
    <div class="grey"></div>
    <div class="black"></div>
    <div class="subMainBkgd"></div>
    <div class="mainBkgd" v-bind:style="color.freezing"></div>
  
  

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
        color: {
          freezing: {backgroundColor: '#1963A0'},
          cold: {backgroundColor: '#1985A1'},
        },
        none: {
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
        
        if(temp >= 20){
          this.color.freezing = 'backgroundColor: #1985A1'
          //        this.info = value;
          console.log(this.color.freezing)
          //            this.$el.subMainBkgd.backgroundColor = "#4C5568";
          //            this.$el.subMain.color = "#4C5568";
          //            this.$el.mainBkgd.backgroundColor = "#1963A0";
          //            this.$el.main.color = "#1963A0";
        } else if(temp < 20 && temp >= 40){
//          value = this.color.cold;

          //        this.info = value;
//          console.log(value)
          //            this.$el.subMainBkgd.backgroundColor = "#4C5C68";
          //            this.$el.subMain.color = "#4C5C68";
          //            this.$el.mainBkgd.backgroundColor = "#1985A1";
          //            this.$el.main.color = "#1985A1";
        } else if(temp < 40 && temp >= 60){
          //            this.$el.subMainBkgd.backgroundColor = "#4C6368";
          //            this.$el.subMain.color = "#4C6368";
          //            this.$el.mainBkgd.backgroundColor = "#19A099";
          //            this.$el.main.color = "#19A099";
        } else if(temp < 60 && temp >= 80){
          //            this.$el.subMainBkgd.backgroundColor = "#7C7B5B";
          //            this.$el.subMain.color = "#7C7B5B";
          //            this.$el.mainBkgd.backgroundColor = "#DBA832";
          //            this.$el.main.color = "#DBA832";
        }
//        value = color.freezing;

//        this.info = value;
//        console.log(value)
        
        
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
  
  :root {
    --bgcolour: #ffffd0;
  }
  $light-grey: #DDDDDD;
  $grey: #C2C5C6;
  $black: #46464C;
  $sub-main: #4C5568;
  $main: #1963A0;
  
  .light-grey{
    background-color: #DDDDDD;
    width: 100px;
    height:100px;
    display: block;
}
/*  #DDDDDD;*/
  
  .grey{
    background-color: #c4c4c4;
    width: 100px;
    height:100px;
    display: block;
}
/*  #C2C5C6;*/
  
  .black{
    background-color: #4C4746;
    width: 100px;
    height:100px;
    display: block;
}
  *{
    color: #4C4746;
  }
  .subMainBkgd{
    background-color: #4C5568;
    width: 100px;
    height:100px;
    display: block;
}
  
  .mainBkgd{
    background-color: #1963A0;
    width: 100px;
    height:100px;
    display: block;
}
  .subMain{
    color: #4C5568;
}
  .main{
    color: #1963A0;
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
