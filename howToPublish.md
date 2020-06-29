# 月报如何发布在github-page

> 此文档仅用于月刊编辑群中的成员

## 安装必要依赖
```bash
npm install gitbook-cli -g
npm install
```
## 本地测试
```bash
npm run server
```

## 生成pdf
```bash
npm run pdf
```

## 发布到线上
```bash
npm run publish
```
看到以下输出则为成功
```bash
Publish SUCCESS!
```

**已添加持续集成，无需手动发布**