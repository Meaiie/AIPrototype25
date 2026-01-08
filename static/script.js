document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('prediction-form');
    const submitBtn = document.getElementById('submit-btn');
    
    // Modal elements
    const modal = document.getElementById('result-modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const resultImageContainer = document.getElementById('result-image-container');
    const resultImg = document.getElementById('result-img');
    const finalResultName = document.getElementById('final-result-name');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // ห้ามรีเฟรชหน้า

        // 1. เตรียมข้อมูล
        const data = {
            sepal_length: document.getElementById('sepal_length').value,
            sepal_width: document.getElementById('sepal_width').value,
            petal_length: document.getElementById('petal_length').value,
            petal_width: document.getElementById('petal_width').value
        };

        // 2. เปิด Modal และแสดงสถานะ "กำลังร่ายคาถา"
        modal.style.display = 'flex';
        modalTitle.innerHTML = "🔮 กำลังร่ายคาถา...";
        modalText.innerHTML = "โอม... มะลึกกึ๊กกึ๋ยยย~ เพี้ยง!";
        resultImageContainer.style.display = 'none';
        submitBtn.innerHTML = "⏳ Casting Spell...";
        submitBtn.disabled = true;

        // 3. ส่งข้อมูลไปที่ Flask (ใช้ fetch)
        setTimeout(() => { // หน่วงเวลา 1.5 วินาที ให้ดูเหมือนกำลังคิด
            fetch('/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(result => {
                if (result.status === 'success') {
                    // 4. อัปเดตผลลัพธ์ใน Modal
                    modalTitle.innerHTML = "✨ ทายถูกแล้ว!";
                    modalText.innerHTML = "ขอทายว่าดอกไม้นี้คือ...";
                    
                    resultImg.src = result.image_url;
                    finalResultName.innerHTML = result.prediction_name.charAt(0).toUpperCase() + result.prediction_name.slice(1); // ตัวพิมพ์ใหญ่ตัวแรก
                    
                    resultImageContainer.style.display = 'block';

                    // 5. ยิง Confetti! 🎉
                    triggerConfetti();

                } else {
                    modalTitle.innerHTML = "⚠️ เกิดข้อผิดพลาด";
                    modalText.innerHTML = result.message;
                }
                // คืนค่าปุ่มกด
                submitBtn.innerHTML = "Predict Species";
                submitBtn.disabled = false;
            })
            .catch((error) => {
                console.error('Error:', error);
                modalTitle.innerHTML = "⚠️ Error";
                modalText.innerHTML = "Failed to connect to server.";
                submitBtn.innerHTML = "Predict Species";
                submitBtn.disabled = false;
            });
        }, 1500); // จบการหน่วงเวลา
    });

    // ฟังก์ชันปิด Modal
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // ฟังก์ชันยิง Confetti (ใช้ library canvas-confetti)
    function triggerConfetti() {
        var count = 200;
        var defaults = {
            origin: { y: 0.7 }
        };

        function fire(particleRatio, opts) {
            confetti(Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio)
            }));
        }

        fire(0.25, { spread: 26, startVelocity: 55, });
        fire(0.2, { spread: 60, });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
        fire(0.1, { spread: 120, startVelocity: 45, });
    }

    // (Optional) Validation Input เหมือนเดิม...
    const inputs = form.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (parseFloat(this.value) <= 0) {
                this.style.borderColor = "#ff4d4d";
            } else {
                this.style.borderColor = "transparent";
            }
        });
    });
});