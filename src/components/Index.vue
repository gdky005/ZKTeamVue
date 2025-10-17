<template>
  <div class="zkteam-container">
    <!-- 科技感头部 -->
    <header class="tech-header">
      <div class="header-content">
        <h1 class="logo">卓客<span class="tech-accent">Team</span></h1>
        <p class="tagline">探索技术边界 · 创造无限可能</p>
      </div>
      <div class="header-bg"></div>
    </header>

    <!-- 主要内容区域 -->
    <div class="main-layout">
      <!-- 侧边导航栏 -->
      <aside class="tech-sidebar">
        <div class="sidebar-card">
          <div class="user-info">
            <div class="avatar">
              <i class="el-icon-user-solid"></i>
            </div>
            <h3>开发者</h3>
            <p>专注技术研发与创新</p>
          </div>

          <nav class="sidebar-nav">
            <div class="nav-section">
              <h4 class="nav-title">个人空间</h4>
              <router-link to="/About" class="nav-item">
                <i class="el-icon-user"></i>
                <span>关于我</span>
              </router-link>
            </div>

            <div class="nav-section">
              <h4 class="nav-title">开发工具</h4>
              <router-link to="/AppDataPage" class="nav-item">
                <i class="el-icon-data-analysis"></i>
                <span>App 数据网址</span>
              </router-link>
              <a href="http://zkteam.cc:9001/" target="_blank" class="nav-item">
                <i class="el-icon-cpu"></i>
                <span>进程管理服务</span>
              </a>
              <a href="http://rap2.gdky005.com" target="_blank" class="nav-item">
                <i class="el-icon-connection"></i>
                <span>Rap2 接口服务</span>
              </a>
              <a href="http://gdky005.com:8001" target="_blank" class="nav-item">
                <i class="el-icon-service"></i>
                <span>rap2-delos 服务</span>
              </a>
              <a href="http://zkteam.cc:8081" target="_blank" class="nav-item">
                <i class="el-icon-link"></i>
                <span>NodeJS 代理服务</span>
              </a>
            </div>

            <div class="nav-section">
              <h4 class="nav-title">文档编辑</h4>
              <router-link to="/MarkDown" class="nav-item">
                <i class="el-icon-edit"></i>
                <span>Versions MarkDown</span>
              </router-link>
              <router-link to="/MarkDownForWQData" class="nav-item">
                <i class="el-icon-document"></i>
                <span>WQData MarkDown</span>
              </router-link>
            </div>

            <div class="nav-section">
              <h4 class="nav-title">微信相关</h4>
              <router-link to="/WXMoney" class="nav-item">
                <i class="el-icon-wallet"></i>
                <span>微信零钱设置</span>
              </router-link>
            </div>
          </nav>

          <div class="status-info">
            <div class="status-item">
              <div class="status-dot online"></div>
              <span>服务运行中</span>
            </div>
          </div>
        </div>
      </aside>

      <!-- 主内容区 -->
      <main class="tech-main">
        <div class="main-content">
          <router-view/>
        </div>
      </main>
    </div>

    <!-- 底部信息 -->
    <footer class="tech-footer">
      <div class="footer-content">
        <p>温馨提醒: 更多功能需要你来提哦，提出不一定做，但是不提一定不做。</p>
        <p class="copyright">© 2024 卓客Team · 探索技术的无限可能</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Home from "./Home";

export default {
  name: "Index",
  components: {Home},
  data() {
    return {
      resultStatus: false,
      cid: '',
      data: [{
        'result': '',
        'taskId': '',
      }]
    }
  },
  methods: {}
}
</script>

<style scoped>
.zkteam-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
  color: #ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* 头部样式 */
.tech-header {
  position: relative;
  padding: 60px 0 40px;
  text-align: center;
  background: linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(0, 102, 204, 0.05) 100%);
  overflow: hidden;
}

.header-content {
  position: relative;
  z-index: 2;
}

.logo {
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #ffffff 0%, #66b3ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tech-accent {
  color: #0066CC;
  -webkit-text-fill-color: #0066CC;
}

.tagline {
  font-size: 1.2rem;
  color: #8892b0;
  margin: 10px 0 0;
  font-weight: 300;
}

.header-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(0, 102, 204, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(0, 102, 204, 0.1) 0%, transparent 50%);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* 主布局 */
.main-layout {
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  gap: 30px;
}

/* 侧边栏样式 */
.tech-sidebar {
  flex: 0 0 300px;
}

.sidebar-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.user-info {
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.avatar {
  width: 80px;
  height: 80px;
  margin: 0 auto 15px;
  background: linear-gradient(135deg, #0066CC 0%, #0099ff 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
}

.user-info h3 {
  margin: 10px 0 5px;
  font-size: 1.3rem;
}

.user-info p {
  color: #8892b0;
  font-size: 0.9rem;
  margin: 0;
}

/* 导航样式 */
.nav-section {
  margin-bottom: 25px;
}

.nav-title {
  font-size: 0.9rem;
  color: #66b3ff;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 15px;
  font-weight: 600;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  color: #ccd6f6;
  text-decoration: none;
  border-radius: 10px;
  margin-bottom: 8px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.nav-item i {
  margin-right: 12px;
  font-size: 1.1rem;
  width: 20px;
  text-align: center;
}

.nav-item:hover {
  background: rgba(0, 102, 204, 0.2);
  border-color: rgba(0, 102, 204, 0.3);
  transform: translateX(5px);
  color: #ffffff;
}

.nav-item.router-link-active {
  background: rgba(0, 102, 204, 0.3);
  border-color: #0066CC;
  color: #ffffff;
}

/* 状态信息 */
.status-info {
  margin-top: 25px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.status-item {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #8892b0;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 10px;
}

.status-dot.online {
  background: #00ff88;
  box-shadow: 0 0 10px #00ff88;
}

/* 主内容区 */
.tech-main {
  flex: 1;
  min-height: 600px;
}

.main-content {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  min-height: 500px;
}

/* 底部样式 */
.tech-footer {
  margin-top: 50px;
  padding: 30px 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content p {
  margin: 5px 0;
  color: #8892b0;
}

.copyright {
  font-size: 0.9rem;
  margin-top: 15px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-layout {
    flex-direction: column;
    padding: 0 15px;
  }
  
  .tech-sidebar {
    flex: none;
  }
  
  .logo {
    font-size: 2.5rem;
  }
  
  .header-content {
    padding: 0 20px;
  }
}
</style>