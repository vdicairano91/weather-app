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
<!--    <p v-html:"websiteTag"></p>-->
      <p>{{ name }}</p>
    <div class="bottom">
      To get started, edit <code>./src/components/App.vue</code> and save to reload.<br/>
      <span class="fade">
        Checkout <code>./README.md</code> for more usages.
      </span>
    </div>
  </div>
</template>

<!--
data:  {
name: "vinny",
website: 'http://vincentdicairano.com/',
websiteTag: "<a v-bind:href='website'>my website</a>"
}
-->
<script>
  export default {
    name: 'app'
  }
</script>

<!-- CSS libraries -->
<!--<style src="normalize.css/normalize.css"></style>-->

<style lang="scss" scoped>
  @import "app.scss"
</style>
