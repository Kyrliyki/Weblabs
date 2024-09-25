var Games;

document.addEventListener("DOMContentLoaded", function() {
    // AJAX запрос к PHP скрипту
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Парсинг JSON данных и сохранение их в JavaScript массиве
            console.log(xhr)
            Games = JSON.parse(xhr.responseText);
            console.log(Games);
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
        };
    };
    xhr.open("GET", "ajax.php", true);
    xhr.send();
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
                            <a href="item.php?index=${index}" class="btn btn-primary">Подробнее</a>
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

    const formData = new FormData;
    cart.forEach(game => {
        console.log(game)
        formData.append('games[]', game.id);    
    });
        formData.append('name', name);
        formData.append('email', email);
        formData.append('address', address);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "order.php", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.responseText);
                for (const pair of formData.entries()) {
                    console.log(pair[0] + ': ' + pair[1]);
                }
                alert(`Спасибо за ваш заказ, ${name}!`);
                
                // Очищаем корзину после заказа
                localStorage.removeItem('cart');
                loadCart();  // Обновляем корзину после очистки
                updateCartCounter();  // Обновляем счетчик корзины
    
            }
        };
        xhr.send(formData);
    console.log(`Имя: ${name}, Эл. почта: ${email}, Адрес: ${address} Заказано: `);
    


    cart.forEach((game, index) => {
        console.log(`${index} : ${game.title}, ${game.price}, ${game.discount}`)
    });
    
    


    
    }
});

// Загружаем корзину при загрузке страницы
loadCart();
updateCartCounter();