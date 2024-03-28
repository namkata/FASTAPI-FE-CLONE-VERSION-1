import { createI18n } from 'vue-i18n';
import en from './en-US';
import vi from './vi';

export const LOCALE_OPTIONS = [
  { label: 'Việt Nam', value: 'vi' },
  { label: 'English', value: 'en-US' },
];
const defaultLocale = localStorage.getItem('arco-locale') || 'vi';

const i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: 'en-US',
  legacy: false,
  allowComposition: true,
  messages: {
    'en-US': en,
    'vi': vi,
  },
});

export default i18n;
