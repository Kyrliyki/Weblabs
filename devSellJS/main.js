var Games = [
    {title: "Elden Ring",
        description:`НОВЫЙ ФЭНТЕЗИЙНЫЙ РОЛЕВОЙ БОЕВИК. Восстань, погасшая душа! Междуземье ждёт своего повелителя. Пусть благодать приведёт тебя к Кольцу Элден.`,
        info:{genre:'Action, Fighting, RPG', language:'Eng, Ru', release: '21 июня 2024г.' , creator: 'FromSoftware inc' , distributor: 'FromSoftware, Bandai Namco' },
        systemRequirements: `64-разрядные процессор и операционная система: Windows 10 
        Процессор: INTEL CORE I5-8400 or AMD RYZEN 3 3300X 
        Оперативная память: 12 GB 
        Видеокарта: NVIDIA GEFORCE GTX 1060 3 GB or AMD RADEON RX 580 4 GB
        DirectX:версии 12 
        Место на диске: 60 GB
        Звуковая карта: Windows Compatible Audio Device`,
        price: 1999,
        discount: 60,
        image: "images/games/eldenring.jpg"
    },

    {title: "DayZ",
        description:`Постапокалиптический survival horror. Выживай в мире, полном зомби и бандитов.`,
        info:{genre:'Survival, Horror', language:'Eng, Ru', release: '15 декабря 2023г.' , creator: 'Bohemia Interactive' , distributor: 'Bohemia Interactive' },
        systemRequirements: `Windows 10, Intel Core i7, 16GB RAM, GTX 1080`,
        price: 999,
        discount: 60,
        image: "images/games/dayz.jpg"
    },
    {
        title: "Cyberpunk 2077",
        description: "Ролевая игра в открытом мире, происходящая в мрачном будущем. Окунись в мега-корпорации и мир кибернетических модификаций.",
        info: { genre: "Action, RPG", language: "Eng, Ru", release: "10 декабря 2020г.", creator: "CD Projekt Red", distributor: "CD Projekt" },
        systemRequirements: `
        ОС: Windows 10 64-bit 
        Процессор: Intel Core i7-4790 or AMD Ryzen 3 3200G 
        ОЗУ: 12 GB 
        Видеокарта: GTX 1060 6GB / AMD Radeon R9 Fury`,
        price: 2499,
        discount: 50,
        image: "images/games/cyberpunk.png",
        backgorund: "src"
    },
    {
        title: "The Witcher 3: Wild Hunt",
        description: "Открой мир фэнтези как ведьмак Геральт из Ривии и борись с монстрами, выполняя контракты и исследуя древние секреты.",
        info: { genre: "RPG, Open World", language: "Eng, Ru", release: "19 мая 2015г.", creator: "CD Projekt Red", distributor: "CD Projekt" },
        systemRequirements: `
        ОС: 64-разрядная версия Windows 7, 8, 10 
        Процессор: Intel Core i5-2500K или AMD Phenom II X4 940 
        ОЗУ: 6 GB 
        Видеокарта: NVIDIA GeForce GTX 660 или AMD Radeon HD 7870`,
        price: 1499,
        discount: 40,
        image: "images/games/witcher.jpg",
        backgorund: "src"
    },
    {
        title: "Red Dead Redemption 2",
        description: "Эпический вестерн с открытым миром, где ты играешь за Артура Моргана и сражаешься за выживание Датчевой банды.",
        info: { genre: "Action, Adventure", language: "Eng, Ru", release: "5 ноября 2019г.", creator: "Rockstar Games", distributor: "Rockstar Games" },
        systemRequirements: `
        ОС: Windows 10 
        Процессор: Intel Core i7-4770K / AMD Ryzen 5 1500X 
        ОЗУ: 12 GB 
        Видеокарта: Nvidia GeForce GTX 1060 / AMD Radeon RX 480`,
        price: 2999,
        discount: 35,
        image: "images/games/rdr.webp",
        backgorund: "src"
    },
    {
        title: "DOOM Eternal",
        description: "Сражайся с полчищами демонов в этом высокооктановом шутере от первого лица.",
        info: { genre: "Shooter, Action", language: "Eng, Ru", release: "20 марта 2020г.", creator: "id Software", distributor: "Bethesda" },
        systemRequirements: `
        ОС: Windows 10 64-bit 
        Процессор: Intel Core i5 или AMD Ryzen 3 
        ОЗУ: 8 GB 
        Видеокарта: NVIDIA GeForce GTX 1060 (6GB) / AMD Radeon RX 480 (8GB)`,
        price: 1999,
        discount: 55,
        image: "images/games/doom.jpg",
        backgorund: "src"
    },
    {
        title: "Assassin's Creed Valhalla",
        description: "Исследуй эпоху викингов и веди набеги на вражеские территории в Англии, чтобы захватить новые земли.",
        info: { genre: "Action, RPG", language: "Eng, Ru", release: "10 ноября 2020г.", creator: "Ubisoft", distributor: "Ubisoft" },
        systemRequirements: `
        ОС: Windows 10 
        Процессор: Intel Core i7-9700K / AMD Ryzen 7 3700X 
        ОЗУ: 16 GB 
        Видеокарта: NVIDIA GeForce RTX 2080 / AMD Radeon VII`,
        price: 2599,
        discount: 30,
        image: "images/games/acv.jpg",
        backgorund: "src"
    },
    {
        title: "Far Cry 6",
        description: "Окунись в тропическую революцию против диктатуры на острове Яра.",
        info: { genre: "Shooter, Action", language: "Eng, Ru", release: "7 октября 2021г.", creator: "Ubisoft", distributor: "Ubisoft" },
        systemRequirements: `
        ОС: Windows 10 64-bit 
        Процессор: Intel Core i5-4460 / AMD Ryzen 3 1200 
        ОЗУ: 8 GB 
        Видеокарта: NVIDIA GeForce GTX 960 / AMD Radeon R9 380`,
        price: 2199,
        discount: 45,
        image: "images/games/farcry.jpg",
        backgorund: "src"
    },
    {
        title: "Horizon Zero Dawn",
        description: "Путешествуй по миру, наполненному роботами-зверями, в роли Элой и разгадывай тайны цивилизации.",
        info: { genre: "Action, RPG", language: "Eng, Ru", release: "7 августа 2020г.", creator: "Guerrilla Games", distributor: "Sony Interactive Entertainment" },
        systemRequirements: `
        ОС: Windows 10 64-bit 
        Процессор: Intel Core i5-2500K / AMD FX 6300 
        ОЗУ: 8 GB 
        Видеокарта: NVIDIA GeForce GTX 780 / AMD Radeon R9 290`,
        price: 1799,
        discount: 50,
        image: "images/games/hzd.jpg",
        backgorund: "src"
    },
    {
        title: "Resident Evil Village",
        description: "Продолжение хоррор-франшизы Resident Evil, где игроки сражаются с вампирами и оборотнями в зловещей деревне.",
        info: { genre: "Horror, Action", language: "Eng, Ru", release: "7 мая 2021г.", creator: "Capcom", distributor: "Capcom" },
        systemRequirements: `
        ОС: Windows 10 64-bit 
        Процессор: Intel Core i7-8700 / AMD Ryzen 5 3600 
        ОЗУ: 16 GB 
        Видеокарта: NVIDIA GeForce GTX 1070 / AMD Radeon RX 5700`,
        price: 2499,
        discount: 40,
        image: "images/games/rev.jpg",
        backgorund: "src"
    },
    {
        title: "Death Stranding",
        description: "Необычный и захватывающий симулятор доставки в постапокалиптическом мире от Хидэо Кодзимы.",
        info: { genre: "Action, Adventure", language: "Eng, Ru", release: "14 июля 2020г.", creator: "Kojima Productions", distributor: "505 Games" },
        systemRequirements: `
        ОС: Windows 10 
        Процессор: Intel Core i5-3470 / AMD Ryzen 3 1200 
        ОЗУ: 8 GB 
        Видеокарта: GeForce GTX 1050 3GB / AMD Radeon RX 560 4GB`,
        price: 2299,
        discount: 35,
        image: "images/games/ds.jpg"}

];

document.addEventListener("DOMContentLoaded", function() {
    
            
            if (window.location.href.match("shop")){
                // Отображаем все игры
                displayGames(Games);
            
                // Поиск
                searchInput.addEventListener('input', function() {
                    const searchQuery = searchInput.value.toLowerCase();
                    const filteredGames = Games.filter(game => game.title.toLowerCase().includes(searchQuery) || game.description.toLowerCase().includes(searchQuery));
                    displayGames(filteredGames);
                    
                });
            } else if(window.location.href.match("item")){
                const params = new URLSearchParams(window.location.search);
                const gameIndex = params.get('index');
            
                    // Проверка наличия индекса и получение данных игры
                if (gameIndex !== null && Games[gameIndex]) {
                    const game = Games[gameIndex];
                    
                    // Разметка для вывода данных об игре
                    const detailsContainer = document.getElementById('game-details');
                    const detailsHTML = `
                        <div class="container mt-5">
                <div class="game-card">
                    <div class="game-header">
                        <h1>${game.title}</h1>
                    </div>
                    <div class="game-body">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="${game.image}" class="img-fluid" alt="${game.title}">
                            </div>
                            <div class="col-md-8">
                                <p class="description"><strong>Описание:</strong> ${game.description}</p>
                                <table class="table">
                                    <tr>
                                        <td><strong>Жанр:</strong></td>
                                        <td>${game.info.genre}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Язык:</strong></td>
                                        <td>${game.info.language}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Дата выхода:</strong></td>
                                        <td>${game.info.release}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Создатель:</strong></td>
                                        <td>${game.info.creator}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Дистрибьютор:</strong></td>
                                        <td>${game.info.distributor}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Системные требования:</strong></td>
                                        <td>${game.systemRequirements}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <p><strong>Цена:</strong> <span class="priceMain">${game.price} ₽</span></p>
                                <p><strong>Скидка:</strong> <span class="discount">${game.discount}%</span></p>
                            </div>
                            <div class="col-md-6 text-right">
                                <button class="btn btn-success" id="addToCartBtn">В корзину</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    `;
                    detailsContainer.innerHTML = detailsHTML;
                        // Добавляем обработчик для кнопки "В корзину"
                document.getElementById('addToCartBtn').addEventListener('click', () => addToCart(game));
                } else {
                    // Если индекс не найден, выводим сообщение
                    document.getElementById('game-details').innerHTML = '<p>Игра не найдена</p>';
                }
            };
});

const gamesContainer = document.getElementById('gamesContainer');
const searchInput = document.getElementById('searchInput');
    
        // Функция для генерации карточек динамически
    function displayGames(gamesArray) {
        gamesContainer.innerHTML = ''; 
        gamesArray.forEach((game, index) => {
            const discountPrice = game.price * (1 - game.discount / 100);
            const gameCard = `
                <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <img src="${game.image}" class="card-img-top" alt="${game.title}">
                        <div class="card-body">
                            <h5 class="card-title">${game.title}</h5>
                            
                            <p><strong>Жанр:</strong> ${game.info.genre}</p>
                            <p><strong>Цена:</strong> <del>${game.price} ₽</del> <span class="text-danger">${discountPrice.toFixed(2)} ₽</span> (${game.discount}% скидка)</p>
                            <a href="item.html?index=${index}" class="btn btn-primary">Подробнее</a>
                        </div>
                    </div>
                </div>
            `;
                gamesContainer.innerHTML += gameCard;
            });
        }
        



// Инициализация локальной корзины, если она не существует
if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
}

// Функция добавления игры в корзину
function addToCart(game) {
    let cart = JSON.parse(localStorage.getItem('cart'));  // Получаем корзину
    
    cart.push(game);  // Добавляем выбранную игру
    localStorage.setItem('cart', JSON.stringify(cart));  // Сохраняем корзину в localStorage
    updateCartCounter();  // Обновляем счетчик
    
}

// Функция для обновления счетчика корзины
function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    document.getElementById('cartCounter').textContent = cart.length;
}
updateCartCounter();

// Получение товаров из localStorage
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cartItems');
    let total = 0;

    cartItemsContainer.innerHTML = '';  // Очищаем контейнер перед загрузкой

    // Генерация списка товаров в корзине
    cart.forEach((game, index) => {
        const gameHTML = `
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="${game.image}" class="card-img" alt="${game.title}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${game.title}</h5>
                            <p class="card-text">Цена: ${game.price} ₽</p>
                            <p class="card-text">Скидка: ${game.discount}%</p>
                            <button class="btn btn-danger" onclick="removeFromCart(${index})">Удалить</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        cartItemsContainer.innerHTML += gameHTML;
        total += game.price / 100 * game.discount ;
    });

    // Обновляем итоговую сумму
    document.getElementById('totalPrice').textContent = `Итого: ${total.toFixed(2)} ₽`;
}

// Функция удаления товара из корзины
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(index, 1);  // Удаляем игру по индексу
    localStorage.setItem('cart', JSON.stringify(cart));  // Сохраняем обновленную корзину
    loadCart();  // Обновляем отображение корзины
    updateCartCounter();  // Обновляем счетчик корзины
}

// Функция обновления счетчика корзины
function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cartCounter').textContent = cart.length;
}

// Обработка формы заказа
document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length == 0) {
        alert("Добавьте в корзину хотя бы одну игру")
    } else{
    // Получаем данные формы
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    
    cart.forEach(game => {
        console.log(game)
           
    });
        
                
                alert(`Спасибо за ваш заказ, ${name}!`);
                
                // Очищаем корзину после заказа
                localStorage.removeItem('cart');
                loadCart();  // Обновляем корзину после очистки
                updateCartCounter();  // Обновляем счетчик корзины
    
    
    console.log(`Имя: ${name}, Эл. почта: ${email}, Адрес: ${address} Заказано: `);
    


    cart.forEach((game, index) => {
        console.log(`${index} : ${game.title}, ${game.price}, ${game.discount}`)
    });
    
    


    
    }
});

// Загружаем корзину при загрузке страницы
loadCart();
updateCartCounter();