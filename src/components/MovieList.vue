<style>
    #result {width: 980px; margin: 0 auto;}
    table {
        table-layout: fixed;
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
    }
    table th, table td {
        padding: 5px;
        border: 1px solid #ddd;
        font-size: 12px;
    }
</style>
<template>
    <div id="result">
        <table>
            <caption>kobis data ajax test</caption>
            <colgroup>
                <col style="width: 10%;">
                <col>
                <col style="width: 15%;">
                <col style="width: 15%;">
                <col style="width: 10%;">
            </colgroup>
            <thead>
                <tr>
                    <th>no.</th>
                    <th>title</th>
                    <th>date</th>
                    <th>rate</th>
                    <th>ss</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
    <h2>이곳에 값이 출력 됩니다.</h2>
    <p v-for="result in history">{{result.index}}{{result.text}}</p>
    <input v-model="input" />
    <button v-on:click="callApi">검색</button> 1초후에 결과가 나옵니다.
</template>
<script>
export default {
    name: 'MovieList',
    data: {
        input: '롬5:1',
        history:[],
        message: '이곳에 결과가 나옵니다.'
    },
    methods: {
        callApi: function () {
            const input = this.input
            fetch('https://2kstde4150.execute-api.ap-northeast-1.amazonaws.com/dev/v1/find/single/'+input)
            .then(res => {
                return res.json()
            }).then(data => {
                console.log(data)
                this.history.push({'text':data[0]['text'], 'index':data[0]['index']})
            })
        }
    }
}
</script>