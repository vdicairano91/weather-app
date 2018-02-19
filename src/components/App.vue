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
    <p>Check out my website <a v-bind:href="website">here</a>.
    <p v-html:"websiteTag"></p> 
      
      <p>{{ name }}</p>
    <div class="bottom">
      <a href="https://darksky.net/poweredby/" target="_blank">Powered by Dark Sky</a>
    </div>
  </div>
</template>


<script>
  export default {
    data: () => ({
      name: "vinny",
      website: 'http://vincentdicairano.com/',
      websiteTag: "<a v-bind:href='website'>my website</a>"
    })
//    $(".bottom").click(function() {
//      alert( "Handler for .click() called." );
//  });
  }
</script>

<!-- CSS libraries -->
<!--<style src="normalize.css/normalize.css"></style>-->

<style lang="scss" scoped>
  @import "app.scss"
</style>
