#!/bin/sh
docker buildx build -o - --platform linux/arm64 -t fincalc-content-fragment-thumb:latest-m1 . > fincalc-content-fragment-thumb-m1.tar
docker buildx build -o - --platform linux/amd64 -t fincalc-content-fragment-thumb:latest-amd64 . > fincalc-content-fragment-thumb-amd64.tar
