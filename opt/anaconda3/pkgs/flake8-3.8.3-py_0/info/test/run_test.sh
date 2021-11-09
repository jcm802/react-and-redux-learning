

set -ex



flake8 --ignore=D203,W503,E203 src/flake8 tests/integration tests/unit setup.py
exit 0
