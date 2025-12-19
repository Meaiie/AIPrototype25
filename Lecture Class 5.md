# Managing Environment Conda
> Environment คือ การสร้างพื้นที่เฉพาะในการลง package ต่าง ๆ ที่สำคัญและตรงกับสิ่งที่แอปต้องการโดยไม่ส่งผลกระทบกับแอปอื่น ๆ<br>
> การทำ Environment Conda ใน Class นี้จะใช้ miniconda

## Create Environment
สร้าง Environment ใหม่
```
conda create --name <env name> python=<python_version>
```
เข้าใช้งาน env
```
conda activate <env name>
```
> ชื่อข้างหน้าจะเปลี่ยนจาก base เป็นชื่อ environment ที่เราสร้าง
> <img width="929" height="86" alt="image" src="https://github.com/user-attachments/assets/2a7b3eb4-df23-42b2-8bd0-b66bbe535b65" />

เลิกใช้งาน env
```
conda deactivate
```
ลบ env
```
conda remove --name <env name> --all
```
ดูชื่อ env ทั้งหมดของ Conda
```
conda env list
```
## Install package
> อยู่ใน VM และเข้า env แล้ว

ติดตั้ง Package
```
conda install <package_name>
```
แสดง package ทั้งหมด
```
conda list
```

# Github Commandline
## Setting owner Github
> ทำครั้งเดียว
```
git config --global user.name <Username>
git config --global user.email <email>
```
## การโคลน Github
```
git clone <https ของ Github ที่เราต้องการโคลน>
```
><img width="1919" height="738" alt="image" src="https://github.com/user-attachments/assets/6dbc923c-1704-4c51-8d38-0fa5d99dc467" />

## Save code on Github
>Step การแก้ไขไฟล์<br>
1. Update Local (ดึงเวอร์ชันล่าสุด กันเราแก้แล้ว version ไม่ตรงกับที่ push ขึ้นไปบน git ล่าสุด)
  ```
  git pull
  ```
2. แก้ไขไฟล์
3. เลือกไฟล์ที่จะส่งขึ้นไป
  ```
  git add <ชื่อไฟล์>
  ```
4. บันทึกการเปลี่ยนแปลง
  ```
  git commit -m “your_describtion”
  ```
5. ส่งโค้ดที่ Commit แล้วขึ้นไปบน GitHub
  ```
  git push
  ```
### Password for commit on Github
> Profile Github Setting → Developer Settings → Personal access tokens (classic) → Generate new token (classic)<br>
> Password จะแสดงครั้งเดียว ต้อง save ไว้ใช้ ถ้าลืมต้องสร้างใหม่

## Check Status
```
git status
```
