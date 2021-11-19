<template>
  <section class="container">
    <div class="link_or">
      <NuxtLink to="/area_" style="color: grey"> > Area</NuxtLink>
    </div>
    <header>
      <h1>{{ area.name }}</h1>
      <p>{{ area.objective }}</p>
      <img :src="area.image" :alt="area.objective" />
    </header>
    <article>
      <p>{{ area.summary }}</p>
    </article>

    <div class="head_people">
      <h3>People specialized in this area</h3>
    </div>

    <section class="peoples">
      <div
        v-for="(people, peopleIndex) of area.people"
        :key="'people-' + peopleIndex"
        class="people"
        @click="goTo(`/people/${people.id}`)"
      >
        <card-people
          :name="people.name"
          :image="people.image"
          :tag="people.position"
          :description="people.preview"
        ></card-people>
      </div>
    </section>

    <div class="head_services">
      <h3>Services in this area</h3>
    </div>

    <section class="services">
      <div
        v-for="(service, serviceIndex) of area.services"
        :key="'service-' + serviceIndex"
        class="service"
        @click="goTo(`/services/${service.id}`)"
      >
        <card-service
          :name="service.title"
          :image="service.image"
          :description="service.preview"
        ></card-service>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios, route }) {
    const { id } = route.params
    console.log('this url', process.env.BASE_URL)
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/area/${id}`)
    const area = data
    return {
      area,
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
h1 {
  text-align: center;
}

img {
  max-width: 600px;
  border: 5px solid #555;
}

p {
  text-align: center;
}

h4 {
  text-align: center;
}

.head_people.h3 {
  text-align: justify;
}

.head_services.h3 {
  text-align: justify;
}

.services {
  width: 100%;
  display: grid;

  justify-content: center;
  padding: 10px;

  grid-template-columns: repeat(3, 1fr);

  grid-auto-rows: repeat(3, 1fr);

  grid-gap: 1rem;
}

@media (max-width: 880px) {
  .services {
    display: grid;

    justify-content: center;
    padding: 10px;

    grid-template-columns: repeat(2, 1fr);

    grid-auto-rows: repeat(5, 1fr);

    grid-gap: 1rem;
  }
}

@media (max-width: 640px) {
  .services {
    display: grid;

    justify-content: center;

    padding: 10px;

    grid-template-columns: repeat(1, 1fr);

    grid-auto-rows: repeat(9, 1fr);

    grid-gap: 1rem;
  }
}

.service {
  display: grid;
  align-items: center;
  justify-items: center;
}

.peoples {
  width: 100%;
  display: grid;

  justify-content: center;
  padding: 10px;

  grid-template-columns: repeat(3, 1fr);

  grid-auto-rows: repeat(3, 1fr);

  grid-gap: 1rem;
}

@media (max-width: 880px) {
  .peoples {
    display: grid;

    justify-content: center;
    padding: 10px;

    grid-template-columns: repeat(2, 1fr);

    grid-auto-rows: repeat(5, 1fr);

    grid-gap: 1rem;
  }
}

@media (max-width: 640px) {
  .peoples {
    display: grid;

    justify-content: center;

    padding: 10px;

    grid-template-columns: repeat(1, 1fr);

    grid-auto-rows: repeat(9, 1fr);

    grid-gap: 1rem;
  }
}

.people {
  display: grid;
  align-items: center;
  justify-items: center;
}
</style>
