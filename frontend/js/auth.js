const Auth = {
    get() {
        return JSON.parse(localStorage.getItem('auth'));
    },

    login(data) {
        localStorage.setItem('auth', JSON.stringify(data));
    },

    getToken() {
        return this.get()?.token;
    },

    isLogged() {
        return !!this.get()?.token;
    },

    logout() {
        localStorage.removeItem('auth');
        window.location.href = 'index.html';
    },

    requireAuth() {
        if (!this.isLogged()) {
            window.location.href = 'index.html';
        }
    }
};