<template>
  <main>
    <Header />
    <slot />
    <Footer />
  </main>
</template>

<script lang="ts" setup>
import Header from '~/components/header.vue';
import Footer from '~/components/footer.vue';
</script>
