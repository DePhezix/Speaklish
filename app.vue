<template>
  <NuxtLayout>
    <div>
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const route = useRoute();
const langParam = route.params.lang;

onMounted(() => {
  if (langParam && typeof langParam === "string") {
    locale.value = langParam;
  }
});

watch(
  () => route.params.lang,
  (newLang) => {
    if (newLang && typeof newLang === "string") {
      locale.value = newLang;
    }
  },
  { immediate: true },
);
</script>
