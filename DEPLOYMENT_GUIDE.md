# 网页展示工具部署指南

本指南将帮助您将网页展示工具部署到Vercel平台，让全世界的用户都能访问您的文件展示工具。

## 📋 部署前准备

### 1. 确保您拥有以下账户
- [GitHub](https://github.com) 账户
- [Vercel](https://vercel.com) 账户（可以使用GitHub账户登录）

### 2. 安装必要工具
- Git（用于版本控制）
- Node.js（可选，用于本地测试）

## 🚀 部署步骤

### 方法一：GitHub + Vercel 自动部署（推荐）

#### 步骤1：创建GitHub仓库
1. 登录GitHub，点击右上角的 "+" 按钮
2. 选择 "New repository"
3. 填写仓库信息：
   - Repository name: `web-file-viewer`（或您喜欢的名称）
   - Description: `一个用于展示和预览各种文件类型的网页工具`
   - 选择 "Public"（公开仓库）
   - 不要勾选 "Add a README file"（我们已经有了）
4. 点击 "Create repository"

#### 步骤2：上传代码到GitHub
1. 在终端中进入项目目录：
   ```bash
   cd /path/to/网页展示工具
   ```

2. 初始化Git仓库：
   ```bash
   git init
   git add .
   git commit -m "Initial commit: 网页展示工具"
   ```

3. 连接到GitHub仓库（替换为您的用户名和仓库名）：
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/web-file-viewer.git
   git branch -M main
   git push -u origin main
   ```

#### 步骤3：在Vercel部署
1. 访问 [Vercel](https://vercel.com) 并使用GitHub账户登录
2. 点击 "New Project"
3. 从GitHub仓库列表中选择您刚创建的仓库
4. 点击 "Import"
5. 配置项目设置：
   - Project Name: 保持默认或自定义
   - Framework Preset: 选择 "Other"
   - Root Directory: 保持默认（./）
   - Build and Output Settings: 保持默认
6. 点击 "Deploy"

#### 步骤4：等待部署完成
- Vercel会自动构建和部署您的项目
- 部署完成后，您会获得一个类似 `https://your-project.vercel.app` 的URL
- 每次您向GitHub推送新代码时，Vercel会自动重新部署

### 方法二：Vercel CLI 部署

#### 步骤1：安装Vercel CLI
```bash
npm i -g vercel
```

#### 步骤2：登录Vercel
```bash
vercel login
```

#### 步骤3：部署项目
1. 在项目目录中运行：
   ```bash
   vercel
   ```
2. 按照提示配置项目
3. 部署完成后获得访问URL

## 🔧 部署后配置

### 自定义域名（可选）
1. 在Vercel项目面板中，点击 "Settings"
2. 选择 "Domains"
3. 添加您的自定义域名
4. 按照提示配置DNS记录

### 环境变量（如需要）
1. 在Vercel项目面板中，点击 "Settings"
2. 选择 "Environment Variables"
3. 添加必要的环境变量

## 📁 文件结构说明

部署时需要确保以下文件都在项目根目录：

```
网页展示工具/
├── index.html          # 主页面
├── script.js           # 主要JavaScript逻辑
├── styles.css          # 样式文件
├── pdf.min.js          # PDF.js库
├── pdf.worker.min.js   # PDF.js工作线程
├── package.json        # 项目配置
├── vercel.json         # Vercel部署配置
├── README.md           # 项目说明
├── .gitignore          # Git忽略文件
└── DEPLOYMENT_GUIDE.md # 本部署指南
```

## ⚠️ 重要注意事项

### 文件路径问题
- 确保所有文件路径使用相对路径（../）
- 部署后的文件访问路径可能与本地不同
- 建议将所有资源文件也上传到同一个仓库或使用CDN

### 文件大小限制
- Vercel对单个文件有大小限制（通常为100MB）
- 大文件建议使用外部存储服务（如AWS S3、阿里云OSS等）

### CORS问题
- 跨域文件访问可能受到限制
- 已在vercel.json中配置了基本的CORS头

## 🔍 故障排除

### 常见问题

1. **部署失败**
   - 检查package.json格式是否正确
   - 确保所有必要文件都已上传

2. **文件无法加载**
   - 检查文件路径是否正确
   - 确认文件是否已上传到仓库

3. **PDF无法显示**
   - 确认pdf.min.js和pdf.worker.min.js文件存在
   - 检查浏览器控制台是否有错误信息

### 获取帮助
- 查看Vercel部署日志
- 检查浏览器开发者工具的控制台
- 参考Vercel官方文档

## 📞 技术支持

如果在部署过程中遇到问题，可以：
1. 查看Vercel官方文档：https://vercel.com/docs
2. 访问Vercel社区：https://github.com/vercel/vercel/discussions
3. 检查项目的GitHub Issues页面

---

祝您部署成功！🎉