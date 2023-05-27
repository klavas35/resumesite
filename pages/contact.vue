<template>
    <div>
        <trcontact v-if="locale === 'Türkçe'" />
        <encontact v-if="locale === 'English'" />
    </div>
</template>

<script lang="ts">
import trcontact from "./tr/contact.vue";
import encontact from "./en/contact.vue";
export default {
  components: {
    trcontact,
    encontact,
  },
  props: {
    locale: {
      type: String,
    },
  },
};
</script>
