// Handle cookies banner
window.onload = function() {
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookies-banner').style.display = 'block';
    }

    document.getElementById('accept-cookies').onclick = function() {
        localStorage.setItem('cookiesAccepted', 'true');
        document.getElementById('cookies-banner').style.display = 'none';
    };
};
