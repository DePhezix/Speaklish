<template>
  <div
    class="flex flex-col py-[64px] px-[100px] gap-[16px] items-center"
    id="howItWorks"
  >
    <HowItWorksStep :step="steps[0]" />
    <img src="../assets/imgs/arrow1.avif" class="w-[277px] h-[127px]" />
    <HowItWorksStep :step="steps[1]" />
    <img src="../assets/imgs/arrow2.avif" class="w-[277px] h-[127px]" />
    <HowItWorksStep :step="steps[2]" />
  </div>
</template>
<script setup lang="ts">
import HowItWorksStep from "./howItWorksStep.vue";
import type { howItWorksStepType } from "~/types/frontend";

const steps: howItWorksStepType[] = [
  {
    imgSrc: "_nuxt/pages/[lang]/assets/imgs/step1_2.avif",
    step: "1, 2",
    description:
      "Start the bot, get into quite place for 8-12 minute as it lasts like real mock",
    title: "How does it <span class='text-[#08da83]'>work</span>?",
  },
  {
    imgSrc: "_nuxt/pages/[lang]/assets/imgs/step3_4.avif",
    step: "3, 4",
    description:
      "When you come to part 2, take some notes, and use 1 minute time for brainstorming your ideas for about 2 minutes speech, bot will notify you when to record your answers",
    inverted: true,
  },
  {
    imgSrc: "_nuxt/pages/[lang]/assets/imgs/step5_6.avif",
    step: "5, 6",
    description:
      "With finishing the part 3, wait for 1-2 minutes to system evaluate your speech and performance.",
  },
];
</script>
