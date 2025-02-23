document.getElementById('submitButton').addEventListener('click', function() {
    var userInput = document.getElementById('userInput').value;
    var outputText = document.getElementById('outputText');

    var apiKey = 'sk-svcacct-tw5_v9FEgQ7cg53ExFjoXbhxmAB0kFy-T_sn0n6CaheSLu02N3doXxzB9wcUefT3BlbkFJAsAPf9yOiUQI2iXH9z3HPU4fynzW946RhfuDPkg-zKbatMHGNSQ1R1f8Ebw5kA';  // مفتاح API الخاص بـ ChatGPT
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
