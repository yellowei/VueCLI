<template>
  <div>
      <h2>{{ msg }}</h2>
      <p>新闻ID: {{ $route.params.id }}</p>
      <p>新闻Title: {{ $route.params.title }}</p>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'This is a news page!',
            }
        }
    }
</script>