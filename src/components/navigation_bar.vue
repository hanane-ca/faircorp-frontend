<template>
  <div>
    <ul>
      <li><a href="#">Buildings</a></li>
      <li><a href="#">Rooms</a></li>
      <li><a href="#">Windows</a></li>
      <li><a href="#">Heaters</a></li>
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

li a:hover:not(.active) {
  background-color: #111;
}

</style>
