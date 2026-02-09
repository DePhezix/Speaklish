<template>
  <section
    class="flex flex-col py-[36px] 2xl:py-[64px] px-[16px] 2xl:px-[52px] gap-[48px] items-center"
    id="evaluation"
  >
    <div
      class="flex flex-col w-full 2xl:w-[1335px] rounded-[36px] px-[16px] py-[24px] md:p-[48px] gap-[24px] bg-white"
    >
      <h1
        class="sf-display font-extrabold text-[24px] sm:text-[36px] lg:text-[64px] text-[#091B29] leading-[119%]"
      >
        {{ $t("evaluations.title") }}
      </h1>
      <div class="flex flex-col xl:flex-row gap-[24px]">
        <div class="flex flex-wrap xl:flex-col gap-[16px]">
          <div
            class="flex-1 flex md:min-w-[397px] h-min rounded-[24px] py-[20px] px-[36px] gap-[16px] bg-[#F8F8F8]"
          >
            <img
              src="../assets/imgs/evaluation1.avif"
              class="w-[62px] h-[62px] rounded-full"
            />
            <div class="flex flex-col gap-[2px] justify-center">
              <p
                class="font-medium leading-[18px] max-md:text-[14px] md:leading-[24px] tracking-[-0.5px] text-[#08DA83]"
              >
                Candidate #1
              </p>
              <p
                class="font-bold text-[16px] md:text-[24px] leading-[24px] md:leading-[30px] tracking-[-0.5px] text-[#091B29]"
              >
                Salikhov Amir
              </p>
            </div>
          </div>
          <div
            v-for="[type, score] in Object.entries(candidate1Scores)"
            class="flex-1 md:h-[102px] flex md:min-w-[397px] xl:h-[75px] rounded-[24px] py-[12px] px-[36px] gap-[16px] bg-[#F8F8F8] items-center"
            :class="{ '!bg-[#08DA83]': type == 'band' }"
          >
            <h2
              class="font-extrabold text-[32px] md:text-[40px] max-md:leading-[38px] text-[#08DA83] w-[73px]"
              :class="{ 'text-white': type == 'band' }"
            >
              {{ Number.isInteger(score) ? score + ".0" : score }}
            </h2>
            <p
              class="text-[#091B29] pl-[16px] border-l border-[#091B291A]/10 text-[20px] leading-[30px] tracking-[-0.5px] flex items-center"
              :class="{ 'text-white': type == 'band' }"
            >
              {{
                type === "band"
                  ? "Band Score"
                  : type.charAt(0).toUpperCase() + type.slice(1)
              }}
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-[16px]">
          <div
            class="w-full flex flex-col rounded-[24px] p-[18px] md:p-[36px] gap-[6px] bg-[#F8F8F8] w-[819px]"
          >
            <h3
              class="font-bold text-[14px] md:text-[20px] leading-[18px] md:leading-[28px] tracking-[-0.5px] text-[#091B29]"
            >
              {{ $t("evaluations.candidate1.feedback") }}
            </h3>
            <p
              class="text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-[-0.2px] text-[#5A5A5A]"
            >
              {{ $t("evaluations.candidate1.feedbackDesc") }}
            </p>
          </div>
          <div class="flex flex-col md:flex-row gap-[16px] h-full">
            <div
              class="flex flex-1 flex-col rounded-[24px] p-[18px] md:p-[36px] gap-[6px] bg-[#F8F8F8]"
            >
              <h3
                class="font-bold text-[14px] md:text-[20px] leading-[18px] md:leading-[28px] tracking-[-0.5px] text-[#091B29]"
              >
                {{ $t("evaluations.candidate1.topicWords") }}
              </h3>
              <p
                class="text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-[-0.2px] text-[#5A5A5A]"
              >
                {{ $t("evaluations.candidate1.topicWordsDesc") }}
              </p>
            </div>
            <div
              class="flex flex-1 flex-col rounded-[24px] p-[18px] md:p-[36px] gap-[6px] bg-[#F8F8F8]"
            >
              <h3
                class="font-bold text-[14px] md:text-[20px] leading-[18px] md:leading-[28px] tracking-[-0.5px] text-[#091B29]"
              >
                {{ $t("evaluations.candidate1.suggestedWords") }}
              </h3>
              <p
                class="text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-[-0.2px] text-[#5A5A5A]"
              >
                {{ $t("evaluations.candidate1.suggestedWordsDesc") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col w-full 2xl:w-[1335px] rounded-[36px] px-[16px] py-[24px] md:p-[48px] gap-[24px] bg-white"
    >
      <h1
        class="sf-display font-extrabold text-[24px] sm:text-[36px] lg:text-[64px] text-[#091B29] leading-[119%]"
      >
        {{ $t("evaluations.title") }}
      </h1>
      <div class="flex flex-col xl:flex-row gap-[24px]">
        <div class="flex flex-wrap xl:flex-col gap-[16px]">
          <div
            class="flex-1 flex md:min-w-[397px] h-min rounded-[24px] py-[20px] px-[36px] gap-[16px] bg-[#F8F8F8]"
          >
            <img
              src="../assets/imgs/evaluation2.avif"
              class="w-[62px] h-[62px] rounded-full"
            />
            <div class="flex flex-col gap-[2px] justify-center">
              <p
                class="font-medium leading-[18px] max-md:text-[14px] md:leading-[24px] tracking-[-0.5px] text-[#08DA83]"
              >
                Candidate #2
              </p>
              <p
                class="font-bold text-[16px] md:text-[24px] leading-[24px] md:leading-[30px] tracking-[-0.5px] text-[#091B29]"
              >
                Mardonova Mubina
              </p>
            </div>
          </div>
          <div
            v-for="[type, score] in Object.entries(candidate2Scores)"
            class="flex-1 md:h-[102px] flex md:min-w-[397px] xl:h-[75px] rounded-[24px] py-[12px] px-[36px] gap-[16px] bg-[#F8F8F8] items-center"
            :class="{ '!bg-[#08DA83]': type == 'band' }"
          >
            <h2
              class="font-extrabold text-[32px] md:text-[40px] max-md:leading-[38px] text-[#08DA83] w-[73px]"
              :class="{ 'text-white': type == 'band' }"
            >
              {{ Number.isInteger(score) ? score + ".0" : score }}
            </h2>
            <p
              class="text-[#091B29] pl-[16px] border-l border-[#091B291A]/10 text-[20px] leading-[30px] tracking-[-0.5px] flex items-center"
              :class="{ 'text-white': type == 'band' }"
            >
              {{
                type === "band"
                  ? "Band Score"
                  : type.charAt(0).toUpperCase() + type.slice(1)
              }}
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-[16px]">
          <div
            class="w-full flex flex-col rounded-[24px] p-[18px] md:p-[24px] gap-[6px] bg-[#F8F8F8]"
          >
            <h3
              class="font-bold text-[14px] md:text-[20px] leading-[18px] md:leading-[28px] tracking-[-0.5px] text-[#091B29]"
            >
              {{ $t("evaluations.candidate2.feedback") }}
            </h3>
            <p
              class="text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-[-0.2px] text-[#5A5A5A]"
            >
              {{ $t("evaluations.candidate2.feedbackDesc") }}
            </p>
          </div>
          <div class="flex flex-col md:flex-row gap-[16px] h-full">
            <div
              class="flex flex-1 flex-col rounded-[24px] p-[18px] md:p-[24px] gap-[6px] bg-[#F8F8F8]"
            >
              <h3
                class="font-bold text-[14px] md:text-[20px] leading-[18px] md:leading-[28px] tracking-[-0.5px] text-[#091B29]"
              >
                {{ $t("evaluations.candidate2.fluency") }}
              </h3>
              <p
                class="text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-[-0.2px] text-[#5A5A5A]"
              >
                {{ $t("evaluations.candidate2.fluencyDesc") }}
              </p>
            </div>
            <div
              class="flex flex-1 flex-col rounded-[24px] p-[18px] md:p-[24px] gap-[6px] bg-[#F8F8F8]"
            >
              <h3
                class="font-bold text-[14px] md:text-[20px] leading-[18px] md:leading-[28px] tracking-[-0.5px] text-[#091B29]"
              >
                {{ $t("evaluations.candidate2.vocabulary") }}
              </h3>
              <p
                class="text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-[-0.2px] text-[#5A5A5A]"
              >
                {{ $t("evaluations.candidate2.vocabularyDesc") }}
              </p>
            </div>
          </div>
          <div class="flex flex-col md:flex-row gap-[16px] h-full">
            <div
              class="flex flex-1 flex-col rounded-[24px] p-[18px] md:p-[24px] gap-[6px] bg-[#F8F8F8]"
            >
              <h3
                class="font-bold text-[14px] md:text-[20px] leading-[18px] md:leading-[28px] tracking-[-0.5px] text-[#091B29]"
              >
                {{ $t("evaluations.candidate2.grammar") }}
              </h3>
              <p
                class="text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-[-0.2px] text-[#5A5A5A]"
              >
                {{ $t("evaluations.candidate2.grammarDesc") }}
              </p>
            </div>
            <div
              class="flex flex-1 flex-col rounded-[24px] p-[18px] md:p-[24px] gap-[6px] bg-[#F8F8F8]"
            >
              <h3
                class="font-bold text-[14px] md:text-[20px] leading-[18px] md:leading-[28px] tracking-[-0.5px] text-[#091B29]"
              >
                {{ $t("evaluations.candidate2.pronunciation") }}
              </h3>
              <p
                class="text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-[-0.2px] text-[#5A5A5A]"
              >
                {{ $t("evaluations.candidate2.pronunciationDesc") }}
              </p>
            </div>
          </div>
          <div class="flex flex-col md:flex-row gap-[16px] h-full">
            <div
              class="flex flex-1 flex-col rounded-[24px] p-[18px] md:p-[24px] gap-[6px] bg-[#F8F8F8]"
            >
              <h3
                class="font-bold text-[14px] md:text-[20px] leading-[18px] md:leading-[28px] tracking-[-0.5px] text-[#091B29]"
              >
                {{ $t("evaluations.candidate2.topicWords") }}
              </h3>
              <p
                class="text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-[-0.2px] text-[#5A5A5A]"
              >
                {{ $t("evaluations.candidate2.topicWordsDesc") }}
              </p>
            </div>
            <div
              class="flex flex-1 flex-col rounded-[24px] p-[18px] md:p-[24px] gap-[6px] bg-[#F8F8F8]"
            >
              <h3
                class="font-bold text-[14px] md:text-[20px] leading-[18px] md:leading-[28px] tracking-[-0.5px] text-[#091B29]"
              >
                {{ $t("evaluations.candidate2.suggestedWords") }}
              </h3>
              <p
                class="text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-[-0.2px] text-[#5A5A5A]"
              >
                {{ $t("evaluations.candidate2.suggestedWordsDesc") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { scoreType } from "~/types/frontend";

import { useI18n } from "vue-i18n";

const { t } = useI18n();

const candidate1Scores: scoreType = {
  fluency: 8.0,
  vocabulary: 7.5,
  grammar: 7.5,
  pronounciation: 7.5,
  band: 7.5,
};
const candidate2Scores: scoreType = {
  fluency: 5.5,
  vocabulary: 5.5,
  grammar: 5.5,
  pronounciation: 6.0,
  band: 5.5,
};
</script>
