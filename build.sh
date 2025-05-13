#!/bin/bash

# 清理旧的构建文件
rm -rf .next

# 构建项目
npm run build

echo "生成的standalone包位于 .next/standalone 目录"
echo "您可以通过以下方式启动应用:"
echo "node .next/standalone/server.js"

# 可选：如果需要，复制public目录和静态文件到standalone目录
# cp -r public .next/standalone/
# cp -r .next/static .next/standalone/.next/ 