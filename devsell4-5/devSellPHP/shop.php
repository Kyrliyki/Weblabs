<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DevSell</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="main.css">
    <link rel="icon" href="images/icons/faviconWhite.png" href="path-to-favicon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light ">
          <a href="index.html" class="navbar-brand right unique-text-color margin-left " >
            <img class="logo mirror-image "src="images/icons/Group 1.png" alt="logo">
          </a>
          <div class="collapse navbar-collapse d-flex flex-row-reverse bd-highlight" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="shop.php">Магазин</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Новости</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">О нас</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Профиль</a>
              </li>
              <a class="btn btn-outline-primary margin-right" id="cartBtn" href="cart.php">
                Корзина (<span id="cartCounter">0</span>)
              </a>
              
            </ul>
          </div>
        </div>

        <div>
          
        </div>
        
        </nav>
      </header>

      <div class="container">
        <h1 class="my-4 poiret-one-regular">Каталог</h1>
        
        <input type="text" id="searchInput" class="form-control search-bar" placeholder="Поиск по играм...">
    
        <div class="row main-text" id="gamesContainer">
            <!-- Сюда вставляются карточки-->
        </div>
    </div>
    
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    
  

    <script src="main.js"></script>
    
    
    </body>
    </html>
 