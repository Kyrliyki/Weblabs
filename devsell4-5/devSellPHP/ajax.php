<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "DevSell";

// Подключение к базе данных
$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Ошибка подключения: " . mysqli_connect_error());
}

// SQL-запрос для выборки данных из таблиц games и info с объединением
$sql = "SELECT g.id, g.title, g.description, g.systemRequirements, g.price, g.discount, g.image, 
               i.genre, i.language, i.releaseDate, i.creator, i.distributor 
        FROM Game g 
        JOIN info i ON g.infoId = i.id";

$result = mysqli_query($conn, $sql);

// Проверка на ошибки выполнения запроса
if (!$result) {
    die("Ошибка выполнения запроса: " . mysqli_error($conn));
}

// Преобразование данных в массив PHP
$data = array();
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        // Вложенный объект info
        $info = array(
            "genre" => $row['genre'],
            "language" => $row['language'],
            "releaseDate" => $row['releaseDate'],
            "creator" => $row['creator'],
            "distributor" => $row['distributor']
        );

        // Добавляем игру с вложенным info
        $data[] = array(
            "title" => $row['title'],
            "description" => $row['description'],
            "info" => $info,
            "systemRequirements" => $row['systemRequirements'],
            "price" => $row['price'],
            "discount" => $row['discount'],
            "image" => $row['image'],
            "id" => $row['id'] // пример, можно изменить или добавить еще одно поле в БД
        );
    }
}

// Закрытие соединения с базой данных
mysqli_close($conn);

// Преобразование массива данных в формат JSON и вывод на экран
echo json_encode($data);

?>
