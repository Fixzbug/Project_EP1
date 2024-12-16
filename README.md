```bash
sudo docker compose down
sudo docker compose up --build
sudo docker rm container_id
```


```bash
sudo docker container ls -l
sudo docker image ls -l
```

Remove unused Docker containers:

```bash
sudo docker rm $(docker ps -aq -f status=exited)
```

Remove dangling images (unused images):

```bash
sudo docker image prune -a
```

Clear unused volumes:

```bash
sudo docker volume prune
```

To clear everything unused:

```bash
sudo docker system prune -a --volumes
```

Remove unused networks:

```bash
sudo docker network prune
```


### SETP

```bash
    git pull

    sudo docker system prune -a --volumes

    sudo rm -rf ./db-data

    sudo docker compose up --build

```