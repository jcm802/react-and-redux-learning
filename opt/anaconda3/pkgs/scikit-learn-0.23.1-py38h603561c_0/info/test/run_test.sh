

set -ex



export OPENBLAS_NUM_THREADS=1
export OMP_NUM_THREADS=1
pytest --timeout 300 -n 1 --verbose --pyargs sklearn -k "not (_not_a_real_test or network)"
exit 0
