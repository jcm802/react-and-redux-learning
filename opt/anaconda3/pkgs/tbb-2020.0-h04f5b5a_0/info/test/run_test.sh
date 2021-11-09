

set -ex



python -c "import ctypes; assert 11100 == ctypes.cdll[r'libtbb${SHLIB_EXT}']['TBB_runtime_interface_version']()"
exit 0
