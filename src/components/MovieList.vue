<template>
    <div id="result">
        <div class="searchBox">
            <input minlength="8" maxlength="8" placeholder="YYYYMMDD" v-model="myDate">
            <button @click="callApi">검색</button>
        </div>
        <table>
            <caption class="blind">kobis data ajax test</caption>
            <colgroup>
                <col style="width: 10%;">
                <col>
                <col style="width: 15%;">
                <col style="width: 15%;">
                <col style="width: 10%;">
            </colgroup>
            <thead>
                <tr>
                    <th>순위</th>
                    <th>제목</th>
                    <th>개봉일</th>
                    <th>점유율</th>
                    <th>누적관객</th>
                </tr>
            </thead>
            <tbody v-if="movies">
                <tr v-for="(item, id) in movies" :key="id">
                    <td>{{ item.rank }}</td>
                    <td>{{ item.movieNm }}</td>
                    <td>{{ item.openDt }}</td>
                    <td>{{ item.salesShare }}</td>
                    <td>{{ item.audiCnt }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'MovieList',
    data() {
        return {
            baseUrl: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
            myKey: '113854b91df9adff54ea56e9e853c86f',
            myDate: '',
            movies: [],
            display: false,
        }
    },
    props: {
        //display: this.display
    },
    methods: {
        callApi() {
            axios.get(this.baseUrl + '?key=' + this.myKey + '&targetDt=' + this.myDate)
            .then((res) => {
                console.log(`${this.myDate} : ${res.data.boxOfficeResult.dailyBoxOfficeList}`);
                this.movies = res.data.boxOfficeResult.dailyBoxOfficeList;
                this.display = true;
                return this.movies;
            })
            .catch((error) => {
                console.log('error : ' + error);
            });
        }
    },
    created() {
        console.log('created');
    },
    mounted() {
        console.log('mounted');
            this.$nextTick(function () {
        })
    },
    updated() {
        console.log('updated');
            this.$nextTick(function () {
        })
    },
}
</script>
<style>
    #result {
        width: 980px;
        margin: 0 auto;
    }

    .searchBox {
        display: flex;
        position: relative;
        width: 200px;
        margin: 0 auto 20px;
    }

    .searchBox input:focus {
        outline: 0;
    }

    .searchBox input {
        flex: 1;
        height: 36px;
        padding: 0 10px;
        border: solid #ccc;
        border-width: 0 0 1px;
        line-height: 1;
    }

    .searchBox button {
        flex: none;
        width: 80px;
        border: 1px solid #c2c2c2;
    }

    table {
        table-layout: fixed;
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
    }

    table th {
        padding: 10px;
        border: 1px solid #ddd;
        font-size: 12px;
    }
    table td {
        padding: 5px;
        border: 1px solid #ddd;
        font-size: 12px;
    }
</style>