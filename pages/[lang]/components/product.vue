<template>
  <section
    ref="sectionRef"
    class="container mx-auto flex items-center justify-center 2xl:py-[64px] 2xl:px-[52px] py-[36px] px-[16px]"
    id="product"
  >
    <div class="flex flex-col rounded-[36px] p-[24px] 2xl:p-[48px] 2xl:gap-[36px] gap-[24px] bg-white items-center">
      <header class="flex flex-col gap-[8px] items-center md:w-[612px] w-full">
        <p ref="tagRef" class="opacity-0 text-[14px] lg:text-[16px] h-[48px] rounded-[36px] border px-[24px] py-[16px] w-min flex items-center border-black/20 text-black/70 font-[700]">
          {{ $t("product.tag") }}
        </p>
        <h1 ref="titleRef" class="opacity-0 text-black sf-display font-extrabold text-[36px] md:text-[64px] leading-[100%] text-center"
          v-html="t('product.title')"
        />
        <p ref="descRef" class="opacity-0 text-[14px] md:text-[16px] text-[#6A6A6A] leading-[20px] md:leading-[22px] tracking-[-0.2px] text-center"
          v-html="t('product.desc')"
        />
      </header>

      <div ref="cardsRef" class="flex gap-[16px] 2xl:gap-[24px] justify-center flex-wrap">
        <div v-for="card in cards" class="opacity-0 card-item flex flex-col">
          <img :src="card.imgSrc" class="2xl:w-[397px] 2xl:h-[174px] w-[314px] h-[138px]" />
          <p
            v-html="card.description"
            class="2xl:w-[397px] w-[314px] rounded-[24px] h-full 2xl:p-[32px] p-[16px] bg-[#091B29] 2xl:text-[20px] text-[16px] 2xl:leading-[26px] leading-[22px] tracking-[-0.5px]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { cardType } from '~/types/frontend'
import TelegramImg from '../assets/imgs/telegram.avif'
import AIImg from '../assets/imgs/AI.avif'
import IeltsImg from '../assets/imgs/ielts.avif'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const sectionRef = ref(null)
const tagRef     = ref(null)
const titleRef   = ref(null)
const descRef    = ref(null)
const cardsRef   = ref(null)

const cards = computed<cardType[]>(() => [
  { imgSrc: TelegramImg, description: t('product.what1') },
  { imgSrc: AIImg,       description: t('product.what2') },
  { imgSrc: IeltsImg,    description: t('product.what3') },
])

const { gsap, ScrollTrigger } = useGsap()

onMounted(() => {
  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 75%',
    }
  })

  tl.fromTo(tagRef.value,   { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.4 })
    .fromTo(titleRef.value, { opacity: 0, y: 30 },  { opacity: 1, y: 0, duration: 0.6 }, '<0.15')
    .fromTo(descRef.value,  { opacity: 0, y: 20 },  { opacity: 1, y: 0, duration: 0.5 }, '<0.15')
    .fromTo('.card-item',   { opacity: 0, y: 50, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15 }, '<0.2')
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(t => t.kill())
})
</script>