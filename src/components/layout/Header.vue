<template>
    <header id="header">
        <h1 class="logo">
            <a href="/">JE<span class="version">v1.0.0</span></a>
        </h1>
        <GnbList></GnbList>
    </header>
</template>
<script>
import GnbList from "@/components/GnbList.vue"
export default {
    name: 'Header',
    components: {
        GnbList
    },
    methods: {
        elem() {
            this.size = window.innerWidth;
            console.log(this.size);
            return this.size;
        }
    },
    created() {
        window.addEventListener('resize', this.elem);
    },
    mounted() {
        if(this.elem < 1199) {
            console.log('aaa:'+this.elem);
        }
    }
}
</script>