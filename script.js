document.getElementById('submitButton').addEventListener('click', function() {
    var userInput = document.getElementById('userInput').value;
    var outputText = document.getElementById('outputText');

    var apiKey = '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';  // ضع هنا مفتاح API الخاص بـ ChatGPT
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
        outputText.textContent = result.choices[0].text.trim();
    })
    .catch(error => {
        console.error('Error:', error);
        outputText.textContent = 'حدث خطأ أثناء محاولة الإجابة على سؤالك.';
    });
});
