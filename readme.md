## 笔记

### 1. nodemon

自动重启服务
```
npm i nodemon
```

### 2. dotenv

读取配置文件
```
npm i dotenv
```

### 3. koa-router

安装路由
```
npm i koa-router
```

### 4. 抽取 controller

将后面的回调函数抽取成单独的 controller 模块
```
router.get('/', (ctx, next) => {
    ctx.body = '这是首页'
})
```

2022年3月28日23:25:22

```
router.get('/', fn)
```


git branch -m prod master
git fetch origin
git branch -u origin/master master
git remote set-head origin -a

2022年3月28日23:38:38
