<template>
  <div style="margin-top: 60px;text-align: center;">


    <!--<h1>设置</h1>-->
    <h1>微信钱包设置</h1>

    <el-tabs type="border-card" style="margin: 50px" @tab-click="tabsClick" v-model="activeName">
      <el-tab-pane label="钱包" name="qb">

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
      <el-tab-pane label="明细记录" name="mxjl">

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
        mx_spend_state: 'true',
        startMoney: 2,
        endMoney: 10,
        mx_data: [],
        mx_data_start: '起始日期',
        mx_data_end: '结束日期',

        qb_name_default: '我的钱包',
        qb_money_default: '58.12',
        mx_name_default: '扫码支付',
        mx_spend_state_default: 'true',


        activeName: 'qb',


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

      tabsClick(tab, event) {
        let name = tab.name;
        console.log(name);

        if (name === 'qb') {
          let that = this;
          this.$fly.get('https://www.zkteam.cc/WXMoney/qb')
            .then(function (response) {
              let content = response.data;
              console.log(content);

              let obj = eval(content);
              if (0 === obj.code) {
                let result = obj.result;

                that.qb_name = result.name;
                that.qb_money = result.money;
              }


            }).catch(function (error) {
              console.log(error);
            });
        } else if (name === 'mxjl') {
          let that = this;
          this.$fly.get('https://www.zkteam.cc/WXMoney/lqmxPZ')
            .then(function (response) {
              let content = response.data;
              console.log(content);

              let obj = eval(content);
              if (0 === obj.code) {
                let result = obj.result;

                that.mx_name = result.name;
                that.mx_spend_state = '' + result.spendState;
                that.startMoney = result.startMoney;
                that.endMoney = result.endMoney;

                // that.startTime = result.startTime;
                // that.endTime = result.endTime;


                let timeData = [];
                timeData.push(that.getUnixTime2(result.startTime));
                timeData.push(that.getUnixTime2(result.endTime));

                that.mx_data = timeData;
              }
            }).catch(function (error) {
            console.log(error);
          });

        }
      },

      qbCommit() {
        let id = 1; // id 默认是 1
        let name = this.qb_name;
        let money = this.qb_money;
        if (name === '')
          name = this.qb_name_default;
        if (money === '')
          money = this.qb_money_default;

        console.log("QB: "+ name + "," + money);

        let that = this;

        //通过用户id获取信息,参数直接写在url中
        this.$fly.get('https://www.zkteam.cc/WXMoney/setQB', {
          id: id,
          name: name,
          money: money,
        }).then(function (response) {
          let content = response.data;
          console.log(content);

          let objs = eval(content);
          let code = objs.code;

          if (code === 0) {
            console.log("请求成功！");
            that.$notify({
              title: '成功',
              message: '设置钱包完成',
              type: 'success'
            });
          }

        }).catch(function (error) {
          console.log("请求失败：" + error);
          that.$notify.error({
            title: '错误',
            message: '设置钱包 失败'
          });
        });

      },

      mxCommit() {
        let id = 1; // id 默认是1
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

        if (spendState === 'true')
          spendState = 1;
        else {
          spendState = 0;
        }

        console.log("MX: "+ name + ", "
          + spendState + ", "
          + startTime + ", "
          + endTime + ", "
          + startMoney + ", "
          + endMoney + "。"
        );

        let that = this;
        this.$fly.get('https://www.zkteam.cc/WXMoney/setLQMXPZ', {
          id: id,
          name: name,
          startTime: startTime,
          endTime: endTime,
          startMoney: startMoney,
          endMoney: endMoney,
          spendState: spendState,
        }).then(function (response) {
          let content = response.data;
          console.log(content);

          let objs = eval(content);
          let code = objs.code;

          if (code === 0) {
            console.log("请求成功！");
            that.$notify({
              title: '成功',
              message: '设置零钱明细完成',
              type: 'success'
            });
          }

        }).catch(function (error) {
            console.log("请求失败：" + error);
            that.$notify.error({
              title: '错误',
              message: '设置零钱明细 失败'
            });
          });

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

      getUnixTime2(timeData) {
        timeData = timeData.replace(new RegExp(/-/gm), "/"); 　　//将所有的'-'转为'/'即可
          // 将指定日期转换为标准日期格式。Fri Dec 08 2017 20:05:30 GMT+0800 (中国标准时间)
        return new Date(timeData).getTime();
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
