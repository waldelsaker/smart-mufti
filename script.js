document.getElementById('submitButton').addEventListener('click', function() {
    var userInput = document.getElementById('userInput').value;
    var outputText = document.getElementById('outputText');

    var apiKey = process.env.CHATBASE_API_KEY;  // أخذ المفتاح من المتغير البيئي
    var userQuery = userInput;  // السؤال الذي يدخله المستخدم

    var data = {
        "messages": [
            {
                "role": "user", 
                "content": userQuery
            }
        ]
    };

    // هنا نستخدم Chatbase API للرد
    fetch('https://api.chatbase.com/v1/query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + apiKey
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        // إذا كانت الإجابة موجودة، نعرضها، وإذا لا توجد إجابة نعرض رسالة خطأ
        outputText.textContent = result.answer || "لا توجد إجابة";  // عرض الفتوى للمستخدم
    })
    .catch(error => {
        console.error('Error:', error);
        outputText.textContent = 'حدث خطأ أثناء محاولة الإجابة على سؤالك.';
    });
});

// إضافة وظيفة مسح النص في textarea
document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('userInput').value = '';  // مسح السؤال في textarea
    document.getElementById('outputText').textContent = '';  // مسح النص في النتيجة
});
