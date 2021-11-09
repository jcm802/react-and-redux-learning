



flake8 --ignore=D203,W503,E203 src/flake8 tests/integration tests/unit setup.py
IF %ERRORLEVEL% NEQ 0 exit /B 1
exit /B 0
