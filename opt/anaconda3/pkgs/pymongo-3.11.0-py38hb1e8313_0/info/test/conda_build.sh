if [ -z ${CONDA_BUILD+x} ]; then
    source /opt/concourse/worker/volumes/live/0749982a-3d20-435b-7148-e5148c51e5de/volume/pymongo_1597245453640/work/build_env_setup.sh
fi
python setup.py install --single-version-externally-managed --record=record.txt