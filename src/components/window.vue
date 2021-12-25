<template>
  <div class="container">
    <windowComponent v-bind:windowInfo="window"></windowComponent>
  </div>
</template>

<script>
import WindowComponent from "./window_component.vue";
export default {
  data() {
    return {
      window: {}
    };
  },
  components: {
    windowComponent: WindowComponent,
  },
  created() {
    this.$http
      .get("https://hanane-chrif.cleverapps.io/api/windows/")
      .then(function (data) {
        console.log(data);
        this.window = data.body;
      });
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
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  border: 1px solid #000000;
  width: 100%;
}

td,
th {
  border: 1px solid #000000;
  text-align: center;
  padding: 8px;
}

th {
  border-left: 0px;
  border-right: 0px;
  text-align: right;
}
</style>
