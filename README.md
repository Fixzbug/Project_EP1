
sudo docker compose down
sudo docker compose up --build
sudo docker rm container_id


sudo docker container ls -l
sudo docker image ls -l

<!-- Remove unused Docker containers: -->
sudo docker rm $(docker ps -aq -f status=exited)

<!-- Remove dangling images (unused images): -->
sudo docker image prune -a

<!-- Clear unused volumes: -->
sudo docker volume prune

<!-- To clear everything unused: -->
sudo docker system prune -a --volumes

<!-- Remove unused networks: -->
sudo docker network prune


### SETP

git pull

sudo docker system prune -a --volumes

sudo rm -rf ./db-data

sudo docker compose up --build