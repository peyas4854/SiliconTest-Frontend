<template>
  <div>
    <Navbar/>
    <section id="front-main-content">
      <router-view/>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/views/frontend/includes/Navbar";
import Footer from "./includes/Footer";
export default {
  name: "Layout",
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>

</style>
