<template>
  <div class="header">
    <a href="/" class="logo">Smart Solver</a>
    <div class="header-right">
      <a href="/services">Services</a>
      <a href="/area_">Areas</a>
      <a href="/people">People</a>
      <a href="/about">About us</a>
      <a href="/contact">Contact us</a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  overflow: hidden;
  background-color: rgba(51, 73, 168, 0.719);
  padding: 28px 10px;
}

.header a {
  float: left;
  color: rgb(255, 255, 255);
  text-align: center;
  padding: 10px;
  text-decoration: none;
  font-size: 16px;
  line-height: 25px;
  border-radius: 4px;
  font-weight: bold;
}

.header a.logo {
  font-size: 35px;
  color: rgb(75, 71, 71);
  background-color: rgba(255, 255, 255, 0.959);
  font-weight: bold;
}

.header a:hover {
  background-color: rgb(215, 217, 221);
  color: black;
}

.header-right {
  float: right;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }

  .header-right {
    float: none;
  }
}
</style>
