#!/bin/sh

. "$(dirname "$0")/_/husky.sh"

echo "###"
cd ./frontend/ || exit
npm run lint && npm run test