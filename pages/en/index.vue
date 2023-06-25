<template>
  <v-container style="margin-top: 3%">
    <v-row>
      <v-col cols="12" md="4">
        <v-card
          style="
            border-radius: 100%;
            margin: 0;
            padding: 0;
            margin-left: auto;
            margin-right: auto;
            width: 70%;
          "
        >
          <v-img
            width="100%"
            aspect-ratio="1/1"
            contain
            :src="profile"
            aria-label="A profile Picture"
          />
        </v-card>
      </v-col>
      <v-col cols="12" md="8">
        <h1>Kürşat Edabalı Yıldırım</h1>
        <v-card
          width="100%"
          color="secondary"
          subtitle="Computer Engineering Student"
          text="Hello, I am a student of computer sciences and engineering at Adnan Menderes University. As a child I always liked dealing with computer and liked to solve problems relating to them, I even helped my cousin to build his websites in some ways like creative writing and finding logical mistakes in his websites. I am excited to work in the field I always dreamt about."
          density="comfortable"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <v-card
          width="100%"
          color="primary"
          title="Education"
          text="My current education needs a little bit of explanation. My actual university is Istanbul Aydın University, but due to my disabilities and economic restrictions, I am taking my education at Adnan Menderes University."
        ></v-card>
        <v-card title="Disabilities" color="secondary">
          <strong>Right Eye:</strong> My right eye is prosthetic<br />
          <strong>Left Eye:</strong> My left eye is 5.5 hypermetropic and 0.75
          astigmatic
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card
          width="100%"
          title="Education"
          color="primary"
          subtitle="Adnan Menderes University"
          text="I am currently studying at Adnan Menderes University. I am originally from Istanbul Aydın University, but because of my disability, I am conducting my studies at Adnan Menderes University."
          density="comfortable"
        />
      </v-col>
      <v-col cols="12" md="4">
        <v-card
          width="100%"
          title="Objectives"
          color="primary"
          subtitle="Current"
          text="My current objective is finding an internship to better understand the work environment I am going to spend my life on and improve myself with experience and connections I will make along the way."
          density="comfortable"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-card
          width="100%"
          :style="secondat"
          title="Hobbies"
          density="comfortable"
          subtitle="Things to do"
        >
          <v-list>
            <v-list-item :style="primat" append-icon="mdi-book-open"
              >Reading</v-list-item
            >
            <v-list-item :style="secondat" append-icon="mdi-code-json"
              >Coding</v-list-item
            >
            <v-list-item :style="primat" append-icon="mdi-semantic-web"
              >Learning New Technologies</v-list-item
            >
            <v-list-item :style="secondat" append-icon="mdi-camera"
              >Photography</v-list-item
            >
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card
          width="100%"
          title="Skills"
          subtitle="Programming Languages and Tools"
          color="primary"
          dense
        >
          <v-list>
            <v-list-item :style="primat" append-icon="mdi-language-c"
              >C</v-list-item
            >
            <v-list-item :style="secondat" append-icon="mdi-language-cpp"
              >C++</v-list-item
            >
            <v-list-item :style="primat" append-icon="mdi-language-java"
              >Java</v-list-item
            >
            <v-list-item :style="secondat" append-icon="mdi-language-python"
              >Python</v-list-item
            >
            <v-list-item :style="primat" append-icon="mdi-language-javascript"
              >JavaScript</v-list-item
            >
            <v-list-item :style="secondat" append-icon="mdi-language-html5"
              >HTML</v-list-item
            >
            <v-list-item :style="primat" append-icon="mdi-language-css3"
              >CSS</v-list-item
            >
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12">
        <v-card
          width="100%"
          title="Afterword"
          color="secondary"
          text="As an aspiring student I am looking forward to gain new work experiences and be a part of something bigger, something more. My goal is learning, growing, being useful for a team and making something that matters with said team. As an avid listener I can fallow directives and use necessary tools to better understand and solve the problems that comes along with the job, working experience is an important thing to gain and one can say that experience is one of the, if not most important thing in working environment, day-to-day life or anything really"
          density="comfortable"
        />
      </v-col>
    </v-row>
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
