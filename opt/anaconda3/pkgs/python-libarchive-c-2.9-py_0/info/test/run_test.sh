

set -ex



python -c "import libarchive; libarchive.extract_file('test/hello_world.xar')"
python -c "import os, shutil, libarchive; shutil.copytree(os.path.dirname(libarchive.__file__), 'libarchive')"
pytest --cov libarchive -vv
exit 0
