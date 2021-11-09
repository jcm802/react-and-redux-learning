

set -ex



f2py -h
python -c "import numpy; numpy.show_config()"
export LDFLAGS="$LDFLAGS -undefined dynamic_lookup"
export CFLAGS="$CFLAGS -fno-lto"
pytest -v --pyargs numpy
exit 0
