<template>
    <div id="gnb">
        <nav class="nav">
            <ul>
                <li>
                    <router-link v-bind:to="{name: 'Home'}">Home</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'About'}">About</router-link>
                </li>
                <li>
                    <router-link to="/works">Works</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'Movie'}">Movie</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'Data'}">Data</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'GnbList'
}
</script>
