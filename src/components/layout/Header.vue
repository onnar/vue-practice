<template>
    <div id="nav">
        <ul>
            <li><router-link v-bind:to="{name: 'Home'}">Home</router-link></li>
            <li><router-link :to="{name: 'About'}">About</router-link></li>
            <li><router-link to="/works">Works</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Header',
    created() {
        window.addEventListener('resize', this.elem);
    },
    methods: {
        elem() {
            this.size = window.innerWidth;
            console.log(this.size);
            return this.size;
        }
    },
    mounted() {
        if(this.elem < 1199) {
            console.log('aaa:'+this.elem);
        }
    }
}
</script>