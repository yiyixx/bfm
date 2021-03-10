<template>
  <div class="book-items-wrap">
    <div class="book-items-more-wrap">
      <div class="book-items-more weui-cells weui-cells_after-title">
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">{{title}}</div>
          <navigator url="/pages/book_list/book_list" hover-class="navigator-hover" class="weui-cell__ft weui-cell__ft_in-access">{{moreText}}</navigator>
        </div> 
      </div>
    </div>
    <scroll-view scroll-x style="width: 100%">
      <!-- <items></items> -->
    </scroll-view>
  </div>
</template>

<script>
import items from './items'
export default {
  data () {
    return {
    }
  },
  components: {
    items
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    moreText: {
      type: String,
      default: '更多'
    }
//     moreUrl: {
//       type: String,
//       default: ''
//     },
//     listApi: {
//       type: String,
//       require: true
//     },
//     passParams: {
//       type: Object
//     }
   }
}
</script>

<style lang="stylus" scoped>
  @import '~@/stylus/variable'
  .book-items-wrap
    background #fff
    margin-bottom 15px
    &:last-child
      margin-bottom 0
  .book-items-more-wrap
    padding 15px 0
    .weui-cell
      font-size 15px
    .book-items-more
      .weui-cell__ft
        color $green
        font-size 15px
    .weui-cells
      &:before, &:after
        border none
    .weui-cell
      padding 0 15px 0 10px
      position relative
      &:before
        position absolute
        left 0
        top 0
        width 3px
        height 100%
        background $green
        content ''
        display block
</style>
