<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <router-link to="/">Home</router-link> |
    <router-link to="/news/001/Today Hots">今日头条</router-link>
    
    <transition name="trans" mode="out-in">
      <router-view/>
    </transition>
    
  </div>
</template>

<script>
export default {
  name: "App"
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

.trans-enter {
  opacity: 0;
}

.trans-enter-active {
  transition: 0.5s;
}

.trans-leave {
  opacity: 1;
}

.trans-leave-active {
  opacity: 0;
  transition: 0.5s;
}
</style>
