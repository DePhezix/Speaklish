<template>
  <main
    class="container mx-auto flex flex-col md:flex-row gap-[24px] 2xl:px-[100px] px-[16px] pt-[24px] justify-between items-center"
    id="home"
  >
    <div class="flex md:w-[608px] gap-[24px] flex-col">
      <div
        class="h-[48px] rounded-[36px] border px-[24px] py-[16px] w-fit flex items-center gap-[8px]"
      >
        <span
          class="font-[700] text-[14px] lg:text-[16px] leading-[24px] text-white/70"
          >{{ $t("hero.tag") }}</span
        >
      </div>
      <h1
        class="lg:text-[64px] text-[36px] font-light leading-[43px] lg:leading-[75px]"
        v-html="$t('hero.title')"
      />
      <NuxtLink
        to="https://t.me/speaklishbot"
        external
        target="_blank"
        class="bg-[#08da83] rounded-[36px] px-[24px] py-[16px] w-fit ring-[10px] ring-transparent hover:ring-[#08DA83]/30 transition-all duration-500"
        >{{ $t("hero.start") }}</NuxtLink
      >
    </div>
    <img
      src="../assets/imgs/phone.avif"
      class="2xl:w-[608px] 2xl:h-[642px] w-[361px] h-[380px]"
    />
  </main>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
