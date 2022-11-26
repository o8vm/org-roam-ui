#!/bin/bash

if [ -z "$1" ]
  then
    echo "Please supply path to the directory of exported org-roam-content"
fi

# Build the Docker container
docker build . -t orui-dev

# Apply necessary patches for standalone operation
patch ../pages/index.tsx < index.tsx.patch
patch ../util/uniorg.tsx < uniorg.tsx.patch

# Copy previously exported content
cp $1/graphdata.json ../
cp -r $1/notes ../public/

# Run the Docker container
#
# Init packages
docker run -it -v $(pwd)/..:/usr/src/app orui-dev yarn
# Build static webserver
docker run -it -v $(pwd)/..:/usr/src/app orui-dev yarn build
# Export static webserver
docker run -it -v $(pwd)/..:/usr/src/app orui-dev yarn export -o standalone/out/

# Revert patches
patch -R ../pages/index.tsx < index.tsx.patch
patch -R ../util/uniorg.tsx < uniorg.tsx.patch

# Cleanup temporary data
rm  ../graphdata.json
rm -r ../public/notes
