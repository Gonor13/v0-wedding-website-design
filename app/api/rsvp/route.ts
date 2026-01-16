<!DOCTYPE html>
<html>
<head>
    <title>Свадебное приглашение</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; }
        input, select, textarea { width: 100%; padding: 8px; }
        .checkbox-group { display: flex; flex-wrap: wrap; gap: 10px; }
        .checkbox-group label { display: flex; align-items: center; }
    </style>
</head>
<body>
    <h1>🎊 Анкета для гостей</h1>
    
    <form id="rsvpForm">
        <div class="form-group">
            <label>Ваше имя *</label>
            <input type="text" name="name" required>
        </div>
        
        <div class="form-group">
            <label>Вы придёте? *</label>
            <select name="attendance" required>
                <option value="">Выберите ответ</option>
                <option value="yes">✅ Да, с радостью!</option>
                <option value="no">❌ К сожалению, не смогу</option>
            </select>
        </div>
        
        <div class="form-group">
            <label>С кем придёте? (если одни, оставьте пустым)</label>
            <input type="text" name="companion" placeholder="Имя и фамилия спутника">
        </div>
        
        <div class="form-group">
            <label>Какие напитки предпочитаете?</label>
            <div class="checkbox-group">
                <label><input type="checkbox" name="drinks" value="champagne"> Шампанское</label>
                <label><input type="checkbox" name="drinks" value="white-wine"> Белое вино</label>
                <label><input type="checkbox" name="drinks" value="red-wine"> Красное вино</label>
                <label><input type="checkbox" name="drinks" value="vodka"> Водка</label>
                <label><input type="checkbox" name="drinks" value="whiskey"> Виски</label>
                <label><input type="checkbox" name="drinks" value="no-alcohol"> Без алкоголя</label>
            </div>
        </div>
        
        <div class="form-group">
            <label>Ваши пожелания или комментарии</label>
            <textarea name="wishes" rows="3"></textarea>
        </div>
        
        <button type="submit">Отправить ответ</button>
        <p id="statusMessage"></p>
    </form>

    <script>
        document.getElementById('rsvpForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = {
                name: this.name.value,
                attendance: this.attendance.value,
                companion: this.companion.value,
                drinks: Array.from(this.querySelectorAll('input[name="drinks"]:checked'))
                    .map(checkbox => checkbox.value),
                wishes: this.wishes.value
            };
            
            // ЗАМЕНИТЕ НА СВОЙ URL ОТ GOOGLE APPS SCRIPT
            const SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
            
            try {
                const response = await fetch(SCRIPT_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                
                const result = await response.json();
                
                if (result.success) {
                    document.getElementById('statusMessage').innerHTML = 
                        '<span style="color: green;">✅ Спасибо! Ваш ответ отправлен.</span>';
                    this.reset();
                } else {
                    throw new Error('Ошибка сервера');
                }
            } catch (error) {
                document.getElementById('statusMessage').innerHTML = 
                    '<span style="color: red;">❌ Ошибка отправки. Попробуйте ещё раз.</span>';
                console.error('Error:', error);
            }
        });
    </script>
</body>
</html>
