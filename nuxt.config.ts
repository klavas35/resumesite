import { type } from 'os';
import {thames} from './myThemes'
import env from 'dotenv'
export default defineNuxtConfig({
  ssr:false,
  
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
        
    }}]],
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
        theme: {
            themes: {
                Mlight :thames.myLightTheme,
                Mdark :thames.myDarkTheme
            },
            defaultTheme: 'Mlight'
        }
      // Add your Vuetify options here
    },
    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: true,
      /* vite-plugin-vuetify options */
      styles: true, // or 'none', 'expose', 'sass', { configFile: string }
      autoImport: true,
    },
  },
});