<template>
  <footer>
    <!-- Footer main -->
    <section class="ft-main">
      <div class="ft-main-item item2">
        <img src="~/static/logo.png" alt="Company logo" />
      </div>
      <div class="ft-main-item item1">
        <h2 class="ft-title">Quick Links</h2>
        <div
          v-for="(item, itemIndex) of menuOptions"
          :key="'menu-item-' + itemIndex"
          class="menu-item"
        >
          <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      menuOptions: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'Services',
          path: '/services',
        },
        {
          name: 'Areas',
          path: '/area_',
        },
        {
          name: 'People',
          path: '/people',
        },
        {
          name: 'About Us',
          path: '/about',
        },
        {
          name: 'Contact Us',
          path: '/contact',
        },
      ],
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

footer {
  background-color: rgba(153, 153, 156, 0.116);
  line-height: 1.5;
}
footer a {
  text-decoration: none;
  color: #2d2d33;
}
a:hover {
  text-decoration: underline;
}
.ft-title {
  color: #050505;
  font-size: 1.375rem;
  padding-bottom: 0.625rem;
  margin-top: 0rem;
}
.ft-main {
  padding: 1.25rem 1.875rem;
  display: flex;
  flex-wrap: wrap;
}
@media only screen and (min-width: 29.8125rem /* 477px */) {
  .ft-main {
    justify-content: space-evenly;
  }
}
@media only screen and (min-width: 77.5rem /* 1240px */) {
  .ft-main {
    justify-content: space-evenly;
  }
}
.ft-main-item {
  padding: 1rem;
  min-width: 15rem;
}

img {
  max-width: 200px;
  position: top;
}
.ft-main-item p {
  max-width: 15rem;
  color: #6e6e70;
}
</style>
