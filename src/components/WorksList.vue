<template>
    <MovieList></MovieList>
    <ul class="list-gallery">
        <li v-for="(item, id) in options" :key="id" :class="'item item-'+item.id">
            <router-link :to="{name: 'Works', query: {view: 'view', id: item.id}}" v-if="item.show">
                <figure class="itemBox">
                    <div class="thumb">
                        <!-- <img :src="item.imgURL" :alt="item.title+' 썸네일 이미지'" onerror="this.src='//new.dev.wivismall.com//image/web/common/item_comingsoon.jpg'"> -->
                        <img :src="item.imgURL" :alt="item.title+' 썸네일 이미지'" >
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
import MovieList from '@/components/MovieList.vue'
export default {
    name: 'WorksList',
    components: {
        MovieList
    },
    data() {
        return {
            pageTitle: 'Portfolio',
            options: [
                {
                    id: 0,
                    title: 'TBH SHOP',
                    workType: '구축',
                    version: 'PC / Mobile',
                    //imgURL: require('@/assets/img/1.jpg'),
                    imgURL: '@/assets/img/1.jpg',
                    show: true
                }, {
                    id: 1,
                    title: '모코블링',
                    workType: '리뉴얼',
                    version: 'PC / Mobile',
                    imgURL: require('@/assets/img/2.jpg'),
                    show: true
                }, {
                    id: 2,
                    title: '내츄럴라이프',
                    workType: '운영, 유지보수',
                    version: 'PC / Mobile',
                    imgURL: require('@/assets/img/3.jpg'),
                    show: true
                }, {
                    id: 3,
                    title: '돌리버리',
                    workType: '구축',
                    version: 'PC / Mobile',
                    imgURL: require('@/assets/img/4.jpg'),
                    show: true
                }, {
                    id: 4,
                    title: '클라라',
                    workType: '구축',
                    version: 'PC / Mobile',
                    imgURL: require('@/assets/img/5.jpg'),
                    show: true
                }, {
                    id: 5,
                    title: '인동에프엔 IDF MALL',
                    workType: '구축',
                    version: 'PC',
                    imgURL: require('@/assets/img/7.jpg'),
                    show: true
                }, {
                    id: 6,
                    title: '임블리',
                    workType: '리뉴얼',
                    version: 'PC / Mobile',
                    imgURL: require('@/assets/img/8.jpg'),
                    show: true
                }, {
                    id: 7,
                    title: '셀렉온',
                    workType: '구축',
                    version: 'PC / Mobile',
                    imgURL: require('@/assets/img/9.jpg'),
                    show: true
                }, {
                    id: 8,
                    title: '에바주니',
                    workType: '리뉴얼',
                    version: 'PC / Mobile',
                    imgURL: require('@/assets/img/15.jpg'),
                    show: true
                }, {
                    id: 9,
                    title: '호밀',
                    workType: '리뉴얼',
                    version: 'PC / Mobile',
                    imgURL: require('@/assets/img/14.jpg'),
                    show: true
                }, {
                    id: 10,
                    title: '좋은사람들 B2C',
                    workType: '구축',
                    version: 'PC / Mobile',
                    imgURL: require('@/assets/img/11.jpg'),
                    show: true
                }, {
                    id: 11,
                    title: '남도애꽃',
                    workType: '리뉴얼',
                    version: 'PC / Mobile',
                    imgURL: require('@/assets/img/12.jpg'),
                    show: true
                }, {
                    id: 12,
                    title: '쉬비치',
                    workType: '리뉴얼',
                    version: 'PC / Mobile',
                    imgURL: require('@/assets/img/6.jpg'),
                    show: true
                }, {
                    id: 13,
                    title: '위드이픈',
                    workType: '리뉴얼',
                    version: 'PC / Mobile',
                    imgURL: require('@/assets/img/16.jpg'),
                    show: true
                }, {
                    id: 14,
                    title: '세리박스',
                    workType: '구축',
                    version: 'PC / Mobile',
                    imgURL: require('@/assets/img/10.jpg'),
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