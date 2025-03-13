--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------

## **Steps to Reset and Deploy the Project**

### **Step-by-Step Instructions**
1. **Pull the Latest Changes from Git**:
```bash
git pull
```

2. **Stop and Remove All Containers**:
   Remove all unused Docker containers, images, volumes, and networks:
```bash

docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
```

2.1 **Clean Up Docker Resources**:
   Remove all unused Docker containers, images, volumes, and networks:
```bash

sudo docker compose down
sudo docker image prune -a
sudo docker system prune -a --volumes

```

3. **Delete the Existing MySQL Data**:
   Remove the database directory to reset MySQL data:
```bash
sudo rm -rf ./db-data
```

4. **Rebuild and Start Docker Containers**:
   Use the following command to build and start the containers:
```bash

docker-compose down -v  # Remove all containers & volumes
docker-compose up --build -d  # Rebuild everything
```

---

## URL TEST

- http://http://151.106.113.75:3000/api

public ip and port and router/ api

### Check if MySQL ran init.sql
affter build docker 
docker exec -it mysql mysql -u makerz -pP@ssword1234 -D test -e "SHOW TABLES;"
