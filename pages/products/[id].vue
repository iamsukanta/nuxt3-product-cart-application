<template>
  <div>
    <h1>Product details for {{ id }}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptates totam tempora, optio laboriosam libero vitae non aliquid consequuntur. Dicta.</p>
  </div>
</template>

<script setup>
  const { id } = useRoute().params;
  definePageMeta({
    layout: 'products'
  })
</script>

<style scoped>

</style>