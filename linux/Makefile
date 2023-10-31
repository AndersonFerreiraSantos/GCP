PORT=8080
IMAGENAME=arq-docker
CONTAINERNAME=container-name
TAG=0.1

REGION=us-east1

PROJECT=anderson-test

#https://docs.docker.com/engine/reference/commandline/

build:
	docker build --platform linux/amd64 -t $(IMAGENAME) .

run:
	docker run --name $(CONTAINERNAME) -p 8080:8080 $(IMAGENAME)

stop:
	docker stop $(CONTAINERNAME)

listRun:
	docker ps

tag:
	docker tag $(IMAGENAME) us.gcr.io/$(PROJECT)/$(IMAGENAME):$(TAG)

push:
	docker push us.gcr.io/$(PROJECT)/$(IMAGENAME):$(TAG)

deploy:
	gcloud run deploy deploy-image --image us.gcr.io/$(PROJECT)/$(IMAGENAME):$(TAG) --region=$(REGION) --allow-unauthenticated

delete:
	docker rmi $(docker images -q)

all: build tag push deploy