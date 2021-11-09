



conda-verify --version
IF %ERRORLEVEL% NEQ 0 exit /B 1
conda-verify --help
IF %ERRORLEVEL% NEQ 0 exit /B 1
exit /B 0
