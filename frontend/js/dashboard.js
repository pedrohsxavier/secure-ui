Auth.requireAuth();

document.getElementById('logout').addEventListener('click', () => {
    Auth.logout();
});