document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.querySelector('form');
    const submitBtn = document.querySelector('button[type="submit"]');

    form.addEventListener('submit', function(event) {
        
        // 1. ดึงค่า inputs ทั้งหมดมาตรวจสอบ
        const inputs = form.querySelectorAll('input[type="number"]');
        let isValid = true;

        inputs.forEach(input => {
            const value = parseFloat(input.value);
            // ตรวจสอบว่าค่าติดลบ หรือเป็น 0 หรือไม่
            if (value <= 0) {
                isValid = false;
                // เปลี่ยนขอบ input เป็นสีแดงเพื่อเตือน
                input.style.borderColor = "#ff4d4d";
            } else {
                // คืนค่าสีขอบปกติ
                input.style.borderColor = "#ddd";
            }
        });

        if (!isValid) {
            // ถ้าข้อมูลไม่ถูกต้อง ห้ามส่งฟอร์ม
            event.preventDefault();
            alert("⚠️ กรุณากรอกตัวเลขที่มากกว่า 0");
            return;
        }

        // 2. ถ้าข้อมูลผ่านหมด ให้ทำ Loading Effect ที่ปุ่ม
        submitBtn.innerHTML = "⏳ Processing...";
        submitBtn.style.opacity = "0.7";
        submitBtn.style.cursor = "not-allowed";
        
        // (ฟอร์มจะถูกส่งไปที่ Flask ตามปกติหลังจากบรรทัดนี้)
    });

    // เพิ่มลูกเล่น: เมื่อผู้ใช้เริ่มพิมพ์ ให้แก้สีขอบแดงกลับเป็นปกติ
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            this.style.borderColor = "#ddd";
        });
    });

});