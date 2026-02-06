<template>
  <section
    class="flex items-center justify-center 2xl:py-[64px] 2xl:px-[52px] py-[36px] px-[16px]"
    id="product"
  >
    <div
      class="flex flex-col rounded-[36px] p-[48px] gap-[36px] bg-white items-center"
    >
      <header class="flex flex-col gap-[8px] items-center md:w-[612px] w-full">
        <p
          class="text-[14px] lg:text-[16px] h-[48px] rounded-[36px] border px-[24px] py-[16px] w-min flex items-center border-black/20 text-black/70 font-[700]"
        >
          {{ $t("product.tag") }}
        </p>
        <h1
          class="text-black sf-display font-extrabold text-[36px] md:text-[64px] leading-[100%] text-center"
          v-html="t('product.title')"
        />
        <p
          class="text-[14px] md:text-[16px] text-[#6A6A6A] leading-[20px] md:leading-[22px] tracking-[-0.2px] text-center"
          v-html="t('product.desc')"
        />
      </header>
      <div class="flex gap-[24px] justify-center flex-wrap">
        <div v-for="card in cards" class="flex flex-col">
          <img :src="card.imgSrc" class="2xl:w-[397px] 2xl:h-[174px] w-[314px] h-[138px]" />
          <p
            v-html="card.description"
            class="2xl:w-[397px] w-[314px] rounded-[24px] h-full 2xl:p-[32px] p-[16px] bg-[#091B29] 2xl:text-[20px] text-[16px] 2xl:leading-[26px] leading-[22px] tracking-[-0.5px] "
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
