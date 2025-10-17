<template>
  <div class="home-container">
    <!-- 欢迎区域 -->
    <div class="welcome-section">
      <h1 class="welcome-title">开发者工具集</h1>
      <p class="welcome-subtitle">高效开发，从这里开始</p>
    </div>

    <!-- 主要功能区 -->
    <div class="tools-grid">
      <!-- 时间戳工具卡片 -->
      <div class="tool-card timestamp-card">
        <div class="card-header">
          <i class="el-icon-time card-icon"></i>
          <h3>时间戳转换</h3>
        </div>
        <div class="card-content">
          <div class="timestamp-section">
            <div class="input-group">
              <label>获取当前时间戳</label>
              <div class="input-with-button">
                <el-input 
                  v-model="now_time" 
                  placeholder="点击右侧按钮生成"
                  readonly
                  class="timestamp-input"
                ></el-input>
                <el-button 
                  @click="getNowTime" 
                  type="primary" 
                  class="action-button"
                >
                  <i class="el-icon-refresh"></i>
                  生成
                </el-button>
              </div>
            </div>

            <div class="input-group">
              <label>时间戳转北京时间</label>
              <div class="input-with-button">
                <el-input 
                  v-model="bj_time" 
                  placeholder="输入时间戳"
                  class="timestamp-input"
                ></el-input>
                <el-button 
                  @click="getBJTime" 
                  type="success" 
                  class="action-button"
                >
                  <i class="el-icon-right"></i>
                  转换
                </el-button>
              </div>
              <el-input 
                v-model="bj_time_success" 
                placeholder="转换结果"
                readonly
                class="result-input"
              ></el-input>
            </div>

            <div class="input-group">
              <label>北京时间转时间戳</label>
              <div class="input-with-button">
                <el-input 
                  v-model="unix_time" 
                  placeholder="格式：2024-01-01 12:00:00"
                  class="timestamp-input"
                ></el-input>
                <el-button 
                  @click="getUnixTime" 
                  type="warning" 
                  class="action-button"
                >
                  <i class="el-icon-right"></i>
                  转换
                </el-button>
              </div>
              <el-input 
                v-model="unix_time_success" 
                placeholder="转换结果"
                readonly
                class="result-input"
              ></el-input>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧双卡片 -->
      <div class="right-column">
        <!-- 资源链接卡片 -->
        <div class="tool-card resources-card">
          <div class="card-header">
            <i class="el-icon-collection card-icon"></i>
            <h3>开发资源</h3>
          </div>
          <div class="card-content">
            <div class="resources-grid">
              <a href="https://github.com/jlevy/the-art-of-command-line/blob/master/README-zh.md" 
                 target="_blank" class="resource-item">
                <div class="resource-icon">
                  <i class="el-icon-monitor"></i>
                </div>
                <div class="resource-info">
                  <h4>命令行的艺术</h4>
                  <p>掌握命令行，提升开发效率</p>
                </div>
                <i class="el-icon-arrow-right resource-arrow"></i>
              </a>

              <a href="https://github.com/Blankj/AndroidUtilCode/blob/master/lib/utilcode/README-CN.md" 
                 target="_blank" class="resource-item">
                <div class="resource-icon android">
                  <i class="el-icon-mobile-phone"></i>
                </div>
                <div class="resource-info">
                  <h4>Android 工具类</h4>
                  <p>常用工具类查询与使用</p>
                </div>
                <i class="el-icon-arrow-right resource-arrow"></i>
              </a>

              <a href="https://tool.lu" 
                 target="_blank" class="resource-item">
                <div class="resource-icon tool">
                  <i class="el-icon-set-up"></i>
                </div>
                <div class="resource-info">
                  <h4>在线工具平台</h4>
                  <p>各种开发辅助工具</p>
                </div>
                <i class="el-icon-arrow-right resource-arrow"></i>
              </a>

              <a href="http://ju.outofmemory.cn/entry/343873" 
                 target="_blank" class="resource-item">
                <div class="resource-icon gradle">
                  <i class="el-icon-files"></i>
                </div>
                <div class="resource-info">
                  <h4>Gradle 依赖排除</h4>
                  <p>解决依赖冲突问题</p>
                </div>
                <i class="el-icon-arrow-right resource-arrow"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- 快速操作卡片 -->
        <div class="tool-card quick-actions-card">
          <div class="card-header">
            <i class="el-icon-lightning card-icon"></i>
            <h3>快速操作</h3>
          </div>
          <div class="card-content">
            <div class="quick-actions">
              <router-link to="/GTQueryMsg" class="quick-action-item">
                <div class="action-icon push">
                  <i class="el-icon-promotion"></i>
                </div>
                <span>个推消息查询</span>
              </router-link>

              <router-link to="/GTPush" class="quick-action-item">
                <div class="action-icon cid">
                  <i class="el-icon-search"></i>
                </div>
                <span>CID 状态查询</span>
              </router-link>

              <router-link to="/MarkDown" class="quick-action-item">
                <div class="action-icon markdown">
                  <i class="el-icon-edit"></i>
                </div>
                <span>MarkDown 编辑</span>
              </router-link>

              <router-link to="/WXMoney" class="quick-action-item">
                <div class="action-icon wechat">
                  <i class="el-icon-wallet"></i>
                </div>
                <span>微信钱包设置</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 统计信息 -->
    <div class="stats-section">
      <div class="stat-item">
        <div class="stat-number">{{ resourceCount }}+</div>
        <div class="stat-label">开发资源</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">{{ toolCount }}+</div>
        <div class="stat-label">实用工具</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">24/7</div>
        <div class="stat-label">服务可用</div>
      </div>
    </div>
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
      resourceCount: 50,
      toolCount: 15,
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
      
      this.$message({
        message: '当前时间戳已生成',
        type: 'success'
      });
    },
    getBJTime() {
      if (!this.bj_time) {
        this.$message.error('请输入时间戳');
        return;
      }

      let time = new Date(Number(this.bj_time));
      console.log(time);

      let date = new Date(time);
      let Y = date.getFullYear() + '-';
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      let D = this.change(date.getDate()) + ' ';
      let h = this.change(date.getHours()) + ':';
      let m = this.change(date.getMinutes()) + ':';
      let s = this.change(date.getSeconds());
      this.bj_time_success = Y + M + D + h + m + s;

      this.$message({
        message: '时间戳转换成功',
        type: 'success'
      });
    },
    getUnixTime() {
      if (!this.unix_time) {
        this.$message.error('请输入北京时间');
        return;
      }

      let time = this.unix_time;
      time = time.replace(new RegExp(/-/gm), "/");
      let t = new Date(time).getTime();
      console.log(t);
      this.unix_time_success = t;

      this.$message({
        message: '时间转换成功',
        type: 'success'
      });
    },

    timestampToTime(time) {
      let date = new Date(this.bj_time);
      let Y = date.getFullYear() + '-';
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      let D = this.change(date.getDate()) + ' ';
      let h = this.change(date.getHours()) + ':';
      let m = this.change(date.getMinutes()) + ':';
      let s = this.change(date.getSeconds());
      return Y + M + D + h + m + s;
    },
    change(t) {
      if (t < 10) {
        return "0" + t;
      } else {
        return t;
      }
    },
  }
}
</script>

<style scoped>
.home-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0; /* 移除内边距 */
}

/* 欢迎区域 */
.welcome-section {
  text-align: center;
  margin-bottom: 40px; /* 减少底部间距 */
  padding: 0px 0px; /* 只在上下有内边距 */
}

.welcome-title {
  font-size: 2.8rem; /* 稍微减小字体 */
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px; /* 减少间距 */
}

.welcome-subtitle {
  font-size: 1.2rem;
  color: #6c757d;
  font-weight: 300;
}

/* 工具网格布局 - 改为左右布局 */
.tools-grid {
  display: flex;
  gap: 25px; /* 减少间距 */
  margin-bottom: 40px; /* 减少底部间距 */
  padding: 0 20px; /* 只在左右有内边距 */
}

.timestamp-card {
  flex: 1;
  min-height: 500px; /* 设置最小高度避免空白 */
}

.right-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 25px; /* 减少间距 */
}

/* 卡片通用样式 */
.tool-card {
  background: linear-gradient(145deg, #ffffff 0%, #f8fbff 100%);
  border-radius: 16px; /* 稍微减小圆角 */
  padding: 25px; /* 减少内边距 */
  box-shadow: 
    0 8px 25px rgba(102, 126, 234, 0.1),
    0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  height: fit-content; /* 高度自适应内容 */
}

.tool-card:hover {
  transform: translateY(-3px); /* 减小悬停移动距离 */
  box-shadow: 
    0 15px 30px rgba(102, 126, 234, 0.15),
    0 6px 20px rgba(0, 0, 0, 0.08);
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px; /* 减少底部间距 */
  padding-bottom: 12px; /* 减少内边距 */
  border-bottom: 2px solid rgba(102, 126, 234, 0.1);
}

.card-icon {
  font-size: 1.8rem; /* 稍微减小图标 */
  color: #667eea;
  margin-right: 12px;
  background: rgba(102, 126, 234, 0.1);
  padding: 10px; /* 减少内边距 */
  border-radius: 10px;
}

.card-header h3 {
  font-size: 1.4rem; /* 稍微减小字体 */
  color: #2c3e50;
  margin: 0;
  font-weight: 600;
}

/* 时间戳工具样式 */
.timestamp-section {
  display: flex;
  flex-direction: column;
  gap: 20px; /* 减少间距 */
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px; /* 减少间距 */
}

.input-group label {
  font-weight: 600;
  color: #5a67d8;
  font-size: 0.9rem; /* 稍微减小字体 */
}

.input-with-button {
  display: flex;
  gap: 10px;
  align-items: center;
}

.timestamp-input {
  flex: 1;
}

.result-input {
  flex: 1;
  background: rgba(102, 126, 234, 0.05);
  margin-top: 5px; /* 添加顶部间距 */
}

.action-button {
  white-space: nowrap;
  padding: 10px 16px; /* 减少内边距 */
  font-size: 0.9rem; /* 稍微减小字体 */
}

/* 资源链接样式 */
.resources-grid {
  display: flex;
  flex-direction: column;
  gap: 12px; /* 减少间距 */
}

.resource-item {
  display: flex;
  align-items: center;
  padding: 15px 18px; /* 减少内边距 */
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(102, 126, 234, 0.1);
  border-radius: 12px; /* 减小圆角 */
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.resource-item:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: translateX(3px); /* 减小移动距离 */
  border-color: transparent;
  box-shadow: 0 6px 15px rgba(102, 126, 234, 0.3);
}

.resource-icon {
  width: 45px; /* 减小尺寸 */
  height: 45px;
  border-radius: 10px; /* 减小圆角 */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  font-size: 1.3rem; /* 减小图标 */
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
}

.resource-icon.android {
  background: rgba(76, 175, 80, 0.1);
  color: #4caf50;
}

.resource-icon.tool {
  background: rgba(255, 152, 0, 0.1);
  color: #ff9800;
}

.resource-icon.gradle {
  background: rgba(156, 39, 176, 0.1);
  color: #9c27b0;
}

.resource-info {
  flex: 1;
}

.resource-info h4 {
  margin: 0 0 4px 0; /* 减少间距 */
  font-weight: 600;
  font-size: 0.95rem; /* 稍微减小字体 */
}

.resource-info p {
  margin: 0;
  font-size: 0.85rem; /* 稍微减小字体 */
  color: #6c757d;
}

.resource-item:hover .resource-info p {
  color: rgba(255, 255, 255, 0.8);
}

.resource-arrow {
  opacity: 0.5;
  transition: all 0.3s ease;
}

.resource-item:hover .resource-arrow {
  opacity: 1;
  transform: translateX(2px); /* 减小移动距离 */
}

/* 快速操作样式 */
.quick-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px; /* 减少间距 */
}

.quick-action-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 12px; /* 减少内边距 */
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(102, 126, 234, 0.1);
  border-radius: 12px; /* 减小圆角 */
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  text-align: center;
}

.quick-action-item:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: scale(1.03); /* 减小缩放 */
  border-color: transparent;
  box-shadow: 0 6px 15px rgba(102, 126, 234, 0.3);
}

.action-icon {
  width: 50px; /* 减小尺寸 */
  height: 50px;
  border-radius: 12px; /* 减小圆角 */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px; /* 减少间距 */
  font-size: 1.5rem; /* 减小图标 */
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
}

.action-icon.push {
  background: rgba(233, 30, 99, 0.1);
  color: #e91e63;
}

.action-icon.cid {
  background: rgba(33, 150, 243, 0.1);
  color: #2196f3;
}

.action-icon.markdown {
  background: rgba(76, 175, 80, 0.1);
  color: #4caf50;
}

.action-icon.wechat {
  background: rgba(139, 195, 74, 0.1);
  color: #8bc34a;
}

.quick-action-item span {
  font-weight: 600;
  font-size: 0.9rem; /* 稍微减小字体 */
}

/* 统计信息样式 */
.stats-section {
  display: flex;
  justify-content: space-around;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px; /* 减小圆角 */
  padding: 30px 20px; /* 减少内边距 */
  color: white;
  text-align: center;
  margin: 0 20px; /* 只在左右有外边距 */
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 2.2rem; /* 减小字体 */
  font-weight: 800;
  margin-bottom: 6px; /* 减少间距 */
}

.stat-label {
  font-size: 0.9rem; /* 稍微减小字体 */
  opacity: 0.9;
  font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .tools-grid {
    flex-direction: column;
  }
  
  .timestamp-card {
    min-height: auto; /* 移除最小高度 */
  }
}

@media (max-width: 768px) {
  .welcome-title {
    font-size: 2.2rem;
  }
  
  .tools-grid {
    padding: 0 15px; /* 移动端减少内边距 */
  }
  
  .input-with-button {
    flex-direction: column;
  }
  
  .quick-actions {
    grid-template-columns: 1fr;
  }
  
  .stats-section {
    flex-direction: column;
    gap: 25px; /* 减少间距 */
    margin: 0 15px; /* 移动端减少外边距 */
  }
  
  .tool-card {
    padding: 20px; /* 移动端减少内边距 */
  }
}
</style>