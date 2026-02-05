<template>
  <nav
    class="flex h-[112px] justify-between py-[16px] px-[100px] font-[500] text-[14px] items-center"
  >
    <Logo class="w-[199px]" />
    <div class="flex gap-[32px] items-center leading-[100%]">
      <NuxtLink to="#home">Home</NuxtLink>
      <NuxtLink to="#product">Product</NuxtLink>
      <NuxtLink to="#howItWorks">How it works</NuxtLink>
      <NuxtLink to="#evaluation">Evaluation</NuxtLink>
      <NuxtLink to="#audience">Audience</NuxtLink>
      <NuxtLink to="#users">Our Users</NuxtLink>
      <NuxtLink to="#price">Price</NuxtLink>
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
          class="hidden absolute bg-white top-[110%] left-0 py-[12px] px-[16px] flex-col gap-[10px] w-full rounded-[16px]"
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
      class="rounded-[36px] px-[24px] py-[16px] bg-[#08da83] h-min w-min"
    >
      Start
    </NuxtLink>
  </nav>
</template>

<script lang="ts" setup>
import Logo from "~/assets/svgs/logo.svg?component";
import Arrow from "~/assets/svgs/arrow.svg?component";
import Tick from "~/assets/svgs/tick.svg?component";

import type { languageTypes } from "~/types/frontend";

const languageOptionsOpen = ref<boolean>(false);
const route = useRoute();

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
  await navigateTo({ params: { lang: langCode } });
};
</script>
