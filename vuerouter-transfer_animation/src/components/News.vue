<template>
  <div>
      <h2>{{msg}}</h2>
      <p>News ID:{{$route.params.id}}</p>
      <p>News TITLE:{{$route.params.title}}</p>
  </div>
</template>


<script>
    export default {
        data() {
            return {
                msg: 'Welcome to News Page!'
            }
        }
    }
</script>