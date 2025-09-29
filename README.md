# Interview Coder Web Showcase

基于 Vite + React + TypeScript 的前端展示，整合 three.js 着色器背景、GSAP 动画与 Tailwind CSS v4，用于演示 Interview Coder 桌面助手的界面与功能。

## 本地开发

```bash
npm install
npm run dev
```

访问 `http://localhost:5173` 预览开发版本。

## 生产构建

```bash
npm run build
npm run preview
```

`npm run preview` 会以本地静态服务器的形式验证打包结果。

## Docker 镜像

项目提供多阶段构建的 Dockerfile。第一阶段使用 Node 构建静态资源，第二阶段由 Nginx 托管产物。

构建镜像：

```bash
docker build -t interview-coder-web .
```

运行容器：

```bash
docker run --rm -p 8080:80 interview-coder-web
```

随后访问 `http://localhost:8080` 即可查看页面。

## 关键依赖

- React 19 + TypeScript
- Vite 7 构建工具
- Tailwind CSS 4 & tw-animate-css
- three.js / @react-three/fiber / @react-three/drei
- GSAP + split-type（文本动画）

## 目录结构

```
src/
├─ components/
│  ├─ demo/           # DemoShowcase 与首页 Hero 组合
│  ├─ download/       # 下载 CTA
│  ├─ hero/           # Hero 主体与动画
│  └─ shader/         # three.js 着色器背景
├─ lib/               # gsap 封装
├─ pages/             # Features 功能介绍页
├─ App.tsx            # 路由与页面入口
└─ main.tsx           # React + Router 初始化
```

## 许可证

本仓库遵循与 Interview Coder 项目相同的开源协议，使用前请先阅读主仓库的 LICENSE。
# interview-coder-web
