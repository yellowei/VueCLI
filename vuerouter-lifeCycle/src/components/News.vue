<template>
    <div>
        <h2>{{msg}}</h2>
        <p>id: {{$route.params.id}}</p>
        <p>name: {{$route.params.name}}</p>
        <p>title: {{$route.params.title}}</p>
    </div>
</template>


<script>
export default {
  data() {
    return {
      msg: "This is news page!"
    };
  },
  beforeRouteEnter: (to, from, next) => {
    console.log(to);
    console.log(from);
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log(to);
    console.log(from);
    next();
  }
};
</script>