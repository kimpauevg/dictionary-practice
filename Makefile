STOP = docker stop dictionary-container || true; docker rm dictionary-container || true

run:
	$(STOP)
	docker image build -t dictionary-image:latest .
	docker run -dp 3000:3000 --name dictionary-container dictionary-image:latest

stop:
	$(STOP)
sh:
	docker exec -it dictionary-container sh