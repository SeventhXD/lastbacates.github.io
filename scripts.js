document.addEventListener('DOMContentLoaded', function() {
    const pinInput = document.getElementById('pinInput');
    const pinForm = document.getElementById('pinForm');
    const pinStatus = document.getElementById('pinStatus');
    const classifiedContent = document.getElementById('classifiedContent');

    const base64Pin = 'NzUyNDIw';

    pinForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const enteredPin = pinInput.value;

        // Decode Base64 pin
        const decodedPin = atob(base64Pin);

        if (enteredPin === decodedPin) {
            pinStatus.textContent = "Access Granted!";
            pinStatus.className = 'success';
            classifiedContent.style.display = 'block';
            setTimeout(() => {
                window.location.href = 'hidden.html'; // Redirect after successful PIN entry
            }, 2000); // Redirect delay
        } else {
            pinStatus.textContent = "Access Denied. Incorrect PIN.";
            pinStatus.className = 'error';
        }
    });
});
