@echo off
SET mypid=

if [%1]==[start] call :start >nul 2>&1
if [%1]==[stop] call :stop >nul 2>&1
if [%1]==[status] goto :status
goto :finish

:start
for /f "tokens=5" %%a in ('netstat -aon ^| findstr 0.0.0.0:9000') do SET mypid=%%~nxa
if not [%mypid%]==[] goto :status

SET mypath=%~dp0
start "portfolio-root" /B /D "%mypath%root-html" npm start >nul 2>&1
start "portfolio-style" /B /D "%mypath%styleguide" npm start >nul 2>&1
start "portfolio-api" /B /D "%mypath%api" npm start >nul 2>&1
start "portfolio-nav" /B /D "%mypath%nav" npm start >nul 2>&1
start "portfolio-home" /B /D "%mypath%home" npm start >nul 2>&1
start "portfolio-showcase" /B /D "%mypath%showcase" npm start >nul 2>&1

goto :finish

:stop
SET mypid=
for /f "tokens=5" %%a in ('netstat -aon ^| findstr 0.0.0.0:9000') do SET mypid=%%~nxa
if not [%mypid%]==[] taskkill /F /PID %mypid%

SET mypid=
for /f "tokens=5" %%a in ('netstat -aon ^| findstr 0.0.0.0:4100') do SET mypid=%%~nxa
if not [%mypid%]==[] taskkill /F /PID %mypid%

SET mypid=
for /f "tokens=5" %%a in ('netstat -aon ^| findstr 0.0.0.0:4200') do SET mypid=%%~nxa
if not [%mypid%]==[] taskkill /F /PID %mypid%

SET mypid=
for /f "tokens=5" %%a in ('netstat -aon ^| findstr 4201') do SET mypid=%%~nxa
if not [%mypid%]==[] taskkill /F /PID %mypid%

SET mypid=
for /f "tokens=5" %%a in ('netstat -aon ^| findstr 4202') do SET mypid=%%~nxa
if not [%mypid%]==[] taskkill /F /PID %mypid%

SET mypid=
for /f "tokens=5" %%a in ('netstat -aon ^| findstr 4203') do SET mypid=%%~nxa
if not [%mypid%]==[] taskkill /F /PID %mypid%

goto :finish

:status
SET mypid=
for /f "tokens=5" %%a in ('netstat -aon ^| findstr 0.0.0.0:9000') do SET mypid=%%~nxa
if not [%mypid%]==[] (echo Root html running on PID %mypid%) else (echo Root html not running)

SET mypid=
for /f "tokens=5" %%a in ('netstat -aon ^| findstr 0.0.0.0:4100') do SET mypid=%%~nxa
if not [%mypid%]==[] (echo Styleguide running on PID %mypid%) else (echo Styleguide not running)

SET mypid=
for /f "tokens=5" %%a in ('netstat -aon ^| findstr 0.0.0.0:4200') do SET mypid=%%~nxa
if not [%mypid%]==[] (echo Api running on PID %mypid%) else (echo Api not running)

SET mypid=
for /f "tokens=5" %%a in ('netstat -aon ^| findstr 4201') do SET mypid=%%~nxa
if not [%mypid%]==[] (echo Nav running on PID %mypid%) else (echo Nav not running)

SET mypid=
for /f "tokens=5" %%a in ('netstat -aon ^| findstr 4202') do SET mypid=%%~nxa
if not [%mypid%]==[] (echo Home running on PID %mypid%) else (echo Home not running)

SET mypid=
for /f "tokens=5" %%a in ('netstat -aon ^| findstr 4203') do SET mypid=%%~nxa
if not [%mypid%]==[] (echo Showcase running on PID %mypid%) else (echo Showcase not running)

goto :finish

:finish
exit /B