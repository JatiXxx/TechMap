// Отримуємо форму
const contactForm = document.getElementById('contactForm');

// Функція для показу повідомлення
function showMessage(message, isSuccess = true) {
    // Видаляємо попереднє повідомлення, якщо воно є
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Створюємо новий елемент повідомлення
    const messageElement = document.createElement('div');
    messageElement.className = `message ${isSuccess ? 'success' : 'error'}`;
    messageElement.textContent = message;

    // Додаємо стилі
    messageElement.style.padding = '1rem';
    messageElement.style.marginTop = '1rem';
    messageElement.style.borderRadius = 'var(--border-radius-md)';
    messageElement.style.backgroundColor = isSuccess ? '#4CAF50' : '#f44336';
    messageElement.style.color = 'white';
    messageElement.style.textAlign = 'center';

    // Додаємо повідомлення після форми
    contactForm.appendChild(messageElement);

    // Видаляємо повідомлення через 5 секунд
    setTimeout(() => {
        messageElement.remove();
    }, 5000);
}

// Обробник відправки форми
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Отримуємо дані форми
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Валідація даних
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        showMessage('Будь ласка, заповніть всі поля', false);
        return;
    }

    // Валідація email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showMessage('Будь ласка, введіть коректну email адресу', false);
        return;
    }

    try {
        // В реальному проекті тут був би запит до сервера
        // Імітуємо відправку даних
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Очищаємо форму
        contactForm.reset();

        // Показуємо повідомлення про успіх
        showMessage('Дякуємо за ваше повідомлення! Ми зв\'яжемося з вами найближчим часом.');
    } catch (error) {
        // Показуємо повідомлення про помилку
        showMessage('Виникла помилка при відправці повідомлення. Будь ласка, спробуйте пізніше.', false);
    }
}); 