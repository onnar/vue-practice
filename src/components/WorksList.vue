<template>
    <ul class="list-gallery">
        <li v-for="(item, id) in options" :key="id" :class="'item item-'+item.id">
            <router-link :to="{name: 'Works', query: {view: 'view', id: item.id}}" v-if="item.show">
                <figure class="itemBox">
                    <div class="thumb">
                        <!-- <img :src="item.imgURL" :alt="item.title+' 썸네일 이미지'" onerror="this.src='//new.dev.wivismall.com//image/web/common/item_comingsoon.jpg'"> -->
                        <img :src="item.imgURL" :alt="item.title+' 썸네일 이미지'" onerror="this.src='https://mblogthumb-phinf.pstatic.net/MjAyMDAyMDJfMTg5/MDAxNTgwNjM5Mjg2ODA3.0-YSKsGsWAx9MQPsfqyJkMwqd1JTGSLZwmrp8QU9-AAg.66w-39mmNhkpS5C5L9HEhEnHwbP79dhh3KWF3n3Yliwg.PNG.lizziechung/image.png?type=w800'">
                    </div>
                    <figcaption>
                        <dl>
                            <dt>{{item.title}}</dt>
                            <dd>{{item.workType}}</dd>
                            <dd>{{item.version}}</dd>
                        </dl>
                    </figcaption>
                </figure>
            </router-link>
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
                {
                    id: 0,
                    title: 'TBH SHOP',
                    workType: '구축',
                    version: 'PC / Mobile',
                    //imgURL: require('@/assets/images/1.jpg'),
                    imgURL: '/assets/images/1.jpg',
                    show: true
                }, {
                    id: 1,
                    title: '모코블링',
                    workType: '리뉴얼',
                    version: 'PC / Mobile',
                    imgURL: require('@/assets/images/2.jpg'),
                    show: true
                }, {
                    id: 2,
                    title: '내츄럴라이프',
                    workType: '운영, 유지보수',
                    version: 'PC / Mobile',
                    imgURL: require('@/assets/images/3.jpg'),
                    show: true
                }, {
                    id: 3,
                    title: '돌리버리',
                    workType: '구축',
                    version: 'PC / Mobile',
                    imgURL: require('@/assets/images/4.jpg'),
                    show: true
                }, {
                    id: 4,
                    title: '클라라',
                    workType: '구축',
                    version: 'PC / Mobile',
                    imgURL: require('@/assets/images/5.jpg'),
                    show: true
                }, {
                    id: 5,
                    title: '인동에프엔 IDF MALL',
                    workType: '구축',
                    version: 'PC',
                    imgURL: require('@/assets/images/7.jpg'),
                    show: true
                }, {
                    id: 6,
                    title: '임블리',
                    workType: '리뉴얼',
                    version: 'PC / Mobile',
                    imgURL: require('@/assets/images/8.jpg'),
                    show: true
                }, {
                    id: 7,
                    title: '셀렉온',
                    workType: '구축',
                    version: 'PC / Mobile',
                    imgURL: require('@/assets/images/9.jpg'),
                    show: true
                }, {
                    id: 8,
                    title: '에바주니',
                    workType: '리뉴얼',
                    version: 'PC / Mobile',
                    imgURL: require('@/assets/images/15.jpg'),
                    show: true
                }, {
                    id: 9,
                    title: '호밀',
                    workType: '리뉴얼',
                    version: 'PC / Mobile',
                    imgURL: require('@/assets/images/14.jpg'),
                    show: true
                }, {
                    id: 10,
                    title: '좋은사람들 B2C',
                    workType: '구축',
                    version: 'PC / Mobile',
                    imgURL: require('@/assets/images/11.jpg'),
                    show: true
                }, {
                    id: 11,
                    title: '남도애꽃',
                    workType: '리뉴얼',
                    version: 'PC / Mobile',
                    imgURL: require('@/assets/images/12.jpg'),
                    show: true
                }, {
                    id: 12,
                    title: '쉬비치',
                    workType: '리뉴얼',
                    version: 'PC / Mobile',
                    imgURL: require('@/assets/images/6.jpg'),
                    show: true
                }, {
                    id: 13,
                    title: '위드이픈',
                    workType: '리뉴얼',
                    version: 'PC / Mobile',
                    imgURL: require('@/assets/images/16.jpg'),
                    show: true
                }, {
                    id: 14,
                    title: '세리박스',
                    workType: '구축',
                    version: 'PC / Mobile',
                    imgURL: require('@/assets/images/10.jpg'),
                    show: false
                },
                //{id: 99, title: '이미지', workType: '깨지는거', version: '테스트용', imgURL: '/error_src.jpg'), show: true},
            ]
        }
    },
    methods: {
        clickList (idVal) {
            this.$router.push({
                name: 'Works',
                query: {
                    view: 'view',
                    id: idVal
                }
            })
        },
        /*
        emptyImage (e) {
            console.log(e);
            var repURL = '';
            e.target.src = repURL;
        }*/
    },
}
</script>