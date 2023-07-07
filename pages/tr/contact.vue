<template>
  <v-container style="margin-top: 4%">
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>
            <h1>İletişim</h1>
          </v-card-title>
          <v-card-text>
            <p><v-icon>mdi-map-marker</v-icon> Aydın, Türkiye</p>
            <p>
              <v-icon>mdi-phone</v-icon>
              <a href="tel:+905075895738">+90 507 589 57 38</a>
            </p>
            <!-- add a google map to aydin/nazilli ordu caddesi yeni mahalle gunes apartmani no 63/1 -->
            <p>
              <v-icon>mdi-linkedin</v-icon>
              <a
                href="https://www.linkedin.com/in/kürşat-edabalı-yıldırım-276627178/"
                target="_blank"
                >LinkedIn</a
              >
            </p>
            <p>
              <v-icon>mdi-github</v-icon>
              <a href="https://github.com/klavas35">Github</a>
            </p>
            <p>
              <v-icon>mdi-email</v-icon>
              <a
                href="mailto:krst355@gmail.com
                "
              >
                <span class="text--primary"> krst355@gmail.com </span>
              </a>
            </p>
          </v-card-text>
        </v-card>
        <v-col style="margin-left: 3%" cols="12" md="10">
          
        </v-col>
      </v-col>

      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>
            <h1>İletişim Formu</h1>
          </v-card-title>
          <v-card-text>
            <v-form v-if="!formState" ref="contactForm">
              <v-text-field
                label="Adınız"
                v-model="message.name"
                required
              ></v-text-field>
              <v-text-field
                label="Soyadınız"
                v-model="message.surname"
                required
              ></v-text-field>
              <v-text-field
                label="E-posta Adresiniz"
                v-model="message.email"
                required
              ></v-text-field>
              <v-textarea
                label="Mesajınız"
                v-model="message.message"
                required
              ></v-textarea>
              <v-btn @click="send" color="primary" dark>Gönder</v-btn>
            </v-form>
            <v-card v-else color="green" text="Mesajiniz Yollandı yeni messaj atmak için lütfen yıklayınız">
              <v-btn @click="formState = false" color="primary" dark>Yeni Mesaj</v-btn>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="js">
export default {
  
  setup() {
    const mail = useMail();
    const isMobile = ref(false);
    const message = ref({
      name: "",
      surname: "",
      email: "",
      message: "",
    });
    const formState = ref(false);
    function send() {
      console.log(mail);
      formState.value = true;
      mail.send({
        from:
          message.value.name +
          " " +
          message.value.surname +
          " <" +
          message.value.email +
          ">",
        subject: "resumsite",
        text: message.value.message,
      }).catch((err) => {
        console.log(err);
      })
      message.value = "";
    }
    return {
      message,
      send,
      isMobile,
      formState,
    };
  },
  mounted() {
    this.isMobile = this.$vuetify.display.mobile;
  },
  created() {
    window.addEventListener("resize", () => {
      this.isMobile = this.$vuetify.display.mobile;
    });
  },
};
</script>
