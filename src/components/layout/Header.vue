<template>
    <div id="nav">
        <ul>
            <li><router-link v-bind:to="{name: 'Home'}">Home</router-link></li>
            <li><router-link :to="{name: 'About'}">About</router-link></li>
            <li><router-link to="/works">Works</router-link></li>
            <li><router-link :to="{name: 'Movie'}">Movie</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Header',
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
/*
https://api.hnpwa.com/v0/news/1.json
[{
    "id": 30281901,
    "title": "JetBlue A320 tail strike on takeoff, B350 in opposite direction",
    "points": 70,
    "user": "cmurf",
    "time": 1644461596,
    "time_ago": "2 hours ago",
    "comments_count": 38,
    "type": "link",
    "url": "https://avherald.com/h?article=4f3b0864",
    "domain": "avherald.com"
}, {
    "id": 30280210,
    "title": "Aspect-ratio is great",
    "points": 171,
    "user": "damir",
    "time": 1644449002,
    "time_ago": "5 hours ago",
    "comments_count": 31,
    "type": "link",
    "url": "https://css-irl.info/aspect-ratio-is-great/",
    "domain": "css-irl.info"
}, {
    "id": 30275905,
    "title": "Our User-Mode WireGuard Year",
    "points": 373,
    "user": "xrd",
    "time": 1644429998,
    "time_ago": "11 hours ago",
    "comments_count": 108,
    "type": "link",
    "url": "https://fly.io/blog/our-user-mode-wireguard-year/",
    "domain": "fly.io"
}, {
    "id": 30279986,
    "title": "How PostgreSQL stores rows",
    "points": 123,
    "user": "mattrighetti",
    "time": 1644447919,
    "time_ago": "6 hours ago",
    "comments_count": 19,
    "type": "link",
    "url": "https://ketansingh.me/posts/how-postgres-stores-rows/",
    "domain": "ketansingh.me"
}, {
    "id": 30281006,
    "title": "The Black Hole Photographs: Censored Images from America’s Great Depression",
    "points": 63,
    "user": "grimgrin",
    "time": 1644454052,
    "time_ago": "4 hours ago",
    "comments_count": 45,
    "type": "link",
    "url": "https://flashbak.com/weird-black-hole-photographs-58283/",
    "domain": "flashbak.com"
}, {
    "id": 30282270,
    "title": "Lock-In and Multi-Cloud",
    "points": 12,
    "user": "mooreds",
    "time": 1644465141,
    "time_ago": "an hour ago",
    "comments_count": 2,
    "type": "link",
    "url": "https://www.tbray.org/ongoing/When/202x/2022/01/30/Cloud-Lock-In",
    "domain": "tbray.org"
}, {
    "id": 30277356,
    "title": "OpenSCAD 3D rendering just got an order of magnitude faster",
    "points": 158,
    "user": "voussoir",
    "time": 1644435502,
    "time_ago": "9 hours ago",
    "comments_count": 38,
    "type": "link",
    "url": "https://ochafik.com/jekyll/update/2022/02/09/openscad-fast-csg-contibution.html",
    "domain": "ochafik.com"
}, {
    "id": 30278595,
    "title": "Simutrans – Transport Simulator",
    "points": 112,
    "user": "colejohnson66",
    "time": 1644441380,
    "time_ago": "7 hours ago",
    "comments_count": 41,
    "type": "link",
    "url": "https://www.simutrans.com/en/",
    "domain": "simutrans.com"
}, {
    "id": 30277373,
    "title": "Sikorsky X-Wing (2013)",
    "points": 116,
    "user": "jeffreyrogers",
    "time": 1644435574,
    "time_ago": "9 hours ago",
    "comments_count": 26,
    "type": "link",
    "url": "https://www.sikorskyarchives.com/X-WING.php",
    "domain": "sikorskyarchives.com"
}, {
    "id": 30279591,
    "title": "Collapse of the Fern Hollow Bridge (Pittsburgh, Pa) Preliminary NTSB Report",
    "points": 49,
    "user": "hprotagonist",
    "time": 1644446259,
    "time_ago": "6 hours ago",
    "comments_count": 30,
    "type": "link",
    "url": "https://www.ntsb.gov:443/investigations/Pages/HWY22MH003.aspx",
    "domain": "ntsb.gov"
}, {
    "id": 30274886,
    "title": "Single dependency stacks",
    "points": 190,
    "user": "jeffreyrogers",
    "time": 1644425609,
    "time_ago": "12 hours ago",
    "comments_count": 91,
    "type": "link",
    "url": "https://brandur.org/fragments/single-dependency-stacks",
    "domain": "brandur.org"
}, {
    "id": 30281451,
    "title": "The Goat Boy Rises (1993)",
    "points": 13,
    "user": "dearwell",
    "time": 1644457333,
    "time_ago": "3 hours ago",
    "comments_count": 4,
    "type": "link",
    "url": "https://www.newyorker.com/magazine/1993/11/01/the-goat-boy-rises",
    "domain": "newyorker.com"
}, {
    "id": 30281116,
    "title": "Universe (YC W18) Is Hiring Growth and BizOps People",
    "points": null,
    "user": null,
    "time": 1644454874,
    "time_ago": "4 hours ago",
    "comments_count": 0,
    "type": "job",
    "url": "item?id=30281116"
}, {
    "id": 30281041,
    "title": "Incomplete history of Forbes.com as a platform for scams, grift, bad journalism",
    "points": 168,
    "user": "coloneltcb",
    "time": 1644454250,
    "time_ago": "4 hours ago",
    "comments_count": 40,
    "type": "link",
    "url": "https://www.niemanlab.org/2022/02/an-incomplete-history-of-forbes-com-as-a-platform-for-scams-grift-and-bad-journalism/",
    "domain": "niemanlab.org"
}, {
    "id": 30269286,
    "title": "Understanding LSM Trees: What Powers Write-Heavy Databases",
    "points": 88,
    "user": "branko_d",
    "time": 1644385073,
    "time_ago": "a day ago",
    "comments_count": 34,
    "type": "link",
    "url": "https://yetanotherdevblog.com/lsm/",
    "domain": "yetanotherdevblog.com"
}, {
    "id": 30271677,
    "title": "Major breakthrough on nuclear fusion energy",
    "points": 921,
    "user": "playpause",
    "time": 1644408161,
    "time_ago": "17 hours ago",
    "comments_count": 702,
    "type": "link",
    "url": "https://www.bbc.co.uk/news/science-environment-60312633",
    "domain": "bbc.co.uk"
}, {
    "id": 30273299,
    "title": "ASCII art for semantic code commenting",
    "points": 264,
    "user": "anonymous_they",
    "time": 1644418541,
    "time_ago": "14 hours ago",
    "comments_count": 72,
    "type": "link",
    "url": "https://asciiflow.com/#/",
    "domain": "asciiflow.com"
}, {
    "id": 30273301,
    "title": "So you want to build an embedded Linux system?",
    "points": 193,
    "user": "sebg",
    "time": 1644418559,
    "time_ago": "14 hours ago",
    "comments_count": 64,
    "type": "link",
    "url": "https://jaycarlson.net/embedded-linux/",
    "domain": "jaycarlson.net"
}, {
    "id": 30268000,
    "title": "Thousands of Mazdas in the Seattle area are stuck on a single FM radio station",
    "points": 635,
    "user": "walrus01",
    "time": 1644374210,
    "time_ago": "a day ago",
    "comments_count": 484,
    "type": "link",
    "url": "https://www.kuow.org/stories/we-didn-t-mean-to-ruin-your-mazda-s-stereo",
    "domain": "kuow.org"
}, {
    "id": 30269345,
    "title": "DNA for Information Storage and Cryptography – Biodesign",
    "points": 9,
    "user": "qualudeheart",
    "time": 1644385493,
    "time_ago": "a day ago",
    "comments_count": 0,
    "type": "link",
    "url": "https://biodesign.asu.edu/news/storing-information-and-designing-uncrackable-codes-dna",
    "domain": "biodesign.asu.edu"
}, {
    "id": 30274390,
    "title": "Launch HN: Pelm (YC W22) – Plaid for Utilities",
    "points": 88,
    "user": "drewkim",
    "time": 1644423365,
    "time_ago": "12 hours ago",
    "comments_count": 72,
    "type": "link",
    "url": "https://www.pelm.com/use-cases",
    "domain": "pelm.com"
}, {
    "id": 30281537,
    "title": "Show HN: Redirect your customers from your marketing page to your app",
    "points": 9,
    "user": "eaplant",
    "time": 1644458090,
    "time_ago": "3 hours ago",
    "comments_count": 7,
    "type": "link",
    "url": "item?id=30281537"
}, {
    "id": 30272496,
    "title": "I decided to build a nine-bit computer",
    "points": 163,
    "user": "mad_ned",
    "time": 1644414243,
    "time_ago": "15 hours ago",
    "comments_count": 61,
    "type": "link",
    "url": "https://madned.substack.com/p/holy-nonads-a-nine-bit-computer",
    "domain": "madned.substack.com"
}, {
    "id": 30268990,
    "title": "A Genetic Chronicle of the First Peoples in the Americas",
    "points": 26,
    "user": "benbreen",
    "time": 1644382424,
    "time_ago": "a day ago",
    "comments_count": 16,
    "type": "link",
    "url": "https://www.sapiens.org/archaeology/ancient-dna-native-americans/",
    "domain": "sapiens.org"
}, {
    "id": 30268980,
    "title": "Assembling the dead: human vertebrae-on-posts in the Chincha Valley, Peru",
    "points": 4,
    "user": "Thevet",
    "time": 1644382279,
    "time_ago": "a day ago",
    "comments_count": 0,
    "type": "link",
    "url": "https://www.cambridge.org/core/journals/antiquity/article/assembling-the-dead-human-vertebraeonposts-in-the-chincha-valley-peru/667933D6891591C4E78394A1DB583FEB",
    "domain": "cambridge.org"
}, {
    "id": 30263128,
    "title": "The Order of Things: Jennifer Croft on Translating Olga Tokarczuk",
    "points": 22,
    "user": "apollinaire",
    "time": 1644347897,
    "time_ago": "a day ago",
    "comments_count": 2,
    "type": "link",
    "url": "https://lithub.com/the-order-of-things-jennifer-croft-on-translating-olga-tokarczuk/",
    "domain": "lithub.com"
}, {
    "id": 30274979,
    "title": "The data are clear: The boys are not all right",
    "points": 409,
    "user": "paulpauper",
    "time": 1644426079,
    "time_ago": "12 hours ago",
    "comments_count": 762,
    "type": "link",
    "url": "https://www.washingtonpost.com/opinions/2022/02/08/andrew-yang-boys-are-not-all-right/",
    "domain": "washingtonpost.com"
}, {
    "id": 30275687,
    "title": "A man who tried to redeem the world with logic (2015)",
    "points": 79,
    "user": "porterbeats",
    "time": 1644429159,
    "time_ago": "11 hours ago",
    "comments_count": 8,
    "type": "link",
    "url": "https://nautil.us/the-man-who-tried-to-redeem-the-world-with-logic-2885/",
    "domain": "nautil.us"
}, {
    "id": 30278172,
    "title": "The performative quality of computer-generated art",
    "points": 47,
    "user": "url",
    "time": 1644439147,
    "time_ago": "8 hours ago",
    "comments_count": 7,
    "type": "link",
    "url": "https://hyperallergic.com/710156/appreciating-the-performative-quality-of-computer-generated-art/",
    "domain": "hyperallergic.com"
}, {
    "id": 30278290,
    "title": "Interview questions to ask your interviewer",
    "points": 245,
    "user": "skellertor",
    "time": 1644439758,
    "time_ago": "8 hours ago",
    "comments_count": 110,
    "type": "link",
    "url": "https://daveceddia.com/interview-questions-to-ask-company/",
    "domain": "daveceddia.com"
}]
*/
</script>