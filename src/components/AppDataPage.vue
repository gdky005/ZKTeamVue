<template>
  <div style="margin-top: 60px;text-align: center;">

    <hrLine/>
    <el-row>
      <el-col :span="12" >
        <h1>App 数据网址</h1>

        <p><a href="http://www.zkteam.cc/wq.html" target="view_window">
          <el-button size="mini" type="primary" round>临时记录网址数据</el-button>
        </a></p>

        <p><a href="http://www.zkteam.cc/wq2.html" target="view_window">
          <el-button size="mini" type="primary" round>SCP 上传/下载测试命令</el-button>
        </a></p>


        <p>
          <router-link to="/MarkDown"><el-button size="mini" type="primary" round> Versions MarkDown </el-button> </router-link>
        </p>

        <p>
          <router-link to="/MarkDownForWQData"><el-button size="mini" type="primary" round> WQData MarkDown </el-button> </router-link>
        </p>

        <p><a href="https://mobile.umeng.com/platform/5ce947420cafb23dee000572/reports/realtime_summary"
              target="view_window">
          <el-button size="mini" type="primary" round>友盟统计</el-button>
        </a></p>


        <p><a href="https://report.tingyun.com/mobile/mobileApp/37521/overview" target="view_window">
          <el-button size="mini" type="primary" round>听云</el-button>
        </a></p>


        <p><a href="https://fir.im/1h26" target="view_window">
          <el-button size="mini" type="primary" round>Fir 内测地址</el-button>
        </a></p>


        <p><a href="https://play.google.com/apps/publish/?account=5586012382007160330#AppListPlace"
              target="view_window">
          <el-button size="mini" type="primary" round>GooglePlay Console</el-button>
        </a></p>


        <p><a href="https://play.google.com/store/apps/details?id=com.zkteam.juediqiusheng" target="view_window">
          <el-button size="mini" type="primary" round>GooglePlay 地址</el-button>
        </a></p>
      </el-col>

      <el-col :span="12">
        <h1>App 平台</h1>


        <p>
          <a href="https://apps.admob.com/v2/home" target="view_window">
            <el-button size="mini" type="primary" round>Google Admob</el-button>
          </a>
        </p>

        <p>
          <a href="http://adnet.qq.com/index" target="view_window">
            <el-button size="mini" type="primary" round>腾讯：优量汇</el-button>
          </a>
        </p>

        <p>
          <a href="https://ad.toutiao.com/union/media/union/" target="view_window">
            <el-button size="mini" type="primary" round>头条：穿山甲</el-button>
          </a>
        </p>

        <p>
          <a href="https://mssp.baidu.com/bqt/modules.html" target="view_window">
            <el-button size="mini" type="primary" round>百度：百青藤</el-button>
          </a>
        </p>
      </el-col>
    </el-row>


    <hrLine/>

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
  /*@import "../assets/css/zkteam.css";*/
  /*.el-input {*/
  /*width: 180px;*/
  /*margin: 20px;*/
  /*}*/
</style>
