<template>
  <section
    class="container mx-auto flex flex-col md:flex-row gap-[24px] 2xl:px-[100px] px-[16px] pt-[24px] justify-between items-center"
    id="home"
  >
    <div class="flex md:w-[608px] gap-[24px] flex-col">
      <div
        ref="tag"
        class="opacity-0 h-[48px] rounded-[36px] border px-[24px] py-[16px] w-fit flex items-center gap-[8px]"
      >
        <span
          class="font-[700] text-[14px] lg:text-[16px] leading-[24px] text-white/70"
        >
          {{ $t("hero.tag") }}
        </span>
      </div>

      <h1
        ref="title"
        class="opacity-0 lg:text-[64px] text-[36px] font-light leading-[43px] lg:leading-[75px]"
        v-html="$t('hero.title')"
      />

      <div
        ref="btn"
        class="opacity-0 bg-[#08da83] rounded-[36px] px-[24px] py-[16px] w-fit ring-[10px] ring-transparent hover:ring-[#08DA83]/30 transition-all duration-500"
      >
        <NuxtLink to="https://t.me/speaklishbot" external target="_blank">
          {{ $t("hero.start") }}
        </NuxtLink>
      </div>
    </div>

    <img
      ref="phone"
      src="../assets/imgs/phone.avif"
      class="opacity-0 2xl:w-[608px] 2xl:h-[642px] w-[361px] h-[380px]"
    />
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const { gsap } = useGsap();

const tag = ref(null);
const title = ref(null);
const btn = ref(null);
const phone = ref(null);

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.fromTo(
    tag.value,
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 0.5 },
    "<0.2",
  )
    .fromTo(
      title.value,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7 },
      "<0.2",
    )
    .fromTo(
      phone.value,
      { opacity: 0, x: 60 },
      { opacity: 1, x: 0, duration: 0.8 },
      "<0.3",
    )
    .fromTo(
      btn.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
      "<0.1",
    );
});
</script>
