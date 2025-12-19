# Commandline Python
> เป็น Python ที่ใช้ในการเขียน Server

เปิด VSCode ผ่าน Commandline
```
Code
```
สร้างไฟล์ใน vscode
```
Code <ชื่อไฟล์>
```

## การติดตั้ง miniconda บน server
> How to install : <https://www.anaconda.com/docs/getting-started/miniconda/install#linux-2><br>
1. Run the following four commands to download and install the latest Linux installer for your chosen chip architecture. Line by line, these commands
```
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
```
2. After installing, close and reopen your terminal application or refresh it by running the following command
```
source ~/miniconda3/bin/activate
```
3. Then, initialize conda on all available shells by running the following command
```
conda init --all
```
## Session ของ linux
> ปกติแล้วถ้าจะรันต้องเปิดคอมเราทิ้งไว้เพื่อเชื่อมกับเครื่อง VM ให้รันอยู่บน session ตลอด
คำสั่งพิเศษ screen คือการดึง session ออกมาจาก Terminal ให้รันด้วยตัวเอง เรียกว่าเปิด Screen 

การสร้าง screen
```
screen -S <ชื่อไฟล์>
```
> ถึงจะปิด Terminal ไปก็ยังรันอยู่<br>
กลับเข้าไปใน screen ที่รันไว้
```
Screen -R ชื่อscreen 
```
ออกจาก Screen
```
Ctrl + A → D
```
ออกจาก screen และลบ screen
```
Ctrl +A → k→ y
```
ล็อคหน้า screen ให้เลื่อนดูได้
```
Ctrl + A → [
```
ออกจากหน้าล็อค
```
q  → Enter
```
หยุด Run
```
Ctrl + C
```
เช็ค screen ทั้งหมดที่มีอยู่
```
screen -R <screen name> → Tab
```
>ถ้ามีไฟล์ขึ้นมาเยอะ ๆ ให้กด q
น้องจะโชว์ screen -R <screen name> แล้วกด Enter ได้เลย
>ถ้าอยากเข้าไปลบ screen ที่สร้างขึ้นมาซ้ำชื่อกัน ให้เช็คเลขไอดีจากการเช็ค screen<br>
><img width="922" height="143" alt="image" src="https://github.com/user-attachments/assets/f6e611b1-5e62-496f-a33b-04e199b0541e" />

เข้าไปใน screen ที่ชื่อซ้ำด้วยไอดี
```
screen -R id.<screen name>
```

