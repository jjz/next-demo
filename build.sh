#!/bin/bash


rm -rf .next

yarn

yarn run build


cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/ 