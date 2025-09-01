# 超链接学习者网页展示工具

一个功能强大的Web文件查看器，支持多种文件类型的在线预览和展示。

## 功能特性

- 📁 **文件浏览**: 展示目录结构，支持文件夹和文件的层级浏览
- 📄 **PDF预览**: 使用PDF.js实现PDF文件的在线预览
- 🖼️ **图片查看**: 支持PNG、JPG、GIF等常见图片格式
- 📹 **视频播放**: 支持MP4等视频格式的在线播放
- 📝 **文档下载**: 支持Word文档等文件的下载
- 🎨 **现代UI**: 简洁美观的用户界面设计
- 📱 **响应式**: 支持桌面和移动设备

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- PDF.js (PDF预览)
- 原生Web API

## 项目结构

```
网页展示工具/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # 主要JavaScript逻辑
├── pdf.min.js          # PDF.js库
├── pdf.worker.min.js   # PDF.js工作线程
├── package.json        # 项目配置
├── vercel.json         # Vercel部署配置
└── README.md           # 项目说明
```

## 本地开发

1. 克隆项目到本地
2. 在项目根目录启动HTTP服务器：
   ```bash
   python3 -m http.server 8000
   ```
3. 打开浏览器访问 `http://localhost:8000`

## 部署到Vercel

### 方法一：通过GitHub自动部署

1. **创建GitHub仓库**
   - 登录GitHub，创建新仓库
   - 将项目代码推送到GitHub

2. **连接Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用GitHub账号登录
   - 点击"New Project"
   - 选择你的GitHub仓库
   - 点击"Deploy"

3. **配置完成**
   - Vercel会自动检测到`vercel.json`配置
   - 部署完成后会提供访问链接

### 方法二：使用Vercel CLI

1. 安装Vercel CLI：
   ```bash
   npm i -g vercel
   ```

2. 在项目目录运行：
   ```bash
   vercel
   ```

3. 按照提示完成部署

## 使用说明

1. **浏览文件**: 点击文件夹可以展开查看内容
2. **预览PDF**: 点击PDF文件会在弹窗中预览
3. **查看图片**: 点击图片文件会在弹窗中显示
4. **播放视频**: 点击视频文件会在弹窗中播放
5. **下载文件**: 点击其他类型文件会触发下载

## 自定义配置

### 添加新的文件类型支持

在`script.js`中的`fileData`对象中添加新的文件和文件夹：

```javascript
const fileData = {
    // 添加新文件
    "新文件.pdf": { type: "file", path: "/新文件.pdf" },
    // 添加新文件夹
    "新文件夹/": { 
        type: "folder", 
        children: {
            "子文件.txt": { type: "file", path: "/新文件夹/子文件.txt" }
        }
    }
};
```

### 修改样式

编辑`styles.css`文件来自定义界面样式。

## 许可证

MIT License

## 贡献

欢迎提交Issue和Pull Request来改进这个项目！

## 联系方式

如有问题或建议，请通过GitHub Issues联系。