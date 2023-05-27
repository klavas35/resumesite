<template>
  <v-container style="margin-top: 3%">
    <v-row>
      <v-col>
        <v-card
          style="
            border-radius: 100%;
            margin: 0;
            padding: 0;
            margin-left: 20%;
            width: 45%;
          "
        >
          <v-img
            width="100%"
            aspect-ratio="16/9"
            cover
            :src="profile"
            aria-label="Profil Resmi"
          />
        </v-card>
      </v-col>
      <v-col>
        <h1>Kürşat Edabalı Yıldırım</h1>
        <v-card
          width="95%"
          color="secondary"
          subtitle="Bilgisayar Mühendisliği Öğrencisi"
          text="Merhaba, Adnan Menderes Üniversitesi'nde bilgisayar bilimleri ve mühendisliği öğrencisiyim. Çocukluğumdan beri bilgisayarlarla uğraşmayı ve onlarla ilgili problemleri çözmeyi severdim. Hatta kuzenime web sitelerinde yaratıcı yazılar yazarak ve mantıksal hataları bulmada yardımcı oldum. Her zaman hayal ettiğim alanda çalışmaktan heyecan duyuyorum."
          density="comfortable"
        />
        <v-card
          style="margin-left: 5%"
          color="primary"
          width="95%"
          title="Eğitim"
          text="Mevcut eğitimim biraz açıklama gerektiriyor. Aslında ben İstanbul Aydın Üniversitesi'nde öğrenciyim, ancak engellilik ve ekonomik sınırlamalar nedeniyle eğitimimi Adnan Menderes Üniversitesi'nde sürdürüyorum."
        ></v-card>
        <v-card title="Engeller" color="secondary"
          ><strong style="margin-left: 0.6%">Sağ Göz:</strong> Sağ gözüm protez<br />
          <strong style="margin-left: 0.6%">Sol Göz:</strong> Sol gözüm 5.5 hipermetropik ve 0.75 astigmat</v-card
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card
          width="95%"
          title="Eğitim"
          color="primary"
          subtitle="Adnan Menderes Üniversitesi"
          density="comfortable"
        />
        <v-card
          width="95%"
          color="secondary"
          subtitle="İstanbul Aydın Üniversitesi"
          text="Şu anda Adnan Menderes Üniversitesi'nde okuyorum, aslen İstanbul Aydın Üniversitesi'ndenim, ancak engellilik nedeniyle çalışmalarımı Adnan Menderes Üniversitesi'nde sürdürüyorum."
          density="comfortable"
        />
      </v-col>
      <v-col>
        <v-card
          width="95%"
          title="Hedefler"
          color="primary"
          subtitle="Yakın Zamanlı Hedefler"
          text="Mevcut hedefim, hayatımı geçireceğim iş ortamını daha iyi anlamak, deneyim ve yapacağım bağlantılarla kendimi geliştirmek için staj bulmaktır."
          density="comfortable"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card width="95%" title="Hobiler" density="comfortable">
          <v-list>
            <v-list-item :style="primat" append-icon="mdi-book-open"
              >Okuma</v-list-item
            >
            <v-list-item :style="secondat" append-icon="mdi-code-json"
              >Kodlama</v-list-item
            >
            <v-list-item :style="primat" append-icon="mdi-semantic-web"
              >Yeni Framework ve Diller Öğrenme</v-list-item
            >
            <v-list-item :style="secondat" append-icon="mdi-train-car"
              >Seyahat</v-list-item
            >
            <v-list-item :style="primat" append-icon="mdi-music-circle-outline"
              >Müzik</v-list-item
            >
          </v-list>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          color="primary"
          width="95%"
          title="Yetenekler"
          density="comfortable"
          style="margin-left: 1%"
        >
          <v-table>
            <thead>
              <tr :style="secondat">
                <th  class="text-left">Ad</th>
                <th class="text-right">Seviye</th>
              </tr>
            </thead>
            <tbody>
              <tr :style="primat">
                <td ><v-icon icon="mdi-language-java"></v-icon> Java</td>
                <td class="text-right">
                  <div style="background-color: gray">
                    <div
                      style="background-color: #f44336; padding: 4%; width: 85%"
                    ></div>
                  </div>
                </td>
              </tr>
              <tr :style="secondat">
                <td> <v-icon icon="mdi-language-javascript"></v-icon> Javascript</td>
                <td class="text-right">
                  <div style="background-color: lightblue">
                    <div
                      style="background-color: #2196f3; padding: 4%; width: 90%"
                    ></div>
                  </div>
                </td>
              </tr>
              <tr :style="primat">
                <td><v-icon icon="mdi-database-search"></v-icon> TSQL</td>
                <td class="text-right">
                  <div style="background-color: gray">
                    <div
                      style="background-color: #f44336; padding: 4%; width: 75%"
                    ></div>
                  </div>
                </td>
              </tr>
              <tr :style="secondat">
                <td><v-icon icon="mdi-database-eye"></v-icon> NOSQL (mongoose ile Mongodb kullanımı)</td>
                <td class="text-right">
                  <div style="background-color: lightblue">
                    <div
                      style="background-color: #2196f3; padding: 4%; width: 70%"
                    ></div>
                  </div>
                </td>
              </tr>
              <tr :style="primat">
                <td><v-icon icon="mdi-language-c"></v-icon> C (programlama dili)</td>
                <td class="text-right">
                  <div style="background-color: gray">
                    <div
                      style="background-color: #f44336; padding: 4%; width: 70%"
                    ></div>
                  </div>
                </td>
              </tr>
              <tr :style="secondat">
                <td><v-icon icon="mdi-language-csharp"></v-icon> C#</td>
                <td class="text-right">
                  <div style="background-color: lightblue">
                    <div
                      style="background-color: #2196f3; padding: 4%; width: 65%"
                    ></div>
                  </div>
                </td>
              </tr>
              <tr :style="primat">
                <td><v-icon icon="mdi-language-cpp"></v-icon> C++</td>
                <td class="text-right">
                  <div style="background-color: gray">
                    <div
                      style="background-color: #f44336; padding: 4%; width: 80%"
                    ></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>
    <v-col color="red" cols="12" md="10" style="margin-top: 3%">
      <v-card
        title="Afterword"
        class="text-center"
        width="50%"
        color="primary"
        style="margin-left: 35%"
        text="
Öğrenci olarak, yeni iş deneyimleri kazanmayı ve daha büyük bir bütünün parçası olmayı dört gözle bekliyorum. Amacım, öğrenmek, büyümek, bir ekip için faydalı olmak ve söz konusu ekiple önemli bir şeyler yapmaktır. İyi bir dinleyici olarak, talimatları takip edebilir ve işle ilgili sorunları anlamak ve çözmek için gerekli araçları kullanabilirim. Çalışma deneyimi kazanmak önemlidir ve deneyim, çalışma ortamında, günlük hayatta veya herhangi bir konuda elde edilebilecek en önemli şeylerden biridir."
      ></v-card>
    </v-col>
    <v-col cols="12" md="100">
      <v-card color="primary" style="padding: 0.5%; border-radius: 30%"> </v-card>
      <v-card
        width="5%"
        color="secondary"
        style="
          margin-top: -1.3%;
          padding: 0.8%;
          margin-left: 47.5%;
          border-radius: 35%;
        "
      ></v-card>
    </v-col>
  </v-container>
  
</template>

<script lang="ts">
import profile from "../../assets/profile.jpg";
import { useTheme } from "vuetify";

export default {
  setup() {
    const theme = useTheme();
    const pLight = "background-color: #6200EE; color:white";
    const sLight = "background-color: #03DAC6; weight: 800";
    const pDark = "background-color: #007bff";
    const sDark = "background-color: #7315d6";

    watch(
      () => theme.global.current.value.dark,
      (newVal) => {
        primat.value = newVal ? pDark : pLight;
        secondat.value = newVal ? sDark : sLight;
      }
    );

    const primat = ref(theme.global.current.value.dark ? pDark : pLight);
    const secondat = ref(theme.global.current.value.dark ? sDark : sLight);

    return {
      primat,
      secondat,
      profile,
    };
  },
};
</script>
