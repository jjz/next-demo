#!/bin/bash


rm -rf .next


npm run build


cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/ 