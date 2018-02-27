<template>
  <div id="app">
    <div class="banner">
      <img
        src="https://vuejs.org/images/logo.png"
        width="100"
        alt="vue"
        class="logo"
      />
      <h1>Welcome to Vue.js</h1>
    </div>
    <p>{{weather.body.currently.apparentTemperature}}</p>
    <div class="bottom">
      <a href="https://darksky.net/poweredby/" target="_blank">Powered by Dark Sky</a>
    </div>
    <vue-google-autocomplete
                                   ref="address"
                                   id="map"
                                   classname="form-control"
                                   placeholder="Please type your address"
                                   v-on:placechanged="getAddressData"
                                   >
    </vue-google-autocomplete>
  </div>
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
  @import "app.scss"
</style>



<!--
var weatherUrl =
"https://api.darksky.net/forecast/" +
apiKey +
lat +
"," +
lon +
"?exclude=hourly,daily,alerts,flags";-->
