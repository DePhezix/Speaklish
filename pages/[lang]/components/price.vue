<template>
  <section
    class="flex flex-col pt-[64px] px-[100px] pb-[100px] gap-[36px] items-center bg-clip-padding"
    id="price"
  >
    <h1 class="font-extrabold sf-display text-[64px] leading-[100%]">
      {{ $t("price.title") }}
    </h1>
    <div class="flex gap-[64px] justify-center">
      <div
        class="hover:ring-[#08DA83] transition-all duration-300 flex flex-col w-[503px] rounded-[36px] ring-[16px] ring-white/20 bg-white p-[48px] gap-[24px] items-center"
      >
        <button
          disabled
          class="h-[48px] rounded-[36px] border p-[24px] text-[#08DA83] border-[#08DA83] w-fit flex items-center font-bold text-[24px] leading-[24px]"
        >
          {{ $t("price.card1.type") }}
        </button>
        <div class="flex flex-col gap-[4px] w-full">
          <h2
            class="font-extrabold sf-display text-[64px] leading-[76px] text-[#091B29] text-center"
          >
            20,000
          </h2>
          <p
            class="w-full text-[16px] leading-[22px] tracking-[-0.5px] text-[#828282] text-center"
          >
            UZS
          </p>
        </div>
        <p
          class="text-center text-[24px] w-full leading-[28px] tracking-[-0.5px] text-[#091B29]"
        >
          {{ $t("price.card1.payment") }}
        </p>
        <NuxtLink
          to="https://t.me/speaklishbot"
          external
          target="_blank"
          class="rounded-[36px] text-center leading-[24px] py-[16px] px-[24px] bg-[#08DA83] w-full hover:bg-[#18B368] transition-all duration-500"
        >
          {{ $t("price.start") }}
        </NuxtLink>
      </div>
      <div
        class="hover:ring-[#08DA83] transition-all duration-300 flex flex-col w-[503px] rounded-[36px] ring-[16px] ring-white/20 bg-white p-[48px] gap-[24px] items-center"
      >
        <button
          disabled
          class="h-[48px] rounded-[36px] border p-[24px] text-[#08DA83] border-[#08DA83] w-fit flex items-center font-bold text-[24px] leading-[24px]"
        >
          {{ $t("price.card2.type") }}
        </button>
        <div class="flex flex-col gap-[4px] w-full">
          <h2
            class="font-extrabold sf-display text-[64px] leading-[76px] text-[#091B29] text-center"
          >
            150,000
          </h2>
          <p
            class="w-full text-[16px] leading-[22px] tracking-[-0.5px] text-[#828282] text-center"
          >
            UZS
          </p>
        </div>
        <p
          class="text-center text-[24px] w-full leading-[28px] tracking-[-0.5px] text-[#091B29]"
        >
          {{ $t("price.card2.payment") }}
        </p>
        <NuxtLink
          to="https://t.me/speaklishbot"
          external
          target="_blank"
          class="rounded-[36px] text-center leading-[24px] py-[16px] px-[24px] bg-[#08DA83] w-full hover:bg-[#18B368] transition-all duration-500"
        >
          {{ $t("price.start") }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
