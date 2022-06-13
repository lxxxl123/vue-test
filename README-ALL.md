# 基本
## 安装
### nvm  (node版本管理)
- 下载地址 : https://github.com/coreybutler/nvm-windows/releases
- nvm install v12.6.0
- (可选)nvm install v14.15.0
- nvm use v12.6.0


### npm安装
#### (可选) nrm 仓库管理工具
- npm install nrm -g
#### 必备
- npm install cnpm -g
- cnpm install -g vue-cli


### 启动
#### 搭建手脚架
- vue init ${project-name}

##### 可能问题 
Failed to download repo vuejs-templates/webpack: unable to verify the first certificate
- where vue
- vi node_modules\vue-cli\node_modules\download\index.js
- rejectUnauthorized: process.env.npm_config_strict_ssl !== 'false' >>> rejectUnauthorized: false

#### 启动
- cnpm install
- npm run serve
