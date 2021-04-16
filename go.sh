#!/bin/sh

DIR_JSMPEG=/root/jsmpeg

run_jobs() {
	nohup http-server ${DIR_JSMPEG} >/dev/null 2>&1 &

	sleep 3
	nohup node ${DIR_JSMPEG}/websocket-relay.js supersecret 8081 8082 >/dev/null 2>&1 &

	sleep 3
	#ffmpeg -nostdin -i rtsp://192.168.0.105:8554/ds-test -f mpegts -codec:v mpeg1video  http://127.0.0.1:8081/supersecret &
	while true
	do
		curl -v -X DESCRIBE $URL_RTSP > /dev/null 2>&1
		if [ "$?" -eq 0 ]; then
			nohup ffmpeg -nostdin -i $URL_RTSP -f mpegts -codec:v mpeg1video  http://127.0.0.1:8081/supersecret >/dev/null 2>&1 &
			exit 0
		else
			sleep 3
		fi
	done &
}

if [ "$#" -ne 2 ]; then
  echo "Usage: $0 RTSP_ip RTSP_port" >&2
  exit 1
fi

URL_RTSP="rtsp://$1:$2/ds-test"

killall node ffmpeg

run_jobs
