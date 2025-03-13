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

sudo docker compose up --build # build before run
sudo docker-compose up -d --build #run background
```

---

## URL TEST

- http://13.113.165.22:5000/api

public ip and port and router/ api


### **Final Notes**
- These steps ensure a clean environment for your **Node.js** and **MySQL** Docker application.
- If you are resetting the database, **back up critical data** before deleting `./db-data`.