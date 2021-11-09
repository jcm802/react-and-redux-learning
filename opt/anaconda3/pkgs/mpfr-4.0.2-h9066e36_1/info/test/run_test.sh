${CC} -L$PREFIX/lib -I$PREFIX/include -lmpfr -lgmp -Wl,-rpath,$PREFIX/lib $RECIPE_DIR/test.c -o test.o
./test.o


set -ex



test -f ${PREFIX}/lib/libmpfr.a
test -f ${PREFIX}/lib/libmpfr${SHLIB_EXT}
exit 0
