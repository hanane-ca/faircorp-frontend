<template>
  <div>
    <div class="container">
      <div v-for="window in windows" :key="window.id" class="window">
        <windowComponent v-bind:windowInfo="window"></windowComponent>
      </div>
    </div>
    <button v-on:click="createWindow()">Create</button>
  </div>
</template>

<script>
import WindowComponent from "./window_component.vue";
export default {
  data() {
    return {
      windows: [],
    };
  },
  components: {
    windowComponent: WindowComponent,
  },
  created() {
    this.$http
      .get("https://hanane-chrif.cleverapps.io/api/windows")
      .then(function (data) {
        console.log(data);
        this.windows = data.body;
      });
  },
  methods: {
    createWindow() {
      this.$http
        .post("https://hanane-chrif.cleverapps.io/api/windows/", {
          
          name: "window3",
          roomId: -10,
          roomName: "room1",
          windowStatus: "CLOSED",
        })
        .then(function (response) {
          console.log(response);
          window.location.reload();
          this.windows.push({
          name: "window3",
          roomId: -10,
          roomName: "room1",
          windowStatus: "CLOSED",});
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.window {
  background-color: rgb(230, 250, 159);
  width: 25%;
  margin: 5px;
  text-align: center;
}

.container {
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
}

button {
  background-color: #3d633e;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
  margin: 10px 40%;
}
</style>
