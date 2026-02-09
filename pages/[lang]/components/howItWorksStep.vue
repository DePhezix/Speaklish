<template>
  <div class="flex flex-col-reverse lg:flex-row justify-center items-center" :class="{'lg:!flex-row-reverse': props.step.inverted}">
    <img :src="props.step.imgSrc" class="w-[361px] h-[312px] lg:w-[608px] lg:h-[525px]" />
    <div class="w-full lg:w-[608px] flex flex-col gap-[8px] justify-center">
      <h1 v-if="props.step.title" class="text-[36px] sf-display font-extrabold lg:text-[64px] leading-[116.5%] tracking-0" v-html="props.step.title" />
      <p class="h-[48px] rounded-[36px] border border-[#08da83] py-[16px] px-[24px] flex items-center w-fit font-bold leading-[24px]">Step {{ props.step.step }}</p>
      <p class="text-[16px] font-medium lg:text-[24px] leading-[24px] lg:leading-[30px] tracking-[-0.5px]">{{ props.step.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { howItWorksStepType } from "~/types/frontend";

const props = defineProps<{
  step: howItWorksStepType;
}>();

</script>
