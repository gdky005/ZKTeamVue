// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'

import $ from 'jquery'

// store.js
import Vuex from 'vuex';
// 引入 axios
import axios from 'axios';

Vue.use(ElementUI);
Vue.use(Vuex);
Vue.config.productionTip = false;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

var fly=require("flyio");
Vue.prototype.$axios = axios;
Vue.prototype.$fly = fly;


// https://www.cnblogs.com/wisewrong/p/6402183.html
const store = new Vuex.Store({
  // 定义状态
  state: {
    isDebug: true
  },
  actions: {

    registerRequest(context, obj) {
      let that = obj.that;
      let cid = obj.cid;
      console.log("输入的 cid 是：" + cid);

      let url = 'http://192.168.17.16:8888/query.php?cid=' + cid;
      // let url = 'http://zkteam.cc/Subscribe/jsonQueryInfo/?des=80s';

      // http://192.168.17.16:8888/query.php?cid=1323
      // axios.get('http://zkteam.cc/Subscribe/jsonQueryInfo/?des=80s')
      // axios.get('/api/query.php?cid=' + cid)
      //   .then(function (res) {
      //     console.log(res);
      //     obj.result = res.data;
      //     that.resultCallBackForCheckCid(obj);
      //   })
      //   .catch(function (err) {
      //     console.log(err);
      //     that.resultCallBackForCheckCid(err);
      //   });

      $.ajax({
        url: url,
        type: 'GET',
        dataType: 'jsonp',
        jsonpCallback:'cidResult',
        success: function (res) {
          console.log(res);
          obj.result = res;
          that.resultCallBackForCheckCid(obj);
        },
        error: function (res) {
          console.log(res);
          obj.result = res;
          that.resultCallBackForCheckCid(obj);
        },
      })

    }

  }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  store: store,
});
