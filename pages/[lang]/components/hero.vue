<template>
  <main
    class="flex gap-[24px] px-[100px] pt-[24px] justify-between items-center"
    id="home"
  >
    <div class="flex w-[608px] gap-[24px] flex-col">
      <div
        class="h-[48px] rounded-[36px] border px-[24px] py-[16px] w-fit flex items-center gap-[8px]"
      >
        <span class="font-[700] text-[16px] leading-[24px] text-white/70"
          >{{ $t("hero.tag") }}</span
        >
      </div>
      <h1 class="text-[64px] font-light leading-[75px]" v-html="$t('hero.title')" />
      <NuxtLink
        to="https://t.me/speaklishbot"
        external
        target="_blank"
        class="bg-[#08da83] rounded-[36px] px-[24px] py-[16px] w-fit ring-[10px] ring-transparent hover:ring-[#08DA83]/30 transition-all duration-500"
        >{{ $t("hero.start") }}</NuxtLink
      >
    </div>
    <img src="../assets/imgs/phone.avif" class="w-[608px] h-[642px]" />
  </main>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
