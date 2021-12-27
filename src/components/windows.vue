<template>
  <div>
    <div class="container">
      <div v-for="window in windows" :key="window.id" class="window">
        <windowComponent v-bind:windowInfo="window"></windowComponent>
      </div>
    </div>
    <button class="button" @click="showModal = true">Create Window</button>
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="showModal"
        @click="showModal = false"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
        <h1>Create Window</h1>
        <form>
          <label>Window name:</label><br />
          <input type="text" v-model="infos.name" /><br />
          <label>Room id:</label><br />
          <input type="text" v-model="infos.roomId" /><br />
          <label>Room name:</label><br />
          <input type="text" v-model="infos.roomName" /><br />
          <label>Statut:</label><br />
          <input type="text" v-model="infos.windowStatus" /><br />
          <input
            type="button"
            class="button"
            @click="showModal = false"
            value="Create"
            v-on:click="createWindow()"
          />
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import WindowComponent from "./window_component.vue";
export default {
  data() {
    return {
      windows: [],
      showModal: false,
      infos: {
        name: "",
        roomId: null,
        roomName: "",
        windowStatus: "",
      },
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
        .post("https://hanane-chrif.cleverapps.io/api/windows/", this.infos)
        .then(function (response) {
          console.log(response);
          window.location.reload();
          this.windows.push(Infos);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
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

.button {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;

  display: inline-block;
  padding: 15px 25px;
  background-image: linear-gradient(to right, #254b36, #50a05b);
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
