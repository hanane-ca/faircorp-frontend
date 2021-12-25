<template>
      <table>
        <tr>
          <th>{{ windowInfo.name }}</th>
          <th></th>
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
    props : ['windowInfo'],
  data() {
    return {
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
