<template>
  <div class="flex items-center justify-center py-[64px] px-[52px]" id="product">
    <div class="flex flex-col rounded-[36px] p-[48px] gap-[36px] bg-white items-center">
      <header class="flex flex-col gap-[8px] items-center w-[612px]">
        <p
          class="h-[48px] rounded-[36px] border px-[24px] py-[16px] w-min flex items-center border-black/20 text-black/70 font-[700]"
        >
          Product
        </p>
        <h1
          class="text-black sf-display font-extrabold text-[64px] leading-[100%] text-center"
        >
          What is <span class="text-[#08da83]">Speaklish</span>?
        </h1>
        <p class="text-[#6A6A6A] leading-[22px] tracking-[-0.2px] text-center">
          <span class="font-[700] text-[#6A6A6A] tracking-[-0.2px]"
            >Speaklish</span
          >
          is an innovative AI-based language practice platform, designed
          specifically to evaluate IELTS Speaking skills. It acts as a
          convenient virtual examiner to guide and judge full IELTS speaking
          mock tests.
        </p>
      </header>
      <div class="flex gap-[24px] justify-center">
        <div v-for="card in cards">
            <img :src="card.imgSrc" class="w-[397px] h-[174px]" />
            <p v-html="card.description" class="w-[397px] rounded-[24px] p-[32px] bg-[#091B29] text-[20px] leading-[26px] tracking-[-0.5px] " />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { cardType } from '~/types/frontend';

const cards: cardType[] = [{
    imgSrc: '_nuxt/pages/[lang]/assets/imgs/telegram.avif',
    description: 'Easy to use our product through the <b>Telegram bot</b>'
}, {
    imgSrc: '_nuxt/pages/[lang]/assets/imgs/AI.avif',
    description: 'An innovative <b>AI-based</b> language practice platform'
}, {
    imgSrc: '_nuxt/pages/[lang]/assets/imgs/ielts.avif',
    description: '<b>Testing IELTS</b> speaking skills and get excellent feedback'
}]
</script>
