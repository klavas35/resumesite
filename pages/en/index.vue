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
            aria-label="A profile Picture"
          />
        </v-card>
      </v-col>
      <v-col>
        <h1>Kürşat Edabalı Yıldırım</h1>
        <v-card
          width="95%"
          color="secondary"
          subtitle="Computer Engineering Student"
          text="Hello, I am a student of computer sciences and engineering at Adnan Menderes University. As a child I always liked dealing with computer and liked to solve problems relating to them, I even helped my cousin to build his websites in some ways like creative writing and finding logical mistakes in his websites. I am excited to work in the field I always dreamt about."
          density="comfortable"
        />
        <v-card
          style="margin-left: 5%"
          color="primary"
          width="95%"
          title="Education"
          text="My current education needs a litle bit of explanation My actual university is istanbul Aydın university but as I have disabilities and economic restrictions I am taking my education at Adnan Menderes University,"
        ></v-card>
        <v-card title="Dissabilities" color="secondary"
          ><strong style="margin-left: 0.6%">Right Eye:</strong> My right eye is
          prosthetic <br />
          <strong style="margin-left: 0.6%">Left Eye:</strong> My left eye is
          5.5 hypermetropic and 0.75 astigmatic </v-card
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card
          width="95%"
          title="Education"
          color="primary"
          subtitle="Adnan Menderes Univeristy"
          density="comfortable"
        />
        <v-card
          width="95%"
          color="secondary"
          subtitle="İstanbul Aydın University"
          text="I am currently studying at Adnan Menderes University, I am originally from İstanbul Aydın University though because of my disability I am conducting my studies in Adnan Menderes University"
          density="comfortable"
        />
      </v-col>
      <v-col>
        <v-card
          width="95%"
          title="Objectives"
          color="primary"
          subtitle="current"
          text="My current objective is finding an internship to better understand the work environment I am going to spend my life on and improve myself with experience and connections I will make along the way."
          density="comfortable"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card width="95%" title="Hobbies" density="comfortable">
          <v-list>
            <v-list-item :style="primat" append-icon="mdi-book-open"
              >Reading</v-list-item
            >
            <v-list-item :style="secondat" append-icon="mdi-code-json"
              >Coding</v-list-item
            >
            <v-list-item :style="primat" append-icon="mdi-semantic-web"
              >Learning New Frameworks/Languages</v-list-item
            >
            <v-list-item :style="secondat" append-icon="mdi-train-car"
              >Traveling</v-list-item
            >
            <v-list-item :style="primat" append-icon="mdi-music-circle-outline"
              >Music</v-list-item
            >
          </v-list>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          color="primary"
          width="95%"
          title="Skills"
          density="comfortable"
          style="margin-left: 1%"
        >
          <v-table>
            <thead>
              <tr :style="secondat">
                <th  class="text-left">Name</th>
                <th class="text-right">Level</th>
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
                <td><v-icon icon="mdi-database-eye"></v-icon> NOSQL (Mongodb with mongoose)</td>
                <td class="text-right">
                  <div style="background-color: lightblue">
                    <div
                      style="background-color: #2196f3; padding: 4%; width: 70%"
                    ></div>
                  </div>
                </td>
              </tr>
              <tr :style="primat">
                <td><v-icon icon="mdi-language-c"></v-icon> C (programming language)</td>
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
        text="As an aspiring student I am looking forward to gain new work experiences and be a part of something bigger, something more. My goal is learning, growing, being useful for a team and making something that matters with said team. As an avid listener I can fallow directives and use necessary tools to better understand and solve the problems that comes along with the job, working experience is an important thing to gain and one can say that experience is one of the, if not most important thing in working environment, day-to-day life or anything really"
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
