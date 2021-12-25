<template>
  <div class="container">
    <div v-for="heater in heaters" :key= "heater.id" class="heater">
      <table>
        <tr>
          <th>{{ heater.name }}</th>
          <th></th>
        </tr>
        <tr>
          <td>room name :</td>
          <td>
            {{ heater.roomName }}
          </td>
        </tr>
        <tr>
          <td>Heater Status :</td>
          <td>
            {{ heater.heaterStatus }}
          </td>
        </tr>
        <tr>
          <td>Power :</td>
          <td>{{ heater.power }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        heaters : []
    };
  },
  created() {
    this.$http
      .get("https://hanane-chrif.cleverapps.io/api/heaters")
      .then(function (data) {
        console.log(data);
        this.heaters = data.body;
      });
  },
};
</script>

<style>
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
.heater {
  background-color: rgb(159, 247, 250);
  width: 25%;
  margin: 5px;
  text-align: center;
}

.container {
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
}
</style>
