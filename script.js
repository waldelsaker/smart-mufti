document.getElementById('submitButton').addEventListener('click', function() {
    var userInput = document.getElementById('userInput').value;
    var outputText = document.getElementById('outputText');

    var apiKey = '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';  // مفتاح API الخاص بـ ChatGPT
    var prompt = `صحح النص التالي: ${userInput}`;

    var data = {
        model: 'gpt-3.5-turbo',
        prompt: prompt,
        max_tokens: 500
    };

    fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + apiKey
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        outputText.textContent = result.choices[0].text.trim();  // عرض الفتوى للمستخدم
    })
    .catch(error => {
        console.error('Error:', error);
        outputText.textContent = 'حدث خطأ أثناء محاولة الإجابة على سؤالك.';
    });
});
