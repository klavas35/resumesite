<template>
    {{ locale  }}
    <trabout v-if="locale=='Türkçe'"></trabout>
    <enabout v-if="locale=='English'"></enabout>
</template>


<script lang="ts">
import trabout from './tr/about.vue'
import enabout from './en/about.vue'
export default{
    components:{
        trabout,
        enabout
    },
    props: {
        locale: {
            type: String,
        }
    },
}
</script>