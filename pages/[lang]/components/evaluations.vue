<template>
  <div class="flex flex-col py-[64px] px-[52px] gap-[48px]" id="evaluation">
    <div
      class="flex flex-col w-[1335px] rounded-[36px] p-[48px] gap-[24px] bg-white"
    >
      <h1
        class="sf-display font-extrabold text-[64px] text-[#091B29] leading-[119%]"
      >
        Evaluations by Speaklish
      </h1>
      <div class="flex gap-[24px]">
        <div class="flex flex-col gap-[16px]">
          <div
            class="flex w-[397px] rounded-[24px] py-[20px] px-[36px] gap-[16px] bg-[#F8F8F8]"
          >
            <img
              src="../assets/imgs/evaluation1.avif"
              class="w-[62px] h-[62px] rounded-full"
            />
            <div class="flex flex-col gap-[2px]">
              <p
                class="font-medium leading-[24px] tracking-[-0.5px] text-[#08DA83]"
              >
                Candidate #1
              </p>
              <p
                class="font-bold text-[24px] leading-[30px] tracking-[-0.5px] text-[#091B29]"
              >
                Salikhov Amir
              </p>
            </div>
          </div>
          <div
            v-for="[type, score] in Object.entries(candidate1Scores)"
            class="flex w-[397px] h-[75px] rounded-[24px] py-[12px] px-[36px] gap-[16px] bg-[#F8F8F8] items-center"
            :class="{ '!bg-[#08DA83]': type == 'band' }"
          >
            <h2
              class="font-extrabold text-[40px] text-[#08DA83] w-[73px]"
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
            class="flex flex-col rounded-[24px] p-[36px] gap-[6px] bg-[#F8F8F8] w-[819px]"
          >
            <h3
              class="font-bold text-[20px] leading-[28px] tracking-[-0.5px] text-[#091B29]"
            >
              Feedback
            </h3>
            <p
              class="text-[14px] leading-[20px] tracking-[-0.2px] text-[#5A5A5A]"
            >
              The candidate has a good command of English and is able to express
              complex ideas with clarity. However, there are a few minor errors
              and awkward phrases. For instance, the phrase "hard and
              soft-skinned fiction" is unclear and the phrase "right up my
              avenue" should be "right up my alley". In the second part, the
              phrase "help your brother underwater and its brother to lure a
              man" is confusing and likely a miscommunication. The candidate
              should have said "you just need a snorkel to help you breathe
              underwater and a mask to prevent water from coming into your
              eyes". In the third part, the phrase "I think swimming is the most
              famous water sport in Ferdinand" is unclear as "Ferdinand" is not
              a known location or context. The candidate should specify what
              "Ferdinand" refers to
            </p>
          </div>
          <div class="flex gap-[16px] h-full">
            <div
              class="flex flex-1 flex-col rounded-[24px] p-[36px] gap-[6px] bg-[#F8F8F8]"
            >
              <h3
                class="font-bold text-[20px] leading-[28px] tracking-[-0.5px] text-[#091B29]"
              >
                Specific topic-words used by candidate(worth-to-mention):
              </h3>
              <p
                class="text-[14px] leading-[20px] tracking-[-0.2px] text-[#5A5A5A]"
              >
                extraterrestrials, starship troopers, Celestial events, heavenly
                bodies, Coronal mass Objection, star formation, astronaut,
                snorkeling, submarine landscape, Great Barrier Reef, economical,
                drowning, comfort zone.
              </p>
            </div>
            <div
              class="flex flex-1 flex-col rounded-[24px] p-[36px] gap-[6px] bg-[#F8F8F8]"
            >
              <h3
                class="font-bold text-[20px] leading-[28px] tracking-[-0.5px] text-[#091B29]"
              >
                Suggested less used topic-related words, idioms or collocations:
              </h3>
              <p
                class="text-[14px] leading-[20px] tracking-[-0.2px] text-[#5A5A5A]"
              >
                science fiction, interstellar travel, celestial bodies,
                astronomical phenomena, space exploration, marine biodiversity,
                coral reef, aquatic transportation, water safety, physical
                fitness, recreational activities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col w-[1335px] rounded-[36px] p-[48px] gap-[24px] bg-white"
    >
      <h1
        class="sf-display font-extrabold text-[64px] text-[#091B29] leading-[119%]"
      >
        Evaluations by Speaklish
      </h1>
      <div class="flex gap-[24px]">
        <div class="flex flex-col gap-[16px]">
          <div
            class="flex w-[397px] rounded-[24px] py-[20px] px-[36px] gap-[16px] bg-[#F8F8F8]"
          >
            <img
              src="../assets/imgs/evaluation2.avif"
              class="w-[62px] h-[62px] rounded-full"
            />
            <div class="flex flex-col gap-[2px]">
              <p
                class="font-medium leading-[24px] tracking-[-0.5px] text-[#08DA83]"
              >
                Candidate #2
              </p>
              <p
                class="font-bold text-[24px] leading-[30px] tracking-[-0.5px] text-[#091B29]"
              >
                Mardonova Mubina
              </p>
            </div>
          </div>
          <div
            v-for="[type, score] in Object.entries(candidate2Scores)"
            class="flex items-center w-[397px] h-[75px] rounded-[24px] py-[12px] px-[36px] gap-[16px] bg-[#F8F8F8]"
            :class="{ '!bg-[#08DA83]': type == 'band' }"
          >
            <h2
              class="font-extrabold text-[40px] text-[#08DA83] w-[73px]"
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
            class="flex flex-col rounded-[24px] p-[24px] gap-[6px] bg-[#F8F8F8] w-[819px]"
          >
            <h3
              class="font-bold text-[20px] leading-[28px] tracking-[-0.5px] text-[#091B29]"
            >
              Feedback
            </h3>
            <p
              class="text-[14px] leading-[20px] tracking-[-0.2px] text-[#5A5A5A]"
            >
              The candidate has a good understanding of the English language,
              but there are several areas where improvements can be made. The
              candidate tends to repeat phrases and words, which disrupts the
              flow of the conversation. The use of vocabulary is quite basic and
              could be improved by using more complex words and phrases. The
              candidate also makes several grammatical errors, such as incorrect
              verb tenses and sentence structures. The pronunciation is
              generally clear, but there are a few words that are mispronounced
              or unclear.
            </p>
          </div>
          <div class="flex gap-[16px] h-full">
            <div
              class="flex flex-1 flex-col h-min rounded-[24px] p-[24px] gap-[6px] bg-[#F8F8F8]"
            >
              <h3
                class="font-bold text-[20px] leading-[28px] tracking-[-0.5px] text-[#091B29]"
              >
                Fluency
              </h3>
              <p
                class="text-[14px] leading-[20px] tracking-[-0.2px] text-[#5A5A5A]"
              >
                The candidate's speech is often hesitant and repetitive,
                disrupting the flow of the conversation.
              </p>
            </div>
            <div
              class="flex flex-1 flex-col h-min rounded-[24px] p-[24px] gap-[6px] bg-[#F8F8F8]"
            >
              <h3
                class="font-bold text-[20px] leading-[28px] tracking-[-0.5px] text-[#091B29]"
              >
                Vocabulary:
              </h3>
              <p
                class="text-[14px] leading-[20px] tracking-[-0.2px] text-[#5A5A5A]"
              >
                The candidate uses a limited range of vocabulary and often
                repeats the same words and phrases.
              </p>
            </div>
          </div>
          <div class="flex gap-[16px] h-full">
            <div
              class="flex flex-1 flex-col h-min rounded-[24px] p-[24px] gap-[6px] bg-[#F8F8F8]"
            >
              <h3
                class="font-bold text-[20px] leading-[28px] tracking-[-0.5px] text-[#091B29]"
              >
                Grammar
              </h3>
              <p
                class="text-[14px] leading-[20px] tracking-[-0.2px] text-[#5A5A5A]"
              >
                The candidate makes several grammatical errors, including
                incorrect verb tenses and sentence structures.
              </p>
            </div>
            <div
              class="flex flex-1 flex-col h-min rounded-[24px] p-[24px] gap-[6px] bg-[#F8F8F8]"
            >
              <h3
                class="font-bold text-[20px] leading-[28px] tracking-[-0.5px] text-[#091B29]"
              >
                Pronunciation:
              </h3>
              <p
                class="text-[14px] leading-[20px] tracking-[-0.2px] text-[#5A5A5A]"
              >
                The candidate's pronunciation is generally clear, but there are
                a few words that are mispronounced or unclear.
              </p>
            </div>
          </div>
          <div class="flex gap-[16px] h-full">
            <div
              class="flex flex-1 flex-col h-min rounded-[24px] p-[24px] gap-[6px] bg-[#F8F8F8]"
            >
              <h3
                class="font-bold text-[20px] leading-[28px] tracking-[-0.5px] text-[#091B29]"
              >
                Specific topic-words used by the candidate(worth-to-mention):
              </h3>
              <p
                class="text-[14px] leading-[20px] tracking-[-0.2px] text-[#5A5A5A]"
              >
                T manager, football player, translator, Makkah, math subject,
                incorrect information.
              </p>
            </div>
            <div
              class="flex flex-1 flex-col h-min rounded-[24px] p-[24px] gap-[6px] bg-[#F8F8F8]"
            >
              <h3
                class="font-bold text-[20px] leading-[28px] tracking-[-0.5px] text-[#091B29]"
              >
                Suggested less used topic-related words, idioms or
                collocations::
              </h3>
              <p
                class="text-[14px] leading-[20px] tracking-[-0.2px] text-[#5A5A5A]"
              >
                Aspiration, career goals, misinformation, verify, digital
                communication, multilingual, cultural heritage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { scoreType } from "~/types/frontend";

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
