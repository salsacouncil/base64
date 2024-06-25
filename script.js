function encrypt() {
    const inputText = document.getElementById('inputText').value;
    const encodedText = btoa(inputText);
    document.getElementById('inputText').value = encodedText;
}

function decrypt() {
    const inputText = document.getElementById('inputText').value;
    try {
        const decodedText = atob(inputText);
        document.getElementById('inputText').value = decodedText;
    } catch (e) {
        alert('Invalid Base64 string');
    }
}
