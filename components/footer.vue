<template>
  <footer
    class="flex flex-col lg:flex-row justify-between rounded-t-[36px] gap-[24px] py-[64px] 2xl:px-[100px] px-[16px] bg-[#051019]"
  >
    <div class="flex flex-col w-full lg:w-[504px] gap-[16px]">
      <h5 class="sf-display font-extrabold text-[36px] leading-[43px]">
        {{ $t("footer.title") }}
      </h5>
      <NuxtLink
        to="https://t.me/speaklishbot"
        external
        target="_blank"
        class="bg-[#08da83] rounded-[36px] px-[24px] py-[16px] w-fit"
      >
        {{ $t("footer.start") }}
      </NuxtLink>
    </div>
    <div class="flex flex-col w-full lg:w-[713px] items-end justify-between">
      <div class="hidden 2xl:flex gap-[32px] w-fit ">
        <NuxtLink to="#home" class="font-medium text-[14px]">{{
          $t("nav.home")
        }}</NuxtLink>
        <NuxtLink to="#product" class="font-medium text-[14px]">{{
          $t("nav.product")
        }}</NuxtLink>
        <NuxtLink to="#howItWorks" class="font-medium text-[14px]">{{
          $t("nav.howItWorks")
        }}</NuxtLink>
        <NuxtLink to="#evaluation" class="font-medium text-[14px]">{{
          $t("nav.evaluation")
        }}</NuxtLink>
        <NuxtLink to="#audience" class="font-medium text-[14px]">{{
          $t("nav.audience")
        }}</NuxtLink>
        <NuxtLink to="#users" class="font-medium text-[14px]">{{
          $t("nav.users")
        }}</NuxtLink>
        <NuxtLink to="#price" class="font-medium text-[14px]">{{
          $t("nav.price")
        }}</NuxtLink>
      </div>
      <div class="flex gap-[12px] lg:gap-[24px] w-fit flex-wrap">
        <NuxtLink
          class="rounded-[16px] p-[12px] lg:p-[16px] bg-white/10 cursor-pointer"
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

import { useI18n } from "vue-i18n";

import type { Social } from "~/types/frontend";

const { t } = useI18n();

const socials: Social[] = [
  { url: "https://www.linkedin.com/company/speaklish/?originalSubdomain=uz", icon: LinkedIn },
  { url: "https://www.facebook.com/Speaklish/", icon: Facebook },
  { url: "https://www.instagram.com/speaklish.uz/?hl=en", icon: Instagram },
  { url: "https://www.youtube.com/c/Speaklish", icon: Youtube },
  { url: "https://t.me/speaklishbot", icon: Telegram },
  { url: "https://twitter.com", icon: Twitter },
];

</script>
