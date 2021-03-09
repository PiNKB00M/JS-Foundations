#!/bin/bash

declare -a DIRS=("object-orientation" "classes" "closures" "async-exec-and-callbacks" "async-await" "promises")

for d in "${DIRS[@]}"
do
   echo "$d"
   cd "$d"
   npm run test:ci
   cd ..
done
