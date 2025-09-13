<template>
<section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header>
      <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Projects Collection</h2>

      <p class="mt-4 max-w-md text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
        dicta incidunt est ipsam, officia dolor fugit natus?
      </p>
    </header>

    <router-view />
  </div>
</section>


</template>

<script>
import Collection from "./Collection.vue";
export default {
    name: "ProductsCollection",
    components: {
    
        Collection,
    },
    
}
</script>