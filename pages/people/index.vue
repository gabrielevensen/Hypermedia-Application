<template>
  <main class="container">
    <header>
      <p style="color: grey; margin-bottom: 50px">> People</p>
      <h1>Meet our employees</h1>
      <h4>A place for everyone to be someone</h4>
    </header>
    <section class="people-grid">
      <div
        v-for="(people, peopleIndex) of people"
        :key="'people-' + peopleIndex"
        class="people"
        @click="goToPeople(`/people/${people.id}`)"
      >
        <card-people
          :name="people.name"
          :image="people.image"
          :tag="people.position"
          :description="people.preview"
        ></card-people>
      </div>
    </section>
  </main>
</template>

<script>
import CardPeople from '~/components/CardPeople.vue'
export default {
  components: {
    CardPeople,
  },

  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/people`)
    const people = data
    return {
      people,
    }
  },

  methods: {
    goToPeople(path) {
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
h2 {
  margin-bottom: 30px;
}

.people-grid {
  width: 100%;
  display: grid;

  justify-content: center;
  padding: 10px;

  grid-template-columns: repeat(3, 1fr);

  grid-auto-rows: repeat(3, 1fr);

  grid-gap: 1rem;
}

@media (max-width: 1024px) {
  .people-grid {
    display: grid;

    justify-content: center;
    padding: 10px;

    grid-template-columns: repeat(3, 1fr);

    grid-auto-rows: repeat(3, 1fr);

    grid-gap: 1rem;
  }
}

@media (max-width: 880px) {
  .people-grid {
    display: grid;

    justify-content: center;
    padding: 10px;

    grid-template-columns: repeat(2, 1fr);

    grid-auto-rows: repeat(5, 1fr);

    grid-gap: 1rem;
  }
}

@media (max-width: 640px) {
  .people-grid {
    display: grid;

    justify-content: center;

    padding: 10px;

    grid-template-columns: repeat(1, 1fr);

    grid-auto-rows: repeat(9, 1fr);

    grid-gap: 1rem;
  }
}

.people {
  cursor: pointer;
  display: grid;
  align-items: center;
  justify-items: center;
  cursor: pointer;
}
</style>
