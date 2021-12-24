<template>
  <div>
    <div v-for="window in windows" :key="window.id" class="window">
        <p>windowName : {{window.name}}</p>
        <p>windowStatus : {{window.windowStatus}}</p>
        <p>roomName : {{window.roomName}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      windows:[]
    };
  },
  created() {
    this.$http
      .get("https://hanane-chrif.cleverapps.io/api/windows")
      .then(function (data) {
        console.log(data);
        this.windows = data.body;
      });
  },
};
</script>

<style>
.window{
    background-color: rgb(238, 148, 31);
    padding: 15px;
    margin: 5px;
    margin-right: 50%;
    text-align: center;
}
</style>
