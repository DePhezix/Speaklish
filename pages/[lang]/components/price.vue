<template>
  <section
    ref="sectionRef"
    class="container mx-auto flex flex-col py-[36px] px-[16px] 2xl:pt-[64px] 2xl:px-[100px] 2xl:pb-[100px] gap-[36px] items-center bg-clip-padding"
    id="price"
  >
    <h1
      ref="titleRef"
      class="opacity-0 font-extrabold sf-display text-[36px] lg:text-[64px] leading-[100%]"
    >
      {{ $t("price.title") }}
    </h1>

    <div class="w-full flex gap-[24px] lg:gap-[64px] justify-center flex-wrap">
      <div
        ref="card1Ref"
        class="opacity-0 flex-1 hover:ring-[#08DA83] transition-all duration-300 flex flex-col sm:min-w-[361px] xl:w-[503px] rounded-[36px] ring-[8px] lg:ring-[16px] ring-white/20 bg-white p-[24px] lg:p-[48px] gap-[12px] 2xl:gap-[24px] items-center"
      >
        <button
          disabled
          class="h-[48px] rounded-[36px] border p-[24px] text-[#08DA83] border-[#08DA83] w-fit flex items-center font-bold text-[20px] lg:text-[24px] leading-[24px]"
        >
          {{ $t("price.card1.type") }}
        </button>
        <div class="flex flex-col gap-[4px] w-full">
          <h2
            class="font-extrabold sf-display text-[36px] lg:text-[64px] leading-[43px] lg:leading-[76px] text-[#091B29] text-center"
          >
            20,000
          </h2>
          <p
            class="w-full text-[16px] leading-[22px] tracking-[-0.5px] text-[#828282] text-center"
          >
            UZS
          </p>
        </div>
        <p
          class="text-center text-[20px] lg:text-[24px] w-full leading-[28px] tracking-[-0.5px] text-[#091B29]"
        >
          {{ $t("price.card1.payment") }}
        </p>
        <NuxtLink
          to="https://t.me/speaklishbot"
          external
          target="_blank"
          class="rounded-[36px] text-center leading-[24px] py-[16px] px-[24px] bg-[#08DA83] w-full hover:bg-[#18B368] transition-all duration-500"
        >
          {{ $t("price.start") }}
        </NuxtLink>
      </div>

      <div
        ref="card2Ref"
        class="opacity-0 flex-1 hover:ring-[#08DA83] transition-all duration-300 flex flex-col sm:min-w-[361px] xl:w-[503px] rounded-[36px] ring-[8px] lg:ring-[16px] ring-white/20 bg-white p-[24px] lg:p-[48px] gap-[12px] 2xl:gap-[24px] items-center"
      >
        <button
          disabled
          class="h-[48px] rounded-[36px] border p-[24px] text-[#08DA83] border-[#08DA83] w-fit flex items-center font-bold text-[20px] lg:text-[24px] leading-[24px]"
        >
          {{ $t("price.card2.type") }}
        </button>
        <div class="flex flex-col gap-[4px] w-full">
          <h2
            class="font-extrabold sf-display text-[36px] lg:text-[64px] leading-[43px] lg:leading-[76px] text-[#091B29] text-center"
          >
            150,000
          </h2>
          <p
            class="w-full text-[16px] leading-[22px] tracking-[-0.5px] text-[#828282] text-center"
          >
            UZS
          </p>
        </div>
        <p
          class="text-center text-[20px] lg:text-[24px] w-full leading-[28px] tracking-[-0.5px] text-[#091B29]"
        >
          {{ $t("price.card2.payment") }}
        </p>
        <NuxtLink
          to="https://t.me/speaklishbot"
          external
          target="_blank"
          class="rounded-[36px] text-center leading-[24px] py-[16px] px-[24px] bg-[#08DA83] w-full hover:bg-[#18B368] transition-all duration-500"
        >
          {{ $t("price.start") }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const { gsap, ScrollTrigger } = useGsap();

const sectionRef = ref(null);
const titleRef = ref(null);
const card1Ref = ref(null);
const card2Ref = ref(null);

onMounted(() => {
  const tl = gsap.timeline({
    defaults: { ease: "power4.in" },
    scrollTrigger: { trigger: sectionRef.value, start: "top 80%" },
  });

  tl.fromTo(
    titleRef.value,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6 },
  )
    .fromTo(
      card1Ref.value,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.7 },
      "<0.2",
    )
    .fromTo(
      card2Ref.value,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.7 },
      "<",
    );
});

onUnmounted(() => ScrollTrigger.getAll().forEach((t) => t.kill()));
</script>
