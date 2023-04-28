<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" :key="p.id">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'products'
  });

  const { data: products } = await useFetch('https://fakestoreapi.com/products');

  useHead({
    title: "Nuxt3 product title",
    meta: [
      {name: "description", content: "Nuxt3 product description from product details"}
    ]
  })
</script>

<style  scoped>

</style>