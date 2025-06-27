// Дані магазинів (повний список)
const stores = [
    {
        name: "Яблука (Yabluka)",
        address: "вул. Миколи Оводова, 51 (ТРЦ SkyPark)",
        type: "apple",
        hours: "10:00 - 20:00",
        rating: 4.8,
        phone: "0 (800) 214 214",
        website: "https://yabloki.ua/"
    },
    {
        name: "Мій Гаджет",
        address: "вул. Миколи Оводова, 51 (ТРЦ SkyPark)",
        type: "apple",
        hours: "10:00 - 21:00",
        rating: 4.6,
        phone: "0(800)-20-08-20",
        website: "https://mygadget.ua"
    },
    {
        name: "MOYO",
        address: "вул. 600-річчя, 17-E (ТРЦ Megamoll)",
        type: "electronics",
        hours: "09:00 - 21:00",
        rating: 4.5,
        phone: "0 800 507 800",
        website: "https://moyo.ua"
    },
    {
        name: "MOYO",
        address: "вул. Миколи Оводова, 51 (ТРЦ SkyPark)",
        type: "electronics",
        hours: "10:00 - 21:00",
        rating: 4.5,
        phone: "0 800 507 800",
        website: "https://moyo.ua"
    },
    {
        name: "Allo",
        address: "пр. Коцюбинського, 4",
        type: "electronics",
        hours: "09:00 - 21:00",
        rating: 4.3,
        phone: "+380 (800) 300-100",
        website: "https://allo.ua"
    },
    {
        name: "Allo",
        address: "вул. 600-річчя, 17-E (ТРЦ Megamoll)",
        type: "electronics",
        hours: "09:00 - 21:00",
        rating: 4.3,
        phone: "+380 (800) 300-100",
        website: "https://allo.ua"
    },
    {
        name: "Allo",
        address: "вул. Миколи Оводова, 51 (ТРЦ SkyPark)",
        type: "electronics",
        hours: "09:00 - 21:00",
        rating: 4.3,
        phone: "+380 (800) 300-100",
        website: "https://allo.ua"
    },
    {
        name: "Jabko Apple Store",
        address: "вул. Миколи Оводова, 51 (ТРЦ SkyPark)",
        type: "apple",
        hours: "09:00 - 21:00",
        rating: 4.7,
        phone: "0 800 30 777 5",
        website: "https://jabko.ua"
    },
    {
        name: "Eldorado",
        address: "пр. Коцюбинського, 78",
        type: "electronics",
        hours: "10:00 - 21:00",
        rating: 4.2,
        phone: "+380 (800) 217 600",
        website: "https://eldorado.ua"
    },
    {
        name: "Samsung Experience Store",
        address: "вул. Миколи Оводова, 51 (ТРЦ SkyPark)",
        type: "electronics",
        hours: "10:00 - 21:00",
        rating: 4.2,
        phone: "0 800 303 707",
        website: "https://samsungshop.com.ua/"
    },
    {
        name: "Citrus",
        address: "вул. Соборна, 22",
        type: "electronics",
        hours: "10:00 - 20:00",
        rating: 4.4,
        phone: "044 502 70 20",
        website: "https://citrus.ua"
    },
    {
        name: "VOLTI",
        address: "пр. Коцюбинського 70",
        type: "electronics",
        hours: "10:00 - 20:00",
        rating: 4.4,
        phone: "0 800 30 34 34",
        website: "https://volti.ua/"
    },
    {
        name: "Comfy",
        address: "вул. 600-річчя, 17-E (ТРЦ Megamoll)",
        type: "electronics",
        hours: "10:00 - 22:00",
        rating: 4.5,
        phone: "+380 (800) 303-505",
        website: "https://comfy.ua"
    },
    {
        name: "Technomarket",
        address: "пр. Коцюбинського 4",
        type: "computers",
        hours: "09:00 - 20:00",
        rating: 4.1,
        phone: "+380 (432) 555-555",
        website: "https://tehnomarket.ua/"
    },
    {
        name: "Technomarket",
        address: "пр. Коцюбинського 11-А",
        type: "computers",
        hours: "09:00 - 20:00",
        rating: 4.1,
        phone: "+380 (432) 555-555",
        website: "https://tehnomarket.ua/"
    },
    {
        name: "Technomarket",
        address: "вул. Келецька 47д",
        type: "computers",
        hours: "09:00 - 20:00",
        rating: 4.1,
        phone: "+380 (432) 555-555",
        website: "https://tehnomarket.ua/"
    },
    {
        name: "Jabko Apple Store",
        address: "пр. Юності 18",
        type: "apple",
        hours: "10:00 - 20:00",
        rating: 4.7,
        phone: "0 800 30 777 5",
        website: "https://jabko.ua"
    },
    {
        name: "Фокстрот",
        address: "вул. 600-річчя, 17-E (ТРЦ Megamoll)",
        type: "electronics",
        hours: "10:00 - 22:00",
        rating: 4.3,
        phone: "+380 (800) 300-353",
        website: "https://foxtrot.ua"
    },
    {
        name: "Фокстрот",
        address: "вул. Келецька, 80",
        type: "electronics",
        hours: "10:00 - 21:00",
        rating: 4.3,
        phone: "+380 (800) 300-353",
        website: "https://foxtrot.ua"
    },
    {
        name: "Фокстрот",
        address: "просп. Коцюбинського, 78",
        type: "electronics",
        hours: "10:00 - 21:00",
        rating: 4.3,
        phone: "+380 (800) 300-353",
        website: "https://foxtrot.ua"
    }
];

// Функція для створення зірок рейтингу
function createRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars.push('<i data-lucide="star"></i>');
        } else if (i === fullStars && hasHalfStar) {
            stars.push('<i data-lucide="star-half"></i>');
        } else {
            stars.push('<i data-lucide="star" class="empty"></i>');
        }
    }

    return stars.join('');
}

// Функція для створення картки магазину
function createStoreCard(store) {
    const card = document.createElement('div');
    card.className = `store-card ${store.type}`;
    
    card.innerHTML = `
        <h3>
            <i data-lucide="shopping-bag"></i>
            ${store.name}
        </h3>
        <div class="store-info">
            <p>
                <i data-lucide="map-pin"></i>
                ${store.address}
            </p>
            <p>
                <i data-lucide="clock"></i>
                ${store.hours}
            </p>
            <p>
                <i data-lucide="phone"></i>
                ${store.phone}
            </p>
            <p>
                <i data-lucide="globe"></i>
                <a href="${store.website}" target="_blank" rel="noopener noreferrer">${store.website}</a>
            </p>
        </div>
        <div class="store-rating">
            <div class="rating-stars">
                ${createRatingStars(store.rating)}
            </div>
            <span class="rating-value">${store.rating.toFixed(1)}</span>
        </div>
        <div class="store-tags">
            <span class="store-tag ${store.type}">${store.type === 'apple' ? 'Apple' : store.type === 'electronics' ? 'Електроніка' : 'Компʼютери'}</span>
        </div>
        <a href="map.html" class="map-link">
            <i data-lucide="map"></i>
            Показати на карті
        </a>
    `;

    return card;
}

// Функція для відображення магазинів
function displayStores(filter = 'all') {
    const grid = document.getElementById('rating-grid');
    grid.innerHTML = '';

    // Сортуємо магазини за рейтингом
    const sortedStores = [...stores].sort((a, b) => b.rating - a.rating);

    sortedStores.forEach(store => {
        if (filter === 'all' || store.type === filter) {
            const card = createStoreCard(store);
            grid.appendChild(card);
        }
    });

    // Оновлюємо іконки
    lucide.createIcons();
}

// Обробка фільтрів
const filterButtons = document.querySelectorAll('.btn-filter');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Видалення активного класу з усіх кнопок
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Фільтрація магазинів
        const filterType = button.dataset.filter;
        displayStores(filterType);
    });
});

// Початкове відображення всіх магазинів
displayStores(); 