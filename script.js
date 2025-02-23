document.getElementById('submitButton').addEventListener('click', function() {
    var userInput = document.getElementById('userInput').value;
    var outputText = document.getElementById('outputText');

    var apiKey = 'sk-svcacct-jYOCU9QhJ19gkIEcw7hwSHDoMPjRv4TW12-rmDrSpydfQ04ZsEyD6nxSKL9ZP4w7XT3BlbkFJQ2yFutC9L4MyTtHqkDjSRc57_Ijv8XTzCrKHsz0jZttqfBBVl3sr3F0xSTKNrj7ngA';  // مفتاح API الخاص بـ ChatGPT
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
