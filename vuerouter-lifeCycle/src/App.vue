<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <router-link to="/">Home</router-link> |
    <router-link to="/news/1/today hots">News</router-link> |
    <router-link :to="{name:'News', params:{id:'001', title:'today hots'}}">News</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
