--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------

## **Steps to Reset and Deploy the Project**

### **Step-by-Step Instructions**
1.1 **clone the Latest Changes from Git**:
```bash
git clone  <repo>
```


1.2 **Pull the Latest Changes from Git**:
   After update pull before build
   
```bash
git pull
```

### NOTE
- ช้อควรจำถ้าโปรเจคยังไม่เคยมีการ build docker มาก่อนให้ทำการ build  
- แค่ครั้งแรกเท่านั้น แล้วครั้งต่อไป ถ้าแก้แค่บ้าง project ให้ rebuild บางอัน
- step 2 - 3 คือการ clear project เก่าก่อนหน้าที่เคย build ไว้แต่ผิดหรือมีการแก้ใหม่หมด

2. **Stop and Remove All Containers**:
   Remove all unused Docker containers, images, volumes, and networks:
   **ลบทั้งหมด**
```bash

docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
```

2.1 **Clean Up Docker Resources**:
   Remove all unused Docker containers, images, volumes, and networks:
   **ล้างทั้งหมด ที่แคชไว้**
```bash

sudo docker compose down
sudo docker image prune -a
sudo docker system prune -a --volumes

```

3. **Delete the Existing MySQL Data**:
   Remove the database directory to reset MySQL data:
   **กำหนดตาม ค่าใน volumes - mysql_data:/var/lib/mysql**
```bash
sudo rm -rf ./mysql_data
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



### **🚀 How to `down` and `up --build` Specific Services in Docker Compose**
If you want to stop **only certain containers** and rebuild **only the ones you changed**, follow these steps:

---

## **✅ 1. Stop & Remove a Specific Service**
Use:
```sh
docker-compose stop <service_name>
docker-compose rm -f <service_name>
```

Example: Stop and remove **only `backend`**
```sh
docker-compose stop backend
docker-compose rm -f backend
```

---

## **✅ 2. Restart and Rebuild Only the Changed Service**
Instead of rebuilding everything, use:
```sh
docker-compose up --build -d <service_name>
```

Example: Rebuild **only `backend`**
```sh
docker-compose up --build -d backend
```

**Now, only `backend` is restarted with the new changes.** 🚀

---

## **✅ 3. Restart Multiple Services (Selective Update)**
You can also specify **multiple services** at once:

Example: Restart and rebuild only **`backend` and `frontend`**
```sh
docker-compose stop backend frontend
docker-compose rm -f backend frontend
docker-compose up --build -d backend frontend
```

---

## **✅ 4. Restart a Service Without Rebuilding**
If you just want to restart a service **without rebuilding**:

```sh
docker-compose restart backend
```

---

### **🎯 Summary of Commands**
| Action | Command |
|------|------------|
| Stop a specific service | `docker-compose stop backend` |
| Remove a specific service | `docker-compose rm -f backend` |
| Rebuild and restart only one service | `docker-compose up --build -d backend` |
| Restart without rebuilding | `docker-compose restart backend` |
| Stop, remove, and rebuild multiple services | `docker-compose stop backend frontend && docker-compose rm -f backend frontend && docker-compose up --build -d backend frontend` |

Now, you can **control which services you restart** instead of stopping everything! 🚀🔥  
Let me know if you need further help. 😊