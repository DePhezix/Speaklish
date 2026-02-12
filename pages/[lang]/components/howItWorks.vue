<template>
  <section
    class="container mx-auto flex flex-col py-[36px] px-[16px] 2xl:py-[64px] 2xl:px-[100px] gap-[16px] items-center"
    id="howItWorks"
  >
    <HowItWorksStep :step="steps[0]" />
    <div
      ref="arrow1Ref"
      class="opacity-0 w-[129px] h-[63px] lg:w-[277px] lg:h-[127px]"
    >
      <Arrow1 />
    </div>

    <HowItWorksStep :step="steps[1]" />
    <div
      ref="arrow2Ref"
      class="opacity-0 w-[129px] h-[63px] lg:w-[277px] lg:h-[127px]"
    >
      <Arrow2 />
    </div>

    <HowItWorksStep :step="steps[2]" />
  </section>
</template>

<script setup lang="ts">
import HowItWorksStep from "./howItWorksStep.vue";

import Arrow1 from "../assets/svgs/arrow1.svg?component";
import Arrow2 from "../assets/svgs/arrow2.svg?component";

import Step1_2 from "../assets/imgs/step1_2.avif";
import Step3_4 from "../assets/imgs/step3_4.avif";
import Step5_6 from "../assets/imgs/step5_6.avif";

import { useI18n } from "vue-i18n";
import type { howItWorksStepType } from "~/types/frontend";

const { t } = useI18n();
const { gsap, ScrollTrigger } = useGsap();

const arrow1Ref = ref(null);
const arrow2Ref = ref(null);

const steps = computed<howItWorksStepType[]>(() => [
  {
    imgSrc: Step1_2,
    step: "1, 2",
    description: t("howItWorks.desc1_2"),
    title: t("howItWorks.title"),
  },
  {
    imgSrc: Step3_4,
    step: "3, 4",
    description: t("howItWorks.desc3_4"),
    inverted: true,
  },
  { imgSrc: Step5_6, step: "5, 6", description: t("howItWorks.desc5_6") },
]);

onMounted(() => {
  [arrow1Ref.value, arrow2Ref.value].forEach((arrow) => {
    gsap.fromTo(
      arrow,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "back.out(1.7)",
        scrollTrigger: { trigger: arrow, start: "top 85%" },
      },
    );
  });
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
});
</script>
