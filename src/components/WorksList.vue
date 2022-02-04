<style>
.list-gallery {
    display: block;
    font-size: 0;
    text-align: center;
}
.list-gallery>li {
    display: inline-block;
    width: 25%;
    padding: 10px;
    vertical-align: top;
}
.list-gallery>li .itemBox {
    display: block;
    border: 1px solid #ddd;
    transition: all 0.6s;
}

.list-gallery>li .itemBox .thumb {
    overflow: hidden;;
    position: relative;
    padding-bottom: 100%;
}

.list-gallery>li .itemBox .thumb img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: auto;
    height: 100%;
    transform: translate(-50%, -50%);
    transition: all 0.6s;
}

.list-gallery>li .itemBox:hover {
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
}

.list-gallery>li .itemBox:hover .thumb img {
    height: 110%;
    opacity: 0.5;
}

.list-gallery>li .itemBox figcaption {
    font-size: 15px;
}
</style>
<template>
    <ul class="list-gallery">
        <li :key="id" v-for="(item, id) in options" :class="'item item-'+item.id">
            <a :href="'/worksView?no='+item.id" v-if="item.show">
                <figure class="itemBox">
                    <div class="thumb"><img :src="item.imgSrc" :alt="item.title+' 썸네일 이미지'" onerror="this.src='//new.dev.wivismall.com//image/web/common/item_comingsoon.jpg'"></div>
                    <figcaption>
                        <dl>
                            <dt>{{item.title}}</dt>
                            <dd>{{item.workType}}</dd>
                            <dd>{{item.version}}</dd>
                        </dl>
                    </figcaption>
                </figure>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'WorksList',
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