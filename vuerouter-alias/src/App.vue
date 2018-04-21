<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <router-link to="/">Home</router-link> |
    <router-link to="/news/001/Today Hots">News</router-link> |
    <router-link to="/redirectToHome">Redirect To Home</router-link> |
    <router-link to="/redirectToNews/002/Redirect Today Hots">Redirect To News</router-link> |
    <router-link to="/aliasNews002">Alias To News 002(无效) </router-link> |
    <router-link to="/aliasHome">Alias To Home(有效) </router-link> 
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
