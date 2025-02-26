document.getElementById('submitButton').addEventListener('click', function() {
    var userInput = document.getElementById('userInput').value;
    var outputText = document.getElementById('outputText');

    var apiKey = 'YOUR_API_KEY';  // تأكد من إضافة مفتاح API هنا أو استخدام متغير بيئي
    var userQuery = userInput;  // السؤال الذي يدخله المستخدم

    if (!userQuery) {
        outputText.textContent = "يرجى إدخال سؤال.";  // تأكد من إدخال سؤال
        return;
    }

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
        console.log("Result from API: ", result);  // تسجيل النتيجة في الكونسول
        if (result.answer) {
            outputText.textContent = result.answer;  // عرض الفتوى للمستخدم
        } else {
            outputText.textContent = "لم يتم العثور على إجابة.";  // في حال كانت النتيجة فارغة
        }
    })
    .catch(error => {
        console.error('Error:', error);
        outputText.textContent = 'حدث خطأ أثناء محاولة الإجابة على سؤالك.';  // في حال حدوث خطأ
    });
});

// إضافة وظيفة مسح النص في textarea
document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('userInput').value = '';  // مسح السؤال في textarea
    document.getElementById('outputText').textContent = '';  // مسح النص في النتيجة
});
