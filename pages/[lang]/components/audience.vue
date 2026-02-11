<template>
  <section class="container mx-auto flex py-[36px] px-[16px] 2xl:py-[64px] 2xl:px-[100px] gap-[24px] lg:flex-row flex-col-reverse justify-center items-center" id="audience">
    <img src="../assets/imgs/audience.avif" class="lg:w-[625px]" />
    <div class="flex flex-col justify-center gap-[8px]">
      <h2
        class="sf-display font-extrabold text-[33px] lg:text-[64px] leading-[43px] lg:leading-[100%]"
        v-html="t('audience.title')"
      />
      <p class="max-md:text-[14px] leading-[18px] lg:leading-[22px] tracking-[-0.2px] text-[#BCBCBC]">
        {{ $t("audience.desc") }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
