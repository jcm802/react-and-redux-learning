



imageio_download_bin -h
IF %ERRORLEVEL% NEQ 0 exit /B 1
imageio_remove_bin -h
IF %ERRORLEVEL% NEQ 0 exit /B 1
exit /B 0
