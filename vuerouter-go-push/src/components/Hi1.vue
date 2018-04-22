<template>
  <div>
      <h3> {{ msg }}  - {{ $route.params.name }} - {{ $route.params.id }} </h3>
  </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      msg: 'Hi, I`m Hi-1 Page!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
