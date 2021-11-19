<template>
  <main class="container">
    <header>
      <h1>{{ content.title }}</h1>
      <h4>{{ content.subtitle }}</h4>
      <img :src="content.image" alt="image" />
    </header>
    <section>
      <h2>{{ content.subtitle1 }}</h2>
      <p>
        {{ content.text1 }}
      </p>
      <button @click="goTo(`/services`)">Read more about our services</button>
    </section>
    <hr class="bookends" />

    <section>
      <h2>{{ content.subtitle2 }}</h2>
      <p>
        {{ content.text2 }}
      </p>
      <button @click="goTo(`/people`)">
        Meet the people behind our services
      </button>
    </section>
    <hr class="bookends" />

    <section>
      <h2>{{ content.subtitle3 }}</h2>
      <p>
        {{ content.text3 }}
      </p>
      <button @click="goTo(`/area_`)">Explore the areas we work in</button>
    </section>
    <hr class="bookends" />

    <section>
      <h2>{{ content.subtitle4 }}</h2>
      <p>
        {{ content.text4 }}
      </p>
      <button @click="goTo(`/about`)">Read more about our company</button>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/static/index`
    )
    const content = data.data
    return {
      content,
    }
  },
  methods: {
    goTo(path) {
      this.$router.push({ path })
    },
  },
}
</script>

<style scoped>
* {
  margin-top: 30px;

  margin-bottom: 30px;
  text-align: center;
}

h2 {
  margin-top: 30px;

  margin-bottom: 30px;
  color: rgba(12, 115, 212, 0.904);
}

h4 {
  margin-bottom: 30px;
  color: rgba(51, 73, 168, 0.719);
}

img {
  max-width: 1500px;
  border-radius: 1%;
}

p {
  text-align: center;
  font-size: 90%;
}
button {
  border: none;
  padding: 12px 24px;
  border-radius: 50px;

  font-weight: 600;
  color: #202022e1;
  background-color: #b5c4bc6e;

  margin: 0 auto;
  display: block;

  cursor: pointer;
}
.bookends {
  margin: auto;
  margin-bottom: 62px;
  margin-top: 16px;
  border-width: 2px;
  border-color: hsl(240, 4%, 96%) transparent;
  width: 10%;
}
</style>
