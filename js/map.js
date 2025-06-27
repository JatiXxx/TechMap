// Дані магазинів
const stores = [
    {
        name: "Яблука (Yabluka)",
        address: "вул. Миколи Оводова, 51 (ТРЦ SkyPark)",
        coordinates: [49.23354208762108, 28.47065453696892],
        type: "apple",
        hours: "10:00 - 20:00",
        rating: 4.8
    },
    {
        name: "Мій Гаджет",
        address: "вул. Миколи Оводова, 51 (ТРЦ SkyPark)",
        coordinates: [49.233880567363435, 28.470501077476],
        type: "apple",
        hours: "10:00 - 21:00",
        rating: 4.6
    },
    {
        name: "MOYO",
        address: "вул. 600-річчя, 17-E (ТРЦ Megamoll)",
        coordinates: [49.22831670850268, 28.427738506158455],
        type: "electronics",
        hours: "09:00 - 21:00",
        rating: 4.5
    },
    {
        name: "MOYO",
        address: "вул. Миколи Оводова, 51 (ТРЦ SkyPark)",
        coordinates: [49.23352199979594, 28.471279013626443],
        type: "electronics",
        hours: "10:00 - 21:00",
        rating: 4.5
    },
    {
        name: "Allo",
        address: "пр. Коцюбинського, 4",
        coordinates: [49.23954527756026, 28.508048362936435],
        type: "electronics",
        hours: "09:00 - 21:00",
        rating: 4.3
    },
    {
        name: "Allo",
        address: "вул. 600-річчя, 17-E (ТРЦ Megamoll)",
        coordinates: [49.22785213129945, 28.42733219207261],
        type: "electronics",
        hours: "09:00 - 21:00",
        rating: 4.3
    },
    {
        name: "Allo",
        address: "вул. Миколи Оводова, 51 (ТРЦ SkyPark)",
        coordinates: [49.23366823773385, 28.469648106702987],
        type: "electronics",
        hours: "09:00 - 21:00",
        rating: 4.3
    },
    {
        name: "Jabko Apple Store",
        address: "вул. Миколи Оводова, 51 (ТРЦ SkyPark)",
        coordinates: [49.23328219923799, 28.47162283732122],
        type: "apple",
        hours: "09:00 - 21:00",
        rating: 4.7
    },
    {
        name: "Eldorado",
        address: "пр. Коцюбинського, 78",
        coordinates: [49.236345302523404, 28.486494494876304],
        type: "electronics",
        hours: "10:00 - 21:00",
        rating: 4.2
    },
    {
        name: "Samsung Experience Store",
        address: "вул. Миколи Оводова, 51 (ТРЦ SkyPark)",
        coordinates: [49.233401166755144, 28.471820405342633],
        type: "electronics",
        hours: "10:00 - 21:00",
        rating: 4.2
    },
    {
        name: "Citrus",
        address: "вул. Соборна, 22",
        coordinates: [49.233045830052866, 28.472397475693164],
        type: "electronics",
        hours: "10:00 - 20:00",
        rating: 4.4
    },
    {
        name: "VOLTI",
        address: "пр. Коцюбинського 70",
        coordinates: [49.238140266427415, 28.48995230108052],
        type: "electronics",
        hours: "10:00 - 21:00",
        rating: 4.4
    },
    {
        name: "Comfy",
        address: "вул. 600-річчя, 17-E (ТРЦ Megamoll)",
        coordinates: [49.22782825699212, 28.427575771821367],
        type: "electronics",
        hours: "10:00 - 22:00",
        rating: 4.5
    },
    {
        name: "Technomarket",
        address: "пр. Коцюбинського 4",
        coordinates: [49.239549086237396, 28.507985521637302],
        type: "computers",
        hours: "09:00 - 20:00",
        rating: 4.1
    },
    {
        name: "Technomarket",
        address: "пр. Коцюбинського 11-А",
        coordinates: [49.23900375872518, 28.501990596090486],
        type: "computers",
        hours: "09:00 - 20:00",
        rating: 4.1
    },
    {
        name: "Technomarket",
        address: "вул. Келецька 47д",
        coordinates: [49.22457912852444, 28.427872829021418],
        type: "computers",
        hours: "09:00 - 20:00",
        rating: 4.1
    },
    {
        name: "Jabko Apple Store",
        address: "пр. Юності 18",
        coordinates: [49.22639008797157, 28.411470382072043],
        type: "apple",
        hours: "10:00 - 20:00",
        rating: 4.7
    },
    {
        name: "Фокстрот",
        address: "вул. 600-річчя, 17-E (ТРЦ Megamoll)",
        coordinates: [49.228536055950016, 28.427569745031224],
        type: "electronics",
        hours: "10:00 - 22:00",
        rating: 4.3
    },
    {
        name: "Фокстрот",
        address: "вул. Келецька, 80",
        coordinates: [49.225906129347926, 28.413410804622863],
        type: "electronics",
        hours: "10:00 - 21:00",
        rating: 4.3
    },
    {
        name: "Фокстрот",
        address: "просп. Коцюбинського, 78",
        coordinates: [49.23639519725668, 28.48677183010657],
        type: "electronics",
        hours: "10:00 - 20:00",
        rating: 4.3
    }
];

// Ініціалізація карти
const map = L.map('map').setView([49.233333, 28.468333], 13);

// Додавання тайлів OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Створення груп маркерів за типами
const markerGroups = {
    all: L.layerGroup(),
    apple: L.layerGroup(),
    electronics: L.layerGroup(),
    computers: L.layerGroup()
};

// Кольори маркерів за типами
const markerColors = {
    apple: '#FF7043',
    electronics: '#00897B',
    computers: '#5C6BC0'
};

// Створення маркерів
stores.forEach(store => {
    // Для групи "all"
    const markerIconAll = L.divIcon({
        className: 'custom-marker',
        html: `<i data-lucide=\"map-pin\" style=\"color: ${markerColors[store.type]}\"></i>`,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
    });
    const markerAll = L.marker(store.coordinates, { icon: markerIconAll });
    const popupContent = `
        <div class=\"store-popup\">
            <h3>${store.name}</h3>
            <p>${store.address}</p>
            <p class=\"store-hours\">${store.hours}</p>
            <p>Рейтинг: ${store.rating} ⭐</p>
        </div>
    `;
    markerAll.bindPopup(popupContent);
    markerGroups.all.addLayer(markerAll);

    // Для групи за типом
    const markerIconType = L.divIcon({
        className: 'custom-marker',
        html: `<i data-lucide=\"map-pin\" style=\"color: ${markerColors[store.type]}\"></i>`,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
    });
    const markerType = L.marker(store.coordinates, { icon: markerIconType });
    markerType.bindPopup(popupContent);
    markerGroups[store.type].addLayer(markerType);
});

// Додавання всіх маркерів на карту за замовчуванням
markerGroups.all.addTo(map);

// Обробка кліків по кнопках фільтрів
document.querySelectorAll('.btn-filter').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        
        // Оновлення активної кнопки
        document.querySelectorAll('.btn-filter').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        
        // Очищення карти
        Object.values(markerGroups).forEach(group => {
            map.removeLayer(group);
        });
        
        // Додавання відфільтрованих маркерів
        markerGroups[filter].addTo(map);
        // Оновлення іконок Lucide після фільтрації
        lucide.createIcons();
        // Збільшення розміру іконок Lucide (маркерів) після фільтрації
        document.querySelectorAll('.custom-marker svg').forEach(svg => {
            svg.setAttribute('width', '36');
            svg.setAttribute('height', '36');
        });
    });
});

// Додавання кнопки "Моє місцезнаходження"
L.control.locate({
    position: 'bottomleft',
    strings: {
        title: "Показати моє місцезнаходження"
    },
    locateOptions: {
        enableHighAccuracy: true
    }
}).addTo(map);

// Оновлення іконок Lucide після створення маркерів
lucide.createIcons();

// Збільшення розміру іконок Lucide (маркерів)
document.querySelectorAll('.custom-marker svg').forEach(svg => {
    svg.setAttribute('width', '36');
    svg.setAttribute('height', '36');
});

// Оновлення карти при зміні теми
const mapThemeObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
            map.invalidateSize();
        }
    });
});

mapThemeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
}); 