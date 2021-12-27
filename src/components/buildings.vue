<template>
  <div>
    <div class="container">
      <div v-for="building in buildings" :key="building.id" class="building">
        <table>
          <tr>
            <th>Building id : {{ building.id }}</th>
            <th v-on:click="deleteBuilding(building.id)" class="delete">X</th>
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
    <button class="button" @click="showModal = true">Create Building</button>
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="showModal"
        @click="showModal = false"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
        <h1>Create Building</h1>
        <form>
          <label>Outside Temperature:</label><br />
          <input type="text" v-model="outsideTemperature" /><br />
          <input
            type="button"
            class="button"
            @click="showModal = false"
            value="Create"
            v-on:click="createBuilding()"
          />
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buildings: [],
      showModal: false,
      outsideTemperature: null,
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
  methods: {
    deleteBuilding: function (id) {
      this.$http
        .delete(`https://hanane-chrif.cleverapps.io/api/buildings/${id}`)
        .then(function (response) {
          console.log(response);
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    createBuilding() {
      this.$http
        .post("https://hanane-chrif.cleverapps.io/api/buildings/", {outsideTemperature : this.outsideTemperature})
        .then(function (response) {
          console.log(response);
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
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

.delete {
  color: red;
  cursor: pointer;
}

.button {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;

  display: inline-block;
  padding: 15px 25px;
  background-image: linear-gradient(to right, #4b2538, #a05081);
  border-radius: 8px;

  color: #fff;
  font-size: 18px;
  font-weight: 700;
  margin-left: 35%;

  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}

button:hover {
  box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 16px;
  border-radius: 5px;
  background-color: #f2f2f2;

  padding: 25px;
}

h1 {
  color: #222;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 15px;
}

p {
  color: #666;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}

input[type="text"],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
