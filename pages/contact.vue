<template>
  <main class="container">
    <h1>Contact us!</h1>
    <h4>
      If you want to get more information about our services just contact us
    </h4>
    <img
      src="https://org.applyen.com/wp-content/uploads/2020/12/CHIEF-OF-SERVICE-SUPPLY-CHAIN-MANAGEMENT-EL-FASHER-UNAMID.png"
      alt="contact image"
    />
    <section>
      <h4>Location and contact information</h4>

      <iframe
        width="400"
        height="350"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=9.198045730590822%2C45.466348044187455%2C9.201039075851442%2C45.46748798438212&amp;layer=mapnik&amp;marker=45.466918017166364%2C9.19954240322113"
        style="border: 2px solid grey"
      ></iframe>
      <br /><small
        ><a
          href="https://www.openstreetmap.org/?mlat=45.46692&amp;mlon=9.19954#map=19/45.46692/9.19954"
          >Zoom in</a
        ></small
      >

      <p>Address: Corso Monforte, 13, 20122 Milano MI</p>
      <p>Mail: info@smartsolver.com</p>
      <p>Telephone: +39 02 658 9344</p>
      <p>Office hours: Monday to Friday from 8:00 AM to 6:00 PM</p>
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Contact us!',
    }
  },
}
</script>

<style scoped>
* {
  margin: 16px, 16px, 0, 0;
  justify-content: center;
}

h1,
h4,
p {
  margin-bottom: 30px;
  margin-top: 30px;
}
p {
  color: #3823ac;
}

img {
  max-width: 600px;
}

@media (max-width: 450px) {
  iframe {
    width: 93%;
  }
}
p {
  text-align: center;
  margin: 16px, 16px, 0, 0;
  font-weight: 900;
}

section {
  margin-top: 16px;
  padding: 2.5%;
}
</style>
