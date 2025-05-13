#!/bin/bash


rm -rf .next

yarn

yarn run build


cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/ 

# mkdir -p .next/standalone/src/messages
# cp -r src/messages/* .next/standalone/src/messages/ 