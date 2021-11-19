<template>
  <main class="card">
    <img :src="image" alt="Employee" style="width: 100%" />
    <div class="card__details">
      <div class="name">{{ name }}</div>
      <span class="tag">{{ tag }}</span>
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

    tag: {
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
  background-color: rgba(224, 223, 231, 0.11);
  align-content: center;
  object-fit: cover;
  max-height: 350px;
  max-width: 250px;
}

.card img {
  border-radius: 8px;
  margin: 0 0 0 0;
  object-fit: cover;
  max-height: 150px;
  max-width: 250px;
}

.card__details {
  padding: 16px 8px 8px 8px;
}
.tag {
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 4px 8px;
  border: 1px solid #e5eaed;
  border-radius: 50px;
  font-size: 10px;
  font-weight: 600;
  background-color: #a1a3a831;
  color: #3823ac;
}
.name {
  font-size: 18px;
  font-weight: 600;
  margin-top: 5px;
  margin-bottom: 8px;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 10px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

p {
  text-align: center;
  margin-top: 16px;
  margin-bottom: 4px;
  margin-left: 8px;
  margin-right: 8px;
  padding: 4px 8px;
  border: 1px solid #e5eaed;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.534);
  color: #ffffff;
}
</style>
