function signupClicked() {
    // Get the signup button element
    const signupBtn = document.getElementById('signupBtn');

    // Apply animation effect on button click
    signupBtn.classList.add('btn-clicked');

    // Reset animation after a certain duration
    setTimeout(() => {
        signupBtn.classList.remove('btn-clicked');
    }, 1000); // Adjust the duration as needed
}

