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
    name: 'AppNav'
}
</script>