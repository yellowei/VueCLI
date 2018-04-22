<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <div>
        <button @click="goBack">返回</button> 
        <button @click="goForward">前进</button>
        <button @click="goHome">去首页</button>
      </div>
      
      <router-link to="/">首页</router-link> |
      <router-link to="/hi">Hi Page</router-link> |
      <router-link :to="{name:'hi1', params:{name:'yellowei', id:'001'}}">-Hi1 Page</router-link> |
      <router-link to="/hi/hi2">-Hi2 Page</router-link> 
    </div>
    <!-- <p> {{ $route.name }} </p> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    goBack: function () {
      this.$router.go(-1);
    },
    goForward: function () {
      this.$router.go(1);
    },
    goHome: function () {
      this.$router.push('/');
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
