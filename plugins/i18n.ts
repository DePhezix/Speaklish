import { createI18n } from 'vue-i18n'
import uz from '@/i18n/uz.json'
import en from '@/i18n/en.json'
import ru from '@/i18n/ru.json'

const messages = {
  uz,
  en,
  ru,
}

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages,
  })
  vueApp.use(i18n)
})