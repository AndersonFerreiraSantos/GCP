PORT=8080
IMAGENAME=image-name
CONTAINERNAME=container-name
TAG=0.1

REGION=us-east1

PROJECT=anderson-test

#https://docs.docker.com/engine/reference/commandline/

build:
	docker build -t $(IMAGENAME) .

run:
	docker run --name $(CONTAINERNAME) -p 8080:9090 $(IMAGENAME)

stop:
	docker stop $(CONTAINERNAME)