const birthdayMessage = document.getElementById('birthdayMessage');

setInterval(() => {
    birthdayMessage.style.animation = 'none';
    setTimeout(() => {
        birthdayMessage.style.animation = 'bounce 2s infinite';
    }, 10);
}, 5000);
