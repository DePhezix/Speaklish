<template>
  <section
    class="flex items-center justify-center py-[64px] px-[52px]"
    id="product"
  >
    <div
      class="flex flex-col rounded-[36px] p-[48px] gap-[36px] bg-white items-center"
    >
      <header class="flex flex-col gap-[8px] items-center w-[612px]">
        <p
          class="h-[48px] rounded-[36px] border px-[24px] py-[16px] w-min flex items-center border-black/20 text-black/70 font-[700]"
        >
          {{ $t("product.tag") }}
        </p>
        <h1
          class="text-black sf-display font-extrabold text-[64px] leading-[100%] text-center"
          v-html="t('product.title')"
        />
        <p
          class="text-[#6A6A6A] leading-[22px] tracking-[-0.2px] text-center"
          v-html="t('product.desc')"
        />
      </header>
      <div class="flex gap-[24px] justify-center">
        <div v-for="card in cards" class="flex flex-col">
          <img :src="card.imgSrc" class="w-[397px] h-[174px]" />
          <p
            v-html="card.description"
            class="w-[397px] rounded-[24px] h-full p-[32px] bg-[#091B29] text-[20px] leading-[26px] tracking-[-0.5px]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { cardType } from "~/types/frontend";
import TelegramImg from "../assets/imgs/telegram.avif";
import AIImg from "../assets/imgs/AI.avif";
import IeltsImg from "../assets/imgs/ielts.avif";

import { useI18n } from "vue-i18n";

const { t } = useI18n();

const cards = computed<cardType[]>(() => [
  {
    imgSrc: TelegramImg,
    description: t("product.what1"),
  },
  {
    imgSrc: AIImg,
    description: t("product.what2"),
  },
  {
    imgSrc: IeltsImg,
    description: t("product.what3"),
  },
]);
</script>
