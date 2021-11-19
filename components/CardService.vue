<template>
  <main class="card">
    <img :src="image" alt="image" style="width: 100%" />
    <div class="card__details">
      <div class="name">{{ name }}</div>
      <p>{{ description }}</p>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: () => '',
    },

    name: {
      type: String,
      default: () => '',
    },

    description: {
      type: String,
      default: () => '',
    },
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
  background-color: #ffffff;
  align-content: center;
  object-fit: cover;
  max-height: 350px;
  max-width: 250px;
}

.card img {
  border-radius: 8px;
  margin: 0 0 0 0;
  object-fit: cover;
  max-height: 110px;
  max-width: 250px;
}

.card__details {
  padding: 16px 8px 8px 8px;
}

.name {
  /*   font-size: 18px;
  font-weight: 500;
  margin-top: 16px;
  color: #200d86; */
  font-size: 18px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

p {
  /* text-align: center;
  margin-top: 8px; */
  text-align: center;
  margin-top: 12px;
  margin-bottom: 8px;
  margin-left: 8px;
  margin-right: 8px;
  padding: 6px 10px;
  border: 1px solid #e5eaed;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(32, 37, 110, 0.7);
  color: #ffffff;
}
</style>
