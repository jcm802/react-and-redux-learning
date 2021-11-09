#!/bin/bash

mkdir -p build && cd build

cmake -D CMAKE_INSTALL_PREFIX=${PREFIX} \
      -D CMAKE_LIBRARY_PATH:FILEPATH="${PREFIX}/lib" \
      -D CMAKE_INCLUDE_PATH:FILEPATH="${PREFIX}/include" \
      ${SRC_DIR}

make -j${CPU_COUNT} ${VERBOSE_CM}
make install -j${CPU_COUNT}
ctest -VV --output-on-failure
