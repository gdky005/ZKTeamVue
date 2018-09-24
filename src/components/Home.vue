<template>
  <div style="margin-top: 60px; margin-bottom: 60px; text-align: center;">


    <h1>google 服务器</h1>

    <p><strong>欢迎进入我的Google 服务器空间。</strong></p>

    <h2>服务器默认配置</h2>

    <p>默认服务器 ip 是： 35.236.173.123</p>

    <p>默认的端口号是：1080</p>

    <p>默认加密方式：aes-256-cfb</p>

    <h2>SS 登录信息</h2>

    <p>服务器地址：35.236.173.123</p>

    <p>端口号：XXXX</p>

    <p>加密方式：aes-256-cfb</p>

    <p>密码：MMMM</p>

    <p>XXXX 表示分配给你的端口号， MMMM 表示你的中文姓名全拼。 例如：小李 --> xiaoli</p>
    

    <p<a href="https://portal.shadowsocks.to/aff.php?aff=18267">如果以上代理没法用，请自行注册 SS，可以帮你实现跳转。</a></p>

    <h2>具体使用软件:</h2>

    <div style="text-align: left; padding: 100px">
      <p>直接使用最新的 release 软件即可</p>

      <h4>1. windows软件下载地址：<a href="https://github.com/shadowsocks/shadowsocks-windows/releases">https://github.com/shadowsocks/shadowsocks-windows/releases</a>
      </h4>

      <h4>2. Mac软件下载地址：<a href="https://github.com/shadowsocks/ShadowsocksX-NG/releases">
        https://github.com/shadowsocks/ShadowsocksX-NG/releases </a></h4>

      <h4>3. Android手机使用影梭：</h4>


      <ul>
        <li>推荐 app 下载地址， 直接搜索『影梭』或>者 『Shadowsocks』：

          <p>1）<a href="https://apkpure.com">https://apkpure.com</a></p>
          <p>2）<a href="https://www.apkmirror.com/">https://www.apkmirror.com/</a></p></li>
        <li>google play 地址：<a href="https://play.google.com/store/apps/details?id=com.github.shadowsocks&amp;hl=zh-CN">https://play.google.com/store/apps/details?id=com.github.shadowsocks&amp;hl=zh-CN</a>
        </li>
        <li>直接下载地址：<a href="https://apkpure.com/cn/shadowsocks/com.github.shadowsocks">https://apkpure.com/cn/shadowsocks/com.github.shadowsocks</a>
        </li>
      </ul>


      <h4>4. IOS 手机使用最新版的 shadowrocket 或 Potatso</h4>

      <p>听说 shadowrocket 只能用 国外的 appid 下载，可能
        花费几块钱，不过干净利索，值得哈。 如果没有的话，注
        册一个邮箱，直接选择美国，然后登陆该账号下载，再切>换回你们的账户。</p>

      <h2>参考地址：</h2>

      <p><a href="https://teddysun.com/486.html"> https://teddysun.com/486.html </a></p>

      <p><a href="https://portal.shadowsocks.la/index.php?rp=/download">https://portal.shadowsocks.la/index.php?rp=/download</a>
      </p>

    </div>
    <!--<h1>时间戳</h1>-->

    <!--<div>-->
    <!--<el-button @click="getNowTime" type="success" size="medium" >现在时间戳</el-button> &nbsp;&nbsp; ======>> &nbsp;&nbsp;-->
    <!--<el-input v-model="now_time" placeholder="点击按钮生成时间戳" style="width: 180px;margin: 20px">你放好</el-input>-->

    <!--&lt;!&ndash;<p><el-input v-model="input" placeholder="请输入时间戳" style="margin: 0px">你放好</el-input></p>&ndash;&gt;-->
    <!--&lt;!&ndash;<p><el-button type="success" size="medium">现在时间戳</el-button></p>&ndash;&gt;-->
    <!--</div>-->

    <!--<div>-->
    <!--<el-input v-model="bj_time" placeholder="请输入时间戳" style="width: 180px;margin: 20px">你放好</el-input>-->
    <!--<el-button @click="getBJTime" type="success" size="medium">转成_北京_时间 >></el-button>-->
    <!--<el-input v-model="bj_time_success" placeholder="将自动生成北京时间" style="width: 180px;margin: 20px"></el-input>-->
    <!--</div>-->

    <!--<div>-->
    <!--<el-input v-model="unix_time" placeholder="请输入北京时间" style="width: 180px;margin: 20px">你放好</el-input>-->
    <!--<el-button @click="getUnixTime" type="success" size="medium">转成Unix时间戳 >></el-button>-->
    <!--<el-input v-model="unix_time_success" placeholder="将自动生成时间戳" style="width: 180px;margin: 20px">你放好</el-input>-->
    <!--</div>-->

  </div>
</template>

<script>
  export default {
    name: "Home",

    data() {
      return {
        resultStatus: false,
        now_time: '',
        bj_time: '',
        bj_time_success: '',
        unix_time: '',
        unix_time_success: '',
        data: [{
          'result': '',
          'taskId': '',
        }]
      }
    },
    methods: {
      getNowTime() {
        var now = new Date();
        now = now.getTime();
        console.log(now);
        this.now_time = now;
      },
      getBJTime() {
        // var t = 787986456465;  // 当参数为数字的时候，那么这个参数就是时间戳，被视为毫秒，创建一个距离1970年1月一日指定毫秒的时间日期对象。
        let time = new Date(Number(this.bj_time));
        console.log(time);

        this.bj_time_success = this.timestampToTime(Number(this.bj_time));

        let date = new Date(time); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        let D = this.change(date.getDate()) + ' ';
        let h = this.change(date.getHours()) + ':';
        let m = this.change(date.getMinutes()) + ':';
        let s = this.change(date.getSeconds());
        this.bj_time_success = Y + M + D + h + m + s;

      },
      getUnixTime() {
        // var t = "2017-12-08 20:5:30";  // 月、日、时、分、秒如果不满两位数可不带0.
        time = this.unix_time;
        let time = time.replace(new RegExp(/-/gm), "/"); 　　//将所有的'-'转为'/'即可
        let t = new Date(time).getTime();  // 将指定日期转换为标准日期格式。Fri Dec 08 2017 20:05:30 GMT+0800 (中国标准时间)
        console.log(t);
        this.unix_time_success = t; // 将转换后的标准日期转换为时间戳。
      },


      timestampToTime(time) {
        let date = new Date(this.bj_time); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        let D = this.change(date.getDate()) + ' ';
        let h = this.change(date.getHours()) + ':';
        let m = this.change(date.getMinutes()) + ':';
        let s = this.change(date.getSeconds());
        return Y + M + D + h + m + s;
      }
      ,
      change(t) {
        if (t < 10) {
          return "0" + t;
        } else {
          return t;
        }
      }
      ,


    }
  }

  function timestampToTime(timestamp) {
    var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    return Y + M + D + h + m + s;
  }
</script>

<style>
  /*.el-input {*/
  /*width: 180px;*/
  /*margin: 20px;*/
  /*}*/
</style>
