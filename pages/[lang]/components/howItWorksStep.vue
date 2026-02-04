<template>
  <div class="flex" :class="{'flex-row-reverse': props.step.inverted}">
    <img :src="props.step.imgSrc" class="w-[608px] h-[525px]" />
    <div class="w-[608px] flex flex-col gap-[8px] justify-center">
      <h1 v-if="props.step.title" class="sf-display font-extrabold text-[64px] leading-[100%] tracking-0 min-h-[76px]" v-html="props.step.title" />
      <p class="h-[48px] rounded-[36px] border border-[#08da83] py-[16px] px-[24px] flex items-center w-fit font-bold leading-[24px]">Step {{ props.step.step }}</p>
      <p class="font-medium text-[24px] leading-[30px] tracking-[-0.5px]">{{ props.step.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { howItWorksStepType } from "~/types/frontend";

const props = defineProps<{
  step: howItWorksStepType;
}>();

</script>
