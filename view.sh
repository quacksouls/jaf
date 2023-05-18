#!/usr/bin/env bash

# Run this script to view your changes locally.

npm run clean
npx honkit build
npx honkit serve
