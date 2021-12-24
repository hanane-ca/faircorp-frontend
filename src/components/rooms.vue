<template>
  <div class="container">
    <div v-for="room in rooms" :key="room.id" class="room">
      <table>
        <tr>
          <th>{{ room.name }}</th>
          <th></th>
        </tr>
        <tr >
          <td class="middlerow">
            <p>id :</p>
            <p>currentTemp :</p>
            <p>targetTemp :</p>
            <p>buildingId :</p>
          </td>
          <td class="middlerow"> 
            <p>{{ room.id }}</p>
            <p>{{ room.currentTemp }}</p>
            <p>{{ room.targetTemp }}</p>
            <p>{{ room.buildingId }}</p>
          </td>
        </tr>
        <tr>
          <td><a href="#">Windows</a></td>
          <td><a href="#">Heaters</a></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rooms: [],
    };
  },
  created() {
    this.$http
      .get("https://hanane-chrif.cleverapps.io/api/rooms")
      .then(function (data) {
        console.log(data);
        this.rooms = data.body;
      });
  },
};
</script>

<style>
.container {
  display: flex;
}
.room {
  background-color: antiquewhite;
    width: 25%;
  margin: 5px;
  text-align: center;
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
.middlerow {
  border-left: 0px;
  border-right: 0px;
}
</style>
