<template>
  <div class="zkteam-container">
    <!-- 明亮科技感头部 -->
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
              <a href="http://47.97.110.198:9001" target="_blank" class="nav-item">
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
  background: linear-gradient(135deg, #f5f7fa 0%, #e4edf5 50%, #d4e3f7 100%);
  color: #2c3e50;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* 头部样式 */
.tech-header {
  position: relative;
  padding: 80px 0 50px;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;
  color: white;
}

.header-content {
  position: relative;
  z-index: 2;
}

.logo {
  font-size: 4rem;
  font-weight: 800;
  margin: 0;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  letter-spacing: -1px;
}

.tech-accent {
  color: #FFD700;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
}

.tagline {
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 15px 0 0;
  font-weight: 300;
  letter-spacing: 1px;
}

.header-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  animation: float 8s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-20px) scale(1.02); }
}

/* 主布局 */
.main-layout {
  display: flex;
  max-width: 1400px;
  margin: -40px auto 0;
  padding: 0 20px;
  gap: 30px;
  position: relative;
  z-index: 10;
}

/* 侧边栏样式 */
.tech-sidebar {
  flex: 0 0 320px;
}

.sidebar-card {
  background: linear-gradient(145deg, #ffffff 0%, #f8fbff 100%);
  border-radius: 25px;
  padding: 30px;
  box-shadow: 
    0 20px 40px rgba(102, 126, 234, 0.15),
    0 8px 25px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  transform: translateY(0);
  transition: all 0.3s ease;
}

.sidebar-card:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 25px 50px rgba(102, 126, 234, 0.2),
    0 12px 30px rgba(0, 0, 0, 0.08);
}

.user-info {
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 25px;
  border-bottom: 2px solid rgba(102, 126, 234, 0.1);
}

.avatar {
  width: 90px;
  height: 90px;
  margin: 0 auto 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
}

.avatar:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.6);
}

.user-info h3 {
  margin: 15px 0 8px;
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: 600;
}

.user-info p {
  color: #667eea;
  font-size: 1rem;
  margin: 0;
  font-weight: 500;
}

/* 导航样式 */
.nav-section {
  margin-bottom: 30px;
}

.nav-title {
  font-size: 0.95rem;
  color: #667eea;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 18px;
  font-weight: 700;
  padding-left: 5px;
  border-left: 3px solid #667eea;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 14px 18px;
  color: #5a67d8;
  text-decoration: none;
  border-radius: 15px;
  margin-bottom: 10px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  background: rgba(102, 126, 234, 0.05);
  font-weight: 500;
}

.nav-item i {
  margin-right: 15px;
  font-size: 1.3rem;
  width: 24px;
  text-align: center;
  color: #667eea;
}

.nav-item:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: translateX(8px) scale(1.02);
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

.nav-item:hover i {
  color: white;
}

.nav-item.router-link-active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 6px 18px rgba(102, 126, 234, 0.4);
}

.nav-item.router-link-active i {
  color: white;
}

/* 状态信息 */
.status-info {
  margin-top: 30px;
  padding-top: 25px;
  border-top: 2px solid rgba(102, 126, 234, 0.1);
}

.status-item {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #48bb78;
  font-weight: 500;
  padding: 12px;
  background: rgba(72, 187, 120, 0.1);
  border-radius: 12px;
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 12px;
  animation: pulse 2s infinite;
}

.status-dot.online {
  background: #48bb78;
  box-shadow: 0 0 15px #48bb78;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.2); }
}

/* 主内容区 */
.tech-main {
  flex: 1;
  min-height: 600px;
}

.main-content {
  background: linear-gradient(145deg, #ffffff 0%, #f8fbff 100%);
  border-radius: 25px;
  padding: 40px;
  box-shadow: 
    0 20px 40px rgba(102, 126, 234, 0.15),
    0 8px 25px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  min-height: 600px;
}

/* 底部样式 */
.tech-footer {
  margin-top: 80px;
  padding: 40px 0;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  position: relative;
}

.tech-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, #FFD700, transparent);
}

.footer-content p {
  margin: 8px 0;
  color: rgba(255, 255, 255, 0.9);
}

.copyright {
  font-size: 0.95rem;
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.8);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-layout {
    flex-direction: column;
    padding: 0 15px;
    margin-top: -20px;
  }
  
  .tech-sidebar {
    flex: none;
  }
  
  .logo {
    font-size: 2.8rem;
  }
  
  .header-content {
    padding: 0 20px;
  }
  
  .tech-header {
    padding: 60px 0 40px;
  }
}

/* 添加一些装饰性元素 */
.sidebar-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(135deg, #667eea, #764ba2, #667eea);
  border-radius: 27px;
  z-index: -1;
  opacity: 0.1;
}

.main-content::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(135deg, #667eea, #764ba2, #667eea);
  border-radius: 27px;
  z-index: -1;
  opacity: 0.1;
}
</style>