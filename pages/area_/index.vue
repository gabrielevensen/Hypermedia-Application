<template>
  <main class="container">
    <header>
      <p style="color: grey; margin-bottom: 50px">> Areas</p>
      <h1>Areas of the company</h1>
      <h4>Speciallized in three different areas of the logistics market</h4>
    </header>
    <section class="area-grid">
      <div
        v-for="(area, areaIndex) of areas"
        :key="'ar-' + areaIndex"
        class="area"
        @click="goToArea(`/area_/${area.id}`)"
      >
        <card-area
          :title="area.name"
          :summary="area.objective"
          :image="area.image"
        ></card-area>
      </div>
    </section>
  </main>
</template>

<script>
import CardArea from '~/components/CardArea.vue'
export default {
  components: {
    CardArea,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/areas`)
    const areas = data
    return {
      areas,
    }
  },

  methods: {
    goToArea(path) {
      this.$router.push({ path })
    },
  },
}
</script>

<style scoped>
h2 {
  margin-bottom: 30px;
}

.area-grid {
  display: grid;
  grid-template-columns: repeat(3, calc(100% / 3));
  grid-gap: 10px;
  margin-top: 40px;
  margin-bottom: 40px;
  justify-content: center;
}

@media screen and (max-width: 900px) {
  .area-grid {
    display: block;
    margin: 40px 20px;
  }
}

.area {
  display: grid;
  align-items: center;
  justify-items: center;
  cursor: pointer;
  margin-bottom: 50px;
}
</style>
