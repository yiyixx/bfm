<template>
  <div class="book-home">
    <searchBars></searchBars>
    <book-items-wrapper :title="item.title" v-for="(item, index) in items" :key="index"></book-items-wrapper>
  </div>
</template>

<script>
import searchBars from '../../components/film/search'
import BookItemsWrapper from '../../components/book/wrapper'
export default {
  data () {
    return {
      items: [
        {title: '经典著作', listInter: '接口1'},
        {title: '计算机图书', listInter: '接口2'},
        {title: '热门小说', listInter: '接口3'}
      ]
    }
  },
  components: {
    searchBars,
    BookItemsWrapper
  }

}
</script>

<style scoped>

</style>