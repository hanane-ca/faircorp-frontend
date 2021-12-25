<template>
  <div class="container">
    <div v-for="building in buildings" :key= "building.id" class="building">
      <table>
        <tr>
          <th>Building id : {{ building.id }}</th>
          <th></th>
        </tr>
        <tr>
          <td>Outside Temperature :</td>
          <td>
            {{ building.outsideTemperature }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        buildings : []
    };
  },
  created() {
    this.$http
      .get("https://hanane-chrif.cleverapps.io/api/buildings")
      .then(function (data) {
        console.log(data);
        this.buildings = data.body;
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
  text-align: center;
}
.building {
  background-color: rgb(250, 159, 238);
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
