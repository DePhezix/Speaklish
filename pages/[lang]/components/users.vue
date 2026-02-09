<template>
  <section class="justify-center items-center flex 2xl:px-[64px] 2xl:py-[100px] py-[36px] px-[16px] gap-[24px] justify-center lg:flex-row flex-col" id="users">
    <div class="w-full flex flex-col gap-[24px]">
      <h1 class="font-extrabold sf-display text-[36px] lg:text-[64px] leading-[100%]" v-html="t('users.title')" />
      <div class="flex gap-[24px] flex-col">
        <div
          class="relative p-[1px] bg-gradient-to-b from-white to-transparent rounded-[24px]"
        >
          <div class="bg-[#091b29] rounded-[24px]">
            <div
              class="bg-[#F8F8F81A]/10 rounded-[24px] flex flex-col py-[24px] px-[36px] gap-[16px] backdrop-blur-[101.1px] lg:w-[609px]"
            >
              <h3
                class="font-extrabold text-[24px] leading-[28px] trackig-[-0.5px]"
              >
                {{ $t("users.title2") }}
              </h3>
              <div class="flex gap-[42px]">
                <div class="flex flex-col flex-1">
                  <h1
                    class="sf-display font-extrabold text-[36px] lg:text-[64px] leading-[43px] lg:leading-[76px] tracking-[0%] text-[#08DA83]"
                  >
                    17k+
                  </h1>
                  <span class="text-[14px] leading-[20px] lg:text-[20px] lg:leading-[22px] tracking-[-0.2px]"
                    >{{ $t("users.users") }}</span
                  >
                </div>
                <div class="flex flex-col flex-1">
                  <h1
                    class="sf-display font-extrabold text-[36px] lg:text-[64px] leading-[43px] lg:leading-[76px] tracking-[0%] text-[#08DA83]"
                  >
                    15k+
                  </h1>
                  <span class="text-[14px] leading-[20px] lg:text-[20px] lg:leading-[22px] tracking-[-0.2px]"
                    >{{ $t("users.activeUsers") }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row gap-[24px]">
          <div
            class="relative p-[1px] bg-gradient-to-b from-white to-transparent rounded-[24px] flex-1"
          >
            <div class="bg-[#091b29] h-full rounded-[24px]">
              <div
                class="bg-[#F8F8F81A]/10 h-full rounded-[24px]  flex flex-col py-[24px] px-[36px] gap-[16px] backdrop-blur-[101.1px] flex-1"
              >
                <h3
                  class="font-extrabold text-[24px] leading-[28px] trackig-[-0.5px]"
                >
                  {{ $t("users.title3") }}
                </h3>
                <p class="text-[20px] leading-[26px] tracking-[-0.2px]" v-html="t('users.desc')" />
              </div>
            </div>
          </div>
          <div
            class="relative p-[1px] bg-gradient-to-b from-white to-transparent rounded-[24px] flex-1"
          >
            <div class="h-full bg-[#091b29] rounded-[24px]">
              <div
                class="h-full bg-[#F8F8F81A]/10 rounded-[24px] flex flex-col py-[24px] px-[36px] gap-[16px] backdrop-blur-[101.1px]"
              >
                <h3
                  class="font-extrabold text-[24px] leading-[28px] trackig-[-0.5px]"
                >
                  {{ $t("users.title4") }}
                </h3>
                <p class="text-[20px] leading-[26px] tracking-[-0.2px]">
                  <span class="text-[#08da83] font-bold">6.5</span><br class="max-lg:hidden" /> band
                  score
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="../assets/imgs/users.avif" class="w-[343px] sm:w-[500px] xl:w-[607px] xl:h-[447px]" />
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
