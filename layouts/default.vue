<template>
  <div>
    <the-header></the-header>
    <Nuxt />
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans&family=Source+Code+Pro:wght@200;400&display=swap');
html {
  box-sizing: border-box;
}

* {

  font-family: 'Source Code Pro', monospace;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  padding: 10px;
  margin: 40px auto;
  max-width: 800px;
  text-align: center;
}
a {
  color: white;
}
img {
  width: 100%;
}
</style>
