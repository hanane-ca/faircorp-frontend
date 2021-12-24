<template>
  <div id="app">
    <p>{{ msg }}</p>
    <rooms></rooms>
  </div>
</template>

<script>
import Rooms from './components/rooms.vue'

export default {
  name: "app",
  components: {
    'rooms' : Rooms
  },
  data() {
    return {
      msg: "Faircorp"
    };
  }
};
</script>

<style>
</style>
