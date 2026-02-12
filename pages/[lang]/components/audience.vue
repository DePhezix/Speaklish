<template>
  <section
    ref="section"
    class="container mx-auto flex py-[36px] px-[16px] 2xl:py-[64px] 2xl:px-[100px] gap-[24px] lg:flex-row flex-col-reverse justify-center items-center"
    id="audience"
  >
    <img ref="img" src="../assets/imgs/audience.avif" class="opacity-0 lg:w-[625px]" />
    <div class="flex flex-col justify-center gap-[8px]">
      <h2
        ref="title"
        class="opacity-0 sf-display font-extrabold text-[33px] lg:text-[64px] leading-[43px] lg:leading-[100%]"
        v-html="t('audience.title')"
      />
      <p
        ref="details"
        class="opacity-0 max-md:text-[14px] leading-[18px] lg:leading-[22px] tracking-[-0.2px] text-[#BCBCBC]"
      >
        {{ $t("audience.desc") }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const { gsap, ScrollTrigger } = useGsap();

const section = ref(null);
const img = ref(null);
const title = ref(null);
const details = ref(null);

onMounted(() => {
  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    scrollTrigger: { trigger: section.value, start: "top 60%" },
  });

  tl.fromTo(
    title.value,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.7 },
  )
    .fromTo(
      img.value,
      { opacity: 0, x: -60 },
      { opacity: 1, x: 0, duration: 0.8 },
      "<0.3",
    )
    .fromTo(
      details.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
      "<0.2",
    );
});

onUnmounted(() => ScrollTrigger.getAll().forEach((t) => t.kill()));
</script>
