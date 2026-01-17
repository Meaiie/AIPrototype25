# Deploy Python Web App on Virtual Machine

## 1. Connect to Virtual Machine
เชื่อมต่อเข้า Virtual Machine

    ssh <username>@<vm-ip>

---

## 2. Pull Web Application Project
ดึงโปรเจกต์ Web App จาก Git

    git pull

---

## 3. แก้ไข Host
เปิดไฟล์ `web_app.py` เพื่อเปลี่ยนค่า host

    vi web_app.py

จากนั้นแก้ไขค่า host จาก

    localhost

เป็น

    0.0.0.0

> **Note**
> - `localhost` เชื่อมต่อเฉพาะภายในเครื่อง  
> - `0.0.0.0` เปิดให้เข้าถึงจากภายนอก VM ได้  
> - ถ้าใช้ VM เครื่องเดียวกันหลายคน ต้องใช้ `port` คนละเลข เพื่อไม่ให้มันการชนกัน

---

## 4. Open Port in Azure Portal
ไปที่ **Azure Portal → Virtual Machine → Networking**
<img width="1175" height="548" alt="image" src="https://github.com/user-attachments/assets/bcc6aeb6-b536-4eb4-9ba6-540a4e43c31e" />

### Inbound Port Rule
- Protocol: `Any`
- Port: เช่น `5002`
- Action: `Allow`

> ถ้าไม่เปิด port ก็จะเข้าถึง Web App จากภายนอกไม่ได้
---

## 5. Run Web Application
รัน Web App

    python web_app.py

---

## 6. Access Web App via VM IP
เข้าถึง Web App ด้วยการใช้ IP Address ของ VM และ port ที่เราเลือกไปก่อนหน้านี้

    http://13.75.68.11:5002/

---

## 7. ทำให้เว็บใช้งานได้ถึงจะ log out ไปแล้ว (Screen)

### สร้าง screen ใหม่สำหรับรัน web_app.py
    screen -S <screen name>

### Run Web App บน screen
    python web_app.py

### บันทึกและออกจาก screen
    Ctrl + A → D
---
> - คนอื่นเข้าถึง Web app เราได้
> - เว็บยังทำงานต่อถึงจะปิด SSH/logout จาก VM
