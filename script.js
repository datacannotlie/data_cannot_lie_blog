// script.js

document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptCookies = document.getElementById('accept-cookies');
    const rejectCookies = document.getElementById('reject-cookies');

    // Check if the user has already accepted or rejected cookies
    if (!localStorage.getItem('cookieConsent')) {
        cookieConsent.style.display = 'block';
    }

    acceptCookies.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieConsent.style.display = 'none';
        // Additional logic for accepting cookies can be added here
    });

    rejectCookies.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'rejected');
        cookieConsent.style.display = 'none';
        // Additional logic for rejecting cookies can be added here
    });


});
