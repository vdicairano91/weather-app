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
<!--    <p>Check out my website <a v-bind:href="website">here</a>.-->
<!--    <p v-html:"websiteTag"></p>-->
<!--      <p>{{ name }}</p>-->
<!--    <p>{{ address.latitude }}</p>-->
    <p>{{ weather }}</p>
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
<!--    <button @click="fetchData()"> </button>-->
  </div>
</template>
<!--https://api.darksky.net/forecast/5f6017631b7105c5ca8dc4d7c06b3c88/37.8267,-122.4233-->

<script>
  import VueGoogleAutocomplete from 'vue-google-autocomplete'
  export default {
    
    components: { VueGoogleAutocomplete },
    data: function () {
      return {
        weather: ''
      }
    },
    created: function () {
      this.fetchData();
    },       
    mounted() {
      this.$refs.address.focus();
    },
    methods: {
      fetchData: function () {
        var apiURL = 'https://api.darksky.net/forecast/5f6017631b7105c5ca8dc4d7c06b3c88/37.8267,-122.4233'
//        this.$http.get( apiURL, function( data ) {
//          this.items = data;
//          console.log(data);
//        });
        this.$http.get(apiURL, { headers: { 'Access-Control-Allow-Origin': '*' }}).then(function (data) {

          // get status
          response.status;

          // get all headers
          response.headers();

          // get 'expires' header
          response.headers('expires');

          this.items = data;
          console.log(data);
          // set data on vm
          this.$set('someData', response.data)

        }, function (response) {

          // error callback
        });
      },
      /**
            * When the location found
            * @param {Object} addressData Data of the found location
            * @param {Object} placeResultData PlaceResult object
            * @param {String} id Input container ID
            */
      getAddressData: function (addressData, placeResultData, id) {
        this.address = addressData;
        console.log(addressData.latitude,addressData.longitude);
        this.fetchData();
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
"https://crossorigin.me/" +
"https://api.darksky.net/forecast/" +
apiKey +
lat +
"," +
lon +
"?exclude=hourly,daily,alerts,flags";-->
