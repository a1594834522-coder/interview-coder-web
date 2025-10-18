场景 1: 小改动(修改了几个文件)

  # 使用缓存加速构建
  docker-compose up -d --build web

  场景 2: 依赖项变更(修改了 package.json)

  # 清理旧镜像并完全重新构建
  docker-compose down --rmi local
  docker-compose build --no-cache web
  docker-compose up -d web

  场景 3: 配置文件变更(Dockerfile、tailwind.config 等)

  # 无缓存重建
  docker-compose build --no-cache web
  docker-compose up -d web

  场景 4: 零停机更新(生产环境)

  # 先构建新镜像
  docker-compose build web

  # 快速重启(停机时间最短)
  docker-compose up -d web

  🧹 清理旧资源

  如果构建出现问题,可以清理 Docker 缓存:

  # 清理所有相关容器和镜像
  docker-compose down --rmi all --volumes

  # 清理 Docker 系统缓存(谨慎使用,会影响其他项目)
  docker system prune -a

  # 重新开始
  docker-compose build web
  docker-compose up -d web

  📊 监控构建过程

  # 查看构建日志
  docker-compose build web --progress=plain

  # 实时查看容器日志
  docker-compose logs -f web

  # 检查容器状态
  docker-compose ps

  ⚡ 常见问题

  Q: 为什么我的代码更新没有生效?
  # A: 确保重新构建了镜像
  docker-compose build --no-cache web
  docker-compose up -d web

  Q: 构建很慢怎么办?
  # A: 检查 .dockerignore 是否配置正确
  # 确保排除了 node_modules、dist、.git 等大文件夹

  Q: 如何验证使用的是新镜像?
  # A: 查看镜像构建时间
  docker images | findstr interview-coder-web

  # 进入容器检查文件
  docker exec -it interview-coder-web sh

  你最常用的命令可能就是:

  # 日常开发后重新部署
  docker-compose up -d --build web

  这个命令会自动处理停止旧容器、构建新镜像、启动新容器的整个流程!