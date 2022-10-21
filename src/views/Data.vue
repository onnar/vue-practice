<template>
  <ul class="list-gallery">
    <input type="text" placeholder="sdflksdjflsdkjf" value="sdfsdfsdfsdf">
    <li v-for="(item, id) in works" :key="id" :class="'item item-'+item.id">
      <figure class="itemBox">
          <div class="thumb">
              <img src="" :alt="item.title+' 썸네일 이미지'">
          </div>
          <figcaption>
              <dl>
                  <dt>{{item.title}}</dt>
                  <dd>{{item.type}}</dd>
                  <dd>{{item.ver}}</dd>
              </dl>
          </figcaption>
      </figure>
    </li>
  </ul>
</template>
<script>
import work from "@/assets/data/works.json";
export default {
  data() {
    return {
      listName: "portfolio",
      works: work
    }
  },
  methods: {
    
  }
  /*computed: {
    works() {
      return work.map((items) => {
        return items;
      });
    },
  },*/
}
</script>