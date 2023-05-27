;

import { thames } from './myThemes';

export default {
  ssr: false,
  target: 'static',
  
  modules: [
    '@invictus.codes/nuxt-vuetify',
    '@pinia/nuxt',
    ['nuxt-mail', {
      message: {
        to: process.env.EMAIL_ADDRESS,
      },
      smtp: {
        to: 'smtp.mailtrap.io',
        port: 465,
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_ADDRESS,
          pass: process.env.APP_PASS,
        },
      },
    }],
  ],

  vuetify: {
    vuetifyOptions: {
      theme: {
        themes: {
          light: thames.myLightTheme,
          dark: thames.myDarkTheme,
        },
        defaultTheme: 'light',
      },
    },
    moduleOptions: {
      treeshaking: true,
      useIconCDN: true,
      styles: true,
      autoImport: true,
    },
  },
};
