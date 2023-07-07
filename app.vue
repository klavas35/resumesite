<template id="app">
  <keep-alive>
    <v-card>
      <v-layout v-if="!isMobile">
        <v-app-bar color="primary" prominent>
          <v-btn to="/" nuxt variant="text">
            <v-toolbar-title>Kürşat Edabalı Yıldırım</v-toolbar-title>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            to="/contact"
            nuxt
            v-if="locale.title == 'Türkçe'"
            variant="text"
            >İletişim</v-btn
          >
          <v-btn
            to="/contact"
            nuxt
            v-if="locale.title == 'English'"
            variant="text"
            >Contact</v-btn
          >
          <v-btn
            variant="text"
            icon="mdi-theme-light-dark"
            @click="toggleTheme"
          ></v-btn>
          <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props">
                {{ locale.title == "Türkçe" ? "Dil" : "Language" }}
              </v-btn>
            </template>

            <v-list>
              <v-list-item @click="changeLocele('Türkçe')" icon="mdi-flag-tr"
                >Türkçe</v-list-item
              >
              <v-list-item @click="changeLocele('English')"
                >English</v-list-item
              >
            </v-list>
          </v-menu>
        </v-app-bar>
        <v-main style="height: auto">
          <NuxtPage :locale="locale.title" />
        </v-main>
        <v-footer color="primary" style="margin-top: 8%" app>
          <span class="white--text">&copy; 2023 </span>
          <v-spacer></v-spacer>
          <span v-if="locale.title == 'English'" class="white-text"
            >This website is created, developed and getting maintained by Kürşat
            Edabalı Yıldırım. A.K.A keyforge.
          </span>
          <span v-if="locale.title == 'Türkçe'" class="white-text"
            >This website is created, developed and getting maintained by .
          </span>
          <v-spacer></v-spacer>
          <span class="white--text">by: keyforge</span>
        </v-footer>
      </v-layout>
      <v-layout v-else>
        <v-app-bar scroll-behavior="hide" color="primary" prominent>
          <v-btn to="/" nuxt variant="text">
            <v-icon>mdi-home</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            to="/contact"
            nuxt
            v-if="locale.title == 'Türkçe'"
            variant="text"
            >İletişim</v-btn
          >
          <v-btn
            to="/contact"
            nuxt
            v-if="locale.title == 'English'"
            variant="text"
            >Contact</v-btn
          >
          <v-btn
            variant="text"
            icon="mdi-theme-light-dark"
            @click="toggleTheme"
          ></v-btn>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props">
                {{ locale.title == "Türkçe" ? "TR" : "ENG" }}
              </v-btn>
            </template>

            <v-list>
              <v-list-item @click="changeLocele('Türkçe')" icon=""
                >TR</v-list-item
              >
              <v-list-item @click="changeLocele('English')">Eng</v-list-item>
            </v-list>
          </v-menu>
        </v-app-bar>
        <v-main style="height: auto">
          <NuxtPage :locale="locale.title" />
        </v-main>
      </v-layout>
      <v-layout v-if="isMobile">
        <v-footer color="primary" style="margin-top: 8%">
          <v-spacer></v-spacer>
          <span class="white--text">by: keyforge</span>
        </v-footer>
      </v-layout>
    </v-card>
  </keep-alive>
</template>

<script lang="ts">
import { useTheme } from "vuetify";
export default {
  setup() {
    const theme = useTheme();
    const isMobile = ref(false);
    const locale = ref({
      type: String,
      default: "Türkçe",
      title: "Türkçe",
    });
    console.log("test")
    function changeLocele(data: string) {
      locale.value.title = data;
    }
    return {
      theme,
      locale,
      isMobile,
      changeLocele,
      toggleTheme: () => {
        theme.global.name.value = theme.global.current.value.dark
          ? "Mlight"
          : "Mdark";
      },
    };
  },

  mounted() {
    if (window.navigator.language.slice(0, 2) == "tr") {
      this.locale.title = "Türkçe";
    } else {
      this.locale.title = "English";
    }
    this.isMobile = this.$vuetify.display.mobile;
  },
  created() {
    window.addEventListener("resize", () => {
      this.isMobile = this.$vuetify.display.mobile;
    });
  },
};
</script>
