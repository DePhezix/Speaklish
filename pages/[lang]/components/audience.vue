<template>
  <section class="flex py-[64px] px-[100px] gap-[24px]" id="audience">
    <img src="../assets/imgs/audience.avif" />
    <div class="flex flex-col justify-center gap-[8px]">
      <h2
        class="sf-display font-extrabold text-[64px] leading-[100%]"
        v-html="t('audience.title')"
      />
      <p class="leading-[22px] tracking-[-0.2px] text-[#BCBCBC]">
        {{ $t("audience.desc") }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
