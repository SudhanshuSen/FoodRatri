@echo off
title Starting Full Stack App

echo ======================================
echo Starting Backend...
echo ======================================

cd backend
start cmd /k "npm install && npm run server"
cd ..

timeout /t 5 >nul
echo ======================================
echo Starting Frontend...
echo ======================================

cd frontend
start cmd /k "npm install && npm run dev"

cd ..
echo ======================================
echo Starting admin...
echo ======================================

cd admin
start cmd /k "npm install && npm run dev"

echo ======================================
echo All services launched in separate terminals.   
echo ======================================
