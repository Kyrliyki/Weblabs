-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Сен 24 2024 г., 17:28
-- Версия сервера: 8.0.30
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `DevSell`
--

-- --------------------------------------------------------

--
-- Структура таблицы `Game`
--

CREATE TABLE `Game` (
  `id` int NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `infoId` int NOT NULL,
  `systemRequirements` text NOT NULL,
  `price` int NOT NULL,
  `discount` int NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Game`
--

INSERT INTO `Game` (`id`, `title`, `description`, `infoId`, `systemRequirements`, `price`, `discount`, `image`) VALUES
(1, 'Elden Ring', 'НОВЫЙ ФЭНТЕЗИЙНЫЙ РОЛЕВОЙ БОЕВИК. Восстань, погасшая душа! Междуземье ждёт своего повелителя. Пусть благодать приведёт тебя к Кольцу Элден.\r\n', 1, '64-разрядные процессор и операционная система: Windows 10 \r\n        Процессор: INTEL CORE I5-8400 or AMD RYZEN 3 3300X \r\n        Оперативная память: 12 GB \r\n        Видеокарта: NVIDIA GEFORCE GTX 1060 3 GB or AMD RADEON RX 580 4 GB\r\n        DirectX:версии 12 \r\n        Место на диске: 60 GB\r\n        Звуковая карта: Windows Compatible Audio Device', 1999, 60, 'images/games/eldenring.jpg'),
(2, 'DayZ', 'Постапокалиптический survival horror. Выживай в мире, полном зомби и бандитов.\r\n', 2, 'Windows 10, Intel Core i7, 16GB RAM, GTX 1080', 999, 50, 'images/games/dayz.jpg'),
(3, 'Cyberpunk 2077', 'Ролевая игра в открытом мире, происходящая в мрачном будущем. Окунись в мега-корпорации и мир кибернетических модификаций.\r\n', 3, 'ОС: Windows 10 64-bit \r\n        Процессор: Intel Core i7-4790 or AMD Ryzen 3 3200G \r\n        ОЗУ: 12 GB \r\n        Видеокарта: GTX 1060 6GB / AMD Radeon R9 Fury', 2499, 50, 'images/games/cyberpunk.png'),
(4, 'The Witcher 3: Wild Hunt', 'Открой мир фэнтези как ведьмак Геральт из Ривии и борись с монстрами, выполняя контракты и исследуя древние секреты.', 4, 'ОС: 64-разрядная версия Windows 7, 8, 10 \r\n        Процессор: Intel Core i5-2500K или AMD Phenom II X4 940 \r\n        ОЗУ: 6 GB \r\n        Видеокарта: NVIDIA GeForce GTX 660 или AMD Radeon HD 7870', 1499, 40, 'images/games/witcher.jpg'),
(5, 'Red Dead Redemption 2', 'Эпический вестерн с открытым миром, где ты играешь за Артура Моргана и сражаешься за выживание Датчевой банды.', 5, 'ОС: Windows 10 \r\n        Процессор: Intel Core i7-4770K / AMD Ryzen 5 1500X \r\n        ОЗУ: 12 GB \r\n        Видеокарта: Nvidia GeForce GTX 1060 / AMD Radeon RX 480', 2999, 35, 'images/games/rdr.webp'),
(6, 'DOOM Eternal', 'Сражайся с полчищами демонов в этом высокооктановом шутере от первого лица.', 6, 'ОС: Windows 10 64-bit \r\n        Процессор: Intel Core i5 или AMD Ryzen 3 \r\n        ОЗУ: 8 GB \r\n        Видеокарта: NVIDIA GeForce GTX 1060 (6GB) / AMD Radeon RX 480 (8GB)', 1999, 55, 'images/games/doom.jpg'),
(7, 'Assassin\'s Creed Valhalla', 'Исследуй эпоху викингов и веди набеги на вражеские территории в Англии, чтобы захватить новые земли.', 7, 'ОС: Windows 10 \r\n        Процессор: Intel Core i7-9700K / AMD Ryzen 7 3700X \r\n        ОЗУ: 16 GB \r\n        Видеокарта: NVIDIA GeForce RTX 2080 / AMD Radeon VII`', 2599, 30, 'images/games/acv.jpg'),
(8, 'Far Cry 6', 'Окунись в тропическую революцию против диктатуры на острове Яра.', 8, 'ОС: Windows 10 64-bit \r\n        Процессор: Intel Core i5-4460 / AMD Ryzen 3 1200 \r\n        ОЗУ: 8 GB \r\n        Видеокарта: NVIDIA GeForce GTX 960 / AMD Radeon R9 380', 2199, 45, 'images/games/farcry.jpg'),
(9, 'Horizon Zero Dawn', 'Путешествуй по миру, наполненному роботами-зверями, в роли Элой и разгадывай тайны цивилизации.', 9, 'ОС: Windows 10 64-bit \r\n        Процессор: Intel Core i5-2500K / AMD FX 6300 \r\n        ОЗУ: 8 GB \r\n        Видеокарта: NVIDIA GeForce GTX 780 / AMD Radeon R9 290', 1799, 50, 'images/games/hzd.jpg'),
(10, 'Resident Evil Village', 'Продолжение хоррор-франшизы Resident Evil, где игроки сражаются с вампирами и оборотнями в зловещей деревне.', 10, 'ОС: Windows 10 64-bit \r\n        Процессор: Intel Core i7-8700 / AMD Ryzen 5 3600 \r\n        ОЗУ: 16 GB \r\n        Видеокарта: NVIDIA GeForce GTX 1070 / AMD Radeon RX 5700', 2499, 40, 'images/games/rev.jpg'),
(11, 'Death Stranding', 'Необычный и захватывающий симулятор доставки в постапокалиптическом мире от Хидэо Кодзимы.', 11, 'ОС: Windows 10 \r\n        Процессор: Intel Core i5-3470 / AMD Ryzen 3 1200 \r\n        ОЗУ: 8 GB \r\n        Видеокарта: GeForce GTX 1050 3GB / AMD Radeon RX 560 4GB', 2299, 35, 'images/games/ds.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `gameOrder`
--

CREATE TABLE `gameOrder` (
  `id` int NOT NULL,
  `gameId` int NOT NULL,
  `orderId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `info`
--

CREATE TABLE `info` (
  `id` int NOT NULL,
  `genre` text NOT NULL,
  `language` text NOT NULL,
  `releaseDate` text NOT NULL,
  `creator` text NOT NULL,
  `distributor` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `info`
--

INSERT INTO `info` (`id`, `genre`, `language`, `releaseDate`, `creator`, `distributor`) VALUES
(1, 'Action, Fighting, RPG', 'Eng, Ru', '21 июня 2024г.', 'FromSoftware inc.', 'FromSoftware, Bandai Namco'),
(2, 'Survival, Horror', 'Eng, Ru', '15 декабря 2023г.', 'Bohemia Interactive', 'Bohemia Interactive'),
(3, 'Action, RPG', 'Eng, Ru', '10 декабря 2020г.', 'CD Projekt Red', 'CD Projekt'),
(4, 'RPG, Open World', 'Eng, Ru', '19 мая 2015г.', 'CD Projekt Red', 'CD Projekt'),
(5, 'Action, Adventure', 'Eng, Ru', '5 ноября 2019г.', 'Rockstar Games', 'Rockstar Games'),
(6, 'Shooter, Action', 'Eng, Ru', '20 марта 2020г.', 'id Software', 'Bethesda'),
(7, 'Action, RPG', 'Eng, Ru', '10 ноября 2020г.', 'Ubisoft', 'Ubisoft'),
(8, 'Shooter, Action', 'Eng, Ru', '7 октября 2021г.', 'Ubisoft', 'Ubisoft'),
(9, 'Action, RPG', 'Eng, Ru', '7 августа 2020г.', 'Guerrilla Games', 'Sony Interactive Entertainment'),
(10, 'Horror, Action', 'Eng, Ru', '7 мая 2021г.', 'Capcom', 'Capcom'),
(11, 'Action, Adventure', 'Eng, Ru', '14 июля 2020г.', 'Kojima Productions', '505 Games');

-- --------------------------------------------------------

--
-- Структура таблицы `orders`
--

CREATE TABLE `orders` (
  `id` int NOT NULL,
  `user` text NOT NULL,
  `email` text NOT NULL,
  `address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Game`
--
ALTER TABLE `Game`
  ADD PRIMARY KEY (`id`),
  ADD KEY `infoId` (`infoId`);

--
-- Индексы таблицы `gameOrder`
--
ALTER TABLE `gameOrder`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gameId` (`gameId`),
  ADD KEY `orderId` (`orderId`);

--
-- Индексы таблицы `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `Game`
--
ALTER TABLE `Game`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT для таблицы `gameOrder`
--
ALTER TABLE `gameOrder`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `info`
--
ALTER TABLE `info`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT для таблицы `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `Game`
--
ALTER TABLE `Game`
  ADD CONSTRAINT `game_ibfk_1` FOREIGN KEY (`infoId`) REFERENCES `info` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `gameOrder`
--
ALTER TABLE `gameOrder`
  ADD CONSTRAINT `gameorder_ibfk_1` FOREIGN KEY (`gameId`) REFERENCES `Game` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `gameorder_ibfk_2` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
