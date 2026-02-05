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
import Step1_2 from "../assets/imgs/step1_2.avif";
import Step3_4 from "../assets/imgs/step3_4.avif";
import Step5_6 from "../assets/imgs/step5_6.avif";

import { useI18n } from "vue-i18n";

import type { howItWorksStepType } from "~/types/frontend";

const { t } = useI18n();

const steps = computed<howItWorksStepType[]>(() => [
  {
    imgSrc: Step1_2,
    step: "1, 2",
    description:
      t("howItWorks.desc1_2"),
    title: t("howItWorks.title"),
  },
  {
    imgSrc: Step3_4,
    step: "3, 4",
    description:
      t("howItWorks.desc3_4"),
    inverted: true,
  },
  {
    imgSrc: Step5_6,
    step: "5, 6",
    description:
      t("howItWorks.desc5_6"),
  },
]);
</script>
