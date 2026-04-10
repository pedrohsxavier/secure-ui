const form = document.getElementById('loginForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    const fakeUser = {
        username: "admin", 
        password: "123456"
    };

    if (username === fakeUser.username && password === fakeUser.password) {
        // login successfully
        localStorage.setItem('user', JSON.stringify({ username }));

        if (remember) {
            localStorage.setItem('remember', 'true');
        }

        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password.');
    }
});