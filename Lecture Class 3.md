# Cloud Virtual machines
### iaas infrastructure as a service
มีรูปแบบการบริการคลาวด์หลักๆ อยู่สามแบบ :<br>
> Infrastructure as a Service (IaaS)<br>
> Platform as a Service (PaaS)<br>
> Software as a Service (SaaS)<br>

สมัครใช้โควต้าฟรีของนักศึกษาผ่าน Microsoft Azure : <https://azure.microsoft.com/en-us/free/students>

## 1. Create VM 
> เข้า Portal Azure >>> Education >>> VM >>> Create a virtual machine

## 2. Login & Logout
Login VM
```
ssh username@IP
```
Logout VM
```
exit
```

## 3. ออกจาก function ex. python
```
exit()
```

## 4. scp = secure copy 
รูปแบบ
  ```
  scp <path ต้นทาง> <path ปลายทาง>
  ```
การส่งและดึงไฟล์ระหว่างเครื่องและCloud (ต้องรันบนเครื่องเรา)
 - คัดลอกจากเครื่องไปบน Cloud
  ```
  scp <path ไฟล์ต้นทาง>/<ชื่อไฟล์> username@IP:~<ชื่อโฟล์เดอร์>/.
  ```
 - คัดลอกจาก Cloud ไปบนเครื่อง
  ```
  scp username@IP:<path ไฟล์ต้นทาง>/<ชื่อไฟล์> <path ปลายทาง>/.
  ```
การส่งและดึงโฟล์เดอร์ระหว่างเครื่องและCloud (ต้องรันบนเครื่องเรา)
 - คัดลอกจากเครื่องไปบน Cloud
  ```
  scp <path ไฟล์ต้นทาง>/<ชื่อโฟล์เดอร์> username@IP:~<ชื่อโฟล์เดอร์>/.
  ```
 - คัดลอกจาก Cloud ไปบนเครื่อง
  ```
   scp username@IP:<path ไฟล์ต้นทาง>/<ชื่อไฟล์> <path ปลายทาง>/.
  ```
## 5. ใช้ดูการเคลื่อนไหวใน server ของเรา
```
htop
```
## 6. เพิ่ม User เพื่อนให้เข้า server ของเราได้
```
sudo adduser <username ที่ต้องการเพิ่ม>
```
## 7. Group
เช็คว่าอยู่ใน Server ไหนบ้าง
```
sudo groups <username เรา>
