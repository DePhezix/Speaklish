<template>
  <footer
    class="flex rounded-t-[36px] gap-[24px] py-[64px] px-[100px] bg-[#051019]"
  >
    <div class="flex flex-col w-[504px] gap-[16px]">
      <h5 class="sf-display font-extrabold text-[36px] leading-[43px]">
        Take your first IELTS speaking test with Speklish
      </h5>
      <button class="bg-[#08da83] rounded-[36px] px-[24px] py-[16px] w-fit">
        Let's get started
      </button>
    </div>
    <div class="flex flex-col w-[713px] items-end justify-between">
      <div class="flex gap-[32px] w-fit">
        <NuxtLink to="#home" class="font-medium text-[14px]">Home</NuxtLink>
        <NuxtLink to="#product" class="font-medium text-[14px]">Product</NuxtLink>
        <NuxtLink to="#howItWorks" class="font-medium text-[14px]">How it works</NuxtLink>
        <NuxtLink to="#evaluation" class="font-medium text-[14px]">Evaluation</NuxtLink>
        <NuxtLink to="#audience" class="font-medium text-[14px]">Audience</NuxtLink>
        <NuxtLink to="#users" class="font-medium text-[14px]">Our Users</NuxtLink>
        <NuxtLink to="#price" class="font-medium text-[14px]">Price</NuxtLink>
      </div>
      <div class="flex gap-[24px] w-fit">
        <NuxtLink
          class="rounded-[16px] p-[16px] bg-white/10 cursor-pointer"
          v-for="social in socials"
          :key="index"
          :to="social.url"
          external
          target="_blank"
        >
          <component :is="social.icon" class="w-[24px] h-[24px]" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import LinkedIn from "~/assets/svgs/linkedIn.svg?component";
import Facebook from "~/assets/svgs/facebook.svg?component";
import Instagram from "~/assets/svgs/instagram.svg?component";
import Youtube from "~/assets/svgs/youtube.svg?component";
import Telegram from "~/assets/svgs/telegram.svg?component";
import Twitter from "~/assets/svgs/twitter.svg?component";

import type { Social } from "~/types/frontend";

const socials: Social[] = [
  { url: "https://linkedin.com", icon: LinkedIn },
  { url: "https://facebook.com", icon: Facebook },
  { url: "https://instagram.com", icon: Instagram },
  { url: "https://youtube.com", icon: Youtube },
  { url: "https://telegram.org", icon: Telegram },
  { url: "https://twitter.com", icon: Twitter },
];
</script>
