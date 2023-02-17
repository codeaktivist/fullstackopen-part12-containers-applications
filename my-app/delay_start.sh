echo Delaying start for 30 seconds to wait for redis and mongo containers to be ready
sleep 30s
cd counters-backend
npm run prod