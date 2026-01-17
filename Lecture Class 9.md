# Basic AI Concept
## 1. Basic AI Overview
ความสามารถของ AI สามารถแบ่งออกเป็น 5 ประเภทหลัก

- **Computer Vision (See)**  
  การมองเห็นและเข้าใจภาพ

- **Natural Language Processing – NLP (Communicate)**  
  การสื่อสารและเข้าใจภาษา

- **Machine Learning – ML (Learn)**  
  การเรียนรู้จากข้อมูล

- **Expert System (Decide)**  
  การตัดสินใจ

- **Robotics (Work)**  
  การทำงาน

---

## 2. Machine Learning (ML)

### สิ่งที่ ML ต้องการ
ML ต้องการองค์ประกอบหลัก 2 อย่าง

- **Data (ข้อมูลที่ดีและมีคุณภาพ ในปริมาณที่มากพอ)**
- **Computing Power**

---

### Global Information Storage Capacity
- ปริมาณข้อมูลของโลกเพิ่มขึ้นอย่างมากช่วงที่เริ่มมี **Smartphone**
- Google เริ่มมีข้อมูลจำนวนมากจากการเปิดให้ใช้งานบริการต่าง ๆ เช่น **Google Photos**
- จากนั้นข้อมูลก็ถูกนำมาใช้ในการ Train โมเดล

---

### แนวคิดพื้นฐานของ ML
- ให้คอมพิวเตอร์ **เรียนรู้เอง** ว่าควรมอง แยก และตีความข้อมูลยังไง
- ML เป็นเหมือนฟังก์ชันหนึ่งที่สามารถ **map input → output** ได้

---

## 3. Supervised Learning
- รูปแบบของโมเดล: `f(x)`
- ใช้ในงาน **Regression / Classification**
- เป้าหมายคือ
  - หาโมเดลที่ทำให้ **loss ต่ำที่สุด**
  - เพื่อนำมาใช้ในการทำนายข้อมูลใหม่

---

## 4. Image Processing & Deep Learning

### Traditional Approach
- ในอดีตใช้เทคนิค **HOG (Histogram of Oriented Gradients)**
- แปลงภาพให้กลายเป็น record หรือ feature ก่อนนำไปเรียนรู้
<img width="683" height="334" alt="image" src="https://github.com/user-attachments/assets/30defae5-15e8-42de-b675-9a189efb6768" /><br>
> ที่มาภาพ [iq.opengenus](https://iq.opengenus.org/object-detection-with-histogram-of-oriented-gradients-hog/)
---

### Deep Learning
- โมเดล ML ตัวแรกที่สามารถ **เรียนรู้ feature ได้ด้วยตัวเอง** คือ **CNN (Convolutional Neural Network)**

#### Fine-tuning
- คือการใช้โมเดลที่เรียนรู้โครงสร้างทั่วไปมาก่อน
- จากนั้น **Fine-tune** เพื่อให้เก่งเฉพาะด้าน  
  เช่น แยกภาพประเภทเฉพาะ
<img width="560" height="253" alt="image" src="https://github.com/user-attachments/assets/d2eb6097-4223-458a-a120-2c7da4fe895b" /><br>
> ที่มาภาพ [LoveIdeaET](https://loveideaet.click/product_details/24083062.html)

---

# LLM
## 1. LLM Training Architecture

### เป้าหมายของ LLM
- ต้องการให้โมเดล **เข้าใจภาษา**
- เลยเริ่มจากการสอนว่า **ภาษาทำงานยังไง**

---

### Pre-Training
- โมเดลพื้นฐานใช้โครงสร้าง **Transformer**
- เรียนรู้แบบ **Next Token Prediction**
- แบ่งประโยคออกเป็นส่วน ๆ
- ปิดบาง token แล้วให้โมเดลทำนาย token นั้น
- ได้เป็น **Base Model** ออกมา

---

### Continued Pre-Training
- เอามา Train ต่อเพื่อให้โมเดลเก่งเฉพาะด้าน
- ใช้ข้อมูลเฉพาะทางมา Train ต่อ
- ยังใช้หลักการ **Next Token Prediction**

---

## 2. Fine-Tuning LLM

### Instruction Fine-Tuning (SFT)
- ทำให้ LLM ทำตามคำสั่งที่ต้องการได้
- ต้องออกแบบ input ให้ชัดเจน
- ได้โมเดล **Supervised Fine-Tuned Model**

---

### Preference Fine-Tuning (RLHF)
- หลังจากได้โมเดลมาแล้ว จะให้มนุษย์ช่วยให้คะแนนคำตอบว่า
  - ดี / ไม่ดี
- ใช้ Reinforcement Learning เพื่อให้โมเดลตอบถูกใจคนใช้มากที่สุด
---

## 3. RAG & Agentic Systems

### RAG (Retrieval-Augmented Generation)
- LLM ปกติ:  
  **คำถาม → คำตอบ**

- RAG:  
  **คำถาม + ข้อมูลเพิ่มเติม → คำตอบ**

ช่วยลด Hallucination และให้ตอบตามข้อมูลจริง

---

### Agentic AI
  - **คำถาม → เรียกใช้ Tool**
  - Tool ประมวลผลตาม parameter
  - ส่งผลลัพธ์กลับมาเป็นคำตอบ

เหมาะกับระบบที่ต้องทำงานหลายขั้นตอน
