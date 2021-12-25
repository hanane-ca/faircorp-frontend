<template>
  <div>
    <ul>
      <li><router-link to='/buildings' exact>Buildings</router-link></li>
      <li><router-link to='/rooms' exact>Rooms</router-link></li>
      <li><router-link to='/windows' exact>Windows</router-link></li>
      <li><router-link to='/heaters' exact>Heaters</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}


.router-link-active {
  background-color: rgb(170, 169, 169);
  color: black;
}

</style>
