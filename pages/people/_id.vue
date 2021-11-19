<template>
  <section class="container">
    <div class="link_or">
      <NuxtLink to="/people" style="color: grey"> > People</NuxtLink>
    </div>
    <h1>{{ people.name }}</h1>
    <img :src="people.image" :alt="people.content" />
    <article>
      <span class="tag">{{ people.position }}</span>
      <p>
        {{ people.content }}
      </p>
    </article>
    <section class="details-grid">
      <center>
        <h3>Works in the area</h3>
        <div class="card" @click="goTo(`/area_/${people.area.id}`)">
          <card-area
            :title="people.area.name"
            :summary="people.area.objective"
            :image="people.area.image"
          ></card-area>
        </div>
      </center>
      <center>
        <h3>In charge of</h3>

        <div class="card" @click="goTo(`/services/${people.service.id}`)">
          <card-service
            :name="people.service.title"
            :image="people.service.image"
            :description="people.service.preview"
          ></card-service>
        </div>
      </center>
    </section>
  </section>
</template>

<script>
import CardService from '~/components/CardService.vue'
import CardArea from '~/components/CardArea.vue'
export default {
  components: {
    CardService,
    CardArea,
  },
  async asyncData({ $axios, route }) {
    const { id } = route.params
    console.log('this url', process.env.BASE_URL)
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/people/${id}`
    )
    const people = data
    console.log(people)
    return {
      people,
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
  margin-top: 16px;
  margin-bottom: 20px;
}

img {
  max-width: 250px;
  margin: 16px 16px 0 0;
  border-radius: 4px;
  border: 5px solid #555;
}

p {
  text-align: center;
  margin-top: 40px;
}

.tag {
  margin: 16px 16px 0 0;
  padding: 4px 8px;
  border: 1px solid #e5eaed;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 600;
  background-color: #a1a3a831;
  color: #3823ac;
}

.name {
  color: black;
}

.details-grid {
  display: grid;

  justify-content: center;
  padding: 10px;

  grid-template-columns: repeat(2, 1fr);

  grid-gap: 1rem;
  align-content: center;
}

@media (max-width: 720px) {
  .details-grid {
    display: grid;

    justify-content: center;
    padding: 10px;

    grid-template-columns: repeat(1, 1fr);

    grid-gap: 1rem;
    align-content: center;
  }
}
</style>
