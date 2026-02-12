<template>
  <nav
    ref="header"
    class="opacity-0 flex h-fit md:h-[112px] justify-between py-[16px] px-[16px] 2xl:px-[100px] font-[500] text-[14px] items-center"
  >
    <div class="flex max-[2xl]:w-full items-center gap-[24px]">
      <Menu
        class="2xl:hidden h-[24px] md:h-[32px] cursor-pointer"
        @click="mobileMenuOpen = true"
      />
      <Logo class="w-[121px] md:w-[199px]" />
    </div>

    <div class="hidden 2xl:flex gap-[32px] items-center leading-[100%]">
      <NuxtLink
        v-for="section in navSections"
        :key="section"
        :to="`#${section}`"
      >
        {{ $t(`nav.${section}`) }}
      </NuxtLink>
      <button
        class="flex items-center gap-[10px] rounded-[16px] py-[12px] px-[16px] bg-white/10 relative transition-all duration-250 ease-linear"
        :class="{ '!bg-[#08da83]': languageOptionsOpen }"
        @click="languageOptionsOpen = !languageOptionsOpen"
      >
        {{ currentLanguage }}
        <Arrow
          class="w-[24px] h-[24px] transition-all duration-250 ease-linear"
          :class="{ 'rotate-180': languageOptionsOpen }"
        />
        <ul
          class="z-[100] hidden absolute bg-white top-[110%] left-0 py-[12px] px-[16px] flex-col gap-[10px] w-full rounded-[16px]"
          :class="{ '!flex': languageOptionsOpen }"
        >
          <li
            class="flex gap-[4px] items-center cursor-pointer"
            v-for="[code, display] in Object.entries(displayMap)"
            :key="code"
            @click="handleLanguageChange(code)"
          >
            <span
              class="text-black flex-1 text-left flex items-center"
              :class="{ 'text-[#08da83]': route.params.lang == code }"
              >{{ display.toUpperCase() }}</span
            >
            <div
              class="w-[26px] h-[26px] flex opacity-0 items-center justify-end"
              :class="{ '!opacity-100': route.params.lang == code }"
            >
              <Tick class="w-[16.25px] h-[13px]" />
            </div>
          </li>
        </ul>
      </button>
    </div>
    <NuxtLink
      to="https://t.me/speaklishbot"
      external
      target="_blank"
      class="rounded-[36px] px-[24px] py-[16px] bg-[#08da83] h-[40px] md:h-min w-min flex items-center font-medium"
    >
      {{ $t("nav.start") }}
    </NuxtLink>
  </nav>
  <div
    class="fixed left-0 top-0 w-screen h-screen hidden"
    :class="{ '!block': languageOptionsOpen }"
    @click="languageOptionsOpen = false"
  />
  <div
    class="overflow-auto z-[1000] w-[324px] justify-between py-[36px] px-[24px] top-0 min-h-screen h-full shadow-[15px_0px_37.6px_0px_rgba(0,0,0,0.5)] fixed -translate-x-[110%] flex flex-col transition-transform duration-300 ease-in-out bg-[#010508]"
    :class="{ '!translate-x-0': mobileMenuOpen }"
  >
    <div class="flex items-center justify-between">
      <Logo class="w-[121px] h-[42px]" />
      <Close
        @click="mobileMenuOpen = false"
        class="cursor-pointer w-[18px] h-[24px]"
      />
    </div>
    <div class="flex flex-col gap-[24px]">
      <NuxtLink
        v-for="section in navSections"
        :key="section"
        :to="`#${section}`"
        class="flex items-center gap-[8px] rounded-[16px] p-[16px] w-fit font-medium leading-[120%]"
        :class="{ 'bg-[#08DA8333]/20': activeSection === section }"
        @click="mobileMenuOpen = false"
      >
        {{ $t(`nav.${section}`) }}
        <Circle v-if="activeSection === section" class="w-[10px] h-[10px]" />
      </NuxtLink>
    </div>
    <div class="flex flex-col gap-[12px]">
      <div class="flex gap-[8px]">
        <button
          v-for="[code, display] in Object.entries(displayMap)"
          :key="code"
          @click="handleLanguageChange(code as languageTypes)"
          class="flex rounded-[16px] px-[16px] py-[12px] transition-colors"
          :class="route.params.lang === code ? 'bg-[#08da83]' : 'bg-white/10'"
        >
          {{ display }}
          <TickWhite
            v-if="route.params.lang === code"
            class="w-[24px] h-[24px]"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Logo from "~/assets/svgs/logo.svg?component";
import Arrow from "~/assets/svgs/arrow.svg?component";
import Tick from "~/assets/svgs/tick.svg?component";
import TickWhite from "~/assets/svgs/tick-white.svg?component";
import Menu from "~/assets/svgs/menu.svg?component";
import Close from "~/assets/svgs/close.svg?component";
import Circle from "~/assets/svgs/circle.svg?component";

import { useActiveSection } from "~/composables";
import { useI18n } from "vue-i18n";

import type { languageTypes } from "~/types/frontend";

const route = useRoute();
const { t } = useI18n();
const { activeSection } = useActiveSection();

const mobileMenuOpen = ref<boolean>(false);
const languageOptionsOpen = ref<boolean>(false);
const header = ref(null);

const navSections = [
  "home",
  "product",
  "howItWorks",
  "evaluation",
  "audience",
  "users",
  "price",
];

const displayMap: Record<languageTypes, string> = {
  en: "Eng",
  ru: "Rus",
  uz: "Uz",
};

const currentLanguage = computed(() => {
  const lang = (route.params.lang as languageTypes) || "en";
  return displayMap[lang] || "Eng";
});

const handleLanguageChange = async (langCode: languageTypes) => {
  await navigateTo({ params: { lang: langCode } }, { external: true });
  languageOptionsOpen.value = false;
  mobileMenuOpen.value = false;
};

const { gsap } = useGsap();
onMounted(() => {
  gsap.fromTo(
    header.value,
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
  );
});
</script>
