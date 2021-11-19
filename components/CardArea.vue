<template>
  <div class="area-mini">
    <div class="card">
      <div class="img" :style="{ 'background-image': `url(${image})` }"></div>
      <h3>{{ title }}</h3>

      <p>{{ summary }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: () => '' },
    image: { type: String, default: () => '' },
    summary: { type: String, default: () => '' },
  },
}
</script>

<style scoped>
.card {
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.11);
  transition: 0.3s;
  width: 90%;
  border-radius: 4px;
  padding: 6px;
  background-color: rgba(224, 223, 231, 0.11);
  align-content: center;
  object-fit: cover;
  max-height: 350px;
  max-width: 250px;
}
h3 {
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
  margin-top: 5px;
  margin-left: 7px;
  margin-right: 7px;
  color: rgba(0, 0, 0, 0.8);
}
p {
  text-align: center;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 8px;
  margin-right: 8px;
  padding: 4px 8px;
  border: 1px solid #e5eaed;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(26, 138, 54, 0.486);
  color: #ffffff;
  /* height: 60px; */
}

.img {
  width: 100%;
  height: 200px;
  max-width: 600px;
  margin: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 15px;
}
</style>
