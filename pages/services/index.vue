<template>
  <main class="container">
    <header>
      <p style="color: grey; margin-bottom: 50px">> Services</p>
      <h1>All our services</h1>
      <p>
        Our solutions are focused on improving the supply chain performance of
        any type organization
      </p>
    </header>
    <section class="service-grid">
      <div
        v-for="(service, serviceIndex) of service"
        :key="'service-' + serviceIndex"
        class="services"
        @click="goTo(`/services/${service.id}`)"
      >
        <card-service
          :name="service.title"
          :image="service.image"
          :description="service.preview"
        ></card-service>
      </div>
    </section>
  </main>
</template>

<script>
import CardService from '~/components/CardService.vue'
export default {
  components: {
    CardService,
  },

  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/service`)
    const service = data
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

h2 {
  margin-bottom: 30px;
}

.service-grid {
  display: grid;

  justify-content: center;
  padding: 10px;

  grid-template-columns: repeat(3, 1fr);

  grid-auto-rows: repeat(3, 1fr);

  grid-gap: 1rem;
}

@media (max-width: 880px) {
  .service-grid {
    display: grid;

    justify-content: center;
    padding: 10px;

    grid-template-columns: repeat(2, 1fr);

    grid-auto-rows: repeat(5, 1fr);

    grid-gap: 1rem;
  }
}

@media (max-width: 630px) {
  .service-grid {
    display: grid;

    justify-content: center;

    padding: 10px;

    grid-template-columns: repeat(1, 1fr);

    grid-auto-rows: repeat(9, 1fr);

    grid-gap: 1rem;
  }
}

.services {
  display: grid;
  align-items: center;
  justify-items: center;
  cursor: pointer;
  margin-bottom: 20px;
}
</style>
