import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import pt from './pt.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    'pt-BR': { translation: pt },
  },
  lng: 'pt-BR', // idioma padrão
  fallbackLng: 'pt-BR',
  interpolation: { escapeValue: false },
});

export default i18n;
