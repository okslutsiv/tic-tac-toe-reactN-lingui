import { i18n } from "@lingui/core";
import { en as pluralEn, fr as pluralFr } from "make-plural/plurals";

export const locales = {
  en: "English",
  fr: "Française",
};

export const defaultLocale = "fr";

i18n.loadLocaleData({
  fr: { plurals: pluralFr },
  en: { plurals: pluralEn },
});

export async function dynamicActivate(locale) {
  const { messages } = await import(`./locales/${locale}/messages`);
  i18n.load(locale, messages);
  i18n.activate(locale);
}
