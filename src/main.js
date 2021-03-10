import Vue from 'vue'
import App from './App'
import './css/app.css'
import store from './store';
import iconFont from '@/components/icon-font'
Vue.config.productionTip = false;
App.mpType = 'app';
Vue.prototype.$store = store;
import '../static/weui/weui.css'
import '@/stylus/base.styl'

// 全局注册
Vue.component('icon-font', iconFont)

const app = new Vue({
  App
})
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    pages: [
      '^pages/book/book'
    ], // Will be filled in webpack
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#42BD56', // 顶部导航背景颜色
      navigationBarTitleText: '书影音社区',
      navigationBarTextStyle: 'black' // 顶部导航背景颜色
    },
    tabBar: {
      color: '#999999',
      selectedColor: '#1AAD16',
      backgroundColor: '#ffffff',
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/book/book',
          text: '书籍',
          iconPath: 'static/images/tabbar/book.png',
          selectedIconPath: 'static/images/tabbar/book_on.png'
        },
        {
          pagePath: 'pages/film/film',
          text: '影视',
          iconPath: 'static/images/tabbar/film.png',
          selectedIconPath: 'static/images/tabbar/film_on.png'
        },
        {
          pagePath: 'pages/music/music',
          text: '音乐',
          iconPath: 'static/images/tabbar/music.png',
          selectedIconPath: 'static/images/tabbar/music_on.png'
        },
        {
          pagePath: 'pages/my/my',
          text: '我的',
          iconPath: 'static/images/tabbar/my.png',
          selectedIconPath: 'static/images/tabbar/my_on.png'
        }
      ]
    }
  }
}
