// public/js/login.js
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    const res = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    if (res.ok) {
        const data = await res.json();
        localStorage.setItem('token', data.token);
        message.textContent = '✅ Login success! Redirecting...';
        message.className = 'text-green-600 mt-4 text-center';
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    } else {
        message.textContent = '❌ Login failed. Please check your credentials.';
        message.className = 'text-red-500 mt-4 text-center';
    }
});
