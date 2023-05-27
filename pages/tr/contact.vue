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
          <v-card>
            <v-card-title>
              <h1>Konum</h1>
            </v-card-title>
            <v-card-text>
              <div style="position: relative; overflow: hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d196.7294367031637!2d28.316533402453825!3d37.914752333738626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2str!4v1684772515183!5m2!1sen!2str"
                  width="100%"
                  height="300"
                  frameborder="0"
                  style="border: 0; margin: 0"
                  loading="lazy"
                ></iframe>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-col>

      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>
            <h1>İletişim Formu</h1>
          </v-card-title>
          <v-card-text>
            <v-form>
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
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
    setup() {
    const mail = useMail();
    const message = ref({
        name: "",
        surname: "",
        email: "",
        message: "",
        })
        function send() {
            console.log(mail);
            
            mail.send({
                from: message.value.name + " " + message.value.surname + " <" + message.value.email + ">",
                subject: 'resumsite',
                text: message.value.message,
            });
        }
        return {
            message,
            send,
        };
    }
}
</script>
