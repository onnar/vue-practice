<template>
    sdflkj
</template>

<script>
export default {
    name: 'WorksView',
    methods: {
        clickList () {
            this.$router.push({name: 'Query', query: {name: 'cat', age: 3}})
        },
        clickParams () {
            this.$router.push({name: 'Params', params: {name: 'dog', age:4}})
        }
    },
    data() {
        return {
            pageTitle: 'Portfolio',
            options: [
                {id: 0, title: 'TBH SHOP', workType: '구축', version: 'PC / Mobile', imgSrc: '//jueon.dothome.co.kr/images/portfolio/1.jpg', show: true},
                {id: 1, title: '모코블링', workType: '리뉴얼', version: 'PC / Mobile', imgSrc: '//jueon.dothome.co.kr/images/portfolio/2.jpg', show: true},
                {id: 2, title: '내츄럴라이프', workType: '운영, 유지보수', version: 'PC / Mobile', imgSrc: '//jueon.dothome.co.kr/images/portfolio/3.jpg', show: true},
                {id: 3, title: '돌리버리', workType: '구축', version: 'PC / Mobile', imgSrc: '//jueon.dothome.co.kr/images/portfolio/4.jpg', show: true},
                {id: 4, title: '클라라', workType: '구축', version: 'PC / Mobile', imgSrc: '//jueon.dothome.co.kr/images/portfolio/5.jpg', show: true},
                {id: 5, title: '인동에프엔 IDF MALL', workType: '구축', version: 'PC', imgSrc: '//jueon.dothome.co.kr/images/portfolio/7.jpg', show: true},
                {id: 6, title: '임블리', workType: '리뉴얼', version: 'PC / Mobile', imgSrc: '//jueon.dothome.co.kr/images/portfolio/8.jpg', show: true},
                {id: 7, title: '셀렉온', workType: '구축', version: 'PC / Mobile', imgSrc: '//jueon.dothome.co.kr/images/portfolio/9.jpg', show: true},
                {id: 8, title: '에바주니', workType: '리뉴얼', version: 'PC / Mobile', imgSrc: '//jueon.dothome.co.kr/images/portfolio/15.jpg', show: true},
                {id: 9, title: '호밀', workType: '리뉴얼', version: 'PC / Mobile', imgSrc: '//jueon.dothome.co.kr/images/portfolio/14.jpg', show: true},
                {id: 10, title: '좋은사람들 B2C', workType: '구축', version: 'PC / Mobile', imgSrc: '//jueon.dothome.co.kr/images/portfolio/11.jpg', show: true},
                {id: 11, title: '남도애꽃', workType: '리뉴얼', version: 'PC / Mobile', imgSrc: '//jueon.dothome.co.kr/images/portfolio/12.jpg', show: true},
                {id: 12, title: '쉬비치', workType: '리뉴얼', version: 'PC / Mobile', imgSrc: '//jueon.dothome.co.kr/images/portfolio/6.jpg', show: true},
                {id: 13, title: '위드이픈', workType: '리뉴얼', version: 'PC / Mobile', imgSrc: '//jueon.dothome.co.kr/images/portfolio/16.jpg', show: true},
                {id: 14, title: '세리박스', workType: '구축', version: 'PC / Mobile', imgSrc: '//jueon.dothome.co.kr/images/portfolio/10.jpg', show: false},
            ]
        }
    }
}
</script>