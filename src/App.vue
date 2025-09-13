<template>
  <Header />
  <!-- <router-view /> -->
  <!-- <Home /> -->
  <!-- <Customers /> -->
  <router-view v-slot="{ Component }">
  <transition name="fade">
    <component :is="Component" />
  </transition>
</router-view>
  <Footer />
</template>
<script>
import Header from "@/components/Header.vue";
// import Home from "@/pages/Home.vue";
import Footer from "@/components/Footer.vue";
// import CustomerCard from "@/components/icons/CustomerCard.vue";
// import Customers from "@/components/Customers.vue";

export default {
  components: {
    Header,
    // Home,
    // Customers,
    Footer,
  },
};
</script>
<style>


</style>
