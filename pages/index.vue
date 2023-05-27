<template>
    <trindex v-if="locale=='Türkçe'"></trindex>
    <enindex v-if="locale=='English'"></enindex>
</template>


<script>
import trindex from './tr/index.vue'
import enindex from './en/index.vue'
export default{
    components:{
        trindex,
        enindex
    },
    props: {
        locale: {
            type: String,
        }
    },
}
</script>