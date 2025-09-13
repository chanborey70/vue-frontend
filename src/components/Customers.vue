<template>
    <!-- team section -->
    <section class="team_section layout_padding">
      <div class="container-fluid">
        <div class="heading_container heading_center">
          <h2 class="">
            Our <span> Team</span>
          </h2>
        </div>
  
        <div class="team_container">
          <div class="row">
            <CustomerCard v-for="(customer,index) in customers"
            :key="index"
            :title="customer.title"
            :description="customer.description"
            :image="customer.image"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- end team section -->
  </template>
  
  <script>
  import CustomerCard from "@/components/icons/CustomerCard.vue";
  export default {
  components: {
      CustomerCard,
  },
  data() {
      return {
          customers: [
              {
                  title: "Joseph Brown",
                  description: "Marketing Head",
                  image: "/images/team-1.jpg",
              },
              {
                  title: "Nancy White",
                  description: "Marketing Head",
                  image: "/images/team-2.jpg",
              },
              {
                  title: "Earl Martinez",
                  description: "Marketing Head",
                  image: "/images/team-3.jpg",
              },
              {
                  title: "Josephine Allard",
                  description: "Marketing Head",
                  image: "/images/team-4.jpg",
              },
          ],
      };
  },
  
  }
  </script>
  