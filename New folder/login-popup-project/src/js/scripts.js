document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.container1 .box');
    const loginPopup = document.createElement('div');
    loginPopup.classList.add('login-popup');
    loginPopup.innerHTML = `
        <div class="popup-content">
            <span class="close-popup">&times;</span>
            <h2>Login</h2>
            <form id="login-form">
                <label for="username">Username:</label>
                <input type="text" id="username1" name="username" required>
                <label for="password">Password:</label>
                <input type="password" id="password1" name="password" required>
                <button type="submit">Login</button>
            </form>
        </div>
    `;
    document.body.appendChild(loginPopup);

    const closePopup = loginPopup.querySelector('.close-popup');
    closePopup.addEventListener('click', function() {
        loginPopup.style.display = 'none';
    });

    boxes.forEach(box => {
        box.addEventListener('click', function() {
            loginPopup.style.display = 'block';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === loginPopup) {
            loginPopup.style.display = 'none';
        }
    });
});