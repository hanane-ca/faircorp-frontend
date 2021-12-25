<template>
  <table>
    <tr>
      <th>{{ windowInfo.name }}</th>
      <th v-on:click="deleteWindow(windowInfo.id)" class="delete">X</th>
    </tr>
    <tr>
      <td>room id :</td>
      <td>
        {{ windowInfo.id }}
      </td>
    </tr>
    <tr>
      <td>room Name :</td>
      <td>
        {{ windowInfo.roomName }}
      </td>
    </tr>
    <tr>
      <td>Status :</td>
      <td>{{ windowInfo.windowStatus }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: ["windowInfo"],
  data() {
    return {};
  },
  methods: {
    deleteWindow: function (id) {
      this.$http
        .delete(`https://hanane-chrif.cleverapps.io/api/windows/${id}`)
        .then(function (response) {
          console.log(response);
          window.location.reload()
        })
        .catch((error) => {
          console.log(error);
        });
    },
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

.delete {
  color: red;
}
</style>
