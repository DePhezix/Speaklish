<template>
  <div
    ref="containerRef"
    class="flex flex-col-reverse lg:flex-row justify-center items-center max-lg:gap-[24px]"
    :class="{ 'lg:!flex-row-reverse': props.step.inverted }"
  >
    <img ref="imgRef" :src="props.step.imgSrc" class="opacity-0 w-[361px] h-[312px] lg:w-[608px] lg:h-[525px]" />

    <div ref="contentRef" class="opacity-0 w-full lg:w-[608px] flex flex-col gap-[8px] justify-center">
      <h1 v-if="props.step.title" class="text-[36px] sf-display font-extrabold lg:text-[64px] leading-[116.5%] tracking-0" v-html="props.step.title" />
      <p class="h-[48px] rounded-[36px] border border-[#08da83] py-[16px] px-[24px] flex items-center w-fit font-bold leading-[24px]">
        Step {{ props.step.step }}
      </p>
      <p class="text-[16px] font-medium lg:text-[24px] leading-[24px] lg:leading-[30px] tracking-[-0.5px]">
        {{ props.step.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { howItWorksStepType } from '~/types/frontend'

const props = defineProps<{ step: howItWorksStepType }>()

const { gsap, ScrollTrigger } = useGsap()

const containerRef = ref(null)
const imgRef       = ref(null)
const contentRef   = ref(null)

onMounted(() => {
  const imgX     = props.step.inverted ? 80 : -80
  const contentX = props.step.inverted ? -80 : 80

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
    scrollTrigger: {
      trigger: containerRef.value,
      start: 'top 80%',
    }
  })

  tl.fromTo(imgRef.value,
    { opacity: 0, x: imgX },
    { opacity: 1, x: 0, duration: 0.7 }
  )
  .fromTo(contentRef.value,
    { opacity: 0, x: contentX },
    { opacity: 1, x: 0, duration: 0.7 },
    '<0.15' 
  )
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(t => t.kill())
})
</script>