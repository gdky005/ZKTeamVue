// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'

// store.js
import Vuex from 'vuex';
// 引入 axios
import axios from 'axios';

Vue.use(ElementUI);
Vue.use(Vuex);
Vue.config.productionTip = false;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

Vue.prototype.$axios = axios;


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

      axios.get('http://zkteam.cc/Subscribe/jsonQueryInfo/?des=80s')
        .then(function (res) {
          console.log(res);
          obj.result = res.data;
          that.resultCallBackForCheckCid(obj);
        })
        .catch(function (err) {
          console.log(err);
          that.resultCallBackForCheckCid(err);
        });
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
