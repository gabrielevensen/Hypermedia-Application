<template>
  <main class="container">
    <header>
      <h1>Who We Are</h1>
      <h2>Based in Milano with clients all over the globe.</h2>
      <img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        alt="about image"
      />
    </header>
    <section>
      <h3>{{ content.el1.title }}</h3>
      <p>
        {{ content.el1.text }}
      </p>
    </section>

    <hr class="bookends" />
    <section>
      <h3>{{ content.el2.title }}</h3>
      <p>
        {{ content.el2.text }}
      </p>
    </section>
    <hr class="bookends" />

    <section>
      <h3>{{ content.el3.title }}</h3>
      <p>
        {{ content.el3.text }}
      </p>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/static/about1`
    )
    const content = data.data
    console.log(content)
    return {
      content,
    }
  },
}
</script>

<style scoped>
* {
  margin-top: 30px;

  margin-bottom: 30px;
  text-align: center;
}

section {
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.11);
  transition: 0.3s;
  border-radius: 10px;
  padding: 6px;
  background-color: rgba(224, 223, 231, 0.11);
  align-content: center;
  object-fit: cover;
}

h3 {
  text-align: top;
  margin-top: 30px;

  margin-bottom: 30px;
  color: black;
}

img {
  max-width: 1500px;
  border-radius: 1%;
}

p {
  text-align: left;
  font-size: 90%;
  font-weight: 700;
  line-height: 25px;
  border: none;
  padding: 12px 24px;
  border-radius: 10px;
  color: #202022e1;
  background-color: #b5c4bc6e;
  margin-left: 10px;
  margin-right: 10px;
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
