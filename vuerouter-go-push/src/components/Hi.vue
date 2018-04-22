<template>
  <div id="app">
      <h3> {{ msg }} </h3>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      msg: 'Hi, I`m Hi Page!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
