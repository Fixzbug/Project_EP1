# **Docker Cleanup and Deployment Steps for AWS Node.js + MySQL Project**

---

## **General Docker Cleanup Commands**

### 1. **Stop and Rebuild Containers**
To stop and rebuild the containers:
```bash
sudo docker compose down
sudo docker compose up --build
```

---

### 2. **Remove Specific Containers**
To remove a specific container:
```bash
sudo docker rm <container_id>
```

---

### 3. **List Recent Containers and Images**
- **List the most recently created container**:
  ```bash
  sudo docker container ls -l
  ```
- **List the most recently created image**:
  ```bash
  sudo docker image ls -l
  ```

---

## **Removing Unused Docker Resources**

### 4. **Remove Exited Containers**
To remove all containers with a status of "exited":
```bash
sudo docker rm $(docker ps -aq -f status=exited)
```

---

### 5. **Remove Dangling Images**
Dangling images are unused images without any tags:
```bash
sudo docker image prune -a
```

---

### 6. **Clear Unused Volumes**
To remove all unused volumes:
```bash
sudo docker volume prune
```

---

### 7. **Remove Unused Networks**
To clear unused Docker networks:
```bash
sudo docker network prune
```

---

### 8. **Remove Everything Unused**
To clear all unused Docker data, including images, containers, volumes, and networks:
```bash
sudo docker system prune -a --volumes
```

---

## **Steps to Reset and Deploy the Project**

### **Step-by-Step Instructions**
1. **Pull the Latest Changes from Git**:
   ```bash
   git pull
   ```

2. **Clean Up Docker Resources**:
   Remove all unused Docker containers, images, volumes, and networks:
   ```bash
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
   sudo docker compose up --build
   ```

---

### **Final Notes**
- These steps ensure a clean environment for your **Node.js** and **MySQL** Docker application.
- If you are resetting the database, **back up critical data** before deleting `./db-data`.

---

### **Summary of Key Commands**

| Task                          | Command                                     |
|-------------------------------|---------------------------------------------|
| Stop and rebuild containers   | `sudo docker compose down && sudo docker compose up --build` |
| Remove exited containers      | `sudo docker rm $(docker ps -aq -f status=exited)` |
| Prune unused images           | `sudo docker image prune -a`               |
| Prune unused volumes          | `sudo docker volume prune`                 |
| Prune unused networks         | `sudo docker network prune`                |
| Full system cleanup           | `sudo docker system prune -a --volumes`    |
| Reset MySQL data              | `sudo rm -rf ./db-data`                    |

By following these steps, you will have a fresh deployment of your Dockerized Node.js and MySQL environment on AWS. 🚀