<template>
  <section class="container">
    <div class="link_or">
      <NuxtLink to="/services" style="color: grey"> > Services</NuxtLink>
    </div>
    <h1>{{ service.title }}</h1>
    <img :src="service.image" :alt="service.title" />

    <p>
      {{ service.presentation }}
    </p>

    <section class="details-grid">
      <center>
        <h3>Related area of this service</h3>
        <!-- 1 card of related area of service -->
        <div class="card" @click="goTo(`/area_/${service.area.id}`)">
          <card-area
            :title="service.area.name"
            :summary="service.area.objective"
            :image="service.area.image"
          ></card-area>
        </div>
      </center>
      <center>
        <h3>Person in charge of service</h3>
        <!-- 1 card of person in charge of service-->
        <div class="card" @click="goTo(`/people/${service.person.id}`)">
          <!-- <img :src="service.person.image" alt="employee" style="width: 100%" /> -->
          <card-people
            :name="service.person.name"
            :image="service.person.image"
            :tag="service.person.position"
            :description="service.person.preview"
          ></card-people>
        </div>
      </center>
    </section>
  </section>
</template>

<script>
import CardPeople from '~/components/CardPeople.vue'
import CardArea from '~/components/CardArea.vue'
export default {
  components: {
    CardPeople,
    CardArea,
  },
  async asyncData({ $axios, route }) {
    const { id } = route.params
    console.log('this url', process.env.BASE_URL)
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/service/${id}`
    )
    const service = data
    console.log(service)

    return {
      service,
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
  max-width: 600px;
  border-radius: 4px;
  border: 5px solid #555;
}
p {
  text-align: center;
  margin-top: 20px;
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
