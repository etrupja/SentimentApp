function analyzeSentiment() {
    const text = document.getElementById('textInput').value.toLowerCase();
    const emojiResult = document.getElementById('emojiResult');

    const positiveWords = ['good', 'happy', 'love', 'excellent', 'great', 'fantastic', 'amazing', 'awesome', 'nice', 'wonderful', 'best', 'positive', 'enjoy'];
    const negativeWords = ['bad', 'sad', 'hate', 'terrible', 'awful', 'worst', 'horrible', 'poor', 'negative', 'angry', 'disappoint', 'pain', 'problem'];

    let score = 0;
    positiveWords.forEach(word => {
        if (text.includes(word)) score++;
    });
    negativeWords.forEach(word => {
        if (text.includes(word)) score--;
    });

    let emoji = '😐'; // Neutral
    if (score > 0) {
        emoji = '😊'; // Positive
    } else if (score < 0) {
        emoji = '😞'; // Negative
    }

    emojiResult.textContent = emoji;
} 