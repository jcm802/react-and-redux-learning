



jupyter lab --version
IF %ERRORLEVEL% NEQ 0 exit /B 1
jlpm --version
IF %ERRORLEVEL% NEQ 0 exit /B 1
jlpm versions
IF %ERRORLEVEL% NEQ 0 exit /B 1
jupyter labextension list
IF %ERRORLEVEL% NEQ 0 exit /B 1
jupyter lab path
IF %ERRORLEVEL% NEQ 0 exit /B 1
jupyter lab build
IF %ERRORLEVEL% NEQ 0 exit /B 1
jupyter lab clean
IF %ERRORLEVEL% NEQ 0 exit /B 1
exit /B 0
