<template>
  <div style="margin-top: 60px;text-align: center;">


    <h1>设置</h1>
    <!--<h1>微信钱包设置</h1>-->

    <el-tabs type="border-card" style="margin: 50px">
      <el-tab-pane label="钱包">

        <!--请求参数：https://www.zkteam.cc/WXMoney/setQB?id=1&name=%E6%88%91%E7%9A%84%E9%9B%B6%E9%92%B1&money=58-->
        <div>
          <p>
            <el-input :placeholder="qb_name_default" v-model="qb_name" style="width: 300px">
              <template slot="prepend">名字</template>
            </el-input>
          </p>

          <p>
            <el-input :placeholder="qb_money_default" v-model="qb_money" style="width: 300px">
              <template slot="prepend">总钱数</template>
            </el-input>
          </p>

          <p><el-button type="primary" @click="qbCommit">提交</el-button></p>

        </div>

      </el-tab-pane>
      <el-tab-pane label="明细记录">

        <!--https://www.zkteam.cc/WXMoney/setLQMXPZ?id=1&name=%E6%89%AB%E7%A0%81%E6%94%AF%E4%BB%98&money=58&startTime=1540109304418&endTime=1540209304418&startMoney=5&endMoney=12&spendState=1-->

        <div>
          <p>
            <el-input :placeholder="mx_name_default" v-model="mx_name" style="width: 300px">
              <template slot="prepend">名称</template>
            </el-input>
          </p>

          <p>
            <el-input :placeholder="mx_spend_state_default" v-model="mx_spend_state" style="width: 300px">
              <template slot="prepend">消费状态</template>
            </el-input>
          </p>

          <p>
            <!--<span class="demonstration">起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</span>-->
            起止时间:&nbsp;&nbsp;
            <el-date-picker
              v-model="mx_data"
              type="datetimerange"
              align="right"
              :start-placeholder="mx_data_start"
              :end-placeholder="mx_data_start"
              value-format="timestamp" format="yyyy-MM-dd HH:mm:ss"
              :default-time="['12:00:00', '08:00:00']">
            </el-date-picker>
          </p>

          <p>
            起止金额:&nbsp;&nbsp;
            <el-input-number v-model="startMoney" :step="1"></el-input-number> &nbsp;&nbsp;至&nbsp;&nbsp; <el-input-number v-model="endMoney" :step="1"></el-input-number>
          </p>


          <p><el-button type="primary" @click="mxCommit">提交</el-button></p>
        </div>
      </el-tab-pane>
    </el-tabs>


  </div>
</template>

<script>
  export default {
    name: "Home",

    data() {
      return {
        qb_name: '',
        qb_money: '',
        mx_name: '',
        mx_spend_state: '',
        startMoney: 2,
        endMoney: 10,
        mx_data: '',
        mx_data_start: '起始日期',
        mx_data_end: '结束日期',

        qb_name_default: '我的钱包',
        qb_money_default: '58.12',
        mx_name_default: '扫码支付',
        mx_spend_state_default: 'true',


        num3: 5,
        resultStatus: false,
        now_time: '',
        bj_time: '',
        bj_time_success: '',
        unix_time: '',
        unix_time_success: '',
        data: [{
          'result': '',
          'taskId': '',
        }],


        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },

      qbCommit() {
        let name = this.qb_name;
        let money = this.qb_money;
        if (name === '')
          name = this.qb_name_default;
        if (money === '')
          money = this.qb_money_default;

        console.log("QB: "+ name + "," + money)
      },

      mxCommit() {
        let startTime = '';
        let endTime = '';
        let startMoney = this.startMoney;
        let endMoney = this.endMoney;

        let name = this.mx_name;
        let spendState = this.mx_spend_state;
        let mx_data = this.mx_data;
        if (name === '')
          name = this.mx_name_default;
        if (spendState === '')
          spendState = this.mx_spend_state_default;


        if (mx_data !== '' && mx_data !== null){
          // let mxData = (mx_data + '').split(",");
          startTime = mx_data[0];
          endTime = mx_data[1];
        }

        console.log("MX: "+ name + ", "
          + spendState + ", "
          + startTime + ", "
          + endTime + ", "
          + startMoney + ", "
          + endMoney + "。"
        )
      },
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
    /*width: 300px;*/
  /*}*/
</style>
