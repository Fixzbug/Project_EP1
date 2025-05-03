// public/js/register.js
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    const res = await fetch('/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    if (res.ok) {
        message.textContent = '✅ Register success! Redirecting to login...';
        message.className = 'text-green-600 mt-4 text-center';
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
    } else {
        const errorMsg = await res.text();
        message.textContent = `❌ ${errorMsg}`;
        message.className = 'text-red-500 mt-4 text-center';
    }
});
