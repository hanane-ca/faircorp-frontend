<template>
  <div id="app">
    <navigationBar></navigationBar>
    <router-view></router-view>
    <!-- <rooms></rooms> -->
  </div>
</template>

<script>
import Rooms from './components/windows.vue'
import NavigationBar from './components/navigation_bar.vue'

export default {
  name: "app",
  components: {
    'rooms' : Rooms,
    'navigationBar' : NavigationBar
  },
  data() {
    return {
    };
  }
};
</script>

<style>

</style>
