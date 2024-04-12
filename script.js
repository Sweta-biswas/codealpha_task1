document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const birthDateInput = document.getElementById('birth-date').value;
    const refreshBtn = document.getElementById('refresh-btn');

    const birthDate = new Date(birthDateInput);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--; // Subtract 1 if the birthday hasn't occurred yet this year
    }

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `You are ${age} years old.`;
    resultDiv.style.opacity = 0; // Start with the result hidden

    // Fade in the result
    setTimeout(() => {
        resultDiv.style.opacity = 1;
    }, 100);
   
});
